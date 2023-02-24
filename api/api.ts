import axios from "axios";

const api = axios.create({
  baseURL: "http://172.20.10.4:8000/api",
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
  console.log(slot);
  
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