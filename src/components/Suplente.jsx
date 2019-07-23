import React from "react";
import {connect} from "react-redux"

//Material
import Button from '@material-ui/core/Button';

const Suplente=({suplentes, eliminarSuplente})=>(
    <section>
            {suplentes.map(row=>
            <div key={row.id}>
                {row.name}-{row.id}
                <Button onClick={()=>eliminarSuplente(row)} color="secondary" variant="contained">X</Button>
            </div>)
            }
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