import React, { Component } from 'react';
import TopNav from "../components/topNav";
import news1 from "../images/news1.svg";



class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            section0Clicked: true,
            section1Clicked: false,
            section2Clicked: false,
            section3Clicked: false,
            section4Clicked: false,
            section5Clicked: false,
            section6Clicked: false,
        }

    }
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
                                <div className="px-3">
                                    {this.props.articles.filter((article) => {
                                        if (this.state.value === "") {
                                            console.log(article.text);

                                            return article;
                                        }
                                        else if (article.text.toLowerCase().includes(this.state.value) || article.code.toLowerCase().includes(this.state.value)) {
                                            console.log(article.text);
                                            return article;
                                        } return null;
                                    }).map((items, id) =>
                                        <div style={{ cursor: "pointer" }} className="row py-3">
                                            <div key={id} className="col-5"> <img style={{ width: "100%" }} src={items.img} alt={items.title} /></div>
                                            <div className="col-7">
                                                <li style={{ color: `#${items.color}`, fontWeight: "700" }} className="card-text fw-bold">{items.code}</li>
                                                <p>{items.text}</p>
                                            </div>
                                        </div>
                                    )
                                    }
                                </div>

                                {this.props.articles.map((items, id) =>

                                    <div onClick={() => {
                                        if (id === 0) {
                                            this.setState({ section0Clicked: true });
                                            this.setState({ section1Clicked: false });
                                            this.setState({ section2Clicked: false });
                                            this.setState({ section3Clicked: false });
                                            this.setState({ section4Clicked: false });
                                            this.setState({ section5Clicked: false });
                                            this.setState({ section6Clicked: false });
                                        }
                                        else if (id === 1) {
                                            this.setState({ section0Clicked: false });
                                            this.setState({ section1Clicked: true });
                                            this.setState({ section2Clicked: false });
                                            this.setState({ section3Clicked: false });
                                            this.setState({ section4Clicked: false });
                                            this.setState({ section5Clicked: false });
                                            this.setState({ section6Clicked: false });
                                        }
                                        else if (id === 2) {
                                            this.setState({ section0Clicked: false });
                                            this.setState({ section1Clicked: false });
                                            this.setState({ section2Clicked: true });
                                            this.setState({ section3Clicked: false });
                                            this.setState({ section4Clicked: false });
                                            this.setState({ section5Clicked: false });
                                            this.setState({ section6Clicked: false });
                                        }
                                        else if (id === 3) {
                                            this.setState({ section0Clicked: false });
                                            this.setState({ section1Clicked: false });
                                            this.setState({ section2Clicked: false });
                                            this.setState({ section3Clicked: true });
                                            this.setState({ section4Clicked: false });
                                            this.setState({ section5Clicked: false });
                                            this.setState({ section6Clicked: false });
                                        }
                                        else if (id === 4) {
                                            this.setState({ section0Clicked: false });
                                            this.setState({ section1Clicked: false });
                                            this.setState({ section2Clicked: false });
                                            this.setState({ section3Clicked: false });
                                            this.setState({ section4Clicked: true });
                                            this.setState({ section5Clicked: false });
                                            this.setState({ section6Clicked: false });
                                        }
                                        else if (id === 5) {
                                            this.setState({ section0Clicked: false });
                                            this.setState({ section1Clicked: false });
                                            this.setState({ section2Clicked: false });
                                            this.setState({ section3Clicked: false });
                                            this.setState({ section4Clicked: false });
                                            this.setState({ section5Clicked: true });
                                            this.setState({ section6Clicked: false });
                                        }
                                        else if (id === 6) {
                                            this.setState({ section0Clicked: false });
                                            this.setState({ section1Clicked: false });
                                            this.setState({ section2Clicked: false });
                                            this.setState({ section3Clicked: false });
                                            this.setState({ section4Clicked: false });
                                            this.setState({ section5Clicked: false });
                                            this.setState({ section6Clicked: true });
                                        }
                                    }} style={{ cursor: "pointer" }} className="row py-3">
                                        <div key={id} className="col-4">
                                            <img className="text-center" style={{ width: "100%" }} src={items.img} alt={items.title} />
                                        </div>
                                        <div className="col-8">
                                            <li style={{ color: `#${items.color}`, fontWeight: "700" }} className="card-text fw-bold">{items.code}</li>
                                            <p>{items.text}</p>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {this.state.section0Clicked && (<div  className="p-2 col-7">
                            <div style={{ boxShadow: '1px 4px 4px 2px rgba(0, 0, 0, 0.25)', minHeight: '80%'}} className="container p-5">
                                <div className="row">
                                    <div className="col-7">
                                        <h1 style={{ color: `#${this.props.articles[0].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.props.articles[0].code}</h1>
                                        <p style={{ color: `#${this.props.articles[0].color}`, fontSize: '24px' }}>{this.props.articles[0].text}</p>
                                        <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                                    </div>
                                    <div className="col-5">
                                        <img style={{ width: '100%' }} src={news1} alt="news article" />
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontSize: '20px'}}>{this.props.articles[0].content}</p>
                                </div>
                            </div>
                        </div>)}

                        {this.state.section1Clicked && (<div className="col-7 p-2">
                            <div style={{ boxShadow: '1px 4px 4px 2px rgba(0, 0, 0, 0.25)', minHeight: '80%'}} className="container p-5">
                                <div className="row">
                                    <div className="col-7">
                                        <h1 style={{ color: `#${this.props.articles[1].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.props.articles[1].code}</h1>
                                        <p style={{ color: `#${this.props.articles[1].color}`, fontSize: '24px'}}>{this.props.articles[1].text}</p>
                                        <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                                    </div>
                                    <div className="col-5">
                                        <img style={{ width: '100%' }} src={news1} alt="news article" />
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontSize: '20px'}}>{this.props.articles[1].content}</p>
                                </div>
                            </div>
                        </div>)}
                        {this.state.section2Clicked && (<div className="col-7 p-2">
                            <div style={{ boxShadow: '1px 4px 4px 2px rgba(0, 0, 0, 0.25)', minHeight: '80%'}} className="container p-5">
                                <div className="row">
                                    <div className="col-7">
                                        <h1 style={{ color: `#${this.props.articles[2].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.props.articles[2].code}</h1>
                                        <p style={{ color: `#${this.props.articles[2].color}`, fontSize: '24px' }}>{this.props.articles[2].text}</p>
                                        <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                                    </div>
                                    <div className="col-5">
                                        <img style={{ width: '100%' }} src={this.props.articles[2].img} alt="news article" />
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontSize: '20px'}}>{this.props.articles[2].content}</p>
                                </div>
                            </div>
                        </div>)}
                        {this.state.section3Clicked && (<div className="col-7 p-2">
                            <div style={{ boxShadow: '1px 4px 4px 2px rgba(0, 0, 0, 0.25)', minHeight: '80%'}} className="container p-5">
                                <div className="row">
                                    <div className="col-7">
                                        <h1 style={{ color: `#${this.props.articles[3].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.props.articles[3].code}</h1>
                                        <p style={{ color: `#${this.props.articles[3].color}`, fontSize: '24px' }}>{this.props.articles[3].text}</p>
                                        <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                                    </div>
                                    <div className="col-5">
                                        <img style={{ width: '100%' }} src={this.props.articles[3].img} alt="news article" />
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontSize: '20px'}}>{this.props.articles[3].content}</p>
                                </div>
                            </div>
                        </div>)}

                        {this.state.section4Clicked && (<div className="col-7 p-2">
                            <div style={{ boxShadow: '1px 4px 4px 2px rgba(0, 0, 0, 0.25)', minHeight: '80%'}} className="container p-5">
                                <div className="row">
                                    <div className="col-7">
                                        <h1 style={{ color: `#${this.props.articles[4].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.props.articles[4].code}</h1>
                                        <p style={{ color: `#${this.props.articles[4].color}`, fontSize: '24px' }}>{this.props.articles[4].text}</p>
                                        <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                                    </div>
                                    <div className="col-5">
                                        <img style={{ width: '100%' }} src={this.props.articles[4].img} alt="news article" />
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontSize: '20px'}}>{this.props.articles[4].content}</p>
                                </div>
                            </div>
                        </div>)}
                        {this.state.section5Clicked && (<div className="col-7 p-2">
                            <div style={{ boxShadow: '1px 4px 4px 2px rgba(0, 0, 0, 0.25)', minHeight: '80%'}} className="container p-5">
                                <div className="row">
                                    <div className="col-7">
                                        <h1 style={{ color: `#${this.props.articles[5].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.props.articles[5].code}</h1>
                                        <p style={{ color: `#${this.props.articles[5].color}` }}>{this.props.articles[5].text}</p>
                                        <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                                    </div>
                                    <div className="col-5">
                                        <img style={{ width: '100%' }} src={this.props.articles[5].img} alt="news article" />
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontSize: '20px'}}>{this.props.articles[5].content}</p>
                                </div>
                            </div>
                        </div>)}
                        {this.state.section6Clicked && (<div className="col-7 p-2">
                            <div style={{ boxShadow: '1px 4px 4px 2px rgba(0, 0, 0, 0.25)', minHeight: '80%'}} className="container p-5">
                                <div className="row">
                                    <div className="col-7">
                                        <h1 style={{ color: `#${this.props.articles[6].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.props.articles[6].code}</h1>
                                        <p style={{ color: `#${this.props.articles[6].color}`, fontSize: '24px' }}>{this.props.articles[6].text}</p>
                                        <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                                    </div>
                                    <div className="col-5">
                                        <img style={{ width: '100%' }} src={this.props.articles[6].img} alt="news article" />
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontSize: '20px'}}>{this.props.articles[6].content}</p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div >
            </div>
        );
    }
}

export default Home;












