const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is a required value"],
        trim: true,
        maxLength: [120, "product's name exceeded max length (120)"]
    },
    price: {
        type: Number,
        required: [true, "price is a required value"],
        maxLength: [8, "product's price exceeded max length (8)"],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "description is a required value"]
    },
    rate: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                rquired: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "select product's category"],
        enum: {
            values: [
                "Higiene",
                "Salud",
                "Aseo",
                "Comida",
                "Nutricion"
            ]
        }
    },
    seller: {
        type: String,
        required: [true, "seller is a required value"]
    },
    stock: {
        type: Number,
        required: [true, "stock is a required value"],
        maxLength: [5, "product's stock exceeded max length (5)"],
        default: 0
    },
    totalRatings: {
        type: Number,
        default: 0
    },
    opinions: [
        {
            clientName: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        }
    ],
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("products", productsSchema);