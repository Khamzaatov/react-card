import { useState } from 'react';
import icon from './icon.webp';
import { VscChromeClose } from 'react-icons/vsc';

const Main = () => {
    
    const [inBasket, setInBasket] = useState(false)
    const [opened, setOpened] = useState(false)

    return (
        <div className="container">
            <div className="image">
                <img src={icon} alt=""/>
            </div>
            <div className="title">
                <b>Nike Sneaker</b>
            </div>
            <div className='btn'>
                <button onClick={() => setOpened(true)}> Детали</button>
            {!opened ? '' : <div className='details' style={{fontSize : '6px'}}>
            Ретростиль для современных улиц. Олдскульные кроссовки Reebok Classic Leather вдохновлены беговой эстетикой 80-х. Они выглядят безупречно благодаря чистому дизайну без лишних деталей. Просто надень их и считай, что победа у тебя в кармане.
                <VscChromeClose className='close_icon' onClick={() => setOpened(false)}/>
            </div>}
            </div>
            <div className="price">
                <b>$120</b>
            </div>
            <div className="line">
                <hr />
            </div>
            <div className="description">
                <p>Кроссовки Reebok Vector Runner</p>
            </div>
            <div className="btn-basket">
                {inBasket ? <button type='submit' onClick={() => setInBasket(true)} disabled={inBasket}>Уже в корзине</button> : 
                <button type='submit' onClick={() => setInBasket(true)}  disabled={inBasket}>Добавить в корзину</button>}

                {inBasket && <div onClick={() => setInBasket(false)} className='error-basket' style={{color: 'red'}}>Удалить из корзины</div>}
            </div>
        </div>
    );
};

export default Main;