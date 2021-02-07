import React, { Component } from 'react'
import './VideoTable.css'

class VideoTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                { title: 'Terminator', genre: 'Action', stock: 6, rate: 2.5 },
                { title: 'DieHard', genre: 'Action', stock: 5, rate: 2.5 },
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.movies[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.movies.map((movies) => {
            const { id, title, genre, stock, rate } = movies
            return (
                <tr key={id}>
                    <td>{title}</td>
                    <td>{genre}</td>
                    <td>{stock}</td>
                    <td>{rate}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='movies'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default VideoTable