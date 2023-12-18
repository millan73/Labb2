/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react'
import axios from 'axios'

function List({ state }) {
    const urval = []

    function makeUrval(urval) {
        state.hpcharacters.map((character) => {
            if (character.house === 'Gryffindor') urval.push(character)
        })
        return urval
    }

    return (
        <>
            <h3>Gryffindor</h3>
            <p>
                Vi har kommit att tycka om Harry Potter och deras karaktärer och
                vil gära publicera de karaktärer som tillhör Gryffindor för er
            </p>
            <>
                {makeUrval(urval).map((character) => (
                    <div key={character.id}>
                        <h4>
                            {character.name} - {character.actor}
                        </h4>
                    </div>
                ))}
            </>
        </>
    )
}

const Gryffindor = () => {
    function reducer(state, action) {
        switch (action.type) {
            case 'charactersLoaded':
                return {
                    ...state,
                    loading: false,
                    hpcharacters: action.hpcharacters
                }
            case 'setLoadingStatus':
                return { ...state, loading: true }
            default:
                throw new Error(`Failure. type: ${action.type}`)
        }
    }

    const initialState = {
        hpcharacters: [],
        loading: true
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function getDataAsync() {
            dispatch({ type: 'setLoadingStatus' })
            const results = await axios.get(
                'https://hp-api.onrender.com/api/characters'
            )
            dispatch({
                type: 'charactersLoaded',
                hpcharacters: results.data
            })
        }
        getDataAsync()
    }, [])

    if (state.loading) return <div>Loading...</div>

    return <List state={state}></List>
}
export default Gryffindor
