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
        </div>)
    }
}
export default Feedback