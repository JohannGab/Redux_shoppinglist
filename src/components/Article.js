import React from 'react'
import '../style.css'

class article extends React.Component {
    state = {
        isInEditMode : false
    }

    toggleEditMode = () => {
        this.setState({isInEditMode: !this.state.isInEditMode})
    }

    handleQuantityEdit = (event, article) => {
        article.quantity = event.target.value;
        this.props.editArticle(article);
    }

    handleNameEdit = (event, article) => {
        article.name = event.target.value;
        this.props.editArticle(article)
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <button onClick={this.toggleEditMode} className="btn btn-warning bnt-xs edit">Modif</button>
                {
                    this.state.isInEditMode ?
                    <span>
                        <input type="number" value={data.quantity} 
                        onChange={(event) => this.handleQuantityEdit(event, data)}
                        />
                        <input type="text" value={data.name} 
                        onChange={(event) => this.handleNameEdit(event, data)}
                        />
                    </span>
                    : <span>{data.quantity} {data.name}</span>
                }
            </div>
        )
    }
}

export default article