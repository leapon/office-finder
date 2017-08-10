export function selectOffice(office) {
  console.log('office selected:', office.name);
  return {
    type: 'OFFICE_SELECTED',
    payload: office
  };
}
