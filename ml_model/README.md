# ML Model for Waste Management Prediction

This directory contains the machine learning model for predicting pollution levels and global warming impact based on waste data.

## Structure

- `waste_prediction_model.py` - Main ML model class with TensorFlow/Keras neural networks
- `app.py` - Flask API server for serving predictions
- `requirements.txt` - Python dependencies
- `__init__.py` - Package initialization

## Setup

1. **Install Python dependencies:**
   ```bash
   cd ml_model
   pip install -r requirements.txt
   ```

2. **Prepare your data:**
   - Ensure you have a `data.csv` file in the root directory with the following columns:
     - timestamp, area_name, wet_waste, dry_waste, total_weight
     - humidity, temperature, methane, ammonia, sulfide, benzene, carbon_monoxide

## Running the API

Start the Flask server:
```bash
cd ml_model
python app.py
```

The API will run on `http://localhost:5001`

## API Endpoint

### GET /predict

Returns ML predictions for waste data.

**Response format:**
```json
{
  "Environmental Impact Levels": {
    "Pollution Level": "45.2/100",
    "Global Warming Impact": "38.7/100"
  },
  "Detailed Analytics Data (ML Processed)": [
    {
      "Date": "2025-09-18",
      "Wet Waste Container Weight (kg)": "120.50",
      "Dry Waste Container Weight (kg)": "45.30",
      "Total Weight (kg)": "165.80",
      "Pollution Level": 45.2,
      "Global Warming Impact": 38.7
    }
  ]
}
```

## Model Details

The model uses two neural networks:
1. **Pollution Prediction Model** - Predicts air quality index based on pollutants
2. **Global Warming Impact Model** - Predicts CO2 equivalent emissions

Both models use:
- Input layer: 8 features
- Hidden layers: 3 layers with 16, 12, and 8 neurons
- Activation: ReLU
- Output: Sigmoid activation for normalized scores (0-100)
- Optimizer: Adam with learning rate 0.001
- Loss: Mean Squared Error

## Integration with React Frontend

To connect this API with your React analytics page:

1. Update your analytics component to call the API:
```typescript
const fetchPredictions = async () => {
  try {
    const response = await fetch('http://localhost:5001/predict');
    const data = await response.json();
    // Update your state with the prediction data
    setPredictions(data);
  } catch (error) {
    console.error('Error fetching predictions:', error);
  }
};
```

2. Add CORS support to Flask if needed:
```python
from flask_cors import CORS
CORS(app)
```

## Notes

- The model trains on each request in this example. For production, train once and save the model using `model.save()`.
- Ensure TensorFlow is properly installed for your system (CPU or GPU version).
- The prediction date is currently hardcoded to '2025-09-18' - modify as needed for dynamic dates.
