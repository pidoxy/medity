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
    return (
      <div className="notification py-3">
        <div className="container">
          <div className="px-3 pb-3 d-flex ">
            <img className="pe-3" src={l_arrow} alt="previous page navigation" />
            <h1 className="fw-bolder">News</h1>
          </div>
        </div>
        <div className="container">
          <div className="px-3">
            <h5 className="fw-bolder">Popular</h5>

            <div className="">

            </div>
            {/* {this.state.todos.map(todo =>)} */}
          </div>
          <div className="px-3">
            <h5 className="fw-bolder">Recent Articles</h5>
            {/* {this.state.todos.map(todo =>)} */}
          </div>
        </div>
      </div>
    )
  }
}

export default Notifications;