import React from 'react';
import s from './ContentBlock.module.css';
import ReactLogo from '../../logo.png';

const ContentBlock = ({title, descr, backgroundColor=null, showLogo=false, children }) => {
    
    const bgStyle = backgroundColor ? {backgroundColor: backgroundColor} : {};
    
    return (
        <div className={s.cover} style={bgStyle}>
            <div className={s.wrap}>
                { showLogo && <img src={ReactLogo} alt="React Logo"/>}
                <h1 className={s.header} >{title}</h1>
                { descr && <p className={s.descr}>{descr}</p> }
                { children }
            </div>
        </div>
    )
}

export default ContentBlock;