Node Types:

| Node            | Purpose                              |
| --------------- | ------------------------------------ |
| Supplier        | Supplies raw materials or components |
| Manufacturer    | Produces finished goods              |
| Port            | Imports/exports goods                |
| ShippingCompany | Transports goods                     |
| Warehouse       | Stores products                      |
| Retailer        | Sells products                       |


##Define the Relationships

| Relationship | From            | To              |
| ------------ | --------------- | --------------- |
| SUPPLIES     | Supplier        | Manufacturer    |
| EXPORTS_TO   | Manufacturer    | Port            |
| SHIPS_VIA    | Port            | ShippingCompany |
| DELIVERS_TO  | ShippingCompany | Warehouse       |
| SUPPLIES_TO  | Warehouse       | Retailer        |



##Define the Properties

Supplier:

| Property    | Example       |
| ----------- | ------------- |
| supplier_id | S001          |
| name        | TSMC          |
| country     | Taiwan        |
| product     | Semiconductor |


Manufacturer:

| Property        | Example     |
| --------------- | ----------- |
| manufacturer_id | M001        |
| name            | Apple       |
| country         | USA         |
| industry        | Electronics |

Port:

| Property | Example          |
| -------- | ---------------- |
| port_id  | P001             |
| name     | Port of Shanghai |
| country  | China            |


Shipping Company:

| Property   | Example |
| ---------- | ------- |
| shipper_id | SH001   |
| name       | Maersk  |
| country    | Denmark |


Warehouse:

| Property     | Example              |
| ------------ | -------------------- |
| warehouse_id | W001                 |
| name         | California Warehouse |
| country      | USA                  |


Retailer:

| Property    | Example |
| ----------- | ------- |
| retailer_id | R001    |
| name        | Amazon  |
| country     | USA     |





####Draw the Graph


Supplier
    │
SUPPLIES
    │
Manufacturer
    │
EXPORTS_TO
    │
Port
    │
SHIPS_VIA
    │
Shipping Company
    │
DELIVERS_TO
    │
Warehouse
    │
SUPPLIES_TO
    │
Retailer