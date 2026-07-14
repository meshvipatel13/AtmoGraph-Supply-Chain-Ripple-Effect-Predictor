NEO4J_URI = "neo4j://127.0.0.1:7687"

NEO4J_USERNAME = "neo4j"

NEO4J_PASSWORD = "Atmo@1234"

import os
from dotenv import load_dotenv

load_dotenv()

NEWS_API_KEY = os.getenv("NEWS_API_KEY")
NEWS_API_BASE_URL = os.getenv("NEWS_API_BASE_URL")