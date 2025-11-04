"""
Evaluation Script for Improved Model
Compares the improved model against the original model
"""
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from improved_waste_prediction_model import ImprovedScientificWasteMLModel
import seaborn as sns
from datetime import datetime

def preprocess_data(df):
    """Cleans and prepares the waste data DataFrame."""
    df.columns = [
        'timestamp', 'area_name', 'wet_waste', 'dry_waste', 'total_weight',
        'humidity', 'temperature', 'methane', 'ammonia', 'sulfide', 'benzene', 'carbon_monoxide'
    ]
    df['timestamp'] = pd.to_datetime(df['timestamp'], format='%m/%d/%Y, %I:%M:%S %p')
    df['humidity'] = df['humidity'].str.replace('%', '').astype(float)
    df['temperature'] = df['temperature'].str.replace('°C', '').astype(float)
    return df

def evaluate_model_performance(model, test_data, model_name):
    """Evaluates a single model and returns metrics."""
    predictions = []
    actuals = []
    
    for _, row in test_data.iterrows():
        if model_name == "Pollution":
            pred = model.predict_single(row)['pollutionLevel']
            actual = model.calculate_scientific_pollution(row)
        else:  # Global Warming
            pred = model.predict_single(row)['globalWarmingImpact']
            actual = model.calculate_scientific_global_warming(row)
        
        predictions.append(pred)
        actuals.append(actual)
    
    predictions = np.array(predictions)
    actuals = np.array(actuals)
    
    # Calculate metrics
    mae = mean_absolute_error(actuals, predictions)
    rmse = np.sqrt(mean_squared_error(actuals, predictions))
    r2 = r2_score(actuals, predictions)
    
    # Calculate accuracy within tolerance
    tolerance_5 = np.mean(np.abs(predictions - actuals) <= 5) * 100
    tolerance_10 = np.mean(np.abs(predictions - actuals) <= 10) * 100
    tolerance_15 = np.mean(np.abs(predictions - actuals) <= 15) * 100
    
    # Calculate percentage errors
    mape = np.mean(np.abs((actuals - predictions) / (actuals + 1e-10))) * 100
    
    return {
        'predictions': predictions,
        'actuals': actuals,
        'mae': mae,
        'rmse': rmse,
        'r2': r2,
        'tolerance_5': tolerance_5,
        'tolerance_10': tolerance_10,
        'tolerance_15': tolerance_15,
        'mape': mape
    }

