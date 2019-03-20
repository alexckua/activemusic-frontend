import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Track extends React.Component {
    constructor(){
        super()

        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        let api_tracks_url = process.env.REACT_APP_API_SERVER + '/tracks.json'
        
        axios.get(api_tracks_url)
            .then(response => {
                this.setState({tracks: response.data})
        })
    }

    render() {
        return(
            <div>
                <h1>Tracks</h1> 
                { this.state.tracks.map(track => <p key={track.id}>Title: {track.title}</p>) }
            </div>
        )
    }
}

export default Track