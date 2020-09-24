import React, {Component} from 'react';
import Card from '../Card';
import s from './CardList.module.css';

class CardList extends Component {
    state = {
        eng: '',
        rus: ''
    }
    
    handleInputChange = (e) => {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        const { rus, eng } = this.state;
        this.props.onAddedItem(rus, eng);
    }

    render() {
        const { item = [], onDeletedItem } = this.props;
        
        return (
            <>
                <div>
                    { this.state.label }
                </div>
                <form
                    className={s.form}
                    onSubmit={this.handleSubmitForm}
                >
                    <label htmlFor="eng-word-input">
                        Слово на английском
                    </label>
                    <input 
                        onChange={this.handleInputChange}
                        value={this.state.eng}
                        type="text"
                        name="eng"
                        id="eng-word-input"
                    />
                    <label htmlFor="rus-word-input">
                        Перевод
                    </label>
                    <input 
                        onChange={this.handleInputChange}
                        value={this.state.rus}
                        type="text"
                        name="rus"
                        id="rus-word-input"
                    />
                    <button>
                        Добавить карточку
                    </button>
                </form>
                <div className={s.root}>
                    {
                        item.map(({ rus, eng, id }) => (
                            <Card key={id} eng={eng} rus={rus} onDeleted={ () => {onDeletedItem(id);} } />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default CardList;