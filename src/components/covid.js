import React from 'react';
// import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
// import history from './history';
import symptoms from '../images/influenza.svg';
import prevention from '../images/prevention.svg';
import treatments from '../images/aid.svg';
import BackImg from '../components/backImg';
// const [clicked, setClicked] = useState(false);

class Covid extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            clicked1: false,
            backgroundColor1: "inherit",
            color1: "#0085AD",
            clicked2: false,
            backgroundColor2: "inherit",
            color2: "#775ADA",
            clicked3: false,
            backgroundColor3: "inherit",
            color3: "#FF304F"
        }


    }

    render() {

        return (
            <div className="notification pb-5 d-md-none">
                <div className="container">
                    <div className="px-3 pb-3 d-flex ">
                        {/* <img className="pe-3" src={l_arrow} alt="previous page navigation" />*/}
                        <BackImg />
                        <h1 className="fw-bolder px-3">Covid-19</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="px-3">
                        <p className="py-3">Click to learn more</p>
                        <div className="card card-shadow mb-3" onClick={() => !this.state.clicked1 ? (this.setState({ clicked1: true, backgroundColor1: '#0085AD', color1: 'white' })) : this.setState({ clicked1: false, backgroundColor1: 'inherit', color1: '#0085AD' })} style={{ cursor: "pointer", color: this.state.color1, backgroundColor: this.state.backgroundColor1 }} >
                            <div className="card-body py-2">
                                <div className="row">
                                    <li className="col-8 my-auto card-text fw-bold">Symptoms</li>
                                    <img style={{ color: '#0085AD', width: '15%' }} src={symptoms} alt="" />
                                </div>
                            </div>
                        </div>
                        {this.state.clicked1 ? (<div className="p-3">{this.props.covid19.symptoms.map((symptom, id) => <li key={id}>{symptom.text}</li>)}</div>) : null}
                    </div>


                    <div className="px-3">

                        <div onClick={() => !this.state.clicked2 ? (this.setState({ clicked2: true, backgroundColor2: '#775ADA', color2: 'white' })) : this.setState({ clicked2: false, backgroundColor2: 'inherit', color2: '#775ADA' })} style={{ backgroundColor: this.state.backgroundColor2, cursor: "pointer", color: this.state.color2 }} className="card card-shadow mb-3" >
                            <div className="card-body py-2">
                                <div className="row">
                                    <li className="col-8 my-auto card-text fw-bold">Prevention</li>
                                    <img style={{ width: '15%' }} src={prevention} alt="" />
                                </div>
                            </div>
                        </div>
                        {this.state.clicked2 ? (<div className="p-3">{this.props.covid19.prevention.map((prevention, id) => <li key={id}>{prevention.text}</li>)}</div>) : null}

                    </div>

                    <div className="px-3">

                        <div onClick={() => !this.state.clicked3 ? (this.setState({ clicked3: true, backgroundColor3: '#FF304F', color3: 'white' })) : this.setState({ clicked3: false, backgroundColor3: 'inherit', color3: '#0085AD' })} style={{ cursor: "pointer", color: this.state.color3, backgroundColor: this.state.backgroundColor3 }} className="card card-shadow mb-3">
                            <div className="card-body py-2">
                                <div className="row">
                                    <li className="col-8  my-auto card-text fw-bold">Treatment</li>
                                    <img style={{ width: '15%' }} src={treatments} alt="" />
                                </div>
                            </div>
                        </div>
                        {this.state.clicked3 ? (<div className="p-3">{this.props.covid19.treatments.map((treatment, id) => <li key={id}>{treatment.text}</li>)}</div>) : null}

                    </div>
                </div>
            </div>
        )
    }
}

export default Covid;