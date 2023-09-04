const cardPastEvent = document.getElementById("cardPastEvent");

function createCard(obj){
    return `
        <div class="card colorUno" style="width: 18rem;">
            <img src="${obj.image}" class="card-img-top p-2 cardImg" alt="food fair">
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">${obj.name}</h5>
                <p class="card-text text-center description">${obj.description}</p>
                <div class="d-flex justify-content-around w-100">
                    <p>$${obj.price}</p>
                    <a href="./assets/pages/details.html" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
     `
}

function filterPastEvents(array){
    let pastEvents = []
    for(const event of array.events){
        if(event.date < array.currentDate){
            pastEvents.push(event)
        }
    }
    return pastEvents;
}
const dataFilter = filterPastEvents(data)

function createTemplate(arrayEvents){
    let template = ""
    for(const event of arrayEvents){
        template += createCard(event)
    }
    return template
}

function printCard(template, contenedorCard){
    contenedorCard.innerHTML = template
 }

 printCard(createTemplate(dataFilter), cardPastEvent)