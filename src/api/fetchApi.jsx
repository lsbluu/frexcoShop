import apiLocal from '../api/apiLocal'

const fetchApi = async () => {
  try {
    // Tive problemas com CORS, o fetch está funcional, mas para conseguir buscar o resultado, tive que instalar uma extensão para habilitar o CORS

    // const response = await fetch('https://www.fruityvice.com/api/fruit/all/'
    // );
    // if (!response.ok) {
    //   throw new Error(`Error! status: ${response.status}`);
    // }
    // const result = await response.json();
    return apiLocal.results
  } catch (err) {
    console.log(err)
  }
}

export default fetchApi
