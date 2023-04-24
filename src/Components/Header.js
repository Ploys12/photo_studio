import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            main_open: true,
            contacts_open: false,
            service: false,
            about_us: false
        }
    }

    render(){
        return (<header>
            <div className="inner">
                <img className="logo" src={this.props.src} alt="logo"></img>
                <div className="main_nav">
                    <h2 onClick={() => {
                    window.scrollTo( {top: 900, behavior: "smooth"} )
                }}>Наши работы</h2>
                    <h2 onClick={() => {
                    window.scrollTo( {top: 1850, behavior: "smooth"} )
                }}>Отзывы о нас</h2>
                </div>
                <ul className="nav">
                    <li onClick={() => {
                        this.setState({
                            main_open: true,
                            contacts_open: false,
                            service: false,
                            about_us: false
                        })
                    }}>Главная</li>
                    <div className={`home ${this.state.main_open === true ? 'active': 'no-active'}`}></div>
                    <li onClick={() => {this.setState({
                        main_open: false,
                        service: false,
                        about_us: false,
                        contacts_open: true
                        })}}>Контакты</li>
                        <div className={`contacts_open ${this.state.contacts_open && 'active'}`}
                     ></div>
                    <li onClick={() => {
                        this.setState({main_open: false, contacts_open: false, service: true,about_us: false})
                    }}>Услуги</li>
                    <div className={`service ${this.state.service && 'active'}`}
                     ></div>
                    <li onClick={() => {
                        this.setState({
                            main_open: false,
                            contacts_open: false,
                            service: false,
                            about_us: true
                        })
                    }}>О нас</li>
                    <div className={`about_us ${this.state.about_us && 'active'}`}></div>
                </ul>
            </div>
            <div className="presentation"></div>
        </header>)
    }
}
export default Header