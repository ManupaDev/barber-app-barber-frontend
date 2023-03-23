import axios from "axios";


const api = axios.create({
  baseURL: "http://192.168.1.2:8000/api",
});

export const getAllSlots = async () => {
  try {
    const res = await api.get("/slots");
    return res.data.slots;
  } catch (error) {
    throw new Error("Unable to connect to the server");
  }
};

export const createSlot = async (slot) => {
  
  try {
    const res = await api.post("/slots", slot);
    return res.data.newSlot;
  } catch (error) {
    throw new Error("Unable to connect to the server");
  }
};

export const deleteSlot = async (deletedSlot) => { 
  const {id} = deletedSlot;
  
  try {
    const res = await api.delete(`/slots/${id}`);
    return res.data.deletedSlot;
  } catch (error) {
    throw new Error("Unable to connect to the server");
  }
};

export const createAvailability = async (availability) => {
  
  try {
    const res = await api.post("/availabilities", availability);
    return res.data.newAvailability;
  } catch (error) {
    throw new Error("Unable to connect to the server");
  }
};

export const getAvailabilityByDate = async (date:string) => {
  
  try {
    const res = await api.get(`/availabilities?date=${date}`);
    return res.data.availability;
    
    
  } catch (error) {
    throw new Error("Unable to connect to the server");
  }
};