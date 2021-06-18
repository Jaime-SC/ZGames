
const cargarMarcas = async()=>{
    //1. ir a buscar marcas a la api
    let resultado = await axios.get("api/marcas/get");
    console.log(resultado.data);
    //2. cargar las marcas dentro del select

};

cargarMarcas();