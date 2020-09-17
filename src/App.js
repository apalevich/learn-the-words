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
        text="Привет! Это учебная страница к уроку №2 онлайн-марафона Зара Захарова. Она показывает три компонента: хэдер, контент и футер. Каждый из них использует пропсы в качестве аргументов и собственные модули стилей. Всё вместе это собирается в файле App.js, который рендерится в точке входа — файле index.js. Ничего не забыл?"
      />
      <FooterBlock
        title="Спасибо за вашу работу"
        descr="Ждём новых уроков"
      />
		</>
	);
}

export default App;
