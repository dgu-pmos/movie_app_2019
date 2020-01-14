import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({
      movies: movies,
      isLoading: false
    }) // {movies : movies}
  }

  componentDidMount() {
    this.getMovies();
    // axios 란?
    // YTS API : https://yts-proxy.now.sh/list_movies.json
    // JSX는 className으로 해줘야 안헷갈려함 -> 브라우저에서는 class로 변경됨
    // gh-pages 알아보기
    // predeploy를 먼저 실행하고 deploy 돌린다
  }
  render() {
    const {
      isLoading,
      movies
    } = this.state;
    return ( 
      <section className = "container"> 
        {
          isLoading ?
            ( <div className = "loader">
              <span className = "loader_text">Loading...</span>  
              </div>
            ) : 
            ( <div className = "movies"> 
              {
                movies.map(movie => ( 
                  <Movie 
                    key = { movie.id }
                    id = { movie.id }
                    year = { movie.year }
                    title = { movie.title }
                    summary = { movie.summary }
                    poster = { movie.medium_cover_image }
                    genres = { movie.genres }
                  />
                ))
              } 
            </div>
            )
        } 
    </section>
    )
  }
}


export default App;
