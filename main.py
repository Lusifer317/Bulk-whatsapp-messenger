import pandas as pd
import json

# Read the Excel file
df = pd.read_excel('data.xlsx')

# Ensure the correct headers
df.columns = ['Name', 'WhatsAppNumber', 'Message']

# Convert the DataFrame to a list of dictionaries
data = df.to_dict(orient='records')

# Save the data to a JSON file
with open('data.json', 'w') as f:
    json.dump(data, f, indent=4)
