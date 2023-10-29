
let banderas = ["К1.jpg", "К2.jpg", "К3.jpg", "К4.jpg", "К5.jpg","К6.jpg","К7.jpg","К8.jpg","К9.jpg","К10.jpg",
"К11.png","К12.jpg","К13.png","К14.jpg","К15.jpg","К16.jpg"];

let correcta = [0,2,1,1,0,0,2,1,0,0,1,2,0,1,0,0,0,1,2,0,1,2,0,1];

let opciones = [];

opciones.push(["Священная римская империя", "Западная римская империя", "ВИЗАНТИЯ"]);
opciones.push(["Российская империя", "Германская империя", "Византийская империя"]);
opciones.push(["Камень", "Кааба", "стойнхендж"]);
opciones.push(["Сирия", "Сайдовская Аравия", "Йемень"]);
opciones.push(["ВЕНА", "ПРАГА", "АХЕН"]);
opciones.push(["Трон Византии", "Трон Рима", "Царский трон Московии"]);
opciones.push(["Генрих-1", "Отто-1", "Фридрих Барбароса"]);
opciones.push(["Луи Дафин -4", "Болдуин-4", "Де-Лакруа"]);
opciones.push(["622 год", "919 год", "843 год"]);
opciones.push(["Франция", "Италия", "Клермон-феран"]);
opciones.push(["Италия", "Испания", "Португалия"]);
opciones.push(["Адрианополь", "Анкара", "Константинополь"]);
opciones.push(["Чач и Илак", "Согд", "Кангюй"]);
opciones.push(["Огнемет Юстиниана", "Греческий огонь", "Святое пламя иерусалима"]);
opciones.push(["Юстиниан", "Аврелиан", "Константин"]);
opciones.push(["Священная Римская Империя", "Лотарингия", "Лангобардия"]);


let posActual = 0;
let cantidadAcertadas = 0;
function comenzarJuego(){

    posActual = 0;
    cantidadAcertadas = 0;

    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

function cargarBandera(){

    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){

    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";

    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){

    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}

