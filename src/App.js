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
import NewsPage5 from "./pages/newsPage5";
import NewsPage6 from "./pages/newsPage6";
import NewsPage7 from "./pages/newsPage7";
import NewsPage8 from "./pages/newsPage8";
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
          text: 'Influenza, The Flu',
          code: 'Influenza',
          color: "39BDC8",
          img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg",
          link: "/article2",
          content: "Influenza, commonly called 'the flu', is an infectious disease caused by influenza viruses. Symptoms range from mild to severe and often include fever, runny nose, sore throat, muscle pain, headache, coughing, and fatigue. These symptoms typically begin 1–4 days after exposure to the virus and last for about 2–8 days. Diarrhea and vomiting can occur, particularly in children. Influenza may progress to pneumonia, which can be caused by the primary viral infection or by a secondary bacterial infection. Other complications of infection include acute respiratory distress syndrome, meningitis, encephalitis, and worsening of pre-existing health problems such as asthma and cardiovascular disease., The FluThere are four types of influenza virus, termed influenza viruses A, B, C, and D. Aquatic birds are the primary reservoir of Influenza A virus (IAV), which is also widespread in various mammals, including humans and pigs. Influenza B virus (IBV) and Influenza C virus (ICV) primarily infect humans, and Influenza D virus (IDV) is found in cattle and pigs. IAV and IBV circulate in humans and cause seasonal epidemics, and ICV causes a mild infection, primarily in children. IDV can infect humans but is not known to cause illness. In humans, influenza viruses are primarily transmitted through respiratory droplets produced from coughing and sneezing. Transmission through aerosols and intermediate objects and surfaces contaminated by the virus also occur. /n , The FluFrequent hand washing and covering one's mouth and nose when coughing and sneezing reduce transmission. Annual vaccination can help to provide protection against influenza. Influenza viruses, particularly IAV, evolve quickly, so flu vaccines are updated regularly to match which influenza strains are in circulation. Vaccines currently in use provide protection against IAV subtypes H1N1 and H3N2 and one or two IBV subtypes. Influenza infection is diagnosed with laboratory methods such as antibody or antigen tests and a polymerase chain reaction (PCR) to identify viral nucleic acid. The disease can be treated with supportive measures and, in severe cases, with antiviral drugs such as oseltamivir. In healthy individuals, influenza is typically self-limiting and rarely fatal, but it can be deadly in high risk groups. /n , The FluIn a typical year, 5–15% of the population contracts influenza. There are 3–5 million severe cases annually, with up to 650,000 deaths globally each year. Deaths most commonly occur in high risk groups, including young children, the elderly, and people with chronic health conditions. In temperate regions of the world, the number of influenza cases peaks during winter, whereas in the tropics influenza can occur year-round. Since the late 1800s, large outbreaks of novel influenza strains that spread globally, called pandemics, have occurred every 10–50 years. Five flu pandemics have occurred since 1900: the Spanish flu in 1918–1920, which was the most severe flu pandemic, the Asian flu in 1957, the Hong Kong flu in 1968, the Russian flu in 1977, and the 2009 swine flu pandemic."
        },
        {
          text: 'UNICEF, WHO, IFRC and MSF announce the establishment of a global Ebola vaccine stockpile',
          code: 'Ebola',
          color: "0085AD",
          img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg",
          link: "/article3",
          content: "The four leading international health and humanitarian organizations announced today the establishment of a global Ebola vaccine stockpile to ensure outbreak response\n The effort to establish the stockpile was led by the International Coordinating Group (ICG) on Vaccine Provision, which includes the World Health Organization (WHO), UNICEF, the International Federation of Red Cross and Red Crescent Societies (IFRC), and Médecins Sans Frontières (MSF), with financial support from Gavi, the Vaccine Alliance. The stockpile will allow countries, with the support of humanitarian organizations, to contain future Ebola epidemics by ensuring timely access to vaccines for populations at risk during outbreaks.\n The injectable single-dose Ebola vaccine (rVSV∆G-ZEBOV-GP, live) is manufactured by Merck, Sharp & Dohme (MSD) Corp. and developed with financial support from the from the government of the United States of America (USA). The European Medicines Agency licensed the Ebola vaccine in November 2019, and the vaccine is now prequalified by WHO, and licensed by the US Food and Drug Administration as well as in eight African countries.\n Before achieving licensure, the vaccine was administered to more than 350,000 people in Guinea and in the 2018-2020 Ebola outbreaks in the Democratic Republic of the Congo under a protocol for “compassionate use”. \n The vaccine, which is recommended by the Strategic Advisory Group of Experts (SAGE) on Immunization for use in Ebola outbreaks as part of a broader set of Ebola outbreak response tools, protects against the Zaire ebolavirus species which is most commonly known to cause outbreaks.\n “The COVID-19 pandemic is reminding us of the incredible power of vaccines to save lives from deadly viruses,” said Dr Tedros Adhanom Ghebreyesus, WHO Director-General. “Ebola vaccines have made one of the most feared diseases on earth preventable. This new stockpile is an excellent example of solidarity, science and cooperation between international organizations and the private sector to save lives.”\n UNICEF manages the stockpile on behalf of the ICG which, as with stockpiles of cholera, meningitis and yellow fever vaccines, will be the decision-making body for its allocation and release.\n The stockpile is stored in Switzerland and ready to be shipped to countries for emergency response. The decision to allocate the vaccine will be made within 48 hours of receiving a request from a country; vaccines will be made available together with ultra-cold chain packaging by the manufacturer for shipment to countries within 48 hours of the decision. The targeted overall delivery time from the stockpile to countries is seven days.\n “We are proud to be part of this unprecedented effort to help bring potential Ebola outbreaks quickly under control,” said Henrietta Fore, UNICEF Executive Director. “We know that when it comes to disease outbreaks, preparedness is key. This Ebola vaccine stockpile is a remarkable achievement - one that will allow us to deliver vaccines to those who need them the most as quickly as possible.”\n As Ebola outbreaks are relatively rare and unpredictable, there is no natural market for the vaccine. Vaccines are only secured through the establishment of the stockpile and are available in limited quantities. The Ebola vaccine is reserved for outbreak response to protect people at the highest risk of contracting Ebola – including healthcare and frontline workers.\n  “This is an important milestone. Over the past decade alone we have seen Ebola devastate communities in West and Central Africa, always hitting the poorest and most vulnerable the hardest,” said IFRC Secretary General, Jagan Chapagain. “Through each outbreak, our volunteers have risked their lives to save lives. With this stockpile, it is my hope that the impact of this terrible disease will be dramatically reduced.”\n “The creation of an Ebola vaccine stockpile under the ICG is a positive step”, said Dr Natalie Roberts, Programme Manager, MSF Foundation. “Vaccination is one of the most effective measures to respond to outbreaks of vaccine preventable diseases, and Ebola is no exception. An Ebola vaccine stockpile can increase transparency in the management of existing global stocks and the timely deployment of the vaccine where it’s most needed, something MSF has called for during recent outbreaks in the Democratic Republic of Congo.”\n An initial 6890 doses are now available for outbreak response with further quantities to be delivered into the stockpile this month and throughout 2021 and beyond. Depending on the rate of vaccine deployment, it could take 2 to 3 years to reach the SAGE-recommended level of 500,000 doses for the emergency stockpile of Ebola vaccines. WHO, UNICEF, Gavi and vaccine manufacturers are continuously assessing options to increase vaccine supply should global demand increase."
        },
        {
          text: 'Epidemiology, risk factors, and disease burden',
          code: 'Cholera',
          color: "775ADA",
          img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg",
          link: "/article4",
          content: "Cholera can be endemic or epidemic. A cholera-endemic area is an area where confirmed cholera cases were detected during the last 3 years with evidence of local transmission (meaning the cases are not imported from elsewhere). A cholera outbreak/epidemic can occur in both endemic countries and in countries where cholera does not regularly occur\n In cholera endemic countries an outbreak can be seasonal or sporadic and represents a greater than expected number of cases. In a country where cholera does not regularly occur, an outbreak is defined by the occurrence of at least 1 confirmed case of cholera with evidence of local transmission in an area where there is not usually cholera.\n Cholera transmission is closely linked to inadequate access to clean water and sanitation facilities. Typical at-risk areas include peri-urban slums, and camps for internally displaced persons or refugees, where minimum requirements of clean water and sanitation are not been met.\n  The consequences of a humanitarian crisis – such as disruption of water and sanitation systems, or the displacement of populations to inadequate and overcrowded camps – can increase the risk of cholera transmission, should the bacteria be present or introduced. Uninfected dead bodies have never been reported as the source of epidemics.\n The number of cholera cases reported to WHO has continued to be high over the last few years. During 2019, 923 037 cases, 1911 deaths were notified from 31 countries (3). The discrepancy between these figures and the estimated burden of the disease is since many cases are not recorded due to limitations in surveillance systems and fear of impact on trade and tourism. "
        },
        {
          text: 'US Health Authorities Ask for Pause in J&J COVID-19 Vaccination',
          img: "https://live.staticflickr.com/65535/51160852032_2038f5d532_t.jpg",
          code: 'COVID-19 ',
          color: "FF304F",
          link: "/article5",
          content: "Following six cases of rare blood clots in women who had received Johnson & Johnson’s COVID-19 vaccine in the US, the Food and Drug Administration and the Centers for Disease Control and Prevention have recommended a temporary suspension of its rollout. In a statement released today (April 13), the agencies announced that they are investigating the reports of cerebral venous sinus thrombosis (CVST), the same condition observed as an extremely rare side effect of AstraZeneca’s COVID-19 vaccine \n “Until that process is complete, we are recommending a pause in the use of this vaccine out of an abundance of caution,” the statement reads. “This is important, in part, to ensure that the health care provider community is aware of the potential for these adverse events and can plan for proper recognition and management due to the unique treatment required with this type of blood clot.” Specifically, the anticoagulant drug heparin should not be used to treat patients in these situations, the agencies recommend. Geoffrey Barnes, an anticoagulation expert at the University of Michigan, tells the Associated Press that other blood thinners and perhaps an antibody infusion would be appropriate instead. \n Nearly 7 million doses of Johnson & Johnson’s one-shot COVID-19 vaccine have been administered so far in the US. The six reports of CVST were all in women ranging in age from 18 to 48 who developed the clot between 6 and 13 days after vaccination. In addition to clots, these individuals also had low platelets counts. \n AstraZeneca and Johnson & Johnson both designed their vaccines to deliver a bit of SARS-CoV-2 genetic material via an adenoviral vector, although the viral ferries are different types of adenovirus.  \n According to Reuters, of the 34 million people who received AstraZeneca’s COVID-19 vaccine, 169 developed CVST, and the European Medicines Agency considers clotting to be a rare side effect of the immunization. “The reported combination of blood clots and low blood platelets is very rare,” the EMA said in a statement last week, “and the overall benefits of the vaccine in preventing COVID-19 outweigh the risks of side effects.” \n See “Blood Clots a Very Rare Side Effect of AstraZeneca Vaccine \n It’s not clear why these blood clots might occur following vaccination. “Of course, there are hypotheses: maybe it’s something with the vector, maybe it’s an additive in the vaccine, maybe it’s something in the production process. . . . I don’t know,” Sabine Eichinger, a haematologist at the Medical University of Vienna, told Nature last week. “It could be any of these things.” \n According to the AP, New York State, the city of Dallas, and mass vaccination events coordinated by the federal government have put their Johnson & Johnson vaccine programs on hold."
        },
        {
          text: 'J&J COVID-19 Vaccinations Resume After Temporary Shutdowns',
          img: "https://live.staticflickr.com/65535/51162305254_c4898ab384_t.jpg",
          code: 'COVID-19 ',
          color: "FF304F",
          link: "/article6",
          content: "Three vaccination sites, one in Colorado and two in North Carolina, briefly paused administering the Johnson & Johnson vaccine against COVID-19 earlier this week after a small percentage of recipients experienced adverse reactions. The shots resumed after investigations by the US Centers for Disease Control and Prevention found the incidents were consistent with the vaccine’s known side effects. \n On Wednesday afternoon (April 7), a mass vaccination clinic at a baseball stadium outside of Denver shut down after 11 people felt unwell within 15 minutes, according to The Denver Post. Their reactions included nausea, dizziness, and fainting; nine people were treated at the site with juice and water, while two were taken to the hospital. More than 1,700 people were vaccinated at the site that day.  \n “After reviewing each patient’s symptoms, analyzing other vaccinations from the same lot of the vaccine and speaking with the CDC to confirm our findings, we are confident in saying that there is no reason for concern,” said Eric France, the chief medical officer of the Colorado Department of Public Health & Environment, in a statement released the following day. “We are committed to making sure every community clinic is well-staffed with medical professionals who take patient safety with the utmost seriousness, just as they did at yesterday’s clinic.”   \n Yesterday, a similar incident occurred at a mass vaccination site at a sports arena in Raleigh, North Carolina, that had administered more than 2,300 Johnson & Johnson shots. There, 18 people experienced reactions, four of whom were taken to hospitals. The Wake County Public Health department released a statement later that day saying that it had investigated the incident together with the CDC and that the federal agency recommended moving ahead with the vaccines.   \n “We have been administering J&J vaccine here in Wake County since early March, and nationally, more than 4.5 million people have received the J&J shots,” Wake County Medical Director Kim McDonald says in the statement. “Reactions are expected, but what’s important is that our patients are here with us being monitored, and medical personnel are right here in our clinics to respond to these rare events.”  \n  “There is no greater priority than the safety and well-being of the people we serve. When we receive reports of adverse events in individuals receiving our medicines and vaccines, we collect necessary information and carefully assess the events,” Johnson & Johnson spokesperson Lisa Cannellos writes in an email to The News & Observer in Raleigh.  \n David Wohl, a University of North Carolina School of Medicine infectious disease physician who helps run another clinic that also paused Johnson & Johnson injections yesterday, tells the News & Observer that more people at that site report feeling lightheaded and faint with that vaccine than with the other COVID-19 vaccines the clinic administers. He suggests that may be because people who dread vaccines are seeking out the single-dose Johnson & Johnson version. “We’re having a lot of people who are taking the J&J vaccine because they don’t want two shots because they don’t like needles,” he says.   \n “Feeling anxious or faint can be common when receiving a vaccination or any kind of medical procedure, like a blood draw,” says state epidemiologist Rachel Herlihy in the Colorado health department’s statement. “When you go to your vaccine appointment, bring a beverage and a snack or a friend or family member to help offer some reassurance."
        },
        {
          text: 'SARS-CoV-2 Exits Cells Via Lysosomes',
          img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg",
          code: 'SARS ',
          color: "FF304F",
          link: "/article7",
          content: "Scientists know a lot about how SARS-CoV-2, the virus responsible for the COVID-19 pandemic, gets into cells. Now, in a study published October 27 in Cell, researchers have determined that mouse hepatitis virus and SARS-CoV-2, both of which are members of the β-coronavirus family, get out of cells via lysosomes, organelles responsible for taking out cellular garbage, rather than using the biosynthetic secretory pathway used by most other enveloped viruses\n “There hasn't been a whole lot of cell biology done on coronavirus assembly and release from cells, which is important . . . because we have no antivirals that target these later steps of the virus infection cycle,” says Carolyn Machamer, a cell biologist at the Johns Hopkins University School of Medicine who was not involved in the study. This work not only points to new potential targets for inhibiting the later steps of infection, but also provides new understanding of the basic biology of these viruses, she adds.\n About five years ago, Teegan Dellibovi-Ragheb, then a postdoc in cell biologist Nihal Altan-Bonnet’s lab at the National Heart, Lung, and Blood Institute, started to investigate how β-coronaviruses—the family that includes the pathogens that cause MERS and SARS—get out of cells. She found that the β-coronavirus mouse hepatitis virus (MHV), which causes severe pneumonia in mice, doesn’t use the same secretory pathway that most viruses that have an outer lipid and protein envelope—including γ-coronaviruses, which infect birds—use. After Dellibovi-Ragheb moved on to another job, though, Altan-Bonnet says that no one else in the lab wanted to take up the project to determine how these viruses were getting out of infected cells.\n “Not many people were interested in coronaviruses,” she says. “And then the pandemic hit.” \n Altan-Bonnet and Sourish Ghosh, a current postdoc in the lab, got to work, infecting different cell types with either MHV or SARS-CoV-2. The researchers found large numbers of the coronaviruses in lysosomes around the time in their lifecycles that they’d be expected to be getting out of the cells to infect new ones. Furthermore, when the researchers blocked the movement of lysosomes to the plasma membrane in the MHV-infected cells, a key step in lysosome-based exocytosis, they detected much less viral RNA outside the cells. These findings indicate that β-coronaviruses use lysosomes to exit cells.\n Lysosomes are typically quite acidic, with a pH around 4.5 to 5.0. This allows specialized enzymes to degrade waste within the lysosome, but not if something went wrong and these enzymes made it into the cytoplasm. The research team determined that the lysosomes were somehow being deacidified during MHV infection. Lysosomes in cells infected with MHV had an average pH of 5.7, while the uninfected control cells’ lysosomes had an average pH of 4.7, leading to reduced lysosomal enzyme activity in infected cells, which would allow the viruses to exit the cells intact. \n A pseudocolored electron micrograph shows SARS-CoV-2 (yellow) inside the lysosomes (purple) of an African green monkey kidney  \n ALAN HOOFRING \n Based on previous work from other groups and the researchers’ new evidence that the SARS-CoV-2 protein ORF3a is localized to the lysosomes of infected cells, they hypothesize that it may be involved in neutralizing the pH; they are planning future studies to further investigate the protein’s role. \n “We were certainly surprised that it’s using this pathway to get out,” says Altan-Bonnet. While some viruses without a lipid and protein envelope—such as reovirus, which causes mild gastrointestinal upset in people—do exit cells via lysosomal trafficking, she adds, “it’s not the typical pathway for enveloped viruses.” \n Abnormal immune responses—such as the cytokine storm—can be a feature of COVID-19, and the process of lysosomal degradation had been previously shown to be critical for antigen presentation, which allows immune sentinels to identify and kill infected cells. Altan-Bonnet shared the findings with her husband, Grégoire Altan-Bonnet, an immunologist at the National Cancer Institute, and they and their colleagues hypothesized that “maybe the fact that the virus escapes from a different pathway completely messes up the normal immune response,” he says. Indeed, the research team found alterations in both antigen presentation and subsequent immune activation in MHV-infected cells, indicating that antigen presentation had been disrupted. \n “Clearly, this virus is using a different pathway than what we thought previously,” says Billy Tsai, a cell biologist at the University of Michigan who did not participate in the study. Some of the open questions center on how the virus deacidifies the lysosomes and then uses the lysosome trafficking pathway, he adds, and it will also be important to see confirmation of these results from other groups. “There’s going to be a lot of excitement in trying to unravel how these viruses, especially SARS-CoV-2, go through the host cells and then get out.” \n In addition to the basic science questions, the research team is focusing on how their findings relate to COVID-19’s pathology. “We follow the literature from the clinical side, and people are making tons of measurements about the cytokine storm and coagulation issues, and there is really not a mechanism which explains how all these things fit together,” says Grégoire Altan-Bonnet. He and his colleagues are now exploring whether or not viral egress via lysosomes can explain the immune imbalances in patients. \n The researchers are starting with MHV, in part because it’s safe to work with under biosafety level two conditions, unlike SARS-CoV-2, which requires biosafety level three. “Of course, the mouse strain is not the human strain,” says Nihal Altan-Bonnet. “Since we saw the acidification in the CoV-2 infected cells, we’re hopeful that we’re going to see the same effects across" 
        },
        {
          text: 'Cholera As A Rampant Epidemy',
          code: 'Cholera',
          color: "775ADA",
          img: "https://live.staticflickr.com/65535/51161478191_7ffc78835e_t.jpg",
          link: "/article8",
          content: "Cholera is an infection of the small intestine by some strains of the bacterium Vibrio cholerae. Symptoms may range from none, to mild, to severe. The classic symptom is large amounts of watery diarrhea that lasts a few days. Vomiting and muscle cramps may also occur. Diarrhea can be so severe that it leads within hours to severe dehydration and electrolyte imbalance. This may result in sunken eyes, cold skin, decreased skin elasticity, and wrinkling of the hands and feet. Dehydration can cause the skin to turn bluish. Symptoms start two hours to five days after exposure. \n Cholera is caused by a number of types of Vibrio cholerae, with some types producing more severe disease than others. It is spread mostly by unsafe water and unsafe food that has been contaminated with human feces containing the bacteria. Undercooked seafood is a common sourc Humans are the only animal affected Risk factors for the disease include poor sanitation, not enough clean drinking water, and poverty There are concerns that rising sea levels will increase rates of disease Cholera can be diagnosed by a stool test A rapid dipstick test is available but is not as accurate.\n Prevention methods against cholera include improved sanitation and access to clean water Cholera vaccines that are given by mouth provide reasonable protection for about six months They have the added benefit of protecting against another type of diarrhea caused by E. coli The primary treatment is oral rehydration therapy—the replacement of fluids with slightly sweet and salty solutions Rice-based solutions are preferred Zinc supplementation is useful in children In severe cases, intravenous fluids, such as Ringer's lactate, may be required, and antibiotics may be beneficial Testing to see which antibiotic the cholera is susceptible to can help guide the choice\n Cholera affects an estimated 3–5 million people worldwide and causes 28,800–130,000 deaths a year Although it is classified as a pandemic as of 2010, it is rare in high income countries Children are mostly affected Cholera occurs as both outbreaks and chronically in certain areas Areas with an ongoing risk of disease include Africa and Southeast Asia The risk of death among those affected is usually less than 5% but may be as high as 50% No access to treatment results in a higher death rate Descriptions of cholera are found as early as the 5th century BC in Sanskrit The study of cholera in England by John Snow between 1849 and 1854 led to significant advances in the field of epidemiology Seven large outbreaks have occurred over the last 200 years with millions of deaths."
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

          <Route exact={true} path="/notification" component={Notification} />
          <Route exact={true} path="/article1" render={() => (
            <NewsPage prop={this.state} />
          )} />
          <Route exact={true} path="/article2" render={() => (
            <NewsPage2 prop={this.state} />
          )} />
          <Route exact={true} path="/article3" render={() => (
            <NewsPage3 prop={this.state} />
          )} />
          <Route exact={true} path="/article4" render={() => (
            <NewsPage4 prop={this.state} />
          )} />
          <Route exact={true} path="/article5" render={() => (
            <NewsPage5 prop={this.state} />
          )} />
          <Route exact={true} path="/article6" render={() => (
            <NewsPage6 prop={this.state} />
          )} />
          <Route exact={true} path="/article7" render={() => (
            <NewsPage7 prop={this.state} />
          )} />
          <Route exact={true} path="/article8" render={() => (
            <NewsPage8 prop={this.state} />
          )} />

          {/* <Route exact={true} path="" component={} /> */}
          {/* <Route exact={true} path="/article2" component={NewsPage2} />
          <Route exact={true} path="/article3" component={NewsPage3} />
          <Route exact={true} path="/article4" component={NewsPage4} />
          <Route exact={true} path="/article5" component={NewsPage5} />
          <Route exact={true} path="/article6" component={NewsPage6} />
          <Route exact={true} path="/article7" component={NewsPage7} />
          <Route exact={true} path="/article8" component={NewsPage8} /> */}

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
            <Bar exact={true} blocks={this.state.blocks} />

            <Input exact={true} prop={this.state} />

          </Switch>
        </Router>

      </div >
    );
  }
}

export default App;