import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ReactComponent as ReactLogo} from './logo.svg';

import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import ContentBlock from './components/ContentBlock';
import CardList from './components/CardList';
import FooterBlock from './components/FooterBlock';

const firebaseConfig = {
  apiKey: "AIzaSyBAsIzTSimfhhiTZef1jxYeg7pjRwlyGuw",
  authDomain: "learn-the-words-501dd.firebaseapp.com",
  databaseURL: "https://learn-the-words-501dd.firebaseio.com",
  projectId: "learn-the-words-501dd",
  storageBucket: "learn-the-words-501dd.appspot.com",
  messagingSenderId: "453740325841",
  appId: "1:453740325841:web:fd9b5b49b73338e06a8ef0"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

class App extends Component {
  state = {
    wordArr: [],
  }

  componentDidMount() {
    database
      .ref('/')
      .once('value')
      .then(res => {
        this.setState({
          wordArr: res.val(),
        });
      });
  }

  setNewWord = (eng, rus) => {
    const { wordArr } = this.state;
    database.ref('/').set([...wordArr, {
      id: +new Date(),
      eng: eng,
      rus: rus,
    }])
  }

  handleDeletedItem = (id) => {
    this.setState(({ wordArr }) => {
      const idx = wordArr.findIndex(item => item.id === id);
      const newWordArr = [
        ...wordArr.slice(0, idx),
        ...wordArr.slice(idx + 1)
      ];
      database.ref('/').set([...newWordArr]);
      return {
        wordArr: newWordArr,
      };
    });
  }

  handleAddedItem = (rus, eng) => {
    this.setState(({wordArr}) => {
      const newWordArr = wordArr;
      newWordArr.push({
        eng: eng,
        rus: rus,
        id: +new Date(),
      });
      database.ref('/').set([...newWordArr]);
      return {
        wordArr: newWordArr
      }
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
          <CardList item={ wordArr } onDeletedItem={ this.handleDeletedItem } onAddedItem={ this.handleAddedItem }/>
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
