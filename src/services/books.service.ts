import { API_URL } from "../constants/env";

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
