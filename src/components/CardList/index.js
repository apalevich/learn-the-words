import React, {Component} from 'react';
import Card from '../Card';
import s from './CardList.module.css';

class CardList extends Component {
    state = {
        value: '',
        label: ''
    }
    
    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.setState(({value}) => {
            return {
                label: value,
                value: ''
            }
        })
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
                    <input 
                        onChange={this.handleInputChange}
                        value={this.state.value}
                        type="text"
                    />
                    <button>
                        Add New Word
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