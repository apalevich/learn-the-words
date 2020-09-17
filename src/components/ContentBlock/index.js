import React from 'react';
import s from './ContentBlock.module.css';
import ReactLogo from '../../logo.png';

const ContentBlock = ({title, descr, alignText="left", showLogo=false}) => {
    return (
        <div className={s.cover} style={{textAlign: alignText}}>
            <div className={s.wrap}>
                { showLogo && <img src={ReactLogo} alt="React Logo"/>}
                <h1 className={s.header} >{title}</h1>
                <p className={s.descr}>{descr}</p>
            </div>
        </div>
    )
}

export default ContentBlock;