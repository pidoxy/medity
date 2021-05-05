import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { BottomNavigation } from '@progress/kendo-react-layout';
// import general from "../images/general.svg";


const items = [
    { text: 'Inbox', id: 1, icon: `inbox`, route: '/', selected: true },
    { text: 'Calendar', id: 2, icon: 'calendar', route: '/calendar' },
    { text: 'Calenda', id: 3, icon: 'cogs', route: '/calendr' },
    { text: 'Profile', id: 4, icon: 'user', route: '/profile' }
];

class BottomNav extends React.Component {
    onSelect = (ev) => {
        this.props.history.push(ev.itemTarget.route);
    }

    setSelectedItem = (pathName) => {
        let currentPath = items.find(item => item.route === pathName);
        if (currentPath && currentPath.text) {
            return currentPath.text;
        }
    }

    render() {
        let selected = this.setSelectedItem(this.props.location.pathname);

        return (
          <div className={'example-wrapper'}>
            <div className={'page'}>
              <div className={'content'}>

                {this.props.children}
              </div>
              <BottomNavigation
                positionMode={'fixed'}
                items={items.map(
                            (item) => ({ ...item, selected: item.text === selected }))}
                onSelect={this.onSelect}
                    />
            </div>

            {/* <style>{`
                    .example-wrapper {
                        width: 350px;
                        margin: 0 auto;
                        box-shadow: 0px 10px 20px #00000029;
                        border-radius: 30px;
                    }
                    .page { padding: 10px 10px 0 10px; }
                    .content {
                        background: #F9F9F9;
                        border-radius: 30px 30px 0 0;
                        height: 550px;
                    }
                    .k-bottom-nav { border-radius: 0 0 20px 20px; }
                    .title { 
                        text-align: center;
                        font-size: 30px;
                        padding: 40px 0;
                    }
                    .list {
                        display: flex;
                        flex-direction: column;
                        padding: 0 20px;
                    }
                    .list-item {
                        display: flex;
                        flex-direction: row;
                        margin-bottom: 30px;
                        position: relative;
                    }
                    .k-avatar { margin-right: 15px; }
                    .separator { border: 1px solid #ccc; }
                    .section {
                        background: #EDEDED;
                        font-weight: bold;
                        padding: 2px 5px;
                        margin-bottom: 15px;
                    }
                    .centered { margin: 30px auto;}
                    .v-line {
                        width: 2px;
                        margin: 0 10px 0 15px;
                    }
                    .profile-image {
                        width: 100px;
                        height: 100px;
                        flex-basis: 100px;
                        padding: 1px;
                        margin: 0 auto;
                    }
                    .email { font-weight: bold; }
                    .my-icon {
                        position: absolute;
                        right: 0;
                    }
                `}</style> */}
          </div>
        );
    }
}

export default withRouter(BottomNav);