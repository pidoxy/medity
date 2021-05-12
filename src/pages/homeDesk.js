import React, { Component } from 'react';
import notification from "../images/Notification.svg";
// import { Input } from '@progress/kendo-react-inputs';
import ChartContainer from "../components/chart";
import { Link } from "react-router-dom";
import TopNav from "../components/topNav";



class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            blocks: [
                {
                    title: 'Recent News',
                    text:"Get the latest news updates on current outbreaks.",
                    color:"#FF304F"
                },
                {
                    title: 'General Information',
                    text:"Learn more about the symptoms, prevention methods, and treatments for diseases.",
                    color:"#775ADA"
                },
                {
                    title: 'Regional Regulations',
                    text:"Locate COVID-19 vaccines and tests near you. \n Understand the rules and regulations of your region.",
                    color:"#0085AD"
                }
            ]
        }
    }

    render() {
        return (
            <div id="#features" className="App ">
                <TopNav />
                <div className="container pt-5 px-4 text-center ">
                    <h1 className="px-5 f-3">Taking data and info to the uttermost<br /> parts of the globe</h1>
                    <p className="dark-grey py-5 "><span className="black" >Medity</span> conveniently categorizes and organizes informations so users can quickly access the information they are looking for. By using KendoReact to collect data, Medity is able to display real-time news and updates so that information is accurate and up-to-date.</p>
                </div>
                <div className="px-3 py-3">
                    <div className="row">
                        {this.state.blocks.map((items, id) => <div style={{backgroundColor:`${items.color}`}} className="py-3 px-5 col-4 text-center" key={id}>
                            <h1 className="py-5" style={{color:'white'}}>{items.title}</h1>
                            <p className="py-5" style={{fontSize:'20px'}}>{items.text}</p>
                            </div>)}
                    </div>
                </div>

                <ChartContainer />


            </div >
        );
    }
}

export default Home;












