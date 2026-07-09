MATCH (s:Supplier{name:"TSMC"})

MATCH (m:Manufacturer{name:"Apple"})

CREATE (s)-[:SUPPLIES]->(m);

MATCH (m:Manufacturer{name:"Apple"})

MATCH (p:Port{name:"Shanghai Port"})

CREATE (m)-[:EXPORTS_TO]->(p);

MATCH (p:Port{name:"Shanghai Port"})

MATCH (sc:ShippingCompany{name:"Maersk"})

CREATE (p)-[:SHIPS_VIA]->(sc);

MATCH (sc:ShippingCompany{name:"Maersk"})

MATCH (w:Warehouse{name:"California Warehouse"})

CREATE (sc)-[:DELIVERS_TO]->(w);

MATCH (w:Warehouse{name:"California Warehouse"})

MATCH (r:Retailer{name:"Amazon"})

CREATE (w)-[:SUPPLIES_TO]->(r);