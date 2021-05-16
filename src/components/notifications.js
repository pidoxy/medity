import * as React from 'react';
import l_arrow from "../images/left-arrow.svg";
// import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { useHistory } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';


class Notifications extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    text: 'U.S. to share up to 60 million vaccine doses amid pressure to lead global virus fight',
                    source: "New York Times"
                },
                {
                    text: 'How experts know the Vaccines are Safe',
                    source: "Los Angeles Times"
                },
                {
                    text: 'U.S. to share up to 60 million vaccine doses amid pressure to lead global virus fight',
                    source: "New York Times"
                },
                {
                    text: 'How experts know the Vaccines are Safe',
                    source: "Los Angeles Times"
                }
            ]
        }


    }

    render() {

        const Img = () => {
            let history = useHistory();

            return (
                <img onClick={history.goBack} className="pe-3" src={l_arrow} alt="previous page navigation" />
            )
        }
        return (
            <div className="notification py-3" >
                <div className="container">
                    <div className="px-3 pb-3 d-flex ">
                        {/* <img onClick={GoBack} className="pe-3" src={l_arrow} alt="previous page navigation" /> */}
                        <Img />
                        <h1 className="fw-bolder">Notification</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="px-3">
                        {this.state.todos.map((todo, id) =>
                            <div key={id} className="card bg-cyan mb-3" style={{ cursor: "pointer" }} >
                                <div className="card-body">
                                    <p className="card-text main">{todo.text}</p>

                                    <p className="card-text source d-flex flex-row-reverse">{todo.source}</p>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Notifications;