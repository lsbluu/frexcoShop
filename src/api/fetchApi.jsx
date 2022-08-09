const fetchApi = async () => {
  const response = await fetch('https://www.fruityvice.com/api/fruit/all');
  const fruits = await response.json()
  return fruits;
};


export default fetchApi;