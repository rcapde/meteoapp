import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const FRANJES_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_NOW = 'FETCH_NOW';
export const FETCH_FRANJES = 'FETCH_FRANJES';

export function fetchNow(city) {
  const url = `${ROOT_URL}&q=${city}&cnt=10&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_NOW,
    payload: request
  };
}

export function fetchFranjes(city) {
  const url = `${ROOT_URL}&q=${city}&cnt=10&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_FRANJES,
    payload: request
  };
}
