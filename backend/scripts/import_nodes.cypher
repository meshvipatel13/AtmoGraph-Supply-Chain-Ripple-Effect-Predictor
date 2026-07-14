LOAD CSV WITH HEADERS FROM 'file:///suppliers.csv' AS row
MERGE (s:Supplier {supplier_id: row.supplier_id})
SET s.name = row.name,
    s.country = row.country,
    s.product = row.product,
    s.risk = row.risk;

LOAD CSV WITH HEADERS FROM 'file:///manufacturers.csv' AS row
MERGE (m:Manufacturer {manufacturer_id: row.manufacturer_id})
SET m.name = row.name,
    m.country = row.country,
    m.industry = row.industry,
    m.risk = row.risk;

LOAD CSV WITH HEADERS FROM 'file:///ports.csv' AS row
MERGE (p:Port {port_id: row.port_id})
SET p.name = row.name,
    p.country = row.country,
    p.status = row.status;

LOAD CSV WITH HEADERS FROM 'file:///shipping_companies.csv' AS row
MERGE (sc:ShippingCompany {shipper_id: row.shipper_id})
SET sc.name = row.name,
    sc.country = row.country,
    sc.capacity = toInteger(row.capacity);

LOAD CSV WITH HEADERS FROM 'file:///warehouses.csv' AS row
MERGE (w:Warehouse {warehouse_id: row.warehouse_id})
SET w.name = row.name,
    w.country = row.country,
    w.capacity = toInteger(row.capacity);

LOAD CSV WITH HEADERS FROM 'file:///retailers.csv' AS row
MERGE (r:Retailer {retailer_id: row.retailer_id})
SET r.name = row.name,
    r.country = row.country;