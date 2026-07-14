CREATE

(:Supplier{
supplier_id:"SUP001",
name:"TSMC",
country:"Taiwan",
product:"Semiconductor",
risk:"LOW"
}),

(:Manufacturer{
manufacturer_id:"MAN001",
name:"Apple",
country:"USA",
industry:"Electronics",
risk:"LOW"
}),

(:Port{
port_id:"PORT001",
name:"Shanghai Port",
country:"China",
status:"OPEN"
}),

(:ShippingCompany{
shipper_id:"SHIP001",
name:"Maersk",
country:"Denmark",
capacity:100000
}),

(:Warehouse{
warehouse_id:"WH001",
name:"California Warehouse",
country:"USA",
capacity:50000
}),

(:Retailer{
retailer_id:"RET001",
name:"Amazon",
country:"USA"
});