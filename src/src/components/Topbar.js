/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link as MaterialLink } from '@material-ui/core';
import Menu from './Menu';

const styles = (theme) => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    borderBottom: "1px solid rgba(200, 200, 200, 1)"
  },
  inline: {
    display: 'inline'
  },
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'inherit',
    height: '100%',
    [theme.breakpoints.up('md')]: { paddingTop: '0.8em' },
  },
  productLogo: {
    display: 'inline-block',
    marginLeft: 32,
    paddingLeft: 24,
    [theme.breakpoints.up('md')]: {
      paddingTop: '1.5em',
    },
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
  },
  iconContainer: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      marginLeft: 'auto',
    }
  },
  iconButton: {
    float: 'right',
  },
  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down('xs')]: {display: 'none'}
  },
  drawerContents: {
    backgroundColor: theme.palette.secondary.main ,
    color: theme.palette.primary.light,
    height: "100%"
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto',
    color: theme.palette.primary.dark,
  },
  indicator: {
    backgroundColor: "rgba(2, 204, 204, 1)"
  }
});

class Topbar extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      menuDrawer: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  mobileMenuOpen = () => {
    this.setState({ menuDrawer: true });
  }

  mobileMenuClose = () => {
    this.setState({ menuDrawer: false });
  }

  current = () => {
    const { currentPath } = this.props;
    if (currentPath === '/home') {
      return 0;
    }
    return 0;
  }

  render() {
    const { classes, noTabs, location } = this.props;
    const { menuDrawer, value } = this.state;

    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} className={classes.flex}>
              { !noTabs && (
                <>
                  <div className={classes.productLogo}>
                      <Typography>
                      LKF Capital
                      </Typography>
                    </div>
                  <div className={classes.iconContainer}>
                    <IconButton onClick={this.mobileMenuOpen} className={classes.iconButton} color="inherit" aria-label="Menu">
                      <MenuIcon />
                    </IconButton>
                  </div>
                  <div className={classes.tabContainer}>
                    <SwipeableDrawer anchor="right" open={menuDrawer} onClose={this.mobileMenuClose} onOpen={this.mobileMenuOpen}>
                      <div className={classes.drawerContents}>
                        <AppBar title="Menu"/>
                        <List>
                          {Menu.map((item) => ( 
                        <ListItem component={item.external ? MaterialLink : Link} href={item.external ? item.pathname : null} to={item.external ? null : { pathname: item.pathname, search: location.search }} button key={item.label}>
                              <ListItemText primary={item.label} />
                            </ListItem>
                          ))}
                        </List>
                      </div>
                    </SwipeableDrawer>
                    <Tabs
                      value={this.current() || value}
                      classes={{
                        indicator: classes.indicator
                      }}
                      textColor="primary"
                      onChange={this.handleChange}
                    >
                      {Menu.map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Tab key={index} component={item.external ? MaterialLink : Link} href={item.external ? item.pathname : null} to={item.external ? null : { pathname: item.pathname, search: location.search }} classes={{ root: classes.tabItem }} label={item.label} />
                      ))}
                    </Tabs>
                  </div>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPath: PropTypes.string,
  noTabs: PropTypes.bool,
  location: PropTypes.object.isRequired,
};

Topbar.defaultProps = {
  currentPath: '/',
  noTabs: false,
};

export default withRouter(withStyles(styles)(Topbar));
