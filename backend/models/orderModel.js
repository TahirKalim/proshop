import mongoose from 'mongoose'

const  orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User ' 
    },
    orderItems: [
       {
        name: {type: String, required: true },
        qty: {type: Number, required: true },
        name: {type: String, required: true },
        name: {type: Number, required: true },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'

        }
    }
    ],
    shippingAddress: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: String, required: true},
        Country: {type: String, required: true}
    },
         
    taxPrice:{
        type: String,
        required: true,
        default:0.0
    },
    shippingPrice:{
        type: String,
        required: true,
        default:0.0
    },
    totalPrice:{
        type: String,
        required: true,
        default:0.0
    },
    isPaid:{
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt:{
        type: Date,
    },
   
    isDelivered:{
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt:{
        type: Date,
    },
},
    {
        timestamps: true
    }
    
)

const Order = mongoose.model('order', orderSchema)

export default Order