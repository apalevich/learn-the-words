import React, { Component } from 'react';
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
      rus: 'между',
      id: 1,
  },
  {
      eng: 'high',
      rus: 'высокий',
      id: 2,
  },
  {
      eng: 'really',
      rus: 'действительно',
      id: 3
  },
  {
      eng: 'something',
      rus: 'что-нибудь',
      id: 4,
  },
  {
      eng: 'most',
      rus: 'большинство',
      id: 5
  },
  {
      eng: 'another',
      rus: 'другой',
      id: 6
  },
  {
      eng: 'much',
      rus: 'много',
      id: 7
  },
  {
      eng: 'family',
      rus: 'семья',
      id: 8
  },
  {
      eng: 'own',
      rus: 'личный',
      id: 9
  },
  {
      eng: 'out',
      rus: 'из/вне',
      id: 10
  },
  {
      eng: 'leave',
      rus: 'покидать',
      id: 11
  },
];

class App extends Component {
  state = {
    wordArr: wordsList
  }

  handleDeletedItem = (id) => {
    console.log(id);
    this.setState(({ wordArr }) => {
      const idx = wordArr.findIndex(item => item.id === id);
      const newWordArr = [
        ...wordArr.slice(0, idx),
        ...wordArr.slice(idx + 1)
      ];
      return {
        wordArr: newWordArr,
      };
    });
  }

  render() {
    const { wordArr } = this.state;
    
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
          <CardList item={ wordArr } onDeletedItem={ this.handleDeletedItem }/>
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
}

export default App;