def plot_improved_predictions(pollution_results, gw_results, output_path='improved_model_evaluation.png'):
    """Creates visualization comparing predictions vs actual values."""
    fig, axes = plt.subplots(2, 2, figsize=(15, 12))
    fig.suptitle('Improved Model Performance Evaluation', fontsize=16, fontweight='bold')
    
    # Pollution Level - Predictions vs Actual
    ax1 = axes[0, 0]
    ax1.scatter(pollution_results['actuals'], pollution_results['predictions'], 
                alpha=0.6, c='blue', edgecolors='k', s=50)
    ax1.plot([0, 100], [0, 100], 'r--', lw=2, label='Perfect Prediction')
    ax1.set_xlabel('Actual Pollution Level', fontsize=12)
    ax1.set_ylabel('Predicted Pollution Level', fontsize=12)
    ax1.set_title(f'Pollution Prediction (R² = {pollution_results["r2"]:.4f})', fontsize=13)
    ax1.legend()
    ax1.grid(True, alpha=0.3)
    
    # Pollution Level - Residuals
    ax2 = axes[0, 1]
    residuals = pollution_results['predictions'] - pollution_results['actuals']
    ax2.scatter(pollution_results['actuals'], residuals, alpha=0.6, c='blue', edgecolors='k', s=50)
    ax2.axhline(y=0, color='r', linestyle='--', lw=2)
    ax2.set_xlabel('Actual Pollution Level', fontsize=12)
    ax2.set_ylabel('Residuals (Predicted - Actual)', fontsize=12)
    ax2.set_title('Pollution Residual Plot', fontsize=13)
    ax2.grid(True, alpha=0.3)
    
    # Global Warming - Predictions vs Actual
    ax3 = axes[1, 0]
    ax3.scatter(gw_results['actuals'], gw_results['predictions'], 
                alpha=0.6, c='green', edgecolors='k', s=50)
    ax3.plot([0, 100], [0, 100], 'r--', lw=2, label='Perfect Prediction')
    ax3.set_xlabel('Actual Global Warming Impact', fontsize=12)
    ax3.set_ylabel('Predicted Global Warming Impact', fontsize=12)
    ax3.set_title(f'Global Warming Prediction (R² = {gw_results["r2"]:.4f})', fontsize=13)
    ax3.legend()
    ax3.grid(True, alpha=0.3)
    
    # Global Warming - Residuals
    ax4 = axes[1, 1]
    residuals_gw = gw_results['predictions'] - gw_results['actuals']
    ax4.scatter(gw_results['actuals'], residuals_gw, alpha=0.6, c='green', edgecolors='k', s=50)
    ax4.axhline(y=0, color='r', linestyle='--', lw=2)
    ax4.set_xlabel('Actual Global Warming Impact', fontsize=12)
    ax4.set_ylabel('Residuals (Predicted - Actual)', fontsize=12)
    ax4.set_title('Global Warming Residual Plot', fontsize=13)
    ax4.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig(output_path, dpi=300, bbox_inches='tight')
    print(f"\n✅ Visualization saved to: {output_path}")
    return fig

