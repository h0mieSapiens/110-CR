function getCatalogData() {
    $.ajax({
        url: '/catalog/getCatalog',
        type:'GET',
        seccess: function(res){
            for(i=0; i<res.length; i++){
                displayCar(res[i]);
            }
            console.log("se armo", res);

        },
        error: function(error){
            console.log("no se armo",error);

        }


    });
}


function displayCar(car) {
    var container = $("#catContainer");
    var template= `
    <div class='card col-6'>
        <div class='row'>
        <div class='col7'>
            <img class='car-img' src='${car.imageURL}'>
            </div>

            <div class="col-5">
            <div class="card-body">
            <h5 class="card-title">${car.make} ${car.model}</h5>
            <p class="card-text">${car.description}</p>
            <p class="card-text"><small class=""text-muted">HP:${car.hp}</small></p>
            <p class="card-text"><span class="prce">$ ${car.dailyPrice}</span>
            <button class="btn btn-primary float-rigth" onclick="rent(${car.id})">Rent Me</button>
            </p>
            </div>
                </div>
            </div>
            </div>
     
    
    
    `;
    container.append(template);
}

function init() {
    console.log("pwp");
    getCatalogData();
}

window.onload = init;