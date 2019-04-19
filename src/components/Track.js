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
        let api_server_url = process.env.REACT_APP_API_SERVER

        axios({
            url: api_server_url,
            method: 'post',
            data: {
                query: `
                    {
                        allTracks {
                            id
                            title
                        }
                    }
                `
            }
        })
            .then(response => {
                this.setState({tracks: response.data.data.allTracks})
        })
    }

    render() {
        return(
            <div>
                <ul className='list-group'>
                    { this.state.tracks.map(track => 
                        <li className='list-group-item' key={track.id}>Title: {track.title}</li>
                    ) }
                </ul>
            </div>
        )
    }
}

export default Track