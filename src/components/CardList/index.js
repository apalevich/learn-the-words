import React, {Component} from 'react';
import getTranslateWord from '../../services/dictionary.js';
import Card from '../Card';
import { Input } from 'antd';

import s from './CardList.module.css';

const { Search } = Input;

class CardList extends Component {
    state = {
        value: '',
        label: '',
        isBusy: false,
    }
    
    handleInputChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    getTheWord = async () => {
        const { value } = this.state;
        const getWord = await getTranslateWord(value);
        const { text, translate } = getWord;
        this.props.onAddedItem(translate, text);
        this.setState(() => {
            return {
                label: `Добавлено: ${value} — ${getWord.translate}`,
                value: '',
                isBusy: false,
            }
        })
    }

    handleSubmitForm = async (currentValue) => {
        this.setState({
            isBusy: true,
        }, this.getTheWord);
    }

    render() {
        const { item = [], onDeletedItem } = this.props;
        const { value, isBusy } = this.state;

        return (
            <>
                <div>
                    { this.state.label }
                </div>
                <div className={s.form}>
                    <Search
                        placeholder="Инглиш ворд"
                        enterButton="Добавить для изучения"
                        size="large"
                        value={value}
                        onChange={this.handleInputChange}
                        onSearch={this.handleSubmitForm}
                        loading={isBusy}
                    />
                </div>
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