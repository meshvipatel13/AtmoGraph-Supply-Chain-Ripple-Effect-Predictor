import json
from pathlib import Path

from backend.nlp.news_api import fetch_news


def main():

    news_data = fetch_news()

    if news_data is None:
        print("No news data received.")
        return

    data_folder = Path("backend/data")
    data_folder.mkdir(parents=True, exist_ok=True)

    output_file = data_folder / "raw_news.json"

    with open(output_file, "w", encoding="utf-8") as file:
        json.dump(news_data, file, indent=4)

    print(f"News saved successfully to {output_file}")


if __name__ == "__main__":
    main()