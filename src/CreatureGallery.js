import React, { Component } from 'react'
import CreatureRender from './CreatureRender.js'

export default class CreatureGallery extends Component {
    state = {
        filter: ''
    }

    hornFilter = e => {
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        const filteredCreatures = this.props.creatures.filter((creature) => {
            if (!this.state.filter) return true;

            if (creature.horns === Number(this.state.filter)) return true;

            if (creature.keyword === this.state.filter) return true;

            return false
        });
        return (
        <>
        <div className="filter-boxes">
            <select onChange={this.hornFilter}>
                <option value="">ALL HORNS</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                <option value="3">Three Horns</option>
                <option value="100">One-Hundred Horns</option>
            </select>
            <select onChange={this.hornFilter}>
                <option value="">ALL KEYWORDS!</option>
                <option value="narwhal"> Narwhal</option>
                <option value="rhino">Rhino</option>
                <option value="unicorn">Unicorn</option>
                <option value="unilego">Unilego</option>
                <option value="triceratops">Triceratops</option>
                <option value="markhor">Markhor</option>
                <option value="mouflon">Mouflon</option>
                <option value="addax">Addax</option>
                <option value="chameleon">Chameleon</option>
                <option value="lizard">Lizard</option>
                <option value="dragon">Dragon</option>
            </select>
        </div>
            <div className="creature-name">
                {
                    filteredCreatures.map(creature =>
                    <CreatureRender
                    title={creature.title}
                    url={creature.url}
                    horns={creature.horns}
                />)
            }
            </div>
        </>
        )
    }
}
