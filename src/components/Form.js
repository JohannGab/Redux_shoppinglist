import React from 'react'

import '../style.css'

class Form extends React.Component {
    state= {
        name: '',
        quantity:0,
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
        this.props.addArticle(this.state) 
        this.setState({ name: '', quantity: 0 })
    }

    render() {
        return (
            <div>
                <h3>{this.props.formTitle}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" className="quantity" placeholder="Quantité" 
                        value={this.state.quantity} onChange={ (event) => this.setState({quantity: event.target.value})} />
                    <input type="text" placeholder="Article" 
                        value={this.state.name} onChange={ (event) => this.setState({name: event.target.value})} />
                    <button className="btn btn-success" type="submit">Ajouter</button>
                </form>
            </div>
        )
    }
}

export default Form