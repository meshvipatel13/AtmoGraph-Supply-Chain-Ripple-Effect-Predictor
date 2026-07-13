# 🌍 AtmoGraph – Supply Chain Ripple Effect Predictor

## 📌 Project Overview

AtmoGraph is an AI-powered Supply Chain Ripple Effect Prediction system designed to identify and predict the impact of supply chain disruptions across a global network.

The project combines **Graph Databases (Neo4j)**, **Natural Language Processing (NLP)**, **Graph Neural Networks (GNNs)**, and an **interactive React dashboard** to analyze disruption events and forecast their downstream effects on manufacturers, logistics providers, warehouses, and retailers.

This project is being developed as part of an internship following a structured week-wise roadmap.

---

# 🚀 Problem Statement

Traditional supply chain prediction systems analyze companies independently using linear time-series data. They struggle to understand complex global supplier networks and cannot accurately predict how a disruption at one location can affect multiple industries worldwide.

AtmoGraph solves this challenge by representing the entire supply chain as a graph, allowing disruptions to propagate through connected entities and enabling intelligent ripple-effect prediction.

---

# 🎯 Objectives

- Build a graph-based global supply chain network.
- Model suppliers, manufacturers, ports, logistics companies, warehouses, and retailers.
- Detect disruptions from news using NLP.
- Predict downstream delays using Graph Neural Networks.
- Visualize supply chain risks through an interactive dashboard.

---

# 🛠 Tech Stack

## Backend

- Python
- Neo4j Graph Database
- Cypher Query Language
- FastAPI *(Planned)*
- spaCy *(Planned)*
- Hugging Face Transformers *(Planned)*
- PyTorch Geometric *(Planned)*

## Frontend

- React
- React Flow *(Planned)*
- D3.js *(Planned)*

---

# 📂 Project Structure

```
AtmoGraph/
│
├── backend/
│   ├── api/
│   ├── database/
│   ├── graph/
│   ├── gnn/
│   ├── nlp/
│   ├── scripts/
│   ├── data/
│   └── main.py
│
├── frontend/
│
├── docs/
│
├── models/
│
├── datasets/
│
├── .gitignore
│
└── README.md
```

---

# 🌐 Supply Chain Graph Model

```
Supplier
    │
SUPPLIES
    ▼
Manufacturer
    │
EXPORTS_TO
    ▼
Port
    │
SHIPS_VIA
    ▼
Shipping Company
    │
DELIVERS_TO
    ▼
Warehouse
    │
SUPPLIES_TO
    ▼
Retailer
```

---

# 📊 Current Dataset

The current graph contains realistic supply chain entities including:

- Suppliers
- Manufacturers
- Ports
- Shipping Companies
- Warehouses
- Retailers

These entities are connected through supply chain relationships such as:

- SUPPLIES
- EXPORTS_TO
- SHIPS_VIA
- DELIVERS_TO
- SUPPLIES_TO

---

# ✅ Week 1 Progress

### Graph Foundation

- ✔ Neo4j Desktop setup completed
- ✔ Graph database created
- ✔ Supply chain graph schema designed
- ✔ Cypher ingestion scripts implemented
- ✔ CSV datasets created
- ✔ Nodes successfully imported into Neo4j
- ✔ Relationships successfully created
- ✔ Supply chain graph visualized

---

# 🔜 Upcoming Development

## Week 2

- NLP Pipeline
- Named Entity Recognition (NER)
- News ingestion
- Risk score updates in Neo4j

## Week 3

- Graph Neural Network (PyTorch Geometric)
- Ripple effect prediction
- Delay forecasting

## Week 4

- FastAPI Integration
- React Dashboard
- Interactive graph visualization
- Timeline-based prediction (30/60/90 days)

---

# 📈 Future Enhancements

- Live news monitoring
- Real-time graph updates
- Enterprise-scale supply chain visualization
- Multi-hop disruption prediction
- Risk analytics dashboard

---

---

# ✅ Week 2 Progress

### NLP Pipeline

Implemented the initial Natural Language Processing (NLP) module for extracting important entities from supply chain disruption news.

### Features Completed

- ✔ Created dedicated NLP module
- ✔ Configured spaCy NLP library
- ✔ Installed English language model (`en_core_web_sm`)
- ✔ Created sample news dataset for testing
- ✔ Implemented Named Entity Recognition (NER)
- ✔ Successfully extracted organizations and locations from supply chain news
- ✔ Prepared the pipeline for Neo4j graph integration

### Current NLP Workflow

```
News Text
      │
      ▼
spaCy NLP
      │
      ▼
Named Entity Recognition (NER)
      │
      ▼
Organizations & Locations
      │
      ▼
(Next Step)
Neo4j Risk Update
```

### Sample News

```
A strike at the Port of Shanghai has delayed Apple shipments.
Tesla is facing battery shortages because LG Energy Solution has reduced production.
Heavy rainfall near the Port of Singapore has affected Maersk shipping schedules.
```

### Technologies Used

- Python
- spaCy
- Named Entity Recognition (NER)

### Upcoming Tasks

- Connect NLP output with Neo4j
- Automatically update node risk values
- Integrate live news feeds
- Prepare graph data for GNN prediction