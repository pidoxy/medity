import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Mobile
import Home from "./pages/home";
import News from "./pages/news";
import Info from "./pages/info";
import Covid from "./components/covid";
import Influenza from "./components/influenza";
import Ebola from "./components/ebola";
import Cholera from "./components/cholera";
import Sars from "./components/sars";
import NewsPage from "./pages/newsPage";
import NewsPage2 from "./pages/newsPage2";
import NewsPage3 from "./pages/newsPage3";
import NewsPage4 from "./pages/newsPage4";
import Notification from "./components/notifications";
import BottomNav from './components/bottomNav';
// Desktop
import HomeDesk from "./pages/homeDesk";
import NewsDesk from "./pages/newsDesk";
import NewsDeskPage from './pages/newsDeskPage';
import GeneralDeskPage from './pages/generalDeskPage';
import RegulationsDeskPage from './pages/regulationDeskPage';
import Team from './pages/team';
import ContactUs from './pages/contactUs';
import Bar from "./components/bar";



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
      ],
      blocks: [
        {
          title: 'Recent News',
          text: "Get the latest news updates on current outbreaks.",
          color: "#FF304F",
          route: '/features/news'
        },
        {
          title: 'General Information',
          text: "Learn more about the symptoms, prevention methods, and treatments for diseases.",
          color: "#775ADA",
          route: '/features/general'
        },
        {
          title: 'Regional Regulations',
          text: "Locate COVID-19 vaccines and tests near you. \n Understand the rules and regulations of your region.",
          color: "#0085AD",
          route: '/features/regulations'
        }
      ],
      general: [
        {
          code: 'COVID-19 ',
          color: "FF304F",
          route: "/covid19"

        },
        {
          code: 'Influenza',
          color: "39BDC8",
          route: "/influenza"

        },
        {
          code: 'Ebola',
          color: "0085AD",
          route: "/ebola"

        },
        {
          code: 'Cholera',
          color: "775ADA",
          route: "/cholera"

        },
        {
          code: 'SARS',
          color: "FF304F",
          route: "/sars"

        }
      ],
      regulators: [
        {
          code: 'Vaccines Locator ',
          color: "FF304F",

        },
        {
          code: 'Testing Locator',
          color: "39BDC8",

        },
        {
          code: 'Going Outside',
          color: "0085AD",

        },
        {
          code: 'Traveling',
          color: "775ADA",

        }
      ],
      covid19: {

        symptoms: [
          {
            text: "fever or chills"
          },
          {
            text: "cough"
          },
          {
            text: "shortness of breath or difficulty breathing"
          },
          {
            text: "fatigue"
          },
          {
            text: "muscle or body aches"
          },
          {
            text: "headache"
          },
          {
            text: "new loss of taste or smell"
          },
          {
            text: "sore throat"
          },
          {
            text: "congestion or runny nose"
          },
          {
            text: "nausea or vomiting"
          },
          {
            text: "diarrhea"
          },
        ]
        ,

        prevention: [
          {
            text: "wear a mask with no gaps"
          },
          {
            text: "stay at least 6 feet from others"
          },
          {
            text: "avoid crowds and poorly ventilated spaces"
          },
          {
            text: "get a vaccine"
          },
          {
            text: "clean your hands often"
          },
          {
            text: "use soap and water for 20 seconds"
          },
          {
            text: "or use hand sanitizer with 60% alcohol or more"
          },
          {
            text: "clean and disinfect frequently touched objects and surfaces daily"
          },
          {
            text: "congestion or runny nose"
          },
          {
            text: "nausea or vomiting"
          },
          {
            text: "diarrhea"
          },
        ]
        ,

        treatments: [
          {
            text: "stay home and away from others except to get medical care"
          },
          {
            text: "take acetaminophen or ibuprofen to feel better and reduce fever"
          },
          {
            text: "notify your health care provider when scheduling an appointment"
          },
          {
            text: "nausea or vomiting"
          },
        ]

      },
      influenza: {

        symptoms: [
          {
            text: "fever or chills and sweats"
          },
          {
            text: "muscle or body aches"
          },
          {
            text: "headache"
          },
          {
            text: "Dry, persistent cough"
          },
          {
            text: "shortness of breath or difficulty breathing"
          },
          {
            text: "fatigue"
          },
          {
            text: "congestion or runny nose"
          },
          {
            text: "sore throat"
          },
          {
            text: "new loss of taste or smell"
          },
          {
            text: "Vomiting and diarrhea, but this is more common in children than adults"
          },
          {
            text: "Eye pain"
          },
          {
            text: "diarrhea"
          },
        ],

        prevention: [
          {
            text: "Wash your hands. Washing your hands often with soap and water for at least 20 seconds is an effective way to prevent many common infections. Or use alcohol-based hand sanitizers if soap and water aren't available."
          },
          {
            text: "Avoid touching your face.  Avoid touching your eyes, nose and mouth."
          },
          {
            text: "get a vaccine"
          },
          {
            text: "Cover your coughs and sneezes. Cough or sneeze into a tissue or your elbow. Then wash your hands."
          },
          {
            text: "clean and disinfect frequently touched objects and surfaces daily"
          },

          {
            text: "avoid crowds and poorly ventilated spaces"
          },
          {
            text: "The flu spreads easily wherever people gather — in child care centers, schools, office buildings, auditoriums and public transportation. By avoiding crowds during peak flu season, you reduce your chances of infection. Also avoid anyone who is sick. And if you're sick, stay home for at least 24 hours after your fever is gone so that you lessen your chance of infecting others."
          },
        ]
        ,

        treatments: [
          {
            text: "Palliative care. Fluid replacement"
          },
          {
            text: "Lifestyle drug. Bed rest and Throat lozenge"
          },
          {
            text: "notify your health care provider when scheduling an appointment"
          },
          {
            text: "Bed rest. Reducing activity for a short period of time following injury or illness to promote healing."

          },
          {
            text: "Throat lozenge. Soothes sore throats."

          },
        ]

      },
      ebola: {

        symptoms: [
          {
            text: "fever or chills"
          },
          {
            text: "cough"
          },
          {
            text: "shortness of breath or difficulty breathing"
          },
          {
            text: "fatigue"
          },
          {
            text: "muscle or body aches"
          },
          {
            text: "headache"
          },
          {
            text: "new loss of taste or smell"
          },
          {
            text: " Later, a person may experience internal bleeding"
          },
          {
            text: "congestion or runny nose"
          },
          {
            text: "vomiting or coughing blood"
          },
          {
            text: "diarrhea"
          },
        ]
        ,

        prevention: [
          {
            text: "wear a mask with no gaps"
          },
          {
            text: "stay at least 6 feet from others"
          },
          {
            text: "avoid crowds and poorly ventilated spaces"
          },
          {
            text: "get a vaccine"
          },
          {
            text: "clean your hands often"
          },
          {
            text: "use soap and water for 20 seconds"
          },
          {
            text: "or use hand sanitizer with 60% alcohol or more"
          },
          {
            text: "clean and disinfect frequently touched objects and surfaces daily"
          },
          {
            text: "congestion or runny nose"
          },
          {
            text: "nausea or vomiting"
          },
          {
            text: "diarrhea"
          },
        ]
        ,

        treatments: [
          {
            text: "stay home and away from others except to get medical care"
          },
          {
            text: "take acetaminophen or ibuprofen to feel better and reduce fever"
          },
          {
            text: "notify your health care provider when scheduling an appointment"
          },
          {
            text: "nausea or vomiting"
          },
        ]

      },
      cholera: {

        symptoms: [
          {
            text: "fever or chills"
          },
          {
            text: "cough"
          },
          {
            text: "shortness of breath or difficulty breathing"
          },
          {
            text: "fatigue"
          },
          {
            text: "muscle or body aches"
          },
          {
            text: "headache"
          },
          {
            text: "new loss of taste or smell"
          },
          {
            text: "sore throat"
          },
          {
            text: "congestion or runny nose"
          },
          {
            text: "nausea or vomiting"
          },
          {
            text: "diarrhea"
          },
        ]
        ,

        prevention: [
          {
            text: "wear a mask with no gaps"
          },
          {
            text: "stay at least 6 feet from others"
          },
          {
            text: "avoid crowds and poorly ventilated spaces"
          },
          {
            text: "get a vaccine"
          },
          {
            text: "clean your hands often"
          },
          {
            text: "use soap and water for 20 seconds"
          },
          {
            text: "or use hand sanitizer with 60% alcohol or more"
          },
          {
            text: "clean and disinfect frequently touched objects and surfaces daily"
          },
          {
            text: "congestion or runny nose"
          },
          {
            text: "nausea or vomiting"
          },
          {
            text: "diarrhea"
          },
        ]
        ,

        treatments: [
          {
            text: "stay home and away from others except to get medical care"
          },
          {
            text: "take acetaminophen or ibuprofen to feel better and reduce fever"
          },
          {
            text: "notify your health care provider when scheduling an appointment"
          },
          {
            text: "nausea or vomiting"
          },
        ]

      },
      sars: {

        symptoms: [
          {
            text: "fever or chills"
          },
          {
            text: "cough"
          },
          {
            text: "shortness of breath or difficulty breathing"
          },
          {
            text: "fatigue"
          },
          {
            text: "muscle or body aches"
          },
          {
            text: "headache"
          },
          {
            text: "new loss of taste or smell"
          },
          {
            text: "sore throat"
          },
          {
            text: "congestion or runny nose"
          },
          {
            text: "nausea or vomiting"
          },
          {
            text: "diarrhea"
          },
        ]
        ,

        prevention: [
          {
            text: "wear a mask with no gaps"
          },
          {
            text: "stay at least 6 feet from others"
          },
          {
            text: "avoid crowds and poorly ventilated spaces"
          },
          {
            text: "get a vaccine"
          },
          {
            text: "clean your hands often"
          },
          {
            text: "use soap and water for 20 seconds"
          },
          {
            text: "or use hand sanitizer with 60% alcohol or more"
          },
          {
            text: "clean and disinfect frequently touched objects and surfaces daily"
          },
          {
            text: "congestion or runny nose"
          },
          {
            text: "nausea or vomiting"
          },
          {
            text: "diarrhea"
          },
        ]
        ,

        treatments: [
          {
            text: "stay home and away from others except to get medical care"
          },
          {
            text: "take acetaminophen or ibuprofen to feel better and reduce fever"
          },
          {
            text: "notify your health care provider when scheduling an appointment"
          },
          {
            text: "nausea or vomiting"
          },
        ]

      }


    }


  }
  render() {
    return (
      <div className="App py-md-4 py-3" >
        {/* <HashRouter> */}
        {/* <BottomNav> */}
        <Router >
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/news" render={() => (
            <News articles={this.state.articles} />
          )} />

          <Route exact={true} path="/features/general" render={() => (
            <Info general={this.state.general} articles={this.state.articles} />

          )} />
          <Route exact={true} path="/covid19" render={() => (
            <Covid covid19={this.state.covid19} />
          )} />
          <Route exact={true} path="/influenza" render={() => (
            <Influenza influenza={this.state.influenza} />
          )} />
          <Route exact={true} path="/cholera" render={() => (
            <Cholera cholera={this.state.cholera} />
          )} />
          <Route exact={true} path="/ebola" render={() => (
            <Ebola ebola={this.state.ebola} />
          )} />
          <Route exact={true} path="/sars" render={() => (
          <Sars sars={this.state.sars} />
          )} />

          <Route exact={true} path="/profile" component={NewsPage} />
          <Route exact={true} path="/notification" component={Notification} />
          <Route exact={true} path="/article1" component={NewsPage} />
          <Route exact={true} path="/article2" component={NewsPage2} />
          <Route exact={true} path="/article3" component={NewsPage3} />
          <Route exact={true} path="/article4" component={NewsPage4} />
          <BottomNav />
        </Router>


        {/* Desktop */}

        {/* </BottomNav>  */}
        {/* </HashRouter> */}
        <Router >
          <Switch>
            <Route exact={true} path="/" render={() => (
              <HomeDesk blocks={this.state.blocks} />
            )} />
            <Route exact={true} path="/features" render={() => (
              <NewsDesk blocks={this.state.blocks} />
            )} />
            <Route exact={true} path="/features/news" render={() => (
              <NewsDeskPage articles={this.state.articles} blocks={this.state.blocks} />
            )} />
            <Route exact={true} path="/features/general" render={() => (
              <GeneralDeskPage influenza={this.state.influenza} ebola={this.state.ebola} cholera={this.state.cholera} covid19={this.state.covid19} general={this.state.general} articles={this.state.articles} blocks={this.state.blocks} />
            )} />
            <Route exact={true} path="/features/regulations" render={() => (
              <RegulationsDeskPage influenza={this.state.influenza} ebola={this.state.ebola} cholera={this.state.cholera} covid19={this.state.covid19} general={this.state.general} regulators={this.state.regulators} blocks={this.state.blocks} />
            )} />
            <Route exact={true} path="/contact-us" render={() => (
              <ContactUs general={this.state.general} articles={this.state.articles} blocks={this.state.blocks} />
            )} />
            <Route exact={true} path="/team" render={() => (
              <Team general={this.state.general} articles={this.state.articles} blocks={this.state.blocks} />
            )} />
            <Bar blocks={this.state.blocks} />
          </Switch>
        </Router>

      </div >
    );
  }
}

export default App;