

const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const imprime = document.getElementById('prn');

//Valida imprimir
imprime.addEventListener('click', (e)=> {
    e.preventDefault();
    
    if (formulario.input.value == 0 ){ 
        alert("Ingrese un ASSET para imprimir etiqueta QR & BarCode");
        
    }else{window.print();}
    
})

const QR = new QRCode(contenedorQR);

//Genera codigo de barra y QR
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formulario.input.value);
    $(document).ready(function () {
        $("#bar").JsBarcode(formulario.input.value);
    });
});

