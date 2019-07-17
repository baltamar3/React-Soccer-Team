import React from "react";
import {connect} from "react-redux"

const Suplente=({suplentes, eliminarSuplente})=>(
    <section>
        <ul>
            {suplentes.map(row=>
            <li key={row.id}>{row.name}-{row.id}
                <button onClick={eliminarSuplente.bind(this,row)}>X</button>
            </li>)
            }
        </ul>
    </section>
)

const mapStateToProps=(state)=>{
    return{
        suplentes:state.suplentes
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        eliminarSuplente(jugador){
            dispatch({
                type:"ELIMINAR_SUPLENTE",
                jugador:jugador
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Suplente)