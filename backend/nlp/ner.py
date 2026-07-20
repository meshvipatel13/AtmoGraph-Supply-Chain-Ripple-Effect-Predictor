import pandas as pd
import spacy
import os

# Load spaCy English model
nlp = spacy.load("en_core_web_sm")

# File paths
INPUT_FILE = "backend/data/clean_news.csv"
OUTPUT_FILE = "backend/data/entities.csv"

# Check if input file exists
if not os.path.exists(INPUT_FILE):
    print(f"Error: {INPUT_FILE} not found.")
    exit()

# Read cleaned news data
df = pd.read_csv(INPUT_FILE)

# Store extracted entities
entities = []

# Process each news article
for index, row in df.iterrows():

    # Handle missing values
    title = str(row.get("title", ""))
    description = str(row.get("description", ""))

    # Combine title and description
    text = f"{title} {description}"

    # Skip empty articles
    if text.strip() == "":
        continue

    # Run Named Entity Recognition
    doc = nlp(text)

    # Extract entities
    for ent in doc.ents:
        entities.append({
            "article_id": index,
            "title": title,
            "entity": ent.text,
            "label": ent.label_,
            "source": row.get("source", ""),
            "publishedAt": row.get("publishedAt", "")
        })

# Convert to DataFrame
entities_df = pd.DataFrame(entities)

# Remove duplicate entities
entities_df.drop_duplicates(inplace=True)

# Save extracted entities
entities_df.to_csv(OUTPUT_FILE, index=False)

# Display summary
print("=" * 50)
print("Named Entity Recognition Completed")
print("=" * 50)
print(f"Articles Processed : {len(df)}")
print(f"Entities Extracted : {len(entities_df)}")
print(f"Output Saved To    : {OUTPUT_FILE}")
print("=" * 50)

# Show first few extracted entities
print("\nSample Entities:")
print(entities_df.head(10))