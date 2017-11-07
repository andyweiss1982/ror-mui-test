import React from 'react';
import App from '../../App/components/App'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';

export default class NavBar extends React.Component {
  constructor(){
    super();
    this.state = {open: false};
  }

  handleToggle  = () => this.setState({open: !this.state.open});
  handleClose   = () => this.setState({open: false});

  render(){
    const menu  = <IconButton onClick={this.handleToggle}>
                    <NavigationMenu />
                  </IconButton>;
    return(
      <App>
        <AppBar
          title="Title"
          iconElementLeft={menu}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </App>
    );
  }
}
