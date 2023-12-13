import axios from 'axios';
import toast from 'react-hot-toast';

export const pokeMonApi = async (POKEMON_NAME) => {
  try {
    if (!POKEMON_NAME) return;
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${POKEMON_NAME}`);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    toast.error("Unable to get the data");
  }
};