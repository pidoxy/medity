import * as React from 'react';
import l_arrow from "../images/left-arrow.svg";
// import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
// import history from './history';


class Notifications extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    // id: uuidv4(),
                    text: 'U.S. to share up to 60 million vaccine doses amid pressure to lead global virus fight',
                    source: "New York Times"
                },
                {
                    // id: uuidv4(),
                    text: 'How experts know the Vaccines are Safe',
                    source: "Los Angeles Times"
                },
                {
                    // id: uuidv4(),
                    text: 'U.S. to share up to 60 million vaccine doses amid pressure to lead global virus fight',
                    source: "New York Times"
                },
                {
                    // id: uuidv4(),
                    text: 'How experts know the Vaccines are Safe',
                    source: "Los Angeles Times"
                }
            ]
        }


    }

    render() {
        const changeColor = () => {
            window.location.replace("http://www.w3schools.com");
        }
        return (
            <div className="notification py-3">
                <div className="container">
                    <div className="px-3 pb-3 d-flex ">
                        <img className="pe-3" src={l_arrow} alt="previous page navigation" />
                        <h1 className="fw-bolder">Notification</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="px-3">
                        {this.state.todos.map(todo =>
                            <div className="card bg-cyan mb-3" onclick={changeColor} style={{ cursor: "pointer" }} >
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