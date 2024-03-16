import axios from "axios";

const fetchCountryList = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchCountryList };
 