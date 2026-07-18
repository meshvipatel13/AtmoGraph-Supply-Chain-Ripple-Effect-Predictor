import json
import pandas as pd


def clean_news():
    print("Reading raw_news.json...")

    # Step 1: Read JSON file
    with open("backend/data/raw_news.json", "r", encoding="utf-8") as file:
        data = json.load(file)

    # Step 2: Extract articles
    articles = data["articles"]

    print(f"Total Articles Found: {len(articles)}")

    clean_records = []

    # Step 3: Extract useful fields
    for article in articles:

        title = article.get("title")
        description = article.get("description")
        content = article.get("content")
        published_at = article.get("publishedAt")

        source = ""
        if article.get("source"):
            source = article["source"].get("name", "")

        # Step 4: Skip empty articles
        if not title or not description or not content:
            continue

        clean_records.append({
            "title": title.strip(),
            "description": description.strip(),
            "content": content.strip(),
            "source": source,
            "publishedAt": published_at
        })

    # Step 5: Convert into DataFrame
    df = pd.DataFrame(clean_records)

    before_duplicates = len(df)

    # Step 6: Remove duplicate news
    df.drop_duplicates(subset=["title"], inplace=True)

    duplicates_removed = before_duplicates - len(df)

    # Step 7: Save CSV
    output_path = "backend/data/clean_news.csv"
    df.to_csv(output_path, index=False)

    print("\n========== SUMMARY ==========")
    print(f"Articles Received      : {len(articles)}")
    print(f"Duplicates Removed    : {duplicates_removed}")
    print(f"Final Articles Saved  : {len(df)}")
    print(f"Saved File            : {output_path}")
    print("=============================")


if __name__ == "__main__":
    clean_news()