// Insert document ke collection products
db.products.insertOne({
    _id: "Snacks",
    name: "Chitato"
});

// Insert document products
db.customers.insertMany([
    {
        _id: 1,
        name: "Budi setiawan",
        age: 20 
    },
    {
        _id: 2,
        name: "Hendra Aditiya",
        age: 30
    }
]);

// Insert document orders
db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong(8000),
    items: [
        {
            product_id: 1,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        },
        {
            product_id: 2,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
        }
    ]
})