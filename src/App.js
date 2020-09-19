import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import ContentBlock from './components/ContentBlock';
import CardList from './components/CardList';
import FooterBlock from './components/FooterBlock';
import { ReactComponent as ReactLogo} from './logo.svg';

const wordsList = [
  {
      eng: 'between',
      rus: 'между'
  },
  {
      eng: 'high',
      rus: 'высокий'
  },
  {
      eng: 'really',
      rus: 'действительно'
  },
  {
      eng: 'something',
      rus: 'что-нибудь'
  },
  {
      eng: 'most',
      rus: 'большинство'
  },
  {
      eng: 'another',
      rus: 'другой'
  },
  {
      eng: 'much',
      rus: 'много'
  },
  {
      eng: 'family',
      rus: 'семья'
  },
  {
      eng: 'own',
      rus: 'личный'
  },
  {
      eng: 'out',
      rus: 'из/вне'
  },
  {
      eng: 'leave',
      rus: 'покидать'
  },
];

const App = () => {
	return (
		<>
			<HeaderBlock>
        <Header>
          Время учить слова онлайн
        </Header>
        <Paragraph>
          Используйте карточки для запоминания и пополняйте активный словарный запас
        </Paragraph>
      </HeaderBlock>
      <ContentBlock
        title="Мы создали уроки, чтобы помочь вам расширить словарный запас английских слов"
      />
      <ContentBlock
        title = "Отметьте карточки со словами, которые вам уже известны"
        descr = "Кликните по карточке, чтобы увидеть перевод. Чтобы закрыть перевод, кликните повторно"
        backgroundColor="#ededed"
      >
        <CardList item={ wordsList } />
      </ContentBlock>
      <HeaderBlock hideBackground>
        <Header>
          Изучайте английский легко и просто
        </Header>
        <Paragraph>
          Уникальная технология переворачивания карточек доказала эффективность по всему миру
        </Paragraph>
        <ReactLogo/>
      </HeaderBlock>
      <FooterBlock/>
		</>
	);
}

export default App;
