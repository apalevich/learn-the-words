import React from 'react'
import cl from 'classnames';
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';

import s from './Card.module.css';

class Card extends React.Component {
    state = {
        done: false,
        isRemembered: false
    }

    handleCardClick = () => {
        this.setState(( {done, isRemembered} ) => {
            if (isRemembered) {
                return false;
            }
            return {
                done: !done,
            }
        });
    }

    handleIsRememberedClick = () => {
        this.setState(( {done, isRemembered} ) => {
            return {
                isRemembered: !isRemembered,
                done: !isRemembered
            }
        });
    }

    handleDeletedCLick = () => {
        this.props.onDeleted();
    }

    render() {
        const {eng, rus} = this.props
        const { done, isRemembered } = this.state
        
        return (
            <div className={s.root}>
                <div
                    className={ cl(s.card, { 
                        [s.done]: done,
                        [s.isRemembered]: isRemembered,
                    }) }
                    onClick={ this.handleCardClick }
                >
                    <div className={s.cardInner}>
                        <div className={s.cardFront}>
                            {eng}
                        </div>
                        <div className={s.cardBack}>
                            {rus}
                        </div>
                    </div>
                </div>
                <div className={s.icons}>
                    <CheckSquareOutlined onClick={ this.handleIsRememberedClick } />
                </div>
                <div className={cl(s.icons, s.deleted)}>
                    <DeleteOutlined onClick={ this.handleDeletedCLick }/>
                </div>
            </div>
        )
    }

}


export default Card;
