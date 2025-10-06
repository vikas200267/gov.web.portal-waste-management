from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from waste_prediction_model import ScientificWasteMLModel

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def preprocess_data(df):
    """Cleans and prepares the waste data DataFrame."""
    # Rename columns for easier access
    df.columns = [
        'timestamp', 'area_name', 'wet_waste', 'dry_waste', 'total_weight',
        'humidity', 'temperature', 'methane', 'ammonia', 'sulfide', 'benzene', 'carbon_monoxide'
    ]
    # Convert timestamp to datetime objects
    df['timestamp'] = pd.to_datetime(df['timestamp'], format='%m/%d/%Y, %I:%M:%S %p')
    
    # Clean and convert numeric columns
    df['humidity'] = df['humidity'].str.replace('%', '').astype(float)
    df['temperature'] = df['temperature'].str.replace('°C', '').astype(float)
    
    return df

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    """
    API endpoint to train the model and return predictions.
    Accepts wasteData array from frontend or uses CSV file with date range.
    """
    if request.method == 'POST':
        data = request.get_json()
        waste_data = data.get('wasteData')  # Array of waste data from frontend
        start_date = data.get('startDate')
        end_date = data.get('endDate')
        
        # If wasteData is provided directly from frontend
        if waste_data and len(waste_data) > 0:
            print(f"Using {len(waste_data)} records from frontend")
            
            # Convert frontend data to DataFrame
            df_data = []
            for item in waste_data:
                df_data.append({
                    'timestamp': item.get('timestamp'),
                    'area_name': item.get('areaCode', 'Unknown'),
                    'wet_waste': item.get('organicWeight', 0),
                    'dry_waste': item.get('inorganicWeight', 0),
                    'total_weight': item.get('totalWeight', 0),
                    'humidity': str(item.get('humidity', 0)) + '%',
                    'temperature': str(item.get('temperature', 0)) + '°C',
                    'methane': item.get('methane', 0),
                    'ammonia': item.get('ammonia', 0),
                    'sulfide': item.get('sulfide', 0),
                    'benzene': item.get('benzene', 0),
                    'carbon_monoxide': item.get('carbonMonoxide', 0)
                })
            
            prediction_df = pd.DataFrame(df_data)
            processed_df = preprocess_data(prediction_df)
            
            # Train on the provided data
            ml_model = ScientificWasteMLModel()
            ml_model.train_models(processed_df)
            
            # Get predictions
            result = ml_model.predict_batch(processed_df)
        else:
            # Fall back to CSV file approach
            try:
                data_df = pd.read_csv('../data.csv')
                processed_df = preprocess_data(data_df)
            except FileNotFoundError:
                return jsonify({"error": "No data provided and data.csv not found"}), 404

            # Filter data by date range if provided
            if start_date and end_date:
                start = pd.to_datetime(start_date).date()
                end = pd.to_datetime(end_date).date()
                prediction_df = processed_df[
                    (processed_df['timestamp'].dt.date >= start) & 
                    (processed_df['timestamp'].dt.date <= end)
                ].copy()
                print(f"Filtered CSV data from {start_date} to {end_date}: {len(prediction_df)} records")
            else:
                prediction_df = processed_df.copy()
                print(f"Using all available CSV data: {len(prediction_df)} records")

            if prediction_df.empty:
                return jsonify({
                    "error": f"No data available for the specified date range",
                    "Environmental Impact Levels": {
                        "Pollution Level": "0/100",
                        "Global Warming Impact": "0/100"
                    },
                    "Detailed Analytics Data (ML Processed)": []
                }), 200
            
            # Train and predict
            ml_model = ScientificWasteMLModel()
            ml_model.train_models(processed_df)
            result = ml_model.predict_batch(prediction_df)
    else:
        # GET request - use CSV file
        start_date = request.args.get('startDate')
        end_date = request.args.get('endDate')
        
        try:
            data_df = pd.read_csv('../data.csv')
            processed_df = preprocess_data(data_df)
        except FileNotFoundError:
            return jsonify({"error": "data.csv not found"}), 404

        if start_date and end_date:
            start = pd.to_datetime(start_date).date()
            end = pd.to_datetime(end_date).date()
            prediction_df = processed_df[
                (processed_df['timestamp'].dt.date >= start) & 
                (processed_df['timestamp'].dt.date <= end)
            ].copy()
        else:
            prediction_df = processed_df.copy()

        if prediction_df.empty:
            return jsonify({
                "error": f"No data available for the specified date range",
                "Environmental Impact Levels": {
                    "Pollution Level": "0/100",
                    "Global Warming Impact": "0/100"
                },
                "Detailed Analytics Data (ML Processed)": []
            }), 200
        
        ml_model = ScientificWasteMLModel()
        ml_model.train_models(processed_df)
        result = ml_model.predict_batch(prediction_df)

    # 5. Format the final output to match the request
    final_response = {
        "Environmental Impact Levels": {
            "Pollution Level": f"{float(result['pollutionLevel'])}/100",
            "Global Warming Impact": f"{float(result['globalWarmingImpact'])}/100"
        },
        "Detailed Analytics Data (ML Processed)": [
            {
                "Date": item['date'],
                "Wet Waste Container Weight (kg)": f"{float(item['wetWaste']):.2f}",
                "Dry Waste Container Weight (kg)": f"{float(item['dryWaste']):.2f}",
                "Total Weight (kg)": f"{float(item['totalWeight']):.2f}",
                "Pollution Level": float(item['pollutionLevel']),
                "Global Warming Impact": float(item['globalWarmingImpact'])
            }
            for item in result['detailedData']
        ]
    }
    
    return jsonify(final_response)

if __name__ == '__main__':
    # Run without debug mode to avoid auto-reloading
    app.run(debug=False, port=5001, host='0.0.0.0')
