import { createDetail } from "../modules/funciones.js";
const $detail = document.getElementById('contenedor-details');
const URL_API = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(URL_API)
    .then(response => response.json())
    .then(({events})=> {
        const params = new URLSearchParams( location.search ) /* te deja usar los metodos de location */
        const idParam = params.get('_id') /* uno de los metodos get para capturar el id*/
        const comparaId = events.find( item => item._id == idParam )

        $detail.innerHTML = createDetail(comparaId)
    })
    .catch(err => console.log(err))




