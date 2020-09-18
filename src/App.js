import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock';

const App = () => {
	return (
		<>
			<HeaderBlock
        title="Учите React онлайн"
        descr = "Онлайн-марафон Зара Захарова"
      />
      <ContentBlock
        showLogo
        title="Привет!"
        descr="Это учебная страница к уроку №2 онлайн-марафона Зара Захарова. Компоненты, которые используют пропсы в качестве аргументов и собственные модули стилей. Всё вместе это собирается в файле App.js, который рендерится в точке входа — файле index.js. Ничего не забыл?"
      />
      <ContentBlock
        alignText="right"
        title="Что тут есть?"
        descr="На странице распологаются несколько компонентов: HeaderBlock, ContentBlock и FooterBlock. Первые два из них повторяются, но выглядят по-разному благодаря пропсам."
      />
      <HeaderBlock
        hideLogo
        hideBackground
        title="Полный список составляющих App:"
        descr = {['Обложка HeaderBlock c пропсами по умолчанию', 'Абзац ContentBlock с включённым showLogo', 'Абзац ContentBlock c alignText равным "right"', 'HeaderBlock с включёнными hideLogo и hideBackground', 'Минималистичный FooterBlock']}
      />
      <FooterBlock
        title="Спасибо за вашу работу"
        descr="Ждём новых уроков"
      />
		</>
	);
}

export default App;
