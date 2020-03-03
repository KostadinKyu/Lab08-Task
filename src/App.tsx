import * as React from "react";
import Content from "./components/content/content";
import { BrowserRouter, Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import blue from '@material-ui/core/colors/blue';
import * as Constants from './common/constants';
// import './assets/css/layout.css';
import './assets/css/layout.scss';
import './assets/css/index.css';
import './assets/css/mainMenu.css';

const theme = createMuiTheme({
  typography: {
  },
  overrides: {
    MuiFormControl: {
      marginNormal: {
        marginTop: 5,
        marginBottom: 0,
        width: '100%'
      },
      root: {
        width: '100%'
      }
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: '0px'
      }
    },
    MuiIconButton: {
      root: {
        padding: '0px',
        paddingRight: '5px'
      }
    },
    MuiTypography: {
      h6: {
        fontSize: '1.2em'
      }
    },
    MuiDialog: {
      paper: {
        margin: 0,
        maxWidth: '90% !important'
      }
    },
    MuiInputBase: {
      marginDense: {
        fontSize: '10px',
      }
    },
    MuiDialogTitle: {
      root: {
        padding: '0px 10px !important',
      }
    },
    MuiDialogContent: {
      // root: {
      //   padding: '10px 10px 50px 10px !important',
      // }
    }
  },
  palette: {
    primary: blue
  },
});


class App extends React.Component {

  public render() {
    // if (window.innerWidth >= Constants.device.desktop) {
    //   theme.overrides = { ...theme.overrides, MuiDialog: { paper: { maxWidth: '80% !important', margin: 0 } } }
    // }

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div>
              <div>
                <Content />
              </div>
              <CookieConsent
                location="bottom"
                buttonText="OK"
                className=""
                cookieName="MedXchangeCookieConsent"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
              >
                We have placed cookies on your device to help make this website better. If you don't close the website we’ll assume you’re OK to continue.{" "}
                <Link to='/cookie-policy' style={{ color: 'orange' }}>Read more</Link>
              </CookieConsent>

            </div>
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>

      </BrowserRouter>
    );
  }
}

export default App;


