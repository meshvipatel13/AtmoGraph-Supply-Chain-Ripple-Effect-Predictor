from typing import Dict
import requests

from backend.config import NEWS_API_KEY, NEWS_API_BASE_URL


def fetch_news():
    print("Fetching latest supply chain news...")

    params: Dict[str, str | int] = {
        "q": "supply chain",
        "language": "en",
        "sortBy": "publishedAt",
        "pageSize": 20,
        "apiKey": NEWS_API_KEY,
    }

    try:
        response = requests.get(
            NEWS_API_BASE_URL,
            params=params,
            timeout=10,
        )

        if response.status_code == 200:
            print("✅ Connected to NewsAPI successfully.")
            return response.json()

        print(f"Error: {response.status_code}")
        return None

    except requests.exceptions.RequestException as e:
        print(e)
        return None