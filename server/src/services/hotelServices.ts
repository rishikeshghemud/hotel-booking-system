import Hotel from '../models/hotelModel';
import { HotelInterface } from '../models/hotelModel';


export const getAllHotels = async () => {
    try {
        const hotels = await Hotel.find();
        return hotels;
    } catch (e: any) {
        throw new Error(`Error retrieving hotels: ${e.message}`);
    }
}

export const getHotelById = async (_id: string) => {
    try {
        const hotel = await Hotel.findById(_id);
        return hotel;
    } catch (e: any) {
        throw new Error(`Error retrieving hotel with ID ${_id}: ${e.message}`);
    }
}

export const addHotel = async (hotelObj: HotelInterface) => {
    try {
        const hotel = new Hotel(hotelObj);
        const insertHotel = await hotel.save();
        return insertHotel;
    } catch (e: any) {
        throw new Error(`Error adding hotel: ${e.message}`);
    }
}

export const editHotel = async (hotelObj: HotelInterface, hotelId: String) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(hotelId, hotelObj, {new: true});
        return updateHotel;
    } catch (e: any) {
        throw new Error(`Error updating hotel with ID ${hotelId}: ${e.message}`);
    }
}

export const deleteHotel = async (_id: String) => {
    try {
        const deletedRecord = await Hotel.findByIdAndDelete(_id);

        if(deletedRecord) return deletedRecord;
    } catch (e: any) {
        throw new Error(`Error deleting hotel with ID ${_id}: ${e.message}`);
    }
}