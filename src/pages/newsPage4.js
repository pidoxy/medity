import * as React from 'react';
import l_arrow from "../images/left-arrow.svg";
import news2 from "../images/news2.svg";
// import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
// import history from './history';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useHistory } from "react-router-dom";



class Notifications extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            popular: [
                {
                    // id: uuidv4(),
                    title: 'Look for These Symptoms in the Months After COVID-19 Recovery',
                    img: "https://live.staticflickr.com/65535/51162301234_8261efc29a_t.jpg"
                },
                {
                    // id: uuidv4(),
                    title: 'US Health Authorities Ask for Pause in J&J COVID-19 Vaccination',
                    img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg"
                },
                {
                    // id: uuidv4(),
                    title: 'J&J COVID-19 Vaccinations Resume After Temporary Shutdowns',
                    img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg"
                },
                {
                    // id: uuidv4(),
                    title: 'Look for These Symptoms in the Months After COVID-19 Recovery',
                    img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg"
                }
            ],

            recent: [
                {
                    // id: uuidv4(),
                    text: 'Look for These Symptoms in the Months After COVID-19 Recovery',
                    img: "https://live.staticflickr.com/65535/51162301234_8261efc29a_t.jpg",
                    code: 'COVID-19 ',
                    color: "FF304F"
                },
                {
                    // id: uuidv4(),
                    text: 'Pharma, US Government Plan for COVID-19 Booster Shots',
                    code: 'Influenza',
                    color: "39BDC8",
                    img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg"
                },
                {
                    // id: uuidv4(),
                    text: 'Study highlights significant gap in evidence related to effectiveness of portable air filters in reducing COVID-19',
                    code: 'Ebola',
                    color: "0085AD",
                    img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg"
                },
                {
                    // id: uuidv4(),
                    text: 'Here’s Where COVID-19 Cases Are Rising and Falling',
                    code: 'Cholera',
                    color: "775ADA",
                    img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg"
                }
            ],
            todos: [
                {
                    // id: uuidv4(),
                    code: 'COVID-19 ',
                    color: "FF304F",

                },
                {
                    // id: uuidv4(),
                    code: 'Influenza',
                    color: "39BDC8",

                },
                {
                    // id: uuidv4(),
                    code: 'Ebola',
                    color: "0085AD",

                },
                {
                    // id: uuidv4(),
                    code: 'Cholera',
                    color: "775ADA",

                },
                {
                    // id: uuidv4(),
                    code: 'SARS',
                    color: "FF304F",

                }
            ]
        }


    }

    render() {
        const Img = () => {
            let history = useHistory();

            return (
                <img onClick={history.goBack} className="pe-3" src={l_arrow} alt="previous page navigation" />
            )

        }
        return (
            <div className="notification pb-5">
                <div className="container">
                    <div className="px-3 pb-3 d-flex ">
                        {/* <img className="pe-3" src={l_arrow} alt="previous page navigation" />*/}
                        <Img />
                        <h1 className="fw-bolder px-3">News</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <img style={{ width: '100%' }} src={news2} alt="news article" />
                        <div className="container">
                            <li style={{ color: `#${this.state.recent[0].color}`, fontWeight: "700" }} className="py-4 card-text fw-bolder">{this.state.todos[0].code}</li>
                            <p style={{ color: `#${this.state.recent[0].color}` }}>{this.state.recent[0].text}</p>
                            <p style={{ color: "#C4C4C4" }}>by Pidoxy</p>
                            <div>
                                <p>
                                    To stay protected against COVID-19, people may need booster shots within 12 months of receiving their initial vaccinations, David Kessler, the chief science officer for President Joe Biden’s COVID-19 response task force, said at a congressional committee meeting on Thursday (April 15), Reuters reports. Pfizer CEO Albert Bourla agrees with that timeline, according to comments he made to CNBC earlier this month.
                                </p>
                                <p>
                                    So far, the evidence suggests that Pfizer/BioNTech’s and Moderna’s COVID-19 vaccines will protect against SARS-CoV-2 infection for at least six months. Beyond that, the data simply aren’t available yet.
                                </p>
                                <p>
                                    “Unfortunately, many people have misunderstood that to mean that it lasts only six months, [when] all that information means is that we know that it lasts six months, and we expect it to last longer,” allergist
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notifications;