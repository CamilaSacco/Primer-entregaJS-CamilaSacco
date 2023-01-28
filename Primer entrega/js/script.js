
function valor_actividad (actividad) {
if(actividad == "trekking"){
    valor = 3000
    return valor
}
else if(actividad == "kayak"){
    valor = 6000
    return valor
} 
else if(actividad == "paseo cultural"){
    valor = 1500
    return valor
}

}

let total = 0;

function calcular_cuotas(valor, cuotas){
    if (valor >= 1500 && cuotas == "1"){
        return valor
   
    }
    else if (valor >= 3000 && cuotas == "3"){
        total = valor / 3
        return total
    }
    else if (valor >= 3000 && cuotas == "6"){
        total = valor + (valor * 0.20);
        return total
    }

}

console.log("Bienvenido/a a Bariloche Aventura!");

let valor = "";
let actividad = "";

while ( actividad != "salir"){

actividad = prompt("Seleccione la actividad que desea realizar: trekking, kayak, paseo cultural o ingrese salir para finalizar.");

if (actividad != "salir"){
    console.log("Usted eligio la actividad: ", actividad);
    console.log("Tiene un valor de: ", valor_actividad(actividad));
    let cuotas = prompt("En cuantas cuotas quiere pagar? 1, 3 o 6");
    console.log("EL valor de las cuotas es:",calcular_cuotas(valor, cuotas));
}

}





