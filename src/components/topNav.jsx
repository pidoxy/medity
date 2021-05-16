import * as React from 'react';
import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
// import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';

// let kendokaAvatar = 'https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png';

const TopNav = () => {
    return (<>
        <AppBar positionMode={'fixed'} className="d-md-flex py-3 d-none">
            <AppBarSpacer style={{
                width: 40
            }} />

            <AppBarSection >
                <h3 style={{color:'white'}} className="title">Medity(app logo)</h3>
            </AppBarSection>
            <AppBarSpacer />
            {/* <AppBarSpacer /> */}

            <AppBarSection className="ms-auto">
                <ul>
                    <li className="px-5" id="#home"><span>HOME</span></li>
                    <li className="px-5" id="#features"><span>FEATURES</span></li>
                    <li className="px-5" id="#team"><span>TEAM</span></li>
                    <li className="px-5" id="#contactUs"><span>CONTACT US</span></li>

                </ul>
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
                li:hover {
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