import React, { Component } from 'react';
// import { Input } from '@progress/kendo-react-inputs';
import TopNav from "../components/topNav";



class Home extends Component {

    render() {
        return (
            <div id="#features" className="App pt-5">
                <TopNav />
                <div className="container pt-5 px-4 text-center ">
                    <h1 className="px-5 f-3">Taking data and info to the uttermost<br /> parts of the globe</h1>
                    <p className="dark-grey py-5 "><span className="black" >Medity</span> conveniently categorizes and organizes informations so users can quickly access the information they are looking for. By using KendoReact to collect data, Medity is able to display real-time news and updates so that information is accurate and up-to-date.</p>
                </div>
                <div className="px-3 py-3">
                    <div className="row">
                        {this.props.blocks.map((items, id) => <div style={{backgroundColor:`${items.color}`}} className="py-3 px-5 col-4 text-center" key={id}>
                            <h1 className="py-5" style={{color:'white'}}>{items.title}</h1>
                            <p className="py-5" style={{fontSize:'20px'}}>{items.text}</p>
                            </div>)}
                    </div>
                </div>



            </div >
        );
    }
}

export default Home;












