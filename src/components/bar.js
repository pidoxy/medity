import React, { Component, useHistory } from 'react';
// import { Input } from '@progress/kendo-react-inputs';
// import { Link } from 'react-router-dom';


class Bar extends Component {


    render() {

        const Rect = () => {
            let history = useHistory();
      
            return (
              <div>{this.props.blocks.map((items, id) =>

                <div onClick={() => history.push(`${items.route}`)} style={{ backgroundColor: `${items.color}` }} className="py-3 px-5 col-4 text-center" key={id}>
                    <h1 className="py-5" style={{ color: 'white' }}>{items.title}</h1>
                    <p className="py-5" style={{ fontSize: '20px' }}>{items.text}</p>
                </div>

            )}</div>
            )
          }

        return (
            <div className="px-3 py-3">
                <div className="row">
                    <Rect />
                </div>
            </div>

        );
    }
}

export default Bar;












