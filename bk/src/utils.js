export function isObjEmpty(obj) {
  if (!obj) return false;
  if (Object.keys(obj).length === 0) return true;
  return false;
}

export async function isIdValid(resource, id) {
  return fetch(`https://pokeapi.co/api/v2/${resource}/${id}`).then(
    (response) => response.ok
  );
}
