import * as React from 'react';
// import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
// import NewsPage from "./newsPage";
import BackImg from '../components/backImg';


class Notifications extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      articles: [
        {
          text: 'Look for These Symptoms in the Months After COVID-19 Recovery',
          img: "https://live.staticflickr.com/65535/51162301234_8261efc29a_t.jpg",
          code: 'COVID-19 ',
          color: "FF304F",
          link: "/article1"
        },
        {
          text: 'Pharma, US Government Plan for COVID-19 Booster Shots',
          code: 'Influenza',
          color: "39BDC8",
          img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg",
          link: "/article2"
        },
        {
          text: 'J&J COVID-19 Vaccinations Resume After Temporary Shutdowns',
          img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg",
          code: 'COVID-19 ',
          color: "FF304F",
          link: "/article6"
        },
        {
          text: 'Study highlights significant gap in evidence related to effectiveness of portable air filters in reducing COVID-19',
          code: 'Ebola',
          color: "0085AD",
          img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg",
          link: "/article3"
        },
        {
          text: 'Look for These Symptoms in the Months After COVID-19 Recovery',
          img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg",
          code: 'SARS ',
          color: "FF304F",
          link: "/article7"
        },
        {
          text: 'Here’s Where COVID-19 Cases Are Rising and Falling',
          code: 'Cholera',
          color: "775ADA",
          img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg",
          link: "/article4"
        },
        {
          text: 'US Health Authorities Ask for Pause in J&J COVID-19 Vaccination',
          img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg",
          code: 'COVID-19 ',
          color: "FF304F",
          link: "/article5"
        },
      ]
    }


  }

  render() {

    return (
      <div className="notification pb-5 d-md-none">
        <div className="container">
          <div className="px-3 pb-3 d-flex ">
            <BackImg />
            <h1 className="fw-bolder px-3">News</h1>
          </div>
        </div>
        <div className="container">
          <div className="px-3">
            <h5 className="fw-bolder py-3">Popular</h5>
            <OwlCarousel className='owl-theme py-3' autoplay loop margin={10} items={2.5} dots={false} >
              {this.props.articles.map((items, id) =>
                <div key={id} className='item'>
                  <img src={items.img} alt={items.title} />
                  <p style={{ color: '#FF304F', fontSize: '10px' }} className="pt-3 red">{items.text}</p>
                </div>)}
            </OwlCarousel>
            <div className="">

            </div>
          </div>
          <div className="px-3">
            <h5 className="fw-bolder">Recent Articles</h5>
            {this.props.articles.map((items, id) =>
              <Link key={id} to={items.link}><div style={{ cursor: "pointer" }} className="row py-3">
                <div key={id} className="col-5"> <img style={{ width: "100%" }} src={items.img} alt={items.title} /></div>
                <div className="col-7">
                  <li style={{ color: `#${items.color}`, fontWeight: "700" }} className="card-text fw-bold">{items.code}</li>
                  <p>{items.text}</p>
                </div>
              </div></Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Notifications;