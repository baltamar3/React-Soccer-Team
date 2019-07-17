import React, { useEffect} from "react"
import { connect } from "react-redux"



const Jugador = (props) => {


    useEffect(() => {
        cargar().then((data) => {
            let jugadores = data.map(e =>({ id: e.id, name: e.name }))
            props.cargarJugadores(jugadores)
        })
    }, [])


    const cargar = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        return Promise.resolve(data);
    }

    return (
        <section>
            <ul>
                {props.jugadores.map(e => <li key={e.id}>{e.name}-{e.id}
                    <button onClick={props.agregarTitular.bind(this, e)}>Titular</button>
                    <button onClick={props.agregarSuplente.bind(this, e)}>Suplente</button>
                </li>)}

            </ul>
        </section>
    )
}



const mapStateToProps = (state) => {
    return {
        jugadores: state.jugadores
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cargarJugadores(jugadores) {
            dispatch({
                type: "CARGAR_JUGADORES",
                jugadores: jugadores
            })
        },
        agregarTitular(jugador) {
            dispatch({
                type: "AGREGAR_TITULAR",
                jugador: jugador
            })
        },
        agregarSuplente(jugador) {
            dispatch({
                type: "AGREGAR_SUPLENTE",
                jugador: jugador
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jugador);