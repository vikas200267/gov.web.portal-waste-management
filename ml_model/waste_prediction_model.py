import tensorflow as tf
import numpy as np
import math
from datetime import datetime

# This class replicates the scientific and machine learning logic from your TypeScript code.
class ScientificWasteMLModel:
    def __init__(self):
        self.pollution_model = None
        self.global_warming_model = None
        self.is_initialized = False

        # Environmental constants based on real-world data, translated from the TS version
        self.ENVIRONMENTAL_CONSTANTS = {
            # Global Warming Potential (GWP) - 100 year timeframe
            'METHANE_GWP': 28,  # Methane is 28x more potent than CO2
            'CO2_EQUIVALENT_PER_KG_ORGANIC': 0.5,  # kg CO2e per kg organic waste
            
            # Air Quality Index (AQI) thresholds (µg/m³ or ppm)
            'METHANE_SAFE': 50,  # ppm
            'CO_HAZARDOUS': 50,  # ppm
            'AMMONIA_HAZARDOUS': 50,  # ppm
            'SULFIDE_HAZARDOUS': 10,  # ppm
            'BENZENE_HAZARDOUS': 5,  # ppm
            
            # Temperature and humidity impact factors
            'TEMP_DECOMPOSITION_FACTOR': 0.07,  # per degree Celsius
            'HUMIDITY_MICROBIAL_FACTOR': 0.008,  # per percent humidity
        }

    def _calculate_pollution_features(self, data):
        """Feature engineering for pollution calculation."""
        # Normalize to 0-1 range with proper scaling
        co_index = min(data['carbon_monoxide'] / self.ENVIRONMENTAL_CONSTANTS['CO_HAZARDOUS'], 1.0)
        ammonia_index = min(data['ammonia'] / self.ENVIRONMENTAL_CONSTANTS['AMMONIA_HAZARDOUS'], 1.0)
        sulfide_index = min(data['sulfide'] / self.ENVIRONMENTAL_CONSTANTS['SULFIDE_HAZARDOUS'], 1.0)
        benzene_index = min(data['benzene'] / self.ENVIRONMENTAL_CONSTANTS['BENZENE_HAZARDOUS'], 1.0)
        
        # Normalize particulate matter
        particulate_matter = min(data['dry_waste'] / 50, 1.0)
        
        # Count active pollutants
        active_pollutants = sum([
            1 if ammonia_index > 0.1 else 0,
            1 if sulfide_index > 0.1 else 0, 
            1 if benzene_index > 0.1 else 0,
            1 if co_index > 0.1 else 0
        ])
        
        synergistic_factor = 1 + (0.1 * min(active_pollutants / 4.0, 1.0))
        
        # Normalize temperature (typical range 15-35°C)
        temp_factor = (data['temperature'] - 15) / 20
        
        # Normalize humidity
        humidity_factor = data['humidity'] / 100
        
        return [
            co_index, ammonia_index, sulfide_index, benzene_index,
            particulate_matter, synergistic_factor, temp_factor, humidity_factor
        ]

    def _calculate_global_warming_features(self, data):
        """Feature engineering for global warming calculation."""
        # Normalize methane CO2 equivalent (0-1 range)
        methane_normalized = min(data['methane'] / self.ENVIRONMENTAL_CONSTANTS['METHANE_SAFE'], 1.0)
        methane_co2e = methane_normalized * (self.ENVIRONMENTAL_CONSTANTS['METHANE_GWP'] / 100)
        
        # Normalize organic CO2 (typical range 0-60 kg)
        organic_co2e = min((data['wet_waste'] * self.ENVIRONMENTAL_CONSTANTS['CO2_EQUIVALENT_PER_KG_ORGANIC']) / 30, 1.0)
        
        # Normalize inorganic CO2 (typical range 0-50 kg)
        inorganic_co2e = min((data['dry_waste'] * 0.2) / 10, 1.0)
        
        # Normalize CO GWP
        co_gwp = min((data['carbon_monoxide'] / 100) * 2, 1.0)
        
        # Normalize temperature effect (15-35°C range)
        temp_normalized = (data['temperature'] - 15) / 20
        temp_decomposition = 1 + (temp_normalized * 0.5)
        
        # Normalize humidity effect (30-100% range)
        humidity_normalized = (data['humidity'] - 30) / 70
        humidity_microbial = 1 + (humidity_normalized * 0.3)
        
        # Normalize total biomass (0-100 kg range)
        total_biomass = min((data['wet_waste'] + (data['dry_waste'] * 0.3)) / 100, 1.0)
        
        # Log transform for methane with normalization
        methane_log = min(math.log1p(data['methane']) / 5, 1.0)
        
        return [
            methane_co2e, organic_co2e, inorganic_co2e, co_gwp,
            temp_decomposition, humidity_microbial, total_biomass, methane_log
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
        """Builds the Keras Sequential model for global warming impact prediction."""
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

    def train_models(self, training_data):
        """Trains both models on the provided training data (pandas DataFrame)."""
        print('Training models on real data...')
        
        pollution_features, pollution_labels = [], []
        gw_features, gw_labels = [], []

        for _, row in training_data.iterrows():
            pollution_features.append(self._calculate_pollution_features(row))
            gw_features.append(self._calculate_global_warming_features(row))
            
            pollution_labels.append(self.calculate_scientific_pollution(row) / 100.0)
            gw_labels.append(self.calculate_scientific_global_warming(row) / 100.0)

        pollution_X = np.array(pollution_features)
        pollution_Y = np.array(pollution_labels).reshape(-1, 1)
        gw_X = np.array(gw_features)
        gw_Y = np.array(gw_labels).reshape(-1, 1)

        self.pollution_model = self._build_pollution_model()
        self.global_warming_model = self._build_global_warming_model()
        
        # Early stopping to prevent overfitting
        early_stopping = tf.keras.callbacks.EarlyStopping(
            monitor='val_loss',
            patience=15,
            restore_best_weights=True
        )
        
        print("Training Pollution Model...")
        self.pollution_model.fit(
            pollution_X, pollution_Y,
            epochs=150,
            batch_size=4,
            validation_split=0.2,
            callbacks=[early_stopping],
            verbose=0
        )
        
        print("Training Global Warming Model...")
        self.global_warming_model.fit(
            gw_X, gw_Y,
            epochs=150,
            batch_size=4,
            validation_split=0.2,
            callbacks=[early_stopping],
            verbose=0
        )
        
        self.is_initialized = True
        print('Models trained successfully!')

    def calculate_scientific_pollution(self, data):
        """Scientific pollution calculation (ground truth)."""
        # More realistic AQI calculations with proper normalization
        co_aqi = min((data['carbon_monoxide'] / self.ENVIRONMENTAL_CONSTANTS['CO_HAZARDOUS']) * 100, 100)
        nh3_aqi = min((data['ammonia'] / self.ENVIRONMENTAL_CONSTANTS['AMMONIA_HAZARDOUS']) * 100, 100)
        h2s_aqi = min((data['sulfide'] / self.ENVIRONMENTAL_CONSTANTS['SULFIDE_HAZARDOUS']) * 100, 100)
        benzene_aqi = min((data['benzene'] / self.ENVIRONMENTAL_CONSTANTS['BENZENE_HAZARDOUS']) * 100, 100)
        pm_aqi = min((data['dry_waste'] / 50) * 20, 20)  # Reduced impact

        # Weighted average with more balanced weights
        combined_aqi = (co_aqi * 0.30 + nh3_aqi * 0.25 + h2s_aqi * 0.20 + benzene_aqi * 0.15 + pm_aqi * 0.10)
        
        # Synergy effect - only apply if multiple pollutants are significant
        num_pollutants = sum(1 for v in [co_aqi, nh3_aqi, h2s_aqi, benzene_aqi] if v > 20)
        synergy = 1 + (0.08 if num_pollutants > 2 else 0.03 if num_pollutants > 1 else 0)
        combined_aqi *= synergy
        
        # Temperature effect (reduced multiplier for realistic values)
        temp_multiplier = 1 + ((data['temperature'] - 25) * 0.008)
        combined_aqi *= temp_multiplier
        
        # Apply base adjustment to prevent unrealistic highs
        combined_aqi = combined_aqi * 0.7  # Scale down for realistic range
        
        return min(max(combined_aqi, 0), 100)

    def calculate_scientific_global_warming(self, data):
        """Scientific global warming calculation (ground truth)."""
        # More realistic GWP calculations
        methane_co2e = (data['methane'] / self.ENVIRONMENTAL_CONSTANTS['METHANE_SAFE']) * self.ENVIRONMENTAL_CONSTANTS['METHANE_GWP'] * 5
        organic_emissions = data['wet_waste'] * self.ENVIRONMENTAL_CONSTANTS['CO2_EQUIVALENT_PER_KG_ORGANIC'] * 1.5
        inorganic_emissions = data['dry_waste'] * 0.08
        co_indirect = (data['carbon_monoxide'] / 100) * 2
        
        # Reduced temperature effect for realistic values
        temp_effect = 1 + ((data['temperature'] - 25) * 0.02)
        humidity_effect = 1 + ((data['humidity'] - 60) / 200)  # Reduced humidity impact
        
        # Calculate base impact
        base_impact = methane_co2e + organic_emissions + inorganic_emissions + co_indirect
        
        # Apply environmental multipliers
        total_impact = base_impact * temp_effect * humidity_effect
        
        # Normalize to 0-100 scale with realistic scaling
        total_impact = (total_impact / 15) * 100  # Adjusted divisor for better range
        
        # Apply final scaling to ensure realistic values
        total_impact = total_impact * 0.6
        
        return min(max(total_impact, 0), 100)

    def predict_single(self, data):
        """Predicts environmental impact for a single data entry."""
        if not self.is_initialized:
            # Fallback to scientific calculation if models are not trained
            pollution = self.calculate_scientific_pollution(data)
            global_warming = self.calculate_scientific_global_warming(data)
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
