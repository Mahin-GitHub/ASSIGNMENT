// Feet To Mile Convert

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

var result = feetToMile(1);
console.log("Mile = ",result);

//Wood Calculator

function WoodCalculator(bed,table,chair){

    var wood = (bed*5)+(table*3)+(chair*1);
    return wood;
}

var result = WoodCalculator(2,2,2);
console.log("Wood = ",result);

//Brick Calculator

