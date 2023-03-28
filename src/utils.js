import axios from 'axios';

export async function getFact() {
  const response = await axios.get('http://numbersapi.com/random');
  return response.data;
}