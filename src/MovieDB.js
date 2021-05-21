import React, { Component } from 'react';


class MovieDB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieID: 157336 // set initital load movie - Interstellar
        }
    }
    render() {
        return (
        <div>
        </div>
        )
    }
  // the api request function
  fetchApi(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      // update state with API data
      this.setState({
        movieID: data.id,
        original_title: data.original_title,
        tagline: data.tagline,
        overview: data.overview,
        homepage: data.homepage,
        poster: data.poster_path,
        production: data.production_companies,
        production_countries: data.production_countries,
        genre: data.genres,
        release: data.release_date,
        vote: data.vote_average,
        runtime: data.runtime,
        revenue: data.revenue,
        backdrop: data.backdrop_path
      })
    })

    // .catch((err) => console.log('Movie not found!'))

  } 
  fetchMovieID(movieID) {
    let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=7cf77b2fecb0e4e630aa326f9eaafbe3`
    this.fetchApi(url)
  }
}
export default MovieDB;