//Segunda pre-entrega CODERHOUSE Comisión 51610 Redondo Julián

alert("Bienvenido a mi segunda pre-entrega :)")

let ropa = [];
let loop = 1;
let verificar = false;
let desicion = 0;

const iva = (x) => x*1.21;
const sumar = (a,b) => a+b;

while(loop === 1){ //default
    if(desicion === 0){
        let eleccion = prompt("¿Que desea hacer?\n\n(1) Agregar prenda\n(2) Filtrar/Buscar prenda\n(3) Ver todas las prendas\n\nEscribe 'SALIR' para cerrar").toLowerCase();
        if(eleccion === "1"){desicion = 1}; //Agrega objetos al array
        if(eleccion === "2"){filtrarElemento();}
        if(eleccion === "3"){mostrarTodo();}
        if(eleccion === "salir"){break}
    }
    if(desicion === 1){
        prendaTipo = prompt("¿Que prenda quieres elegir?\n\nRemera , Pantalon o Media\n\n(escribe 'SALIR' para volver)").trim().toUpperCase();
        if(prendaTipo === ""){
            alert("Ingrese algún valor");
        }
        else if(prendaTipo !== "REMERA" && prendaTipo !== "PANTALON" && prendaTipo !== "MEDIA" && prendaTipo !== "SALIR"){
            alert("Ingrese un valor valido") 
        }
        if(prendaTipo == "REMERA" || prendaTipo == "PANTALON" || prendaTipo == "MEDIA"){
            let Prenda = new crearRopa();
           if(verificar){
                ropa.push(Prenda);
                let precioConIVA = sumar(precio,iva(precio));
                alert("Objeto ingresado correctamente\nID: ["+ropa.length+"]\nPrecio: "+precio+" + IVA:"+precioConIVA);
            }
        };
        if(prendaTipo == "SALIR"){
            desicion = 0; //va al menu principal
        }
    }
}

function crearRopa(){
    marca = prompt("¿De que marca va a ser tu prenda? (ej: adidas, nike, puma)").toLowerCase();
    if(marca === ""){alert("Ingrese una marca"); verificar = false; return}
    modelo = prompt("¿Que modelo es?").toLowerCase();
    if(ropa.some((check) => check.modelo === modelo)){alert("El modelo ya existe"); verificar = false; return}
    precio = parseInt(prompt("¿Que precio tiene? +IVA"));
    if(isNaN(precio)){alert("No es un numero."); verificar = false; return}
    
    this.prenda = prendaTipo;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = sumar(precio,iva(precio));
    this.identificar = () => alert("Tipo de prenda: "+prenda+" Marca: "+marca+" Modelo: "+modelo)
    verificar = true;
} 

function mostrarTodo() {
    let mostrar = ropa.map((item) => `

        tipo de prenda: ${item.prenda}
        marca: ${item.marca} | modelo: ${item.modelo}
        precio: $${item.precio}
        `);

        alert(mostrar);
        console.table(ropa)
}

function filtrarElemento() {
    let filtro = prompt("¿Que marca quieres filtar?").trim().toLowerCase();
    if(filtro === ""){alert("No ingresaste nada"); return;}
    let todaLaRopa = ropa.filter((item) => item.marca.includes(filtro)).map((item) =>`
        tipo de prenda: ${item.prenda}
        marca: ${item.marca}
        modelo: ${item.modelo}
        precio: $${item.precio}

        `)

        alert("Elementos filtrados con la palabra "+filtro+todaLaRopa);
}