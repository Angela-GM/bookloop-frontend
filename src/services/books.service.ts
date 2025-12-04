import { API_URL } from "../constants/env";
import axios from "axios";

export const getAllBooks = async (page: number = 1, limit: number = 10) => {
  try {
    const response = await fetch(`${API_URL}/books?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Error fetching books: ${response.statusText}`);
    }

    const data = await response.json();
    // console.log("Fetched books data:", data);
    return data;
  } catch (error) {
    console.error("Error in getAllBooks:", error);
    throw error;
  }
};

export const uploadBook = async (formData: FormData, token: string) => {
  try {
    const response = await axios.post(`${API_URL}/books/create`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error("❌ Error en uploadBook:", error);
    if (axios.isAxiosError(error)) {
      console.error('Status:', error.response?.status);
      console.error('Data:', error.response?.data);
      console.error('Message:', error.message);
    }
    throw error;
  }
};