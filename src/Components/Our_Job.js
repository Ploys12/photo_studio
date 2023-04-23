import React from "react";






class Our_Job extends React.Component{
    
    offset = 0
    slider = document.getElementById('slider-line')

    
    
    render(){
        return (<div className="our_job">
            <span className="text">Наши работы</span>
            <div className="slider">
                <div id="slider-line">
                    <img src={this.props.first} alt={this.props.alt}></img>
                    <img src={this.props.second} alt={this.props.alt}></img>
                    <img src={this.props.third} alt={this.props.alt}></img>
                    <img src={this.props.fourth} alt={this.props.alt}></img>
                    
                </div>
            </div>
            <button className="slider-prev" onClick={() => {
                this.offset -= 1200
                if (this.offset < 0){
                    this.offset = 3600
                }
                
                document.getElementById('slider-line').style.left = -this.offset + "px"
            }}></button>
            <button id="slider-next" onClick={() => {
                this.offset += 1200
                if (this.offset >= 4800){
                    this.offset = 0
                }
                
                document.getElementById('slider-line').style.left = -this.offset + "px"
            }}></button>
        </div>)
    }
}
export default Our_Job