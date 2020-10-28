import React, { Component } from 'react'

export default class CreatureRender extends Component {
    render() {
        return (
            <div className='creature-render'>
                <div>{this.props.title}</div>
                <img src={this.props.url} alt='Horned Beast' className='creature-img'/>
                <div>Number of Horns: {this.props.horns}</div>
            </div>
        )
    }
}
