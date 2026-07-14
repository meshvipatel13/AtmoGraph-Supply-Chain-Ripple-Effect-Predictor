// Supplier -> Manufacturer
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
WITH row
WHERE row.relationship = 'SUPPLIES'
MATCH (a:Supplier {name: row.from})
MATCH (b:Manufacturer {name: row.to})
MERGE (a)-[:SUPPLIES]->(b);

// Manufacturer -> Port
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
WITH row
WHERE row.relationship = 'EXPORTS_TO'
MATCH (a:Manufacturer {name: row.from})
MATCH (b:Port {name: row.to})
MERGE (a)-[:EXPORTS_TO]->(b);

// Port -> Shipping Company
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
WITH row
WHERE row.relationship = 'SHIPS_VIA'
MATCH (a:Port {name: row.from})
MATCH (b:ShippingCompany {name: row.to})
MERGE (a)-[:SHIPS_VIA]->(b);

// Shipping Company -> Warehouse
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
WITH row
WHERE row.relationship = 'DELIVERS_TO'
MATCH (a:ShippingCompany {name: row.from})
MATCH (b:Warehouse {name: row.to})
MERGE (a)-[:DELIVERS_TO]->(b);

// Warehouse -> Retailer
LOAD CSV WITH HEADERS FROM 'file:///relationships.csv' AS row
WITH row
WHERE row.relationship = 'SUPPLIES_TO'
MATCH (a:Warehouse {name: row.from})
MATCH (b:Retailer {name: row.to})
MERGE (a)-[:SUPPLIES_TO]->(b);