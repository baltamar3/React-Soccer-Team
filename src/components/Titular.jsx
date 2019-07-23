import React from "react"
import { connect } from "react-redux"

//Material
import Button from '@material-ui/core/Button';


const Titular=(props)=>(
    <section>
            {props.titulares.map(e=>
            <div key={e.id}>{e.name} - {e.id}
                <Button onClick={()=>props.eliminarTitular(e)} color="secondary" variant="contained">X</Button>
            </div>)}
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