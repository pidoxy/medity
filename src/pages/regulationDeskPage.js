import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import TopNav from "../components/topNav";



class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            section0Clicked: true,
            section1Clicked: false,
            section2Clicked: false,
            section3Clicked: false,
            backgroundColor: 'white'
        }


    }

    render() {

        return (
            <div id="#features" className="App mt-3 ">
                <TopNav />
                <div >
                    <div style={{ backgroundColor: `${this.props.blocks[2].color}` }} className="py-3 mt-5 px-5 text-center" >
                        <div className="row">
                            <h1 className="py-5 col-4 text-center" style={{ color: 'white' }}>{this.props.blocks[2].title}</h1>
                            <p className="py-5 col-8 text-center " style={{ fontSize: '20px' }}>{this.props.blocks[2].text}</p>
                        </div>
                    </div>
                </div>

                <div className="px-3 py-4">

                    <div className="row ">
                        <div className="col-3">
                            <div className="container articles">
                                {this.props.general.map((todo, id) =>
                                    <div onClick={() => {
                                        if (id === 0) {
                                            this.setState({ section0Clicked: true });
                                            this.setState({ section1Clicked: false });
                                            this.setState({ section2Clicked: false });
                                            this.setState({ section3Clicked: false });
                                        }
                                        else if (id === 1) {
                                            this.setState({ section0Clicked: false });
                                            this.setState({ section1Clicked: true });
                                            this.setState({ section2Clicked: false });
                                            this.setState({ section3Clicked: false });
                                            // this.state.section1Clicked ? this.setState({backgroundColor: '#E5E5E5'})  : this.setState({backgroundColor: 'white'}) 
                                        }
                                        else if (id === 2) {
                                            this.setState({ section0Clicked: false });
                                            this.setState({ section1Clicked: false });
                                            this.setState({ section2Clicked: true });
                                            this.setState({ section3Clicked: false });
                                            // this.state.section2Clicked ? this.setState({backgroundColor: '#E5E5E5'})  : this.setState({backgroundColor: 'white'}) 
                                        }
                                        else if (id === 3) {
                                            this.setState({ section0Clicked: false });
                                            this.setState({ section1Clicked: false });
                                            this.setState({ section2Clicked: false });
                                            this.setState({ section3Clicked: true });
                                            // this.state.section3Clicked ? this.setState({backgroundColor: '#E5E5E5'})  : this.setState({backgroundColor: 'white'}) 
                                        }
                                       
                                    }} key={id} id={id} className="my-3" style={{ backgroundColor : `${this.state.backgroundColor}`, cursor: "pointer", color: `#${todo.color}` }} >
                                        <div className="">
                                            <h4 className="mb-0 py-3 px-2 text-center fw-bold">{todo.code}</h4>
                                        </div>
                                    </div>
                                ) }
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="container py-3">

                                {this.state.section0Clicked && (

                                    <div className="row">
                                        <div className="px-0 col-4">
                                            <div style={{ backgroundColor: '#0085AD' }}>
                                                <p className="white py-2 fw-bolder mb-0 text-center">Symptoms</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#0085AD25', height: '100%' }}>
                                                <p>Symptoms may appear 2-14 days after exposure</p>
                                                {this.props.covid19.symptoms.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-4 px-0">
                                            <div style={{ backgroundColor: '#775ADA' }}>
                                                <p className="white py-2 mb-0 fw-bolder text-center">Prevention</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#775ADA25', height: '100%' }}>
                                                {this.props.covid19.prevention.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-4 px-0">
                                            <div style={{ backgroundColor: '#FF304F' }}>
                                                <p className="white py-2 mb-0 fw-bolder text-center">Treatment</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#FF304F25', height: '100%' }}>
                                                <p>If you have possible or confirmed COVID-19:</p>
                                                {this.props.covid19.treatments.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                                <p>*Treatment products should be <strong>prescribed</strong> by your healthcare provider</p>
                                            </div>
                                        </div>
                                    </div>)}

                                {this.state.section1Clicked && (
                                    <div className="row">
                                        <div className="px-0 col-4">
                                            <div style={{ backgroundColor: '#0085AD' }}>
                                                <p className="white py-2 fw-bolder mb-0 text-center">Symptoms</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#0085AD25', height: '100%' }}>
                                                <p>Symptoms may appear 2-14 days after exposure</p>
                                                {this.props.influenza.symptoms.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-4 px-0">
                                            <div style={{ backgroundColor: '#775ADA' }}>
                                                <p className="white py-2 mb-0 fw-bolder text-center">Prevention</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#775ADA25', height: '100%' }}>
                                                {this.props.influenza.prevention.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-4 px-0">
                                            <div style={{ backgroundColor: '#FF304F' }}>
                                                <p className="white py-2 mb-0 fw-bolder text-center">Treatment</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#FF304F25', height: '100%' }}>
                                                <p>If you have possible or confirmed COVID-19:</p>
                                                {this.props.influenza.treatments.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                                <p>*Treatment consists of fluids and activity modifications</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {this.state.section2Clicked && (
                                    <div className="row">
                                        <div className="px-0 col-4">
                                            <div style={{ backgroundColor: '#0085AD' }}>
                                                <p className="white py-2 fw-bolder mb-0 text-center">Symptoms</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#0085AD25', height: '100%' }}>
                                                <p>Symptoms may appear 2-14 days after exposure</p>
                                                {this.props.ebola.symptoms.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-4 px-0">
                                            <div style={{ backgroundColor: '#775ADA' }}>
                                                <p className="white py-2 mb-0 fw-bolder text-center">Prevention</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#775ADA25', height: '100%' }}>
                                                {this.props.ebola.prevention.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-4 px-0">
                                            <div style={{ backgroundColor: '#FF304F' }}>
                                                <p className="white py-2 mb-0 fw-bolder text-center">Treatment</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#FF304F25', height: '100%' }}>
                                                <p>If you have possible or confirmed COVID-19:</p>
                                                {this.props.ebola.treatments.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                                <p>*Treatment products should be <strong>prescribed</strong> by your healthcare provider</p>
                                            </div>
                                        </div>
                                    </div>)}
                                {this.state.section3Clicked && (
                                    <div className="row">
                                        <div className="px-0 col-4">
                                            <div style={{ backgroundColor: '#0085AD' }}>
                                                <p className="white py-2 fw-bolder mb-0 text-center">Symptoms</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#0085AD25', height: '100%' }}>
                                                <p>Symptoms may appear 2-14 days after exposure</p>
                                                {this.props.cholera.symptoms.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-4 px-0">
                                            <div style={{ backgroundColor: '#775ADA' }}>
                                                <p className="white py-2 mb-0 fw-bolder text-center">Prevention</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#775ADA25', height: '100%' }}>
                                                {this.props.cholera.prevention.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-4 px-0">
                                            <div style={{ backgroundColor: '#FF304F' }}>
                                                <p className="white py-2 mb-0 fw-bolder text-center">Treatment</p>
                                            </div>
                                            <div className="p-3" style={{ backgroundColor: '#FF304F25', height: '100%' }}>
                                                <p>If you have possible or confirmed COVID-19:</p>
                                                {this.props.cholera.treatments.map(symptom =>
                                                    <li>{symptom.text}</li>
                                                )}
                                                <p>*Treatment products should be <strong>prescribed</strong> by your healthcare provider</p>
                                            </div>
                                        </div>
                                    </div>)}

                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default Home;












