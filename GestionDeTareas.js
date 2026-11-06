// =====================================
// Sistema de Gestión de Tareas
// =====================================

//Angel Alberto Perez Gaxiola - 269680
/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  //Mostramos el nombre de la tarea por el ciclo for y el estado
  for(let i = 0; i < lista.length; i++){
    console.log("Nombre de la tarea: " +lista[i].nombre+ " Estado: " + lista[i].completada)
}
}

/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  //Filtramos y obtenemos la tarea que solo este completada
  return lista.filter(e => e.completada === true)
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  //Filtramos y obtenemos la tarea que no este completada
  return lista.filter(e => e.completada === false)
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  //Aqui con map creamos otro arreglo solo con el nombre de las tareas
  return lista.map(n => n.nombre)
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
//Obtenemos la longitud de la lista
function contarTareas(lista) {
  return lista.length
}



// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    return mostrarTareas(this.tareas)
  },

  mostrarCompletadas: function() {
    return obtenerCompletadas(this.tareas)
  },

  mostrarPendientes: function() {
    return this.obtenerPendientes(this.tareas)
  }
};



// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/

//Si encuentra alguna tarea que no esta hecha avisa y se detiene 
for(let i = 0; i < tareas.length; i++ ){
  if(tareas[i].completada === false){
    console.log("Todas las tareas no esta completadas")
    break;
  }
}
//Si el arreglo esta vacio es por que no hay tareas
if(tareas.length ===0){
  console.log("No hay tareas")
}



// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 2;

switch (opcion) {
  case 1:
    mostrarTareas(tareas)
    break;

  case 2:
    obtenerCompletadas(tareas)
    break;

  case 3:
    obtenerPendientes(tareas)
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

//1
mostrarTareas(tareas);

//2
console.log(obtenerCompletadas(tareas));

//3
console.log(obtenerPendientes(tareas));

//4
console.log(obtenerNombres(tareas))

//5
console.log("Numero de tareas: "+contarTareas(tareas))

//6
console.log(sistema)
/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/