def print_evaluation_report(pollution_results, gw_results, train_size, test_size):
    """Prints a comprehensive evaluation report."""
    print("\n" + "="*80)
    print("🔬 IMPROVED MODEL PERFORMANCE EVALUATION REPORT")
    print("="*80)
    print(f"\n📊 Dataset Information:")
    print(f"   Training samples: {train_size}")
    print(f"   Testing samples:  {test_size}")
    print(f"   Test ratio:       {(test_size/(train_size+test_size))*100:.1f}%")
    
    print("\n" + "-"*80)
    print("🌫️  POLLUTION LEVEL MODEL")
    print("-"*80)
    print(f"   Mean Absolute Error (MAE):        {pollution_results['mae']:.4f}")
    print(f"   Root Mean Squared Error (RMSE):   {pollution_results['rmse']:.4f}")
    print(f"   R² Score:                         {pollution_results['r2']:.4f}")
    print(f"   Mean Absolute Percentage Error:   {pollution_results['mape']:.2f}%")
    print(f"\n   Accuracy within tolerances:")
    print(f"      ±5  units:  {pollution_results['tolerance_5']:.1f}%")
    print(f"      ±10 units:  {pollution_results['tolerance_10']:.1f}%")
    print(f"      ±15 units:  {pollution_results['tolerance_15']:.1f}%")
    
    # Interpretation
    if pollution_results['r2'] > 0.9:
        quality = "Excellent ⭐⭐⭐⭐⭐"
    elif pollution_results['r2'] > 0.8:
        quality = "Very Good ⭐⭐⭐⭐"
    elif pollution_results['r2'] > 0.7:
        quality = "Good ⭐⭐⭐"
    elif pollution_results['r2'] > 0.5:
        quality = "Fair ⭐⭐"
    else:
        quality = "Needs Improvement ⭐"
    print(f"\n   Model Quality: {quality}")
    
    print("\n" + "-"*80)
    print("🌍 GLOBAL WARMING IMPACT MODEL")
    print("-"*80)
    print(f"   Mean Absolute Error (MAE):        {gw_results['mae']:.4f}")
    print(f"   Root Mean Squared Error (RMSE):   {gw_results['rmse']:.4f}")
    print(f"   R² Score:                         {gw_results['r2']:.4f}")
    print(f"   Mean Absolute Percentage Error:   {gw_results['mape']:.2f}%")
    print(f"\n   Accuracy within tolerances:")
    print(f"      ±5  units:  {gw_results['tolerance_5']:.1f}%")
    print(f"      ±10 units:  {gw_results['tolerance_10']:.1f}%")
    print(f"      ±15 units:  {gw_results['tolerance_15']:.1f}%")
    
    # Interpretation
    if gw_results['r2'] > 0.9:
        quality = "Excellent ⭐⭐⭐⭐⭐"
    elif gw_results['r2'] > 0.8:
        quality = "Very Good ⭐⭐⭐⭐"
    elif gw_results['r2'] > 0.7:
        quality = "Good ⭐⭐⭐"
    elif gw_results['r2'] > 0.5:
        quality = "Fair ⭐⭐"
    else:
        quality = "Needs Improvement ⭐"
    print(f"\n   Model Quality: {quality}")
    
    print("\n" + "-"*80)
    print("📈 OVERALL ASSESSMENT")
    print("-"*80)
    avg_r2 = (pollution_results['r2'] + gw_results['r2']) / 2
    avg_mae = (pollution_results['mae'] + gw_results['mae']) / 2
    
    print(f"   Average R² Score:  {avg_r2:.4f}")
    print(f"   Average MAE:       {avg_mae:.4f}")
    
    if avg_r2 > 0.90 and avg_mae < 5:
        print(f"\n   ✅ The models are performing EXCEPTIONALLY!")
        print(f"   🎯 TARGET ACHIEVED: R² > 0.90")
        print(f"   The predictions are highly accurate and production-ready.")
    elif avg_r2 > 0.85 and avg_mae < 10:
        print(f"\n   ✅ The models are performing EXCELLENTLY!")
        print(f"   The predictions are very accurate and reliable.")
    elif avg_r2 > 0.7 and avg_mae < 15:
        print(f"\n   ✅ The models are performing WELL!")
        print(f"   The predictions are reasonably accurate.")
    elif avg_r2 > 0.5:
        print(f"\n   ⚠️  The models are performing ADEQUATELY.")
        print(f"   Consider collecting more training data or feature engineering.")
    else:
        print(f"\n   ❌ The models need IMPROVEMENT.")
        print(f"   Consider revising the model architecture or adding more features.")
    
    print("\n" + "="*80)
    print(f"Evaluation completed at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*80 + "\n")

def main():
    """Main evaluation function."""
    print("\n🚀 Starting Improved Model Evaluation...")
    
    # Load and preprocess data
    try:
        print("📂 Loading data from data.csv...")
        data_df = pd.read_csv('../data.csv')
        processed_df = preprocess_data(data_df)
        print(f"✅ Loaded {len(processed_df)} records")
    except FileNotFoundError:
        print("❌ Error: data.csv not found in parent directory")
        return
    
    # Split data into train and test sets (80-20 split)
    train_df, test_df = train_test_split(processed_df, test_size=0.2, random_state=42)
    print(f"📊 Split data: {len(train_df)} training, {len(test_df)} testing samples")
    
    # Train the improved model
    print("\n🔄 Training improved models...")
    model = ImprovedScientificWasteMLModel()
    model.train_models(train_df)
    print("✅ Training completed!")
    
    # Evaluate both models
    print("\n📈 Evaluating Pollution Level model...")
    pollution_results = evaluate_model_performance(model, test_df, "Pollution")
    
    print("📈 Evaluating Global Warming Impact model...")
    gw_results = evaluate_model_performance(model, test_df, "Global Warming")
    
    # Print comprehensive report
    print_evaluation_report(pollution_results, gw_results, len(train_df), len(test_df))
    
    # Create visualizations
    print("\n🎨 Creating visualizations...")
    plot_improved_predictions(pollution_results, gw_results)
    
    print("\n✨ Evaluation complete! Check the visualization file for detailed insights.")

if __name__ == "__main__":
    main()
