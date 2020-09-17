import React from 'react';
import s from './FooterBlock.module.css';
import ReactLogo from '../../logo.png';

const FooterBlock = ({title, descr}) => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <img src={ReactLogo} alt="React Logo"/>
                <h1 className={s.header}>{title}</h1>
                <p className={s.descr}>{descr}</p>
            </div>
        </div>
    )
}

export default FooterBlock;