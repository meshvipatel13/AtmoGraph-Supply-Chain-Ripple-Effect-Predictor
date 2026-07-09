# AtmoGraph: Supply Chain Ripple Effect Predictor



## Project Overview

AtmoGraph is an AI-powered system that predicts how supply chain disruptions spread across a global supply chain network.

The system monitors real-world events such as port strikes, factory shutdowns, natural disasters, and geopolitical conflicts. It analyzes these events using Natural Language Processing (NLP), stores the relationships in a Neo4j Knowledge Graph, and predicts the ripple effects using Graph Neural Networks (GNNs).

The goal is to help businesses identify risks early and make better supply chain decisions.


## Problem Statement

Traditional supply chain systems mainly focus on individual companies or isolated events.

They often fail to understand how one disruption can affect many connected suppliers, manufacturers, warehouses, and retailers.

This project aims to model the supply chain as a graph and predict how disruptions propagate through that network.

## Objectives

- Build a global supply chain knowledge graph.
- Collect disruption news from external sources.
- Extract important entities using NLP.
- Predict ripple effects using Graph Neural Networks.
- Provide real-time risk analysis through APIs.

## Backend Technologies

- Python
- Neo4j
- Cypher
- FastAPI
- spaCy
- PyTorch Geometric
- Pandas
- NetworkX

## Expected Output

Given a disruption event (for example, a port strike), the system predicts:

- Affected suppliers
- Affected manufacturers
- Shipment delay risk
- Companies impacted
- Supply chain ripple effect

## Team Members

- Meshvi 

- Heena

- Princy

- Sandhya

- Shrrivathsan
