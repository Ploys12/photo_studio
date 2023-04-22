import React from "react";

class Header extends React.Component{
    render(){
        return (<header>
            <div>
                <img className="logo" src={this.props.src} alt=""></img>
                <span className="favorite_moments">Любимые моменты</span>
                <ul className="nav">
                    <li>Главная</li>
                    <li>Контакты</li>
                    <li>Услуги</li>
                    <li>О нас</li>
                </ul>
            </div>
            <div className="presentation"></div>
        </header>)
    }
}
export default Header