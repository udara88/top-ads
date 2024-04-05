import axios from 'axios';
const BASE_URL = process.env.API_URI_LOCALHOST;
export const customFetch = axios.create({
    baseURL:'http://127.0.0.1:3001/api/',
    
})

export const handleApiError = async (error:any) => {
    try {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      const data = null;
      return { error: errorMessage, data };
    } catch (err) {
      throw new Error("An unexpected error occurred.");
    }
  };



