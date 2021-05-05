import { Component } from 'react';
import notification from "../images/Notification.svg";
import covid from "../images/covid.svg";
import influenza from "../images/influenza.svg";
import others from "../images/others.svg";
import vaccine from "../images/vaccine.svg";
// import { Input } from '@progress/kendo-react-inputs';
import ChartContainer from "../components/chart";




class Home extends Component {

    render() {
        return (
            <div className="App py-5">
                <div className="container ">
                    <div className="px-3 d-flex justify-content-between">
                        <h1 className="fw-bolder">Hey there!</h1>
                        <img src={notification} alt="notification icon" />
                    </div>
                    <div className="px-3 py-3">
                        <p>What would you like to know today?</p>
                        {/* <Input /> */}
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>

                    <ChartContainer />

                    <div className="container">
                        <h1>Popular Topics</h1>
                        <div className="row">
                            <div className="col-3">
                                <img src={covid} alt="covid icon" />
                                <p>Covid</p>
                            </div>
                            <div className="col-3">
                                <img src={vaccine} alt="vaccine icon" />
                                <p>Vaccine</p>

                            </div>
                            <div className="col-3">
                                <img src={influenza} alt="influenza icon" />
                                <p>Influenza</p>

                            </div>
                            <div className="col-3">
                                <img src={others} alt="others icon" />
                                <p>Others</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;