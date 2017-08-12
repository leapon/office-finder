const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW5AbGVhcG9uLmNvbSIsImlhdCI6MTUwMjU0NzU0M30.xQ93S6BTYKTCuPFubnNb_Gk9jyiVV0S4iKcorIvmPKE';

export function selectOffice(office) {
  console.log('office selected:', office.name);
  return {
    type: 'OFFICE_SELECTED',
    payload: office
  };
}
