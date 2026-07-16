// Supplier
CREATE CONSTRAINT supplier_id_unique IF NOT EXISTS
FOR (s:Supplier)
REQUIRE s.supplier_id IS UNIQUE;

// Manufacturer
CREATE CONSTRAINT manufacturer_id_unique IF NOT EXISTS
FOR (m:Manufacturer)
REQUIRE m.manufacturer_id IS UNIQUE;

// Port
CREATE CONSTRAINT port_id_unique IF NOT EXISTS
FOR (p:Port)
REQUIRE p.port_id IS UNIQUE;

// Shipping Company
CREATE CONSTRAINT shipping_company_id_unique IF NOT EXISTS
FOR (sc:ShippingCompany)
REQUIRE sc.shipper_id IS UNIQUE;

// Warehouse
CREATE CONSTRAINT warehouse_id_unique IF NOT EXISTS
FOR (w:Warehouse)
REQUIRE w.warehouse_id IS UNIQUE;

// Retailer
CREATE CONSTRAINT retailer_id_unique IF NOT EXISTS
FOR (r:Retailer)
REQUIRE r.retailer_id IS UNIQUE;