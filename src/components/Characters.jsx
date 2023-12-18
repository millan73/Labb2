import React from 'react'
import axios from 'axios'

export default class Characters extends React.Component {
    state = {
        characters: [],
        urval: []
    }

    componentDidMount() {
        axios
            .get('https://hp-api.onrender.com/api/characters')
            .then((response) => {
                const characters = response.data
                this.setState({ characters })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const urval = []

        this.state.characters.map((character) => {
            if (character.house === 'Gryffindor') urval.push(character)
        })

        return (
            <>
                <h3>Gryffindor</h3>
                <p>
                    Vi har kommit att tycka om Harry Potter och deras karaktärer
                    och vil gära publicera de karaktärer som tillhör Gryffindor
                    för er
                </p>

                {urval.map((character) => (
                    <div key={character.id}>
                        <h4>
                            {character.name} - {character.actor}
                        </h4>
                    </div>
                ))}
            </>
        )
    }
}
