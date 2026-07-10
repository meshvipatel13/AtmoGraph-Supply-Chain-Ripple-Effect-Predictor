CREATE CONSTRAINT supplier_id IF NOT EXISTS
FOR (s:Supplier)
REQUIRE s.supplier_id IS UNIQUE;

CREATE CONSTRAINT manufacturer_id IF NOT EXISTS
FOR (m:Manufacturer)
REQUIRE m.manufacturer_id IS UNIQUE;

CREATE CONSTRAINT port_id IF NOT EXISTS
FOR (p:Port)
REQUIRE p.port_id IS UNIQUE;

CREATE CONSTRAINT shipper_id IF NOT EXISTS
FOR (sc:ShippingCompany)
REQUIRE sc.shipper_id IS UNIQUE;

CREATE CONSTRAINT warehouse_id IF NOT EXISTS
FOR (w:Warehouse)
REQUIRE w.warehouse_id IS UNIQUE;

CREATE CONSTRAINT retailer_id IF NOT EXISTS
FOR (r:Retailer)
REQUIRE r.retailer_id IS UNIQUE;`