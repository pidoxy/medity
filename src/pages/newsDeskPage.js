import React, { Component } from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { Link } from "react-router-dom";
import TopNav from "../components/topNav";
import news1 from "../images/news1.svg";



class Home extends Component {

    render() {

        return (
            <div id="#features" className="App mt-3 d-md-block d-none">
                <TopNav />
                <div >
                    <div style={{ backgroundColor: `${this.props.blocks[0].color}` }} className="py-3 mt-5 px-5 text-center" >
                        <div className="row">
                            <h1 className="py-5 col-4 text-center" style={{ color: 'white' }}>{this.props.blocks[0].title}</h1>
                            <p className="py-5 col-8 text-center " style={{ fontSize: '20px' }}>{this.props.blocks[0].text}</p>
                        </div>
                    </div>
                </div>

                <div className="px-3 py-4">
                    <div className="row ">
                        <div className="col-5">
                            <h4 className="fw-bolder  px-3">Latest News</h4>
                            <div className="container articles">
                                <Input />

                                {this.props.articles.map((items, id) =>
                                    <Link key={id} to={items.link}>
                                        <div style={{ cursor: "pointer" }} className="row py-3">
                                            <div key={id} className="col-4">
                                                <img className="text-center" style={{ width: "100%" }} src={items.img} alt={items.title} />
                                            </div>
                                            <div className="col-8">
                                                <li style={{ color: `#${items.color}`, fontWeight: "700" }} className="card-text fw-bold">{items.code}</li>
                                                <p>{items.text}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="container">
                                <div className="row">
                                    <div className="col-7">
                                        <li style={{ color: `#${this.props.articles[0].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.props.articles[0].code}</li>
                                        <p style={{ color: `#${this.props.articles[0].color}` }}>{this.props.articles[1].text}</p>
                                        <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                                    </div>
                                    <div className="col-5">
                                        <img style={{ width: '100%' }} src={news1} alt="news article" />
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        As more people are vaccinated, many of us are increasingly
                                        looking toward a future at the end of the pandemic.
                                    </p>
                                    <p>
                                        But for some people, the long-term complications of the virus will last after the pandemic ends.
                                        Now over a year from the start of the pandemic, the scientific community is learning more about the long-term complications and effects of COVID-19.                                </p>
                                    <p>

                                        In a recent study published in the journal NatureTrusted Source, researchers found that individuals with more severe disease at the start of their illness have a greater risk of long-term complications such as heart and kidney disease secondary to COVID-19.
                                        Symptoms more than 4 weeks after the onset web ma
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default Home;












