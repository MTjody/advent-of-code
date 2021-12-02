import Axios from 'axios';
import dotenv from 'dotenv';

type InputData = {
  data: string;
}

/**
 * @param path e.g. 2020/day/1
 */
export const getInput = async (path: string): Promise<InputData> => {
  dotenv.config();
  let res;
  try {
    console.log(`https://adventofcode.com/${path}/input`);
    res = await Axios.get(`https://adventofcode.com/${path}/input`, {
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');
  return res;
}
