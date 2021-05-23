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
import Input from './pages/input';
// Desktop
import HomeDesk from "./pages/homeDesk";
import NewsDesk from "./pages/newsDesk";
import NewsDeskPage from './pages/newsDeskPage';
import GeneralDeskPage from './pages/generalDeskPage';
import RegulationsDeskPage from './pages/regulationDeskPage';
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
          link: "/article1",
          content: `As more people are vaccinated, many of us are increasingly \n looking toward a future at the end of the pandemic. \n But for some people, the long- term complications of the virus will last after the pandemic ends. \n \nNow over a year from the start of the pandemic, the scientific community is learning more about the long - term complications and effects of COVID - 19.  \n In a recent study published in the journal NatureTrusted Source, researchers found that individuals with more severe disease at the start of their illness have a greater risk of long- term complications such as heart and kidney disease secondary to COVID - 19. \n Symptoms more than 4 weeks after the onset web ma`
        },
        {
          text: 'US Health Authorities Ask for Pause in J&J COVID-19 Vaccination',
          img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg",
          code: 'COVID-19 ',
          color: "FF304F",
          link: "/article5",
          content: "As more people are vaccinated, many of us are increasingly \n looking toward a future at the end of the pandemic. \n But for some people, the long - term complications of the virus will last after the pandemic ends. \n Now over a year from the start of the pandemic, the scientific community is learning more about the long - term complications and effects of COVID - 19.\n In a recent study published in the journal NatureTrusted Source, researchers found that individuals with more severe disease at the start of their illness have a greater risk of long - term complications such as heart and kidney disease secondary to COVID - 19. \n Symptoms more than 4 weeks after the onset web ma"
        },
        {
          text: 'J&J COVID-19 Vaccinations Resume After Temporary Shutdowns',
          img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg",
          code: 'COVID-19 ',
          color: "FF304F",
          link: "/article6",
          content: "As more people are vaccinated, many of us are increasingly \n looking toward a future at the end of the pandemic.\n But for some people, the long - term complications of the virus will last after the pandemi \n Now over a year from the start of the pandemic, the scientific community is learning more about the long - term complications and effects of COVID  \n  In a recent study published in the journal NatureTrusted Source, researchers found that individuals with more severe disease at the start of their illness have a greater risk of long - term complications such as heart and kidney disease secondary to COVID  \n Symptoms more than 4 weeks after the onset web ma"
        },
        {
          text: 'Look for These Symptoms in the Months After COVID-19 Recovery',
          img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg",
          code: 'SARS ',
          color: "FF304F",
          link: "/article7",
          content: "As more people are vaccinated, many of us are \n looking toward a future at the end of the pandemi \n But for some people, the long - term complications of the virus will last after the pandemic end \n Now over a year from the start of the pandemic, the scientific community is learning more about the long - term complications and effects of COVID - 1 \n  In a recent study published in the journal NatureTrusted Source, researchers found that individuals with more severe disease at the start of their illness have a greater risk of long - term complications such as heart and kidney disease secondary to COVID - 1 \n Symptoms more than 4 weeks after the onset web ma"
        },

        {
          text: 'Pharma, US Government Plan for COVID-19 Booster Shots',
          code: 'Influenza',
          color: "39BDC8",
          img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg",
          link: "/article2",
          content: "As more people are vaccinated, many of us are increasingly \n looking toward a future at the end of the pandemic. \n But for some people, the long - term complications of the virus will last after the pandemic ends. \n Now over a year from the start of the pandemic, the scientific community is learning more about the long - term complications and effects of COVID - 19. \n  In a recent study published in the journal NatureTrusted Source, researchers found that individuals with more severe disease at the start of their illness have a greater risk of long - term complications such as heart and kidney disease secondary to COVID - 19. \n Symptoms more than 4 weeks after the onset web ma"
        },
        {
          text: 'Study highlights significant gap in evidence related to effectiveness of portable air filters in reducing COVID-19',
          code: 'Ebola',
          color: "0085AD",
          img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg",
          link: "/article3",
          content: "As more people are vaccinated, many of us are increasingly \n looking toward a future at the end of the pandemic. \n But for some people, the long - term complications of the virus will last after the pandemic ends. \n Now over a year from the start of the pandemic, the scientific community is learning more about the long - term complications and effects of COVID - 19. \n In a recent study published in the journal NatureTrusted Source, researchers found that individuals with more severe disease at the start of their illness have a greater risk of long - term complications such as heart and kidney disease secondary to COVID - 19. \n Symptoms more than 4 weeks after the onset web ma"
        },
        {
          text: 'Here’s Where COVID-19 Cases Are Rising and Falling',
          code: 'Cholera',
          color: "775ADA",
          img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg",
          link: "/article4",
          content: "As more people are vaccinated, many of us are increasingly \n looking toward a future at the end of the pandemic. \n But for some people, the long - term complications of the virus will last after the pandemic ends. \n Now over a year from the start of the pandemic, the scientific community is learning more about the long - term complications and effects of COVID - 19. \n  In a recent study published in the journal NatureTrusted Source, researchers found that individuals with more severe disease at the start of their illness have a greater risk of long - term complications such as heart and kidney disease secondary to COVID - 19. \n Symptoms more than 4 weeks after the onset web ma"
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
            text: "cough"
          },
          {
            text: "sore throat"
          },
          {
            text: "runny or stuffy nose"
          },
          {
            text: "muscle or body aches"
          },
          {
            text: "heaadaches"
          },
          {
            text: "fatigue"
          },
          {
            text: "vomiting and diarrhea, but this is more common in children than adults"
          },
        ],

        prevention: [
          {
            text: "get the flu vaccine every year"
          },
          {
            text: "stay away from people who are sick"
          },
          {
            text: "cover coughs and sneezes"
          },
          {
            text: "wash hands frequently"
          },
        ],

        treatments: [
          {
            text: "stay home and rest"
          },
          {
            text: "avoid contact with people"
          },
          {
            text: "cover coughs and sneezes"
          },
          {
            text: "wash hands frequently"
          },
          {
            text: "for people with asthma, diabetes (including gestational diabetes), or heart disease, ask your doctor to prescribe antiviral drugs "
          },
        ]

      },
      ebola: {
        symptoms: [
          {
            text: "fever"
          },
          {
            text: "aches and pains, such as severe headache and muscle and joint pain"
          },
          {
            text: "weakness and fatigue"
          },
          {
            text: "sore throat"
          },
          {
            text: "loss of appetite"
          },
          {
            text: "gastrointestinal symptoms including abdominal pain, diarrhea, and vomiting"
          },
          {
            text: "unexplained hemorrhaging, bleeding or bruising"
          },
        ]
        ,

        prevention: [
          {
            text: "avoid contact with blood and body fluids of those who are sick (such as urine, feces, saliva, sweat, vomit, breast milk, amniotic fluid, semen, and vaginal fluids)"
          },
          {
            text: "avoid contact with items that may have come in contact with an infected person’s blood or body fluids (such as clothes, bedding, needles, and medical equipment)"
          },
          {
            text: "avoid funeral or burial practices that involve touching the body of someone who died from EVD or suspect EVD"
          },
          {
            text: "avoid contact with bats, forest antelopes, and nonhuman primates (such as monkeys and chimpanzees) blood, fluids, or raw meat prepared from these or unknown animals (bushmeat)"
          },
        ]
        ,

        treatments: [
          {
            text: "Immazeb and Ebanga are two FDA approved treatments"
          },
          {
            text: "provide fluids and electrolytes (body salts) orally or through infusion into the vein (intravenously)"
          },
          {
            text: "use medication to support blood pressure"
          },
          {
            text: "reduce vomiting and diarrhea"
          },
          {
            text: "treat infections, if they occur"
          },
        ]

      },
      cholera: {

        symptoms: [
          {
            text: "watery diarrhea"
          },
          {
            text: "vomiting"
          },
          {
            text: "leg cramps"
          },
          {
            text: "rapid loss of body fluids"
          },
          {
            text: "dehydration"
          },
          {
            text: "shock"
          },
        ]
        ,

        prevention: [
          {
            text: "drink only bottled, boiled, or chemically treated beverages and water"
          },
          {
            text: "wash your hands often with soap and clean water, especially before you eat or prepare food and after using the bathroom"
          },
          {
            text: "use bottled, boiled, or chemically treated water to wash dishes, brush teeth, wash and prepare food, and make ice"
          },
          {
            text: "eat foods that are packaged or that are freshly cooked and served hot"
          },
          {
            text: "dispose of feces in a sanitary manner to prevent contamination of water and food sources"
          },
        ]
        ,

        treatments: [
          {
            text: "replace fluids and salts that are lost through diarrhea"
          },
          {
            text: "use oral rehydration solution (ORS) – a prepackaged mixture of sugar and salts that is mixed with 1 liter of water and drunk in large amounts"
          },
          {
            text: "seek medical attention"
          },
          {
            text: "if an infant has watery diarrhea, continue breastfeeding"
          },
        ]

      },
      sars: {

        symptoms: [
          {
            text: "high fever"
          },
          {
            text: "headache"
          },
          {
            text: "overall discomfort"
          },
          {
            text: "body aches"
          },
          {
            text: "dry cough"
          },
          {
            text: "SARS patients may have diarrhea"
          },
        ]
        ,

        prevention: [
          {
            text: "avoid close person-to-person contact"
          },
          {
            text: "avoid kissing or hugging, sharing eating or drinking utensils, talking to someone within 3 feet, and touching someone directly"
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
        ]
        ,

        treatments: [
          {
            text: "Activated its Emergency Operations Center to provide round-the-clock coordination and response."
          },
          {
            text: "Committed more than 800 medical experts and support staff to work on the SARS response."
          },
          {
            text: "Provided assistance to state and local health departments in investigating possible cases of SARS in the United States."
          },
          {
            text: "Conducted extensive laboratory testing of clinical specimens from SARS patients to identify the cause of the disease."
          },
          {
            text: "Initiated a system for distributing health alert notices to travelers who may have been exposed to cases of SARS."
          }
        ]

      }


    }


  }
  render() {
    return (
      <div className="App pt-md-4 pb-md-0 py-3" >
        {/* <HashRouter> */}

        <Router >
          <Route exact={true} path="/" render={() => (
            <Home prop={this.state} articles={this.state.articles} />
          )} />
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
          <Route exact={true} path="/article5" component={NewsPage2} />
          <Route exact={true} path="/article6" component={NewsPage3} />
          <Route exact={true} path="/article7" component={NewsPage4} />
          <BottomNav />

          <Route exact={true} path="/search" render={() => (
            <Input prop={this.state} />
           )} />
        </Router>

        {/* Desktop */}

        {/* </HashRouter> */}
        <Router >
          <Switch>
            <Route exact={true} path="/" render={() => (
              <HomeDesk prop={this.state} blocks={this.state.blocks} />
            )} />
            <Route exact={true} path="/features" render={() => (
              <NewsDesk  blocks={this.state.blocks} />
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
            <Bar exact={true} blocks={this.state.blocks} />
            
            <Input exact={true} prop={this.state} />
           
          </Switch>
        </Router>

      </div >
    );
  }
}

export default App;