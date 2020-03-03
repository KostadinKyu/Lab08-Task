import * as React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

//UI Elements imports

interface IProps {
  history: any,
  classes: any,
  isUserJustLogged: boolean,
  setUserJustLoggedToFalse: any,
}

interface IState {
  selectedPage: string,
  isLoading: boolean
}

class HeaderComponent extends React.Component<IProps, IState> {

  growl: any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      selectedPage: '',
      isLoading: false,
    }
  }

  componentWillMount() {
    let selectedPage = window.location.href.split('/').pop();
    if (selectedPage)
      this.setState({ selectedPage });
  }

  public logOut = () => {
    

  }

  public redirectTo = (path) => {
   
    this.props.history.push(path);
  }

  public toggleResponsiveMenu = () => {
    var x = document.getElementById("mainMenu");
    if (x) {
      if (x.className === "main-menu") {
        x.className += " responsive";
      } else {
        x.className = "main-menu";
      }
    }
  }

  public getIndex = () => { return window.location.pathname.toString().indexOf('mobile'); }
  public BASE_ENV_PATH = '';


  //Handlers for back button and history

  render() {
    const { selectedPage } = this.state;
    
    return (
      <div>
        <div className='SHAPE' style={{ backgroundColor: '#333', width: '100%', minHeight: '38px', height: '5vh', position: 'fixed', zIndex: 1000, display: 'flex', alignItems: 'center' }}>
          <div className='app-header' style={{ alignItems: 'center' }}>

            <ul className="main-menu" id="mainMenu">
              <li className={selectedPage === 'home' || selectedPage === '' ? 'selectedPage' : undefined} onClick={() => this.redirectTo(this.BASE_ENV_PATH + '/home')}>
                {'Home'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
} // end of component
const mapsStateToProps = state => {
  return {
    client: state.common.client,
  }
}
const mapDispatchToProps = dispatch => {
  return {};
}
export default withRouter(connect(mapsStateToProps, mapDispatchToProps)(HeaderComponent));
