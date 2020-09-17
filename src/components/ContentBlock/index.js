import React from 'react';
import s from './ContentBlock.module.css';

const ContentBlock = ({text}) => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <p className={s.descr}>{text}</p>
            </div>
        </div>
    )
}

export default ContentBlock;