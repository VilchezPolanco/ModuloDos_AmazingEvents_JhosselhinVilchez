const $detail = document.getElementById( 'contenedor-details' )
let info = data.events

/* te deja usar los metodos de location */
const params = new URLSearchParams( location.search )

/* uno de los metodos get para capturar el id*/
const idParam = params.get('_id')

const comparaId = info.find( item => item._id == idParam )

$detail.innerHTML = `
    <div class="card mb-3" style="max-width: 440px; margin-top: 1rem;">
        <div class="row g-0 colorUno detail">
            <div class="col-md-4">
                <img src="${comparaId.image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${comparaId.name}</h5>
                    <p class="card-text">${comparaId.description}</p>
                    <p class="card-text">Date: ${comparaId.date}</p>
                    <p class="card-text">Category: ${comparaId.category}</p>
                    <p class="card-text">Place: ${comparaId.place}</p>
                    <p class="card-text">${comparaId.assistance ? `Assistance: ${comparaId.assistance} people` : `Estimate: ${comparaId.estimate} people`}</p>
                    <p class="card-text">price: $${comparaId.price}</p>
                </div>
            </div>
        </div>
    </div>
 `