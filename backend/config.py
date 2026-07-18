
import os
from dotenv import load_dotenv

load_dotenv()

# Neo4j Configuration
NEO4J_URI = os.getenv("NEO4J_URI", "neo4j://127.0.0.1:7687")
NEO4J_USERNAME = os.getenv("NEO4J_USERNAME", "neo4j")
NEO4J_PASSWORD = os.getenv("NEO4J_PASSWORD", "Atmo@1234")

# NewsAPI Configuration
NEWS_API_KEY = os.getenv("NEWS_API_KEY", "")
NEWS_API_BASE_URL = os.getenv(
    "NEWS_API_BASE_URL",
    "https://newsapi.org/v2/everything"
)