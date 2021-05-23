import React, { Component } from 'react';
// import { Input } from '@progress/kendo-react-inputs';
import ChartContainer from "../components/chart";
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TopNav from "../components/topNav";
import {
    Card,
    // CardHeader,
    // CardTitle,
    CardBody,
    CardActions,
    // CardImage,
    // CardSubtitle,
} from "@progress/kendo-react-layout";
import Team from '../pages/team';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
        }
    }
    render() {
        console.log(this.state.value);
        return (
            <div id="#features" className=" pt-5 d-md-block d-none">
                <TopNav />
                <div className="green">
                    <div className="container  pt-5 px-4 text-center ">
                        <h1 className="px-5 f-3">Taking data and info to the uttermost<br /> parts of the globe</h1>
                        <p className="dark-grey py-5 "><span className="black" >Medity</span> conveniently categorizes and organizes informations so users can quickly access the information they are looking for. By using KendoReact to collect data, Medity is able to display real-time news and updates so that information is accurate and up-to-date.</p>
                    </div>
                </div>
                <div>
                    <div className="k-card-group" style={{ display: "flex", justifyContent: "space-evenly" }} >
                        <div style={{ width: "30%" }} className="k-card-list" >
                            <Card style={{ maxHeight: '700px' }} orientation="vertical">
                                <div className="k-vbox">

                                    <CardBody>
                                        <h4 className="fw-bolder">Hey there!</h4>
                                        <p>What would you like to know today?</p>

                                        <input onChange={(e) => this.setState({ value: (e.target.value) })} className="form-control " value={this.state.value} type="text" placeholder="Search" aria-label="Search" />

                                        <div style={{ maxHeight: '500px', overflow: 'auto' }} className="px-3">
                                            {this.props.prop.articles.filter((article) => {
                                                if (this.state.value === "") {
                                                    console.log(article.text);

                                                    return article.text;
                                                }
                                                else if (article.text.toLowerCase().includes(this.state.value)) {
                                                    console.log(article.text);
                                                    return article;
                                                } return null;
                                            }).map((items, id) => {
                                                return (
                                                    <Link key={id} to="/features/news"><div style={{ cursor: "pointer" }} className="row py-3">
                                                        <div key={id} className="col-5"> <img style={{ width: "100%" }} src={items.img} alt={items.title} /></div>
                                                        <div className="col-7">
                                                            <li style={{ color: `#${items.color}`, fontWeight: "700" }} className="card-text fw-bold">{items.code}</li>
                                                            <p>{items.text}</p>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                )
                                            })
                                            }
                                        </div>
                                    </CardBody>
                                    <CardActions>
                                    </CardActions>
                                </div>
                            </Card>
                            <div >
                                <Card >
                                    <div>

                                        <CardBody>
                                            <h4><strong>Reach out to Medity!</strong></h4>
                                            <p><a href="#team">The Team</a></p>
                                            <p><a href="#contact">Contact Us</a></p>
                                        </CardBody>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div style={{ width: "30%" }} className="k-card-list" >
                            <div >
                                <Card>
                                    <div>
                                        <CardBody>
                                            <ChartContainer />
                                        </CardBody>
                                    </div>
                                </Card>
                            </div>
                            <div  >
                                <Card >
                                    <div className="k-vbox">
                                        <CardBody>
                                            <h4 className="fw-bolder">General Information</h4>
                                            <p>Learn more about:</p>
                                            <div className="row">{this.props.prop.general.map((items, id) => <div key={id} className="m-3 col-5 card-shadow p-3" style={{ cursor: "pointer", color: 'white', backgroundColor: `#${items.color}` }} >
                                                <Link key={id} to="/features/general">
                                                    <div className="">
                                                        <p className="mb-0 fw-bold">{items.code}</p>
                                                    </div>
                                                </Link>
                                            </div>)}</div>
                                        </CardBody>

                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div style={{ width: "30%" }} className="k-card-list" >
                            <div >
                                <Card>
                                    <div>
                                        <CardBody>
                                            <h4 className="fw-bolder">Recent Articles</h4>

                                            <OwlCarousel className='owl-theme py-3' autoplay loop margin={10} items={2.3} dots={false} >
                                                {this.props.prop.articles.map((items, id) =>
                                                    <div key={id} className='item'>
                                                        <img src={items.img} alt={items.title} />
                                                        <p style={{ color: '#FF304F', fontSize: '10px' }} className="pt-3 red">{items.text}</p>
                                                    </div>)}
                                            </OwlCarousel>
                                        </CardBody>
                                    </div>
                                </Card>
                            </div>
                            <div >
                                <Card>
                                    <div>

                                        <CardBody>
                                            <h4 className="fw-bolder py-2">Regional Regulations</h4>
                                            <p className="py-2 fw-bolder">Find COVID-19 vaccines and tests near you:</p>
                                            <p className="py-2 fw-bolder">Understand the rules and regulations</p>

                                            <div className="row">{this.props.prop.regulators.map((items, id) => <div key={id} className="m-3 col-5 card-shadow p-3" style={{ cursor: "pointer", color: 'white', backgroundColor: `#${items.color}` }} >
                                                <Link key={id} to="/features/regulations">
                                                    <div className="">
                                                        <p className="mb-0 fw-bold">{items.code}</p>
                                                    </div>
                                                </Link>
                                            </div>)}
                                            </div>
                                        </CardBody>

                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <Team />
            </div>
        );
    }
}

export default Home;












