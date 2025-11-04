"""
Script to clean up data.csv and remove any duplicate entries
"""
import pandas as pd

def clean_data():
    print("\n🧹 Cleaning data.csv...")
    
    # Load data
    df = pd.read_csv('data.csv')
    print(f"📊 Original records: {len(df)}")
    
    # Remove exact duplicates (all columns match)
    df = df.drop_duplicates()
    print(f"✅ After removing exact duplicates: {len(df)}")
    
    # Remove near-duplicates based on key columns
    df = df.drop_duplicates(
        subset=['Timestamp', 'Area Name', 'Total Weight (kg)'],
        keep='first'
    )
    print(f"✅ After removing near-duplicates: {len(df)}")
    
    # Save cleaned data
    df.to_csv('data.csv', index=False)
    print(f"\n💾 Saved cleaned data with {len(df)} unique records\n")
    
    return df

if __name__ == "__main__":
    clean_data()
