import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar/Avatar';
import Typography from 'material-ui/Typography/Typography';
import red from 'material-ui/colors/red';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu from 'material-ui/Menu/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';

const styles = {
  avatar: {
    backgroundColor: red[500],
    width: 60,
    height: 60
  },
  card: {
    height: 600
  },
  poster: {
    height: 400
  }
};

const options = ['Details'];

const ITEM_HEIGHT = 40;

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(e) {
    this.setState({
      anchorEl: e.currentTarget
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null
    });
  }

  render() {
    const { classes, movie } = this.props;
    const { anchorEl } = this.state;

    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card raised className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Rated" className={classes.avatar}>
                {movie.Rated}
              </Avatar>
            }
            action={
              <div>
                <IconButton onClick={this.handleClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={this.state.anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: 200
                    }
                  }}
                >
                  {options.map(option => (
                    <MenuItem key={option} onClick={this.handleClose}>
                      <Link // eslint-disable-line
                        to={`/details/${movie.imdbID}`}
                      >
                        {option}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            }
            title={`${movie.Title} - (${movie.Year})`}
            subheader={movie.Genre}
          />
          <CardMedia image={movie.Poster} title="Contemplative Reptile" className={classes.poster} />
          <CardContent>
            <Typography component="p">{movie.Plot}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  movie: PropTypes.object.isRequired // eslint-disable-line
};

export default withStyles(styles)(MovieCard);
