import axios from 'axios';

const SEARCH_OFFICE = 'SEARCH_OFFICE';
const BOOK_OFFICE = 'BOOK_OFFICE';
const OFFICE_DETAIL = 'OFFICE_DETAIL';
const BOOKING_DETAIL = 'BOOKING_DETAIL';
const USER_SIGNUP = 'USER_SIGNUP';

const OFFICE_STORE_URL = 'http://officestore.leapon.com';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW5AbGVhcG9uLmNvbSIsImlhdCI6MTUwMzUxODY1MX0.fDq7RnkL4YgxqyozubXL1eBF5SBW4j4x9Vq_iT2ouyc';
//local API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW5AbGVhcG9uLmNvbSIsImlhdCI6MTUwMjY3MDYwMn0.yWXOFOaddAkuSKPMBaoONzyOz6zSjDKaNSRb1gk3Lfk';

const OFFICE_SEARCH_URL = `${OFFICE_STORE_URL}/data/office/search?token=${API_KEY}`;
const OFFICE_DETAIL_URL = `${OFFICE_STORE_URL}/data/office/get?token=${API_KEY}`;
const OFFICE_BOOK_URL = `${OFFICE_STORE_URL}/data/office/book?token=${API_KEY}`;
const BOOKING_DETAIL_URL = `${OFFICE_STORE_URL}/data/booking/get?token=${API_KEY}`;
const USER_SIGNUP_URL = `${OFFICE_STORE_URL}/mobile/user/signup`;
const USER_SIGNIN_URL = `${OFFICE_STORE_URL}/mobile/user/`;

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


export function doUserSignup(values, callback) {
  const url = `${USER_SIGNUP_URL}`;
  console.log('doUserSignup url:', url);
  console.log('doUserSignup values:', values);
  /*
  const request = axios.post(url, values)
    .then((response) => callback(response.data));
  */
  return {
    type: USER_SIGNUP,
    payload: {} // request
  }
}

