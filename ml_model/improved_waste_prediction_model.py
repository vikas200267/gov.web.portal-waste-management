import tensorflow as tf
import numpy as np
import math
from datetime import datetime

class ImprovedScientificWasteMLModel:
    def __init__(self):
        self.pollution_model = None
        self.global_warming_model = None
        self.is_initialized = False

        # Environmental constants based on real-world data
        self.ENVIRONMENTAL_CONSTANTS = {
            # Global Warming Potential (GWP) - 100 year timeframe
            'METHANE_GWP': 28,
            'CO2_EQUIVALENT_PER_KG_ORGANIC': 0.5,
            
            # Air Quality Index (AQI) thresholds (µg/m³ or ppm)
            'METHANE_SAFE': 50,
            'CO_HAZARDOUS': 50,
            'AMMONIA_HAZARDOUS': 50,
            'SULFIDE_HAZARDOUS': 10,
            'BENZENE_HAZARDOUS': 5,
            
            # Temperature and humidity impact factors
            'TEMP_DECOMPOSITION_FACTOR': 0.07,
            'HUMIDITY_MICROBIAL_FACTOR': 0.008,
        }

    def _calculate_pollution_features(self, data):
        """Enhanced feature engineering for pollution calculation."""
        # Normalize to 0-1 range with proper scaling
        co_index = min(data['carbon_monoxide'] / self.ENVIRONMENTAL_CONSTANTS['CO_HAZARDOUS'], 1.0)
        ammonia_index = min(data['ammonia'] / self.ENVIRONMENTAL_CONSTANTS['AMMONIA_HAZARDOUS'], 1.0)
        sulfide_index = min(data['sulfide'] / self.ENVIRONMENTAL_CONSTANTS['SULFIDE_HAZARDOUS'], 1.0)
        benzene_index = min(data['benzene'] / self.ENVIRONMENTAL_CONSTANTS['BENZENE_HAZARDOUS'], 1.0)
        
        particulate_matter = min(data['dry_waste'] / 50, 1.0)
        
        # Count active pollutants
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
        """IMPROVED feature engineering for global warming calculation - optimized for actual data range."""
        # Methane features (range 0-450 ppm observed)
        methane_raw = data['methane']
        methane_normalized = min(methane_raw / 450, 1.0)  # Adjusted to actual max
        methane_log = min(math.log1p(methane_raw) / math.log1p(450), 1.0)
        methane_sqrt = min(math.sqrt(methane_raw) / math.sqrt(450), 1.0)
        
        # Waste features (0-55 kg observed)
        wet_waste_norm = min(data['wet_waste'] / 55, 1.0)
        dry_waste_norm = min(data['dry_waste'] / 30, 1.0)
        total_waste = data['wet_waste'] + data['dry_waste']
        total_waste_norm = min(total_waste / 85, 1.0)
        
        # Waste ratio (wet to total)
        waste_ratio = data['wet_waste'] / (total_waste + 0.01)
        
        # Temperature features (26-60°C observed - much wider than expected!)
        temp_raw = data['temperature']
        temp_normalized = (temp_raw - 26) / 34  # Adjusted to actual range
        temp_squared = temp_normalized ** 2  # Capture non-linear effects
        
        # Humidity features (27-84% observed)
        humidity_raw = data['humidity']
        humidity_normalized = (humidity_raw - 27) / 57  # Adjusted to actual range
        
        # Gas features
        ammonia_norm = min(data['ammonia'] / 100, 1.0)
        co_norm = min(data['carbon_monoxide'] / 300, 1.0)
        sulfide_norm = min(data['sulfide'] / 100, 1.0)
        benzene_norm = min(data['benzene'] / 100, 1.0)
        
        # Interaction features - KEY TO GLOBAL WARMING
        # 1. Methane production depends on wet waste + temperature + humidity
        methane_production_potential = wet_waste_norm * temp_normalized * humidity_normalized
        
        # 2. Decomposition rate (temperature + humidity interaction)
        decomposition_rate = temp_normalized * humidity_normalized
        
        # 3. Total GHG potential (multiple gases)
        total_ghg_index = (methane_normalized * 0.5 + ammonia_norm * 0.2 + 
                          co_norm * 0.2 + sulfide_norm * 0.1)
        
        # 4. Organic matter decomposition (wet waste + environmental factors)
        organic_decomposition = wet_waste_norm * (1 + temp_normalized) * (1 + humidity_normalized * 0.5)
        organic_decomposition = min(organic_decomposition, 1.0)
        
        # 5. Methane intensity per kg waste
        methane_intensity = methane_raw / (total_waste + 1)
        methane_intensity_norm = min(methane_intensity / 20, 1.0)
        
        return [
            methane_normalized,
            methane_log,
            methane_sqrt,
            wet_waste_norm,
            dry_waste_norm,
            total_waste_norm,
            waste_ratio,
            temp_normalized,
            temp_squared,
            humidity_normalized,
            ammonia_norm,
            co_norm,
            decomposition_rate,
            methane_production_potential,
            total_ghg_index,
            organic_decomposition,
            methane_intensity_norm
        ]

    def _build_pollution_model(self):
        """Builds improved pollution model."""
        model = tf.keras.Sequential([
            tf.keras.layers.Input(shape=(8,)),
            tf.keras.layers.Dense(24, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.001)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.3),
            tf.keras.layers.Dense(16, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.001)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(8, activation='relu', kernel_initializer='he_normal'),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
        model.compile(
            optimizer=tf.keras.optimizers.Adam(0.0003),
            loss='mean_squared_error',
            metrics=['mae', 'mse']
        )
        return model

    def _build_global_warming_model(self):
        """Builds IMPROVED global warming model with better architecture."""
        model = tf.keras.Sequential([
            tf.keras.layers.Input(shape=(17,)),  # Now 17 features with better engineering
            
            # First hidden layer - very large to capture complex patterns
            tf.keras.layers.Dense(96, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.0002)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.25),
            
            # Second hidden layer
            tf.keras.layers.Dense(64, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.0002)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.2),
            
            # Third hidden layer
            tf.keras.layers.Dense(48, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.0002)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.15),
            
            # Fourth hidden layer
            tf.keras.layers.Dense(32, activation='relu', kernel_initializer='he_normal',
                                kernel_regularizer=tf.keras.regularizers.l2(0.0002)),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.1),
            
            # Fifth hidden layer
            tf.keras.layers.Dense(16, activation='relu', kernel_initializer='he_normal'),
            tf.keras.layers.Dropout(0.05),
            
            # Sixth hidden layer
            tf.keras.layers.Dense(8, activation='relu', kernel_initializer='he_normal'),
            
            # Output layer
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
        
        # Use Adam optimizer with optimized learning rate
        model.compile(
            optimizer=tf.keras.optimizers.Adam(0.0012),
            loss='mean_squared_error',
            metrics=['mae', 'mse']
        )
        return model

    def train_models(self, training_data):
        """Trains both models on the provided training data."""
        print('Training improved models on real data...')
        
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
        
        # Improved callbacks
        early_stopping = tf.keras.callbacks.EarlyStopping(
            monitor='val_loss',
            patience=25,
            restore_best_weights=True,
            verbose=0
        )
        
        reduce_lr = tf.keras.callbacks.ReduceLROnPlateau(
            monitor='val_loss',
            factor=0.5,
            patience=10,
            min_lr=0.00001,
            verbose=0
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
            epochs=500,  # Even more epochs with better features
            batch_size=64,  # Larger batch for stability
            validation_split=0.15,
            callbacks=[early_stopping, reduce_lr],
            verbose=0
        )
        
        self.is_initialized = True
        print('Improved models trained successfully!')

    def calculate_scientific_pollution(self, data):
        """Scientific pollution calculation (ground truth)."""
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

    def calculate_scientific_global_warming(self, data):
        """IMPROVED Scientific global warming calculation with better scaling."""
        # More realistic GWP calculations with better dynamic range
        methane_contribution = (data['methane'] / 450) * 40  # Scale to 0-40 points
        organic_emissions = (data['wet_waste'] / 55) * 25  # Scale to 0-25 points
        inorganic_emissions = (data['dry_waste'] / 30) * 10  # Scale to 0-10 points
        co_indirect = (data['carbon_monoxide'] / 300) * 8  # Scale to 0-8 points
        ammonia_contribution = (data['ammonia'] / 100) * 5  # Scale to 0-5 points
        
        # Environmental multipliers (more subtle)
        temp_effect = 1 + ((data['temperature'] - 40) / 40) * 0.15  # ±15% based on temp
        humidity_effect = 1 + ((data['humidity'] - 57) / 57) * 0.10  # ±10% based on humidity
        
        # Calculate base impact
        base_impact = (methane_contribution + organic_emissions + inorganic_emissions + 
                      co_indirect + ammonia_contribution)
        
        # Apply environmental multipliers
        total_impact = base_impact * temp_effect * humidity_effect
        
        # Normalize to 0-100 scale with better distribution
        # Use sigmoid-like scaling to handle extreme values smoothly
        normalized_impact = (total_impact / 90) * 100
        
        # Apply soft cap instead of hard cap
        if normalized_impact > 90:
            # Soft saturation above 90
            excess = normalized_impact - 90
            normalized_impact = 90 + (10 * (1 - math.exp(-excess / 20)))
        
        return min(max(normalized_impact, 0), 100)

    def predict_single(self, data):
        """Predicts environmental impact for a single data entry."""
        if not self.is_initialized:
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
