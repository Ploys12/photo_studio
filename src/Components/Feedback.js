import React from "react";

class Feedback extends React.Component{
    render(){
        return (<div className="feedback">
            <span>Отзывы о нас</span>
            <div className="feedback_container">
                <img src={this.props.src} className="feedback_img" alt="trust">
                    
                
                </img>
                <p className="trust_us">Нам доверяют</p>
                
                
                
            </div>
            <div className="feedback_div">
                <div className="feedback_item">
                    <div className="item first">
                        <img src={this.props.first_family} alt={this.props.alt} className="family_image first"></img>
                        <p className="family_text">Семья Горбуновых</p>
                        <p className="description">Давно искали фотостудию для общего семейного альбома. Любимые моменты сделали нам альбом быстро и недорого! Рекомендую!</p>
                    </div>
                    <div className="item second">
                    <img src={this.props.second_family} alt={this.props.alt} className="family_image second"></img>
                    <p className="family_text">Семья Ивановых</p>
                    <p className="description">Благодаря данной фотостудии наша семья смогла выступить на международном конкурсе красоты! Спасибо</p>
                    </div>
                    <div className="item third">
                    <img src={this.props.third_family} alt={this.props.alt} className="family_image third"></img>
                    <p className="family_text">Семья Ольгиных</p>
                    <p className="description">Недавно с женой праздновали 10 годовщину свадьбы и решили сделать совместные фотографии с детьми. Теперь они укарашают наш дом:)</p>
                    </div>
                    <div className="item fourth">
                    <img src={this.props.fourth_family} alt={this.props.alt} className="family_image fourth"></img>
                    <p className="family_text">Семья Прошиных</p>
                    <p className="description">Благодаря тому, что фотостудия располагается рядом с море, нам сделали фотографии на пляже. Получилось очень красиво!</p>
                    </div>
                    
                </div>
            </div>
        </div>)
    }
}
export default Feedback