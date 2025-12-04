import axios from "axios";
import { API_URL } from "../constants/env";
export const whoami = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/auth/whoami`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in whoami:", error);
    throw error;
  }
};
