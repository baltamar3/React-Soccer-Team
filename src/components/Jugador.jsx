import React, { useEffect, useState, Fragment } from "react"
import { connect } from "react-redux"


//Material
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

//styles
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(0.5),
    }
  }));

const Jugador = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const classes = useStyles();

    useEffect(() => {
        const cargar = async () => {
            setIsLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            let jugadores = await data.map(e => ({ id: e.id, name: e.name }))
            props.cargarJugadores(jugadores)
            setIsLoading(false)
        }
        cargar()
    }, [])

    return (
        <Fragment>
            {isLoading ?
                <div>Loading...</div> :
                <section>
                    {props.jugadores.map(e =>
                        <Box key={e.id}>
                            {e.name}-{e.id}
                            <Button onClick={props.agregarTitular.bind(this, e)} color="primary" variant="contained" className={classes.button}>Titular</Button>
                            <Button onClick={props.agregarSuplente.bind(this, e)} color="secondary" variant="contained" className={classes.button}>Suplente</Button>
                        </Box>)}
                </section>
            }
        </Fragment>
    )
}


//Metodos de redux
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