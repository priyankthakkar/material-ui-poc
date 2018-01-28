import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import IconButton from 'material-ui/IconButton/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography/Typography';
import Button from 'material-ui/Button/Button';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  }
};

const Header = ({ classes, title }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        <Button color="inherit">Details</Button>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object.isRequired // eslint-disable-line
};

Header.defaultProps = {
  title: 'Place your title here'
};

export default withStyles(styles)(Header);
