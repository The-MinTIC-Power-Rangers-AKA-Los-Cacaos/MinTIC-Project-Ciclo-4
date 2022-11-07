const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
    deliveryInfo: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "auth"
    },
    items: [{
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "products"
        }
    }],
    payInfo: {
        id: {
            type: String
        },
        state: {
            type: String
        }
    },
    payDate: {
        type: Date
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    deliveryPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    state: {
        type: String,
        required: true,
        default: "On hold"
    },
    deliveryDate: {
        type: Date
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("orders", ordersSchema);