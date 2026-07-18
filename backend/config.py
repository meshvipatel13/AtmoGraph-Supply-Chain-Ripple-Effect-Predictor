
import os
from dotenv import load_dotenv

load_dotenv()

# Neo4j Configuration

NEO4J_URI = os.getenv("NEO4J_URI")
NEO4J_USERNAME = os.getenv("NEO4J_USERNAME")
NEO4J_PASSWORD = os.getenv("NEO4J_PASSWORD")

# NewsAPI Configuration
NEWS_API_KEY = os.getenv("NEWS_API_KEY", "")
NEWS_API_BASE_URL = os.getenv(
    "NEWS_API_BASE_URL",
    "https://newsapi.org/v2/everything"
)