import React from "react"
import { connect } from "react-redux"

const Titular=(props)=>(
    <section>
        <ul>
            {props.titulares.map(e=><li key={e.id}>{e.name} - {e.id}
                <button onClick={()=>props.eliminarTitular(e)}>X</button>
            </li>)}
        </ul>
    </section>
)

const mapStateToProps=(state)=>{
    return{
      titulares:state.titulares
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        eliminarTitular(jugador){
            dispatch({
                type:"ELIMINAR_TITULAR",
                jugador:jugador
            })
        }
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps )(Titular);