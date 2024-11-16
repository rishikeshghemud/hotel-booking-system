import mongoose, { Schema } from 'mongoose';


export interface HotelInterface {
    id: number,
    name: string,
    address: string,
    phoneNumber: string,
    checkInTime: Date,
    checkOutTime: Date,
    email: string,
    numberOfRooms: Number,
    roomTypes: []
}

const hotelSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
    },
    email: {
        type: String,
        required: [true, 'Enter email'],
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    numberOfRooms: {
        type: Number,
        required: true,
        min: 10
    },
    roomTypes: [
        { type: String }
    ]
},{
    timestamps: true,
    collection: 'Hotels'
});

const Hotel = mongoose.model<HotelInterface>("hotelModel", hotelSchema);

export default Hotel;