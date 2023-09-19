import{createCheckbox, createCard, filterSearch, filtercheckbox, filterUpcomingEvents}from "../modules/funciones.js"
const $cardUpcoming = document.getElementById("cardUpcoming");
const $checkbox = document.getElementById("contenedor-checkbox");
const $inputSearch = document.getElementById("inputSearch");
const URL_API = "https://mindhub-xj03.onrender.com/api/amazing"

    let data

    fetch(URL_API)
    .then(response => response.json())
    .then(({events, currentDate})=> {
        
        data = filterUpcomingEvents(events, currentDate)

        /*Filtro por categoria checkbox */
        const category = events.map (obj => obj.category) //me devuelve un array con las categorias
        const setInfo = new Set (category)  //no me da valores duplicados y me devuelve el primero
        const arrayCategory = Array.from (setInfo) //lo vuelve a hacer array

        $cardUpcoming.innerHTML = createCard(data)
        $checkbox.innerHTML = createCheckbox(arrayCategory)
    })
    .catch(err => console.log(err))

//ESCUCHADOR DE EVENTOS

    $checkbox.addEventListener( 'change', () => { filterCheckboxSearch () /*escuchador esperando el evento change del checkbox */
    })

    $inputSearch.addEventListener ('input', () => { filterCheckboxSearch () /*escuchador esperando el evento input del buscador */
    })

    function filterCheckboxSearch(){
        const checkboxChange = Array.from (document.querySelectorAll (`input[type="checkbox"]:checked`)).map( check => check.value)  // array con el atributo value de los input checkbox que estan en estado checked
        let runFilterSearch = filterSearch(data, $inputSearch.value);  // array con los eventos que coinciden con la busqueda por search

        let runFiltercheckbox = filtercheckbox(runFilterSearch, checkboxChange);  // array con los eventos que coinciden con la busqueda / array con los input value de los checkbox checked
        $cardUpcoming.innerHTML = createCard(runFiltercheckbox)
    }