const $cardUpcoming = document.getElementById("cardUpcoming");
const $checkbox = document.getElementById("contenedor-checkbox");
const $inputSearch = document.getElementById("inputSearch");

// CODIGO DE TARJETAS DINAMICAS

    function filterUpcomingEvents(obj){
        let upcomingEvents = []
        for(const event of obj.events){
            if(event.date > obj.currentDate){
                upcomingEvents.push(event)
            }
        }
        return upcomingEvents;
    }
    const dataFilter = filterUpcomingEvents(data)

    function createCard(obj){
        return obj.reduce( ( acc, act ) =>{
            return acc += `
                <div class="card colorUno" style="width: 18rem;">
                    <img src="${act.image}" class="card-img-top p-2 cardImg" alt="food fair">
                    <div class="card-body d-flex flex-column align-items-center">
                        <h5 class="card-title">${act.name}</h5>
                        <p class="card-text text-center description">${act.description}</p>
                        <div class="d-flex justify-content-around w-100">
                            <p>$${act.price}</p>
                            <a href="./details.html?_id=${act._id}" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            `
        }, '')
    }
    $cardUpcoming.innerHTML = createCard(dataFilter)


/* FUNCIONALIDAD DE LAS CATEGORIAS Y EL BUSCADOR */

    function createCheckbox(obj) {
        return `
            <div class="form-check m-2">
                <input class="form-check-input" type="checkbox" value="${obj}" id="${obj}">
                <label class="form-check-label" for="${obj}">
                    ${obj}
                </label>
            </div>
        `
    }

    /*Filtro por categoria checkbox */
    const category = data.events.map (obj => obj.category) //me devuelve un array con las categorias
    const setInfo = new Set (category)  //no me da valores duplicados y me devuelve el primero
    const arrayCategory = Array.from (setInfo) //lo vuelve a hacer array

    //crea e imprime template category
    function createTemplateCategory(array){
        let template = array.map((categoria) => createCheckbox(categoria)).join(``);
        return template;
    }
    const TemplateCategory = createTemplateCategory(arrayCategory);
    $checkbox.innerHTML = TemplateCategory;

/* SEARCH */

    /* filtra lo que viene del input */
    function filterSearch(array, inputValue){
        return array.filter( obj => obj.name.toLowerCase().includes(inputValue.toLowerCase()))
    }

    /*filtra si arrayCategory tiene obj guardados */
    function filtercheckbox( array, arrayCategory ) {
        if( category.length == 0 ) return array
        return array.filter( obj => arrayCategory.includes( obj.category ))
    }

    /*escuchador esperando el evento change del checkbox */
    $checkbox.addEventListener( 'change', () => { filterCheckboxSearch ()
    })

    /*escuchador esperando el evento input del buscador */
    $inputSearch.addEventListener ('input', () => { filterCheckboxSearch ()
    })

    function filterCheckboxSearch(){
        const checkboxChange = Array.from (document.querySelectorAll (`input[type="checkbox"]:checked`)).map( check => check.value)
        let runFilterSearch = filterSearch(dataFilter, $inputSearch.value);
        let runFiltercheckbox = filtercheckbox(runFilterSearch, checkboxChange);
        $cardUpcoming.innerHTML = createCard(runFiltercheckbox)
    }
