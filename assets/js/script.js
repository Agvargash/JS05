
 const tareas = [{id: 0, tarea:'Hacer mercado', estado: true},
{id: 1, tarea:'Limpiar la pieza', estado: true},
{id: 2, tarea:'Pasear al perro', estado: true},
]
//costante
const but_agregar = document.getElementById('boton_agregar')
const lista = document.getElementById('lista')
const t_totales = document.getElementById('t_totales')
const t_completas = document.getElementById('t_completadas')
const t_descripcion = document.querySelector('#texto')
//funciones 
//generador de ids 
let id = 2
function generar_id(){
  return id += 1
}

//actualizar lista
const actualizar = ()=>{

  let template= '';
  tareas.forEach((tarea) => {
    template += ` 
    <li>
      
      <input type="checkbox" ${tarea.estado? 'checked' : ''} onClick="estado(${tarea.id})">

      <label for="${tarea.id}">${tarea.tarea}</label>
      <button onClick='eliminarTarea(${tarea.id})'>X</button>
    </li>

  `
  })
  lista.innerHTML = template
  //actualizacion de contadores
  t_totales.innerHTML = tareas.length
  t_completas.innerHTML = tareas.filter(tarea => tarea.estado).length
  //lipiar el imput
  t_descripcion.value = ''
}

const TareasEliminadas = []

//funcion borrar
const eliminarTarea = (id) => {
  const tarea = tareas.find(tarea => tarea.id === id)
  TareasEliminadas.push (tarea)
  tareas.splice(tareas.indexOf(tarea), 1)
  
  actualizar()
}

//funcion de estado
const estado = (index) => {
  const tarea = tareas.find(tarea => tarea.id === id)
  tareas[index].estado = !tareas[index].estado
  actualizar()
}

//agregar tarea 
but_agregar.addEventListener('click',()=>{
  if(t_descripcion.value.trim().length > 0){
    let nueva_tarea = {
      id: generar_id(),
      tarea: t_descripcion.value,
      estado: false
    } 
    tareas.push(nueva_tarea)
    actualizar()
  }
})

//primera modificacioón de html
actualizar()