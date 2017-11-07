import React from 'react';

import { blue500, indigo500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    const theme = getMuiTheme({
                    palette: {
                      primary1Color:  blue500,
                      accent1Color:   indigo500,
                    },
                  });
    return(
      <MuiThemeProvider muiTheme={theme}>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
