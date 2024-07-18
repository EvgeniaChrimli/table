export async function getAllPerson(url) {
  const res = await fetch(url);

  return await res.json();
}
