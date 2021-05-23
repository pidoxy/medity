import React, { Component } from 'react';
// import { Input } from '@progress/kendo-react-inputs';
import Emmanuel from "../images/emmanuel.svg";
import LinkedIn from "../images/LinkedIn.svg";
import Twitter from "../images/Twitter.svg";


class Home extends Component {

    render() {
        return (
            <div id="team" className="green text-center mt-5 py-5">
                <div className="pb-5 pt-3">
                    <h3 className="pt-5 mt-3 pb-5 white">The Team</h3>
                    <h5 className="pt-3 pb-5">Team Piderica</h5>
                </div>
                <div className="d-flex mb-5 pb-5 justify-content-around ">
                    <div >
                        <img src={Emmanuel} alt="team member" />
                        <p className="pt-3" style={{ fontSize: '25px' }}>Emmanuel Idoko</p>
                        <a target="_blank" href="https://www.linkedin.com/in/emmanuelidoko/"><img src={LinkedIn} alt="LinkedIn icon" /></a>
                        <a target="_blank" href="https://twitter.com/pidoxy_"><img src={Twitter} alt="Twitter icon" /></a>

                    </div>
                    <div>
                        <img src={Emmanuel} alt="team member" />
                        <p className="pt-3" style={{ fontSize: '25px' }}>Erica Fu</p>
                        <a target="_blank" href="https://www.linkedin.com/in/emmanuelidoko/"><img src={LinkedIn} alt="LinkedIn icon" /></a>
                        <a target="_blank" href="https://twitter.com/pidoxy_"><img src={Twitter} alt="Twitter icon" /></a>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;












