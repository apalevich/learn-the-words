import React from 'react';
import cl from 'classnames';
import s from './Card.module.css';

class Card extends React.Component{

    state = {
        done: false,
    }

    handleCardClick = () => { 
        this.setState({ done: !this.state.done, })
     }

    render() {
        const { rus, eng } = this.props;
        const { done } = this.state;

        return (
            <div
                className={ cl(s.card, {[s.done]: done} ) }
                onClick={ this.handleCardClick }
            >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { eng }
                    </div>
                    <div className={s.cardBack}>
                        { rus }
                    </div>
                </div>
                
            </div>
        );
    }

}

export default Card;