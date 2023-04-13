/*var listaAlumnos = [];
var cantidadAlumnos = Number(prompt("Ingresa numero")); //Maximum Array size 
for(var i=0; i<cantidadAlumnos; i++) { //Taking Input from user 
    listaAlumnos[i] = prompt('Enter Element ' + (i+1)); }
    console.log(listaAlumnos);

var listaNombres = []
class Nombres {
    constructor(nombre, id){
        this.nombre = nombre
        this.id = id
    }
}

var nombre1 = new Nombres ("Alma", 1)
var nombre2 = new Nombres ("Alicia", 2)
var nombre3 = new Nombres ("Amalia", 3)
var nombre4 = new Nombres ("Anahí", 4)
var nombre5 = new Nombres ("Ana", 5)

listaNombres.push(nombre1)
listaNombres.push(nombre2)
listaNombres.push(nombre3)
listaNombres.push(nombre4)
listaNombres.push(nombre5)


for(j=0; j<listaAlumnos.length; j++){
    console.log(listaAlumnos[j])
    for(k=0; k<listaNombres.length; k++){
        console.log(listaNombres[k])
    }
}




  /*  function names() {
        var nombres = [];
        //var cont = '';
        var nom;
        var size = Number(prompt("Ingresa numero de alumnos"));
    
        for (i = 0; i <= size; i++) {
            nom = prompt("Ingresa tu nombre:", "");
            nombres.push(nom);
        }
    
        for (i = 0; i <= size; i++) {
            cont += nombres[i] + " ";
        }
    
        console.log(nombres)
        

    }
    names();*/

   /* const listaNom = [];
    let cantidad =  Number(prompt("Ingresa numero")); //Maximum Array size 
     do{
        let nombre = prompt("Ingresar nombre");
        listaNom.push(nombre)
        
     }
     while(listaNom.length!=cantidad)
     const nuevaLista = listaNom.concat(["Ana"])
     alert(nuevaLista.join("\n"))
     console.log(listaNom)*/

    /* const listaAlumnos = [];
     let calificacionTareaTotal = 0
     let totalExamen
     let totalAsistencia
     let totalCalifTareas
     let nombreAlum, alumnos
     
     class Alumno {
         constructor(nombre) {
             //totalCalifTareas, totalExamen, totalAsistencia
             this.nombre = nombre;
             //this.totalCalifTareas = totalCalifTareas;
             /*this.totalExamen = totalExamen
             this.totalAsistencia = totalAsistencia*/
        /* }
     }
     
     let cantidadAlumnos = Number(prompt("Ingresa con número ¿Cuántos alumnos son a calificar?: "))
     if(isNaN(cantidadAlumnos)){
         alert("No es valor númerico, por favor intenta de nuevo")
     }
     else{
      
     for(let j=0; j<cantidadAlumnos; j++){
         alumnos = new Alumno(nombreAlum)
      nombreAlum = prompt("Ingresa el nombre del alumno a calificar: ")
      listaAlumnos.push(alumnos)
      console.log(listaAlumnos)
      console.log(nombreAlum)
     
     //Función para sacar promedio de tareas 
     }}*/

     /*const productos = [{id:1, producto: "Arroz"},
                        {id:2, producto: "Avena"},
                        {id:3, producto: "Frijol"}]

    for(const producto of productos){
        console.log(producto.id)
        console.log(producto.producto)
    }

    console.log(productos)*/

   /* const numeros = [{saludo: "hola",id:1},
                     {saludo: "hols",id:2},
                     {saludo: "hola",id:3}]
    numeros.forEach((num)=>{
        console.log(num)
    })

/*    let verificar 
do{
    verificar=  prompt("Si desea verificar que ya registró a algún alumno por favor ingrese el nombre")
    const nomVerificado = listaNombres.find((el) => el.listaNombres === "andrea")
    alert(nomVerificado)
} while (verificar!="ESC")*/

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario enviado")
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}