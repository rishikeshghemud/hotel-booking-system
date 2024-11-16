import { Request, Response } from "express";
import { getAllHotels, getHotelById, addHotel, editHotel, deleteHotel } from "../services/hotelServices";
import Hotel from '../models/hotelModel';

export const getHotels = async (req: Request, res: Response) => {
    try{
        const hotels = await getAllHotels();
        res.status(200).send(hotels);
    } catch(e: any) {
        res.status(500).json({ message: 'Error fetching hotels', error: e.message });
    }
}

export const getSingleHotel = async (req: Request, res: Response) => {
    try {
        const hotelDetails = await getHotelById(req.params.id);
        res.status(200).send(hotelDetails);
    } catch (e: any) {
        res.status(500).json({ message: 'Error fetching hotel', error: e.message });
    }
}

export const addNewHotel = async (req: Request, res: Response) => {
    try {
        const newHotel = req.body;
        const hotelObj = await addHotel(newHotel);

        if(hotelObj) res.status(201).send(hotelObj);
    } catch (e: any) {
        res.status(500).json({ message: 'Error adding hotel', error: e.message });
    }
}

export const updateHotel = async (req: Request, res: Response) => {
    try {
        const updateId = req.params.id;
        const updateBody = req.body;
        const editHotelStatus = editHotel(updateBody, updateId);
        
        if(editHotelStatus) res.status(200).send(editHotelStatus);
    } catch (e: any) {
        res.status(500).json({ message: 'Error updating hotel', error: e.message });
    }
}

export const removeHotel = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const removedHotel = await deleteHotel(id);

        if(removedHotel) res.status(200).send(removedHotel);
    } catch (e: any) {
        res.status(500).json({ message: 'Error deleting hotel', error: e.message });
    }
}