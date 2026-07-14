LOAD CSV WITH HEADERS FROM 'file:///suppliers.csv' AS row

CREATE (:Supplier{
supplier_id: row.supplier_id,
name: row.name,
country: row.country,
product: row.product,
risk: row.risk
});


LOAD CSV WITH HEADERS FROM 'file:///manufacturers.csv' AS row

CREATE (:Manufacturer{
manufacturer_id: row.manufacturer_id,
name: row.name,
country: row.country,
industry: row.industry,
risk: row.risk
});


LOAD CSV WITH HEADERS FROM 'file:///ports.csv' AS row

CREATE (:Port{
port_id: row.port_id,
name: row.name,
country: row.country,
status: row.status
});


LOAD CSV WITH HEADERS FROM 'file:///shipping_companies.csv' AS row

CREATE (:ShippingCompany{
shipper_id: row.shipper_id,
name: row.name,
country: row.country,
capacity: toInteger(row.capacity)
});

LOAD CSV WITH HEADERS FROM 'file:///warehouses.csv' AS row

CREATE (:Warehouse{
warehouse_id: row.warehouse_id,
name: row.name,
country: row.country,
capacity: toInteger(row.capacity)
});


LOAD CSV WITH HEADERS FROM 'file:///retailers.csv' AS row

CREATE (:Retailer{
retailer_id: row.retailer_id,
name: row.name,
country: row.country
});