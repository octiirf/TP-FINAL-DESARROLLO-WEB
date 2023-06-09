$(document).ready(function(){ //se empieza a ejecutar el js cuando termina de cargar la pagina

    //variables cards
    let p1 = document.getElementById("card1");
    let p2 = document.getElementById("card2");
    let p3 = document.getElementById("card3");
    let p4 = document.getElementById("card4");
    let p5 = document.getElementById("card5");

    let cardContador = [p1, p2, p3, p4, p5];
    let x = 0;

    //validando form
    const validarFormulario = () => {
        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const correo = document.getElementById("correoElectronico");
        const celular = document.getElementById("celular");
        const formaPago = document.getElementById("pago");
        const sucursal = document.getElementById("sucursal");
        const hora = document.getElementById("horarios");

        switch (x) {
            case 0: 
                let entrar = false;
                /*tamaño de 2 o de 3 el valor de dominio */
                let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                /*valida el nombre y el apellido */
                if (nombre.value.length < 3) {
                    entrar = true;
                }
                if (apellido.value.length < 4) {
                    entrar = true;
                }
                /*si no es un email "asdsa@sd.com" me va a tirar falso en la consola, entonces si es falso entra*/
                if (!regexEmail.test(correo.value)) {
                    entrar = true;
                }
                /*valida el numero de celular */
                if (celular.value.length < 10) {
                    entrar = true;
                }
                /*en caso de ser true entrar, avisa que hay un campo sin completar.
                si el form esta completo pasa de card */
                return entrar;
            case 3:
                let entrar2 = false;
                if ((formaPago.value == 0) || (sucursal.value == 0) || (hora.value == "00:00")) {
                    entrar2 = true;
                }
                /*si es true avisa que no se completo el formulario.
                si el form esta completo pasa de card*/
                return entrar2;
        }
    }

    //oculto cards > paso1
    for (let i = 1; i <= 4; i++) {
        $(cardContador[i]).hide()
    }

    //boton siguiente
    $(".siguiente").click(function(){
        let formValidator = validarFormulario();
        if (x == 0){
            if (formValidator) {
                window.alert("El formulario está incompleto")
            } else {
                $(cardContador[x]).hide();
                x++;
                $(cardContador[x]).show();
            }
        } else {
            $(cardContador[x]).hide();
            x++;
            $(cardContador[x]).show();
        }
        if (x == 4) {
            //numero de orden
            let random = Math.floor(Math.random() * 100);
            document.getElementById("numOrden").innerHTML = random;
            random++;
        }
        
    })

    //boton anterior
    $(".anterior").click(function(){
        $(cardContador[x]).hide();
        x--;
        $(cardContador[x]).show();
    })

    let inicio = 0;
    let cafes = [
        {
            "nombre": "Cream Coffee",
            "precio": 400,
            "cant": 0
        },
        {
            "nombre": "Capuccino Coffee",
            "precio": 600,
            "cant": 0
        },
        {
            "nombre": "Expresso Coffee",
            "precio": 500,
            "cant": 0
        },
        {
            "nombre": "Croassaint",
            "precio": 650,
            "cant": 0
        },
        {
            "nombre": "Muffin",
            "precio": 500,
            "cant": 0
        },
        {
            "nombre": "Alfajor de Maicena",
            "precio": 450,
            "cant": 0
        },
];

    //estado inicial nombre y precio cafe

    document.getElementById("productoSelector").innerHTML = cafes[inicio].nombre;
    document.getElementById("precioSelector").innerHTML = "$" + cafes[inicio].precio;

    //cambia la informacion del cafe

    $("#prevCarrusel").click(function(){
        if (inicio == 0) {
            inicio = 5;
        }else{
            inicio--;
        }
        document.getElementById("productoSelector").innerHTML = cafes[inicio].nombre;
        document.getElementById("precioSelector").innerHTML = "$" + cafes[inicio].precio;
        document.getElementById("contadorCarrito").innerHTML = cafes[inicio].cant;
    })

    $("#nextCarrusel").click(function(){
        if (inicio == 5) {
            inicio = 0;
        }else{
            inicio++;
        }
        document.getElementById("productoSelector").innerHTML = cafes[inicio].nombre;
        document.getElementById("precioSelector").innerHTML = "$" + cafes[inicio].precio;
        document.getElementById("contadorCarrito").innerHTML = cafes[inicio].cant;
    })

//realizar otro pedido
    $("#backto1").click(function(){
        $(cardContador[x]).hide();
        x = 0
        $(cardContador[x]).show();
        location.reload();
    })

//sumar o restar al carrito

let sumarLista = () => {
    switch (inicio) {
        case 0:
            document.getElementById("cont1").innerHTML = cafes[inicio].cant;
            break;
        case 1:
            document.getElementById("cont2").innerHTML = cafes[inicio].cant;
            break;
        case 2:
            document.getElementById("cont3").innerHTML = cafes[inicio].cant;
            break;
        case 3:
            document.getElementById("cont4").innerHTML = cafes[inicio].cant;
            break;
        case 4:
            document.getElementById("cont5").innerHTML = cafes[inicio].cant;
            break;
        case 5:
            document.getElementById("cont6").innerHTML = cafes[inicio].cant;
            break;
    }
}

$('#sumar').click(function() {
    if (cafes[inicio].cant >= 0) {
        cafes[inicio].cant++;
    }
    document.getElementById("contadorCarrito").innerHTML = cafes[inicio].cant;
    console.log(cafes[inicio])
    sumarLista();
})

$('#restar').click(function() {
    if (cafes[inicio].cant > 0) {
        cafes[inicio].cant--;
    }
    document.getElementById("contadorCarrito").innerHTML = cafes[inicio].cant;
    console.log(cafes[inicio])
    sumarLista();    
})

//sumar al total

$('#pasoDos').click(function(){
    let contador = 0;

    for (let i = 0; i<cafes.length; i++) {
        contador = contador + (cafes[i].cant * cafes[i].precio)
    }

    console.log(contador)
    document.getElementById("total").innerHTML = contador
})
    





});