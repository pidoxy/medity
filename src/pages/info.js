import * as React from 'react';
// import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
// import history from './history';


class Notifications extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }


    }

    render() {

        return (
            <div className="notification py-3 d-md-none">
                <div className="container pt-3 pb-5">
                    <h1 className="text-center fw-bolder pb-2">General Information</h1>
                    <p className="text-center">Click to learn more about symptoms, prevention, and treatments for the following diseases.</p>
                </div>
                <div className="container">
                    <div className="px-3">
                        {this.props.general.map((todo, id) =>
                            <div key={id} className="card card-shadow mb-3" style={{ cursor: "pointer", color:`#${todo.color}` }} >
                                <div className="card-body">
                                    <li className="card-text fw-bold">{todo.code}</li>

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