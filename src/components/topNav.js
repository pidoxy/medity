import * as React from 'react';
import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
// import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { NavLink } from 'react-router-dom';


const items = [
    { text: 'HOME', id: 1, route: '/' },
    { text: 'FEATURES', id: 2, route: '/features' }
    // { text: 'TEAM', id: 3, route: '#team' },
    // { text: 'CONTACT US', id: 4, route: '/contact-us' }
];

const TopNav = () => {
    return (<>
        <AppBar positionMode={'fixed'} className="d-md-flex container-fluid py-3 d-none">
            <AppBarSpacer style={{
                width: 40
            }} />

            <AppBarSection >
                <h3 style={{ color: 'white' }} className="title">Medity(app logo)</h3>
            </AppBarSection>
            <AppBarSpacer />
            <AppBarSpacer />

            <AppBarSection className="ms-auto">
                {items.map((item, id) =>
                    <li className="px-2 px-lg-4 topnav-links" key={id} ><span><NavLink href={item.route} key={item.id} to={item.route} >{item.text}</NavLink></span></li>

                )}
                <li className="px-2 px-lg-4" ><span><a href="#team">TEAM</a></span></li>
                <li className="px-2 px-lg-4"><span><a href="#contact">CONTACT US</a></span></li>
            </AppBarSection>
            <AppBarSpacer style={{
                width: 40
            }} />
        </AppBar>
        <style>{`
        .k-appbar{
            background-color: #39BDC8;
            color: black;
            font-family: 'Lato', sans-serif !important;
        }
              ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                li {
                    margin: 0 10px;
                }
                // li:hover {
                //     cursor: pointer;
                //     color: white;
                // }
                .topnav-links:hover, .topnav-links:active{
                    cursor: pointer;
                       color: white;
                }
                .k-button {
                    padding: 0;
                }
                
            `}</style>
    </>);
};

export default TopNav;