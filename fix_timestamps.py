"""
Script to fix all timestamp formats in data.csv
"""
import pandas as pd
import re

def fix_timestamp(ts_str):
    """Fix timestamp format from 24-hour to proper 12-hour format"""
    # Pattern: month/day/year, hour:minute:second AM/PM
    match = re.match(r'(\d+)/(\d+)/(\d+), (\d+):(\d+):(\d+) (AM|PM)', str(ts_str))
    
    if not match:
        return ts_str
    
    month, day, year, hour, minute, second, period = match.groups()
    hour = int(hour)
    
    # Fix invalid 24-hour format with PM
    if hour >= 13 and period == 'PM':
        # Convert 24-hour to 12-hour
        hour = hour - 12
    elif hour == 0:
        hour = 12
        period = 'AM'
    
    # Ensure hour is in valid 12-hour range
    if hour > 12:
        hour = hour - 12
        period = 'PM'
    elif hour == 0:
        hour = 12
    
    return f"{month}/{day}/{year}, {hour}:{minute}:{second} {period}"

def main():
    print("\n🔧 Fixing timestamp formats in data.csv...")
    
    # Load data
    df = pd.read_csv('data.csv')
    print(f"📊 Total records: {len(df)}")
    
    # Fix all timestamps
    print("🔄 Processing timestamps...")
    df['Timestamp'] = df['Timestamp'].apply(fix_timestamp)
    
    # Verify a few timestamps can be parsed
    try:
        test_parse = pd.to_datetime(df['Timestamp'].head(10), format='%m/%d/%Y, %I:%M:%S %p')
        print("✅ Timestamp format validation successful")
    except Exception as e:
        print(f"⚠️  Some timestamps may still have issues: {e}")
        # Show problematic timestamps
        for idx, ts in enumerate(df['Timestamp'].head(20)):
            try:
                pd.to_datetime(ts, format='%m/%d/%Y, %I:%M:%S %p')
            except:
                print(f"   Problem at row {idx}: {ts}")
    
    # Save fixed data
    df.to_csv('data.csv', index=False)
    print(f"\n💾 Saved {len(df)} records with fixed timestamps\n")

if __name__ == "__main__":
    main()
