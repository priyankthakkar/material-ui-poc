import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography/Typography';
import MovieCard from './MovieCard';
import { getMovies } from '../constants/moviesConstants';

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    padding: 10
  }
});

class MoviesContainer extends Component {
  static renderElements(movies) {
    if (movies && movies.length > 0) {
      return <Grid container>{movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}</Grid>;
    }

    return (
      <Typography type="display1" gutterBottom>
        No movies are available.
      </Typography>
    );
  }

  render() {
    const movies = getMovies();
    const { classes } = this.props;
    return <div className={classes.root}>{MoviesContainer.renderElements(movies)}</div>;
  }
}

MoviesContainer.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line
};

export default withStyles(styles)(MoviesContainer);
