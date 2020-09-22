import React from 'react';
import s from './FooterBlock.module.css';

const FooterBlock = () => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <a href='https://apalevich.ru' target='_blank' rel="noopener noreferrer" className={s.copyright}>(c) Artyom Palevich 2020</a>
            </div>
        </div>
    )
}

export default FooterBlock;