import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackImg from '../components/backImg';


const App = ({ prop }) => {

    const [value, setValue] = useState("");

    return (
        <div className="notification pb-5 d-md-none">
            <div className="container">
                <div className=" pb-3 d-flex ">
                    <BackImg />
                    <input onChange={(e) => setValue(e.target.value)} className="mx-3 form-control " value={value} type="text" placeholder="Search" aria-label="Search" />
                </div>
            </div>
            <div className="px-3">
                {prop.articles.filter((article) => {
                    if (value === "") {
                        console.log(article.text);

                        return article.text;
                    }
                    else if (article.text.toLowerCase().includes(value)) {
                        console.log(article.text);
                        return article;
                    } 
                }).map((items, id) => {
                    return (
                        <Link key={id} to={items.link}><div style={{ cursor: "pointer" }} className="row py-3">
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
        </div>
    );
};


export default App;