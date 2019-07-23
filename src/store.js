import { createStore } from "redux"


let initializeStore = {
  jugadores: [],
  titulares: [],
  suplentes: []
}

const reducer = (state = initializeStore, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter(jugadorActual => jugadorActual.id !== action.jugador.id)
    }
  }
  
  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(jugadorActual => jugadorActual.id !== action.jugador.id)
    }
  }
  if (action.type === "ELIMINAR_TITULAR") {
    return {
      ...state,
      jugadores: state.jugadores.concat(action.jugador),
      titulares: state.titulares.filter(jugadorActual => jugadorActual.id !== action.jugador.id)
    }
  }
  if (action.type === "ELIMINAR_SUPLENTE") {
    return {
      ...state,
      jugadores: state.jugadores.concat(action.jugador),
      suplentes: state.suplentes.filter(jugadorActual => jugadorActual.id !== action.jugador.id)
    }
  }
  if (action.type==="CARGAR_JUGADORES") {
    return{
      ...state,
      jugadores:state.jugadores.concat(action.jugadores)
    }
  }
  return state
}

export default createStore(reducer)