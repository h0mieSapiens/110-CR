function save() {
    var txtMake = $("#Make").val();
    var txtModel = $("#Model").val();
    var txtYear = $("#Year").val();
    var txtDP = $("#Daily").val();
    var txtSeats = $("#Seats").val();
    var txtColor = $("#Color").val();
    var txtMileage = $("#Mil").val();
    var txtHP = $("#HP").val();
    var txtImg = $("#Img").val();
    var txtDoors = $("#Doors").val();
    var txtCyls = $("#Cyls").val();
    var txtDesc = $("#Des").val();
    var errorOcurred= false;

    $("#txtYear").removeClass("error");
    if(!txtyear||!Number.isInteger(txtYear*1)){
        $("#txtYear").addClass("error");
        errorOcurred=true;

    }
    $("#txtDaily").removeClass("error");
    if(!txtDP||isNan(txtDP)){
        $("#txtDaily").addClass("error");
        errorOcurred=true;

    }


    if(errorOcurred){
        return;
    }





    var car = {
        'Model': txtModel,
        'Make': txtMake,
        'Year': txtYear,
        'DailyPrice': txtDP,
        'Seats': txtSeats,
        'Color': txtColor,
        'Mileage': txtMileage,
        'HP': txtHP,
        'ImageURL': txtImg,
        'Doors': txtDoors,
        'Cyls': txtCyls,
        'Description': txtDesc

    };
    $.ajax({
        url: '/catalog/savecar',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(car),

        seccess: function (res) {

            console.log("se armo", res);
            $("#divAlert").removeClass("hide");

            clearForm();

        },
        error: function (error) {
            console.log("no se armo", error);

        }


    });


}

function clearForm() {
    $("#Make").val("");
    $("#Model").val("");
    $("#Year").val("");
    $("#Daily").val("");
    $("#Seats").val("");
    $("#Color").val("");
    $("#Mil").val("");
    $("#HP").val("");
    $("#Img").val("");
    $("#Doors").val("");
    $("#Cyls").val("");
    $("#Des").val("");

}



function init() {
    console.log("Register");

    $("#btnSave").click(save);


}



















window.onload = init;