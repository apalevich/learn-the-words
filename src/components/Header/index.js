import React from "react";
import s from './Paragraph.module.css';

const Header = ({children}) => {
    return <h1 className={s.header}>{children}</h1>;
}

export default Header;