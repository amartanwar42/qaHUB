import React, { Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions'
import EventsPage from'./Events'
import ShareKnowledge from './shareknowledge/ShareKnowledge'
import LoginAlert from './generic/LoginAlert'
import SuccessResult from './shareknowledge/SuccessResult'
import ContentPage from './ContentPage';
import CategoryPage from './CategoryPage'
import Loading from './Loading'
import Profile from './profile/SideNav'
import LandingNew from './LandingNew/index'
import {Nav00DataSource} from './LandingNew/data.source';
import { enquireScreen } from 'enquire-js';
import Test from './LandingNew/Test'

const { location } = window;
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
class App extends Component {
    state={
        headerState:false,
        isMobile,
        show: !location.port,
        imagePath:null
    }
   async componentDidMount(){
       console.log(`${this.state.headerState}`)
    enquireScreen((b) => {
        this.setState({ isMobile: !!b });
      });
      if (location.port) {
        // 样式 build 时间在 200-300ms 之间;
        setTimeout(() => {
          this.setState({
            show: true,
          });
        }, 500);
      }
       await this.props.fetchUser().then(() => {
           switch (this.props.auth.status) {
               case false:
                   this.setState({
                       headerState: false
                   });
                   break;
               case true:
                   this.setState({
                       headerState: true,
                       imagePath: this.props.auth.message.imageLink
                   });
                   break;
               default:
                   this.setState({
                       headerState: false
                   });
           }
       });
       await this.props.fetchCategory();
       
    }

    renderPage(){
            return(
                <div>
                    {/* <Header1 /> */}
                    <Test
                        id="Nav0_0"
                        key="Nav0_0"
                        dataSource={Nav00DataSource}
                        isMobile={this.state.isMobile}
                        isLoggedIn={this.state.headerState}
                        imageLink={this.state.imagePath}
                        
                    />
                    <Route path="/" exact={true} component={LandingNew} />
                    <Route path="/events" component={EventsPage} />
                    <Route path="/shareKnowledge" exact={true} component={ShareKnowledge} />
                    <Route path="/loginAlert" component={LoginAlert} />
                    <Route path="/shareKnowledge/successResult" component={SuccessResult} />
                    <Route path="/profile/successResult" component={SuccessResult} />
                    <Route path="/contentPage" component={ContentPage}/>
                    <Route path="/category" component={CategoryPage}/>
                    <Route path="/loading" component={Loading} />
                    <Route path="/profile"  component={Profile} />
                    {/* <Footer /> */}
                    {/* <Footer0
                        id="Footer0_0"
                        key="Footer0_0"
                        dataSource={Footer00DataSource}
                        isMobile={this.state.isMobile}
                    />, */}

                </div>
            )
    }
    render(){
        return(
            <BrowserRouter>
            {this.renderPage()}
          </BrowserRouter>
        );
    }
}
function mapStateToProps(state) {
    return {auth: state.auth};
  }
export default connect(mapStateToProps,actions) (App);