import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import HomeDesk from "./pages/homeDesk";
import News from "./pages/news";
import Info from "./pages/info";
import NewsPage from "./pages/newsPage";
import NewsPage2 from "./pages/newsPage2";
import NewsPage3 from "./pages/newsPage3";
import NewsPage4 from "./pages/newsPage4";
import Notification from "./components/notifications";
import BottomNav from './components/bottomNav';



class App extends Component {

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
          text: 'US Health Authorities Ask for Pause in J&J COVID-19 Vaccination',
          img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg",
          code: 'COVID-19 ',
          color: "FF304F",
          link: "/article5"
        },
        {
          text: 'J&J COVID-19 Vaccinations Resume After Temporary Shutdowns',
          img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg",
          code: 'COVID-19 ',
          color: "FF304F",
          link: "/article6"
        },
        {
          text: 'Look for These Symptoms in the Months After COVID-19 Recovery',
          img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg",
          code: 'SARS ',
          color: "FF304F",
          link: "/article7"
        },

        {
          text: 'Pharma, US Government Plan for COVID-19 Booster Shots',
          code: 'Influenza',
          color: "39BDC8",
          img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg",
          link: "/article2"
        },
        {
          text: 'Study highlights significant gap in evidence related to effectiveness of portable air filters in reducing COVID-19',
          code: 'Ebola',
          color: "0085AD",
          img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg",
          link: "/article3"
        },
        {
          text: 'Here’s Where COVID-19 Cases Are Rising and Falling',
          code: 'Cholera',
          color: "775ADA",
          img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg",
          link: "/article4"
        }
      ]
    }


  }
  render() {
    return (
      <div className="App py-md-5 py-3" >
        <HashRouter>
          <BottomNav>
            <Switch>
              <Route exact={true} path="/" component={HomeDesk} />
              {/* <Route exact={true} path="/" component={Home} />   */}
              <Route exact={true} path="/news" component={News} />
              <Route exact={true} path="/calendr" component={Info} />
              <Route exact={true} path="/profile" component={NewsPage} />
              <Route exact={true} path="/notification" component={Notification} />
              <Route exact={true} path="/article1" component={NewsPage} />
              <Route exact={true} path="/article2" component={NewsPage2} />
              <Route exact={true} path="/article3" component={NewsPage3} />
              <Route exact={true} path="/article4" component={NewsPage4} />


            </Switch>
          </BottomNav>
        </HashRouter>
      </div>
    );
  }
}

export default App;