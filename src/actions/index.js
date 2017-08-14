import axios from 'axios';

const SEARCH_OFFICE = 'SEARCH_OFFICE';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW5AbGVhcG9uLmNvbSIsImlhdCI6MTUwMjY3MDYwMn0.yWXOFOaddAkuSKPMBaoONzyOz6zSjDKaNSRb1gk3Lfk';

const OFFICE_SEARCH_URL = `localhost:8010/data/office/search?token=${API_KEY}`;

export function selectOffice(office) {
  console.log('office selected:', office.name);
  return {
    type: 'OFFICE_SELECTED',
    payload: office
  };
}

export function searchOffice(term) {
  const url = `${OFFICE_SEARCH_URL}?term=${term}`;
  console.log('searchOffice url:', url);
  const request = axios.get(url);
  return {
    type: SEARCH_OFFICE,
    payload: request
  }
}
