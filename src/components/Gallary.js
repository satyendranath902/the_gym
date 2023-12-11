import React, { Component } from 'react'
import video from '../babu.mp4'

class Gallary extends Component {
    render() {
        return (
            <div>
                <p>Pagla Babu</p>
                <video width="450" height="300" controls >
                    <source src={video} type="video/mp4" />
                </video></div>
        )
    }
}

export default Gallary;