import React, { Component } from 'react';
// import { Input } from '@progress/kendo-react-inputs';
import Emmanuel from "../images/emmanuel.svg";
import Erica from "../images/erica.svg";
import LinkedIn from "../images/LinkedIn.svg";
import Twitter from "../images/Twitter.svg";


class Home extends Component {

    render() {
        return (
            <div id="team" className="green text-center mt-5 pt-5">
                <div className="pb-5 pt-3">
                    <h2 className="pt-5 mt-3 pb-5 white">The Team</h2>
                </div>
                <div className="d-flex mb-5 pb-5 justify-content-around ">
                    <div >
                        <img src={Emmanuel} alt="team member" />
                        <p className="pt-3" style={{ fontSize: '25px' }}>Emmanuel Idoko</p>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/emmanuelidoko/"><img src={LinkedIn} alt="LinkedIn icon" /></a>
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/pidoxy_"><img src={Twitter} alt="Twitter icon" /></a>

                    </div>
                    <div>
                        <img src={Erica} alt="team member" />
                        <p className="pt-3" style={{ fontSize: '25px' }}>Erica Fu</p>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/erica-fu-15b3a61b9/"><img src={LinkedIn} alt="LinkedIn icon" /></a>

                    </div>
                </div>
                <div className="py-3">
                {/* <hr style={{borderTopColor: 'white'}}/> */}
                    <p style={{borderTopColor: 'white', color: 'white', fontSize: '22px'}} className="text-center">With <span style={{color: 'red', fontSize: '100%'}}>♥</span> from Team Medity</p>
                </div>
            </div>
        );
    }
}

export default Home;












