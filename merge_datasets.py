"""
Script to merge finalmldataset1.csv with data.csv
Transforms the format of finalmldataset1.csv to match data.csv structure
"""
import pandas as pd
from datetime import datetime
import random

def transform_finalmldataset_to_data_format(df):
    """
    Transforms finalmldataset1.csv format to match data.csv format
    """
    print(f"📊 Processing {len(df)} records from finalmldataset1.csv...")
    
    transformed_records = []
    area_names = ['Channasandra', 'Kengeri', 'Indiranagar', 'Koramangala', 'Whitefield', 'Jayanagar']
    
    for _, row in df.iterrows():
        # Parse the date and add random time
        try:
            date_obj = pd.to_datetime(row['Date'], format='%m/%d/%Y')
        except:
            try:
                date_obj = pd.to_datetime(row['Date'])
            except:
                print(f"⚠️  Warning: Could not parse date: {row['Date']}, skipping...")
                continue
        
        # Add random time (between 8 AM and 8 PM) in proper 12-hour format
        hour_24 = random.randint(8, 20)
        minute = random.randint(0, 59)
        second = random.randint(0, 59)
        
        # Convert to 12-hour format
        if hour_24 == 0:
            hour_12 = 12
            period = 'AM'
        elif hour_24 < 12:
            hour_12 = hour_24
            period = 'AM'
        elif hour_24 == 12:
            hour_12 = 12
            period = 'PM'
        else:
            hour_12 = hour_24 - 12
            period = 'PM'
        
        timestamp_str = f"{date_obj.month}/{date_obj.day}/{date_obj.year}, {hour_12}:{minute:02d}:{second:02d} {period}"
        
        # Random area name
        area_name = random.choice(area_names)
        
        # Determine wet and dry waste based on waste type
        waste_type = str(row['Waste Type']).strip().lower()
        weight = float(row['Weight '])
        
        if waste_type == 'wet':
            wet_waste = weight
            dry_waste = 0
        elif waste_type == 'dry':
            wet_waste = 0
            dry_waste = weight
        else:
            # If unknown, split 70-30
            wet_waste = weight * 0.7
            dry_waste = weight * 0.3
        
        total_weight = wet_waste + dry_waste
        
        # Calculate humidity based on bin level and temperature
        # Higher bin level and temperature = higher humidity for wet waste
        bin_level = float(row['Bin Level '])
        temperature = float(row['Temperature '])
        
        if waste_type == 'wet':
            # Wet waste: higher humidity (60-90%)
            base_humidity = 60 + (bin_level / 100) * 20
            humidity = min(90, base_humidity + random.uniform(-5, 5))
        else:
            # Dry waste: lower humidity (30-60%)
            base_humidity = 30 + (bin_level / 100) * 20
            humidity = min(60, base_humidity + random.uniform(-5, 5))
        
        # Format values to match data.csv format
        transformed_record = {
            'Timestamp': timestamp_str,
            'Area Name': area_name,
            'Wet Waste Container Weight (kg)': round(wet_waste, 2),
            'Dry Waste Container Weight (kg)': round(dry_waste, 2),
            'Total Weight (kg)': round(total_weight, 2),
            'Humidity (%)': f"{round(humidity, 1)}%",
            'Temperature (°C)': f"{round(temperature, 1)}°C",
            'Methane (ppm)': int(float(row['methane'])),
            'Ammonia (ppm)': int(float(row['ammonia'])),
            'Sulfide (ppm)': int(float(row['sulphide'])),
            'Benzene (ppm)': int(float(row['benzene'])),
            'Carbon Monoxide (ppm)': int(float(row['carbon monoxide']))
        }
        
        transformed_records.append(transformed_record)
    
    return pd.DataFrame(transformed_records)

def main():
    """Main function to merge datasets"""
    print("\n🚀 Starting Dataset Merge Process...\n")
    
    # Load existing data.csv
    try:
        print("📂 Loading existing data.csv...")
        existing_data = pd.read_csv('data.csv')
        print(f"✅ Loaded {len(existing_data)} existing records")
    except FileNotFoundError:
        print("⚠️  data.csv not found, will create new file")
        existing_data = pd.DataFrame()
    
    # Load finalmldataset1.csv
    try:
        print("\n📂 Loading finalmldataset1.csv...")
        new_data = pd.read_csv('finalmldataset1.csv')
        print(f"✅ Loaded {len(new_data)} new records")
    except FileNotFoundError:
        print("❌ Error: finalmldataset1.csv not found!")
        return
    
    # Transform the new data to match format
    print("\n🔄 Transforming data format...")
    transformed_data = transform_finalmldataset_to_data_format(new_data)
    print(f"✅ Transformed {len(transformed_data)} records")
    
    # Combine datasets
    print("\n🔗 Merging datasets...")
    if not existing_data.empty:
        combined_data = pd.concat([existing_data, transformed_data], ignore_index=True)
    else:
        combined_data = transformed_data
    
    # Remove duplicates if any (based on timestamp and weights)
    original_count = len(combined_data)
    combined_data = combined_data.drop_duplicates(
        subset=['Timestamp', 'Total Weight (kg)', 'Area Name'],
        keep='first'
    )
    duplicates_removed = original_count - len(combined_data)
    
    if duplicates_removed > 0:
        print(f"🧹 Removed {duplicates_removed} duplicate records")
    
    # Sort by timestamp
    print("\n📅 Sorting by timestamp...")
    try:
        combined_data['Timestamp_parsed'] = pd.to_datetime(combined_data['Timestamp'], format='%m/%d/%Y, %I:%M:%S %p')
        combined_data = combined_data.sort_values('Timestamp_parsed')
        combined_data = combined_data.drop('Timestamp_parsed', axis=1)
    except:
        print("⚠️  Could not sort by timestamp")
    
    # Save to data.csv
    print("\n💾 Saving merged data to data.csv...")
    combined_data.to_csv('data.csv', index=False)
    
    print("\n" + "="*80)
    print("✅ MERGE COMPLETE!")
    print("="*80)
    print(f"📊 Final Dataset Statistics:")
    print(f"   Total records: {len(combined_data)}")
    print(f"   Original data.csv: {len(existing_data) if not existing_data.empty else 0}")
    print(f"   New records added: {len(transformed_data)}")
    print(f"   Duplicates removed: {duplicates_removed}")
    print("\n📁 Updated data.csv saved successfully!")
    print("="*80 + "\n")
    
    # Show sample of merged data
    print("📋 Sample of merged data (first 5 rows):")
    print(combined_data.head().to_string())
    print("\n📋 Sample of merged data (last 5 rows):")
    print(combined_data.tail().to_string())

if __name__ == "__main__":
    main()
