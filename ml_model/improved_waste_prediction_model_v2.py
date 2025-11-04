import tensorflow as tf
import numpy as np
import math
from datetime import datetime

class ImprovedScientificWasteMLModelV2:
    def __init__(self):
        self.pollution_model = None
        self.global_warming_model = None
        self.is_initialized = False

        # Environmental constants
        self.ENVIRONMENTAL_CONSTANTS = {
            'METHANE_GWP': 28,
            'CO2_EQUIVALENT_PER_KG_ORGANIC': 0.5,
            'METHANE_SAFE': 50,
            'CO_HAZARDOUS': 50,
            'AMMONIA_HAZARDOUS': 50,
            'SULFIDE_HAZARDOUS': 10,
            'BENZENE_HAZARDOUS': 5,
            'TEMP_DECOMPOSITION_FACTOR': 0.07,
            'HUMIDITY_MICROBIAL_FACTOR': 0.008,
        }

    def _calculate_pollution_features(self, data):
        """Feature engineering for pollution calculation."""
        co_index = min(data['carbon_monoxide'] / self.ENVIRONMENTAL_CONSTANTS['CO_HAZARDOUS'], 1.0)
        ammonia_index = min(data['ammonia'] / self.ENVIRONMENTAL_CONSTANTS['AMMONIA_HAZARDOUS'], 1.0)
        sulfide_index = min(data['sulfide'] / self.ENVIRONMENTAL_CONSTANTS['SULFIDE_HAZARDOUS'], 1.0)
        benzene_index = min(data['benzene'] / self.ENVIRONMENTAL_CONSTANTS['BENZENE_HAZARDOUS'], 1.0)
        particulate_matter = min(data['dry_waste'] / 50, 1.0)
        
        active_pollutants = sum([
            1 if ammonia_index > 0.1 else 0,
            1 if sulfide_index > 0.1 else 0,
            1 if benzene_index > 0.1 else 0,
            1 if co_index > 0.1 else 0
        ])
        
        synergistic_factor = 1 + (0.1 * min(active_pollutants / 4.0, 1.0))
        temp_factor = (data['temperature'] - 15) / 20
        humidity_factor = data['humidity'] / 100
        
        return [
            co_index, ammonia_index, sulfide_index, benzene_index,
            particulate_matter, synergistic_factor, temp_factor, humidity_factor
        ]

    def _calculate_global_warming_features(self, data):
        """
        IMPROVED feature engineering for global warming calculation.
        Key improvement: Better handling of methane and temperature interactions
        """
        # Normalize methane on log scale (handles wide range better)
        methane_log = min(math.log1p(data['methane']) / math.log1p(200), 1.0)  # 200 ppm max
        methane_linear = min(data['methane'] / 200, 1.0)
        methane_squared = methane_linear ** 2  # Capture non-linear effects
        
        # Organic waste CO2 equivalent (normalized to 0-1)
        organic_co2e = min((data['wet_waste'] * self.ENVIRONMENTAL_CONSTANTS['CO2_EQUIVALENT_PER_KG_ORGANIC']) / 30, 1.0)
        organic_squared = organic_co2e ** 2
        
        # Inorganic waste contribution
        inorganic_co2e = min((data['dry_waste'] * 0.2) / 10, 1.0)
        
        # CO contribution
        co_gwp = min((data['carbon_monoxide'] / 100) * 2, 1.0)
        
        # Temperature effects (normalized around typical range 25-55°C)
        temp_normalized = (data['temperature'] - 25) / 30
        temp_linear = max(0, min(1, temp_normalized))
        temp_squared = temp_linear ** 2
        temp_decomposition = 1 + (temp_linear * 0.5)
        
        # Humidity effects (30-90% range)
        humidity_normalized = (data['humidity'] - 30) / 60
        humidity_linear = max(0, min(1, humidity_normalized))
        humidity_squared = humidity_linear ** 2
        humidity_microbial = 1 + (humidity_linear * 0.3)
        
        # Total biomass
        total_biomass = min((data['wet_waste'] + (data['dry_waste'] * 0.3)) / 100, 1.0)
        biomass_squared = total_biomass ** 2
        
        # Interaction terms (these capture multiplicative effects)
        methane_temp_interaction = methane_linear * temp_linear
        methane_humidity_interaction = methane_linear * humidity_linear
        organic_temp_interaction = organic_co2e * temp_linear
        
        return [
            methane_log, methane_linear, methane_squared,
            organic_co2e, organic_squared,
            inorganic_co2e, co_gwp,
            temp_linear, temp_squared, temp_decomposition,
            humidity_linear, humidity_squared, humidity_microbial,
            total_biomass, biomass_squared,
            methane_temp_interaction, methane_humidity_interaction, organic_temp_interaction
        ]

    def _build_pollution_model(self):
        """Builds the Keras Sequential model for pollution prediction."""
        model = tf.keras.Sequential([
            tf.keras.layers.Input(shape=(8,)),
            tf.keras.layers.Dense(16, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.001)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.3),
            tf.keras.layers.Dense(12, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.001)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(8, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.001)),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
        model.compile(optimizer=tf.keras.optimizers.Adam(0.0005), loss='mean_squared_error', metrics=['mae'])
        return model

    def _build_global_warming_model(self):
        """
        IMPROVED architecture for global warming impact prediction.
        Key improvements:
        - Deeper network to capture complex interactions
        - More neurons to handle 18 input features
        - Lower dropout to preserve information
        """
        model = tf.keras.Sequential([
            tf.keras.layers.Input(shape=(18,)),
            tf.keras.layers.Dense(32, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.0005)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.2),
            
            tf.keras.layers.Dense(24, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.0005)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.15),
            
            tf.keras.layers.Dense(16, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.0005)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.1),
            
            tf.keras.layers.Dense(12, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.0005)),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
        
        # Use Huber loss - less sensitive to outliers and saturation
        model.compile(
            optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
            loss=tf.keras.losses.Huber(delta=0.1),
            metrics=['mae']
        )
        return model

    def train_models(self, training_data):
        """Trains both models on the provided training data (pandas DataFrame)."""
        print('Training models on real data...')
        
        pollution_features, pollution_labels = [], []
        gw_features, gw_labels = [], []

        for _, row in training_data.iterrows():
            pollution_features.append(self._calculate_pollution_features(row))
            gw_features.append(self._calculate_global_warming_features(row))
            
            # FIX: Use improved ground truth that doesn't saturate
            pollution_labels.append(self.calculate_scientific_pollution(row) / 100.0)
            gw_labels.append(self.calculate_improved_global_warming(row) / 100.0)

        pollution_X = np.array(pollution_features)
        pollution_Y = np.array(pollution_labels).reshape(-1, 1)
        gw_X = np.array(gw_features)
        gw_Y = np.array(gw_labels).reshape(-1, 1)

        self.pollution_model = self._build_pollution_model()
        self.global_warming_model = self._build_global_warming_model()
        
        # Reduce learning rate if validation loss plateaus
        reduce_lr = tf.keras.callbacks.ReduceLROnPlateau(
            monitor='val_loss',
            factor=0.5,
            patience=10,
            min_lr=0.00001,
            verbose=0
        )
        
        early_stopping = tf.keras.callbacks.EarlyStopping(
            monitor='val_loss',
            patience=20,
            restore_best_weights=True
        )
        
        print("Training Pollution Model...")
        self.pollution_model.fit(
            pollution_X, pollution_Y,
            epochs=200,
            batch_size=8,
            validation_split=0.2,
            callbacks=[early_stopping, reduce_lr],
            verbose=0
        )
        
        print("Training Global Warming Model...")
        self.global_warming_model.fit(
            gw_X, gw_Y,
            epochs=200,
            batch_size=8,
            validation_split=0.2,
            callbacks=[early_stopping, reduce_lr],
            verbose=0
        )
        
        self.is_initialized = True
        print('Models trained successfully!')

    def calculate_scientific_pollution(self, data):
        """Scientific pollution calculation (ground truth) - unchanged"""
        co_aqi = min((data['carbon_monoxide'] / self.ENVIRONMENTAL_CONSTANTS['CO_HAZARDOUS']) * 100, 100)
        nh3_aqi = min((data['ammonia'] / self.ENVIRONMENTAL_CONSTANTS['AMMONIA_HAZARDOUS']) * 100, 100)
        h2s_aqi = min((data['sulfide'] / self.ENVIRONMENTAL_CONSTANTS['SULFIDE_HAZARDOUS']) * 100, 100)
        benzene_aqi = min((data['benzene'] / self.ENVIRONMENTAL_CONSTANTS['BENZENE_HAZARDOUS']) * 100, 100)
        pm_aqi = min((data['dry_waste'] / 50) * 20, 20)

        combined_aqi = (co_aqi * 0.30 + nh3_aqi * 0.25 + h2s_aqi * 0.20 + benzene_aqi * 0.15 + pm_aqi * 0.10)
        
        num_pollutants = sum(1 for v in [co_aqi, nh3_aqi, h2s_aqi, benzene_aqi] if v > 20)
        synergy = 1 + (0.08 if num_pollutants > 2 else 0.03 if num_pollutants > 1 else 0)
        combined_aqi *= synergy
        
        temp_multiplier = 1 + ((data['temperature'] - 25) * 0.008)
        combined_aqi *= temp_multiplier
        combined_aqi = combined_aqi * 0.7
        
        return min(max(combined_aqi, 0), 100)

    def calculate_improved_global_warming(self, data):
        """
        IMPROVED global warming calculation without saturation problem.
        Uses a gentler compression curve to avoid saturation at 100.
        """
        # Base methane contribution (reduced multiplier to avoid saturation)
        methane_factor = data['methane'] / self.ENVIRONMENTAL_CONSTANTS['METHANE_SAFE']
        methane_co2e = methane_factor * self.ENVIRONMENTAL_CONSTANTS['METHANE_GWP'] * 2.0
        
        # Organic emissions
        organic_emissions = data['wet_waste'] * self.ENVIRONMENTAL_CONSTANTS['CO2_EQUIVALENT_PER_KG_ORGANIC'] * 1.2
        
        # Inorganic emissions
        inorganic_emissions = data['dry_waste'] * 0.06
        
        # CO indirect effect
        co_indirect = (data['carbon_monoxide'] / 100) * 1.5
        
        # Environmental multipliers (keep moderate)
        temp_effect = 1 + ((data['temperature'] - 25) * 0.012)
        humidity_effect = 1 + ((data['humidity'] - 60) / 300)
        
        # Calculate base impact
        base_impact = methane_co2e + organic_emissions + inorganic_emissions + co_indirect
        
        # Apply environmental multipliers
        total_impact = base_impact * temp_effect * humidity_effect
        
        # Use MUCH gentler sigmoid-like function to avoid saturation
        # Increased denominator from 50 to 80 to spread values more
        normalized_impact = 100 * (1 - math.exp(-total_impact / 80))
        
        return max(normalized_impact, 0)

    def calculate_scientific_global_warming(self, data):
        """Original calculation - kept for compatibility"""
        return self.calculate_improved_global_warming(data)

    def predict_single(self, data):
        """Predicts environmental impact for a single data entry."""
        if not self.is_initialized:
            pollution = self.calculate_scientific_pollution(data)
            global_warming = self.calculate_improved_global_warming(data)
            return {
                'date': data['timestamp'].strftime('%Y-%m-%d'),
                'wetWaste': data['wet_waste'],
                'dryWaste': data['dry_waste'],
                'totalWeight': data['total_weight'],
                'pollutionLevel': round(pollution, 1),
                'globalWarmingImpact': round(global_warming, 1)
            }

        poll_features = np.array([self._calculate_pollution_features(data)])
        gw_features = np.array([self._calculate_global_warming_features(data)])

        poll_pred = self.pollution_model.predict(poll_features, verbose=0)[0][0] * 100
        gw_pred = self.global_warming_model.predict(gw_features, verbose=0)[0][0] * 100
        
        return {
            'date': data['timestamp'].strftime('%Y-%m-%d'),
            'wetWaste': data['wet_waste'],
            'dryWaste': data['dry_waste'],
            'totalWeight': data['total_weight'],
            'pollutionLevel': round(poll_pred, 1),
            'globalWarmingImpact': round(gw_pred, 1)
        }

    def predict_batch(self, data_array):
        """Performs batch prediction and returns a summary."""
        detailed_data = [self.predict_single(row) for _, row in data_array.iterrows()]
        
        if not detailed_data:
            return {
                'pollutionLevel': 0,
                'globalWarmingImpact': 0,
                'detailedData': []
            }

        total_weight = sum(result['totalWeight'] for result in detailed_data)
        if total_weight == 0:
            return {
                'pollutionLevel': 0,
                'globalWarmingImpact': 0,
                'detailedData': detailed_data
            }

        weighted_pollution = sum(r['pollutionLevel'] * r['totalWeight'] for r in detailed_data)
        weighted_gw = sum(r['globalWarmingImpact'] * r['totalWeight'] for r in detailed_data)

        return {
            'pollutionLevel': round(weighted_pollution / total_weight, 1),
            'globalWarmingImpact': round(weighted_gw / total_weight, 1),
            'detailedData': detailed_data
        }
