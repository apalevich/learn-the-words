import React from 'react';
import s from './HeaderBlock.module.css';
import { ReactComponent as ReactLogoSvg } from '../../logo.svg';

const HeaderBlock = ({ title, hideBackground = false, hideLogo = false, descr }) => {
	const styleCover = hideBackground ? {backgroundImage: 'none '} : {};
 	return (
		<div className={s.cover} style={styleCover }>
			<div className={s.wrap}>
	 			{ title && <h1 className={s.header}>{ title }</h1> }
				{ hideLogo || <ReactLogoSvg/> }
	 			{ typeof descr ==  'object' ? <ul className={s.descr}>{descr.map(el => <li>{el}</li>)}</ul> : <p className={s.descr}>{ descr }</p> }
			</div>
		</div>
 	)
 }

 export default HeaderBlock;