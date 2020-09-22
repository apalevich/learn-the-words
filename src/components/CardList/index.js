import React from 'react';
import Card from '../Card';
import s from './CardList.module.css';

const CardList = ({ item = [] }) => {
    return (
        <div className={s.root}>
            {
                item.map(({rus, eng}, index) => (
                    <Card key={index} eng={eng} rus={rus} />
                ))
            }
        </div>
    )
}

export default CardList;