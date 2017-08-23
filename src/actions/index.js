import axios from 'axios';

const SEARCH_OFFICE = 'SEARCH_OFFICE';
const BOOK_OFFICE = 'BOOK_OFFICE';
const OFFICE_DETAIL = 'OFFICE_DETAIL';
const BOOKING_DETAIL = 'BOOKING_DETAIL';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW5AbGVhcG9uLmNvbSIsImlhdCI6MTUwMjY3MDYwMn0.yWXOFOaddAkuSKPMBaoONzyOz6zSjDKaNSRb1gk3Lfk';

const OFFICE_SEARCH_URL = `http://localhost:9020/data/office/search?token=${API_KEY}`;
const OFFICE_DETAIL_URL = `http://localhost:9020/data/office/get?token=${API_KEY}`;
const OFFICE_BOOK_URL = `http://localhost:9020/data/office/book?token=${API_KEY}`;
const BOOKING_DETAIL_URL = `http://localhost:9020/data/booking/get?token=${API_KEY}`;

export function selectOffice(office) {
  console.log('office selected:', office.name);
  return {
    type: 'OFFICE_SELECTED',
    payload: office
  };
}

export function searchOffice(term) {
  const url = `${OFFICE_SEARCH_URL}&term=${term}`;
  console.log('searchOffice url:', url);
  const request = axios.get(url);
  return {
    type: SEARCH_OFFICE,
    payload: request
  }
}

export function getOfficeDetail(id) {
  const url = `${OFFICE_DETAIL_URL}&id=${id}`;
  console.log('getOfficeDetail url:', url);
  const request = axios.get(url);
  return {
    type: OFFICE_DETAIL,
    payload: request
  }
}

export function bookOffice(values, callback) {
  const url = `${OFFICE_BOOK_URL}`;
  console.log('bookOffice url:', url);
  console.log('bookOffice values:', values);
  const request = axios.post(url, values)
    .then((response) => callback(response.data));
  return {
    type: BOOK_OFFICE,
    payload: request
  }
}

export function getBookingDetail(id) {
  const url = `${BOOKING_DETAIL_URL}&id=${id}`;
  console.log('getBookingDetail url:', url);
  const request = axios.get(url);
  return {
    type: BOOKING_DETAIL,
    payload: request
  }
}
