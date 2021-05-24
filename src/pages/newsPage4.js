import * as React from 'react';
import l_arrow from "../images/left-arrow.svg";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useHistory } from "react-router-dom";



class Notifications extends React.Component {

    render() {
        const Img = () => {
            let history = useHistory();

            return (
                <img onClick={history.goBack} src={l_arrow} alt="previous page navigation" />
            )

        }

        return (
            <div className="notification pb-5 d-md-none">
                <div className="container">
                    <div className="px-3 pb-3 d-flex ">
                        <Img />
                        <h1 className="fw-bolder px-3">News</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <img style={{ width: '100%' }} src={this.props.prop.articles[3].img} alt="news article" />
                        <div className="container">
                            <li style={{ color: `#${this.props.prop.articles[3].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.props.prop.articles[3].code}</li>
                            <p style={{ color: `#${this.props.prop.articles[3].color}` }}>{this.props.prop.articles[3].text}</p>
                            <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                            <div>
                                <p>{this.props.prop.articles[3].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notifications;