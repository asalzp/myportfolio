import React from "react";
import "./Entertainment.css";
import movies from '../images/movies.jpg';
import music from '../images/music.jpg';

function Entertainment() {
  const openSpotify = () => {
    window.open(
      "https://open.spotify.com/playlist/2Om3u1YOBaK8Mp3iFhoJDv",
      "_blank"
    );
  };

  const openMovies = () => {
    window.open("https://www.imdb.com/user/ur136260470/watchlist", "_blank");
  };

  return (
    <div id="entertainment" className="section-container">
      <div className="page_title">
        <h1>Welcome to The Wall of Entertainment!</h1>
      </div>
      <div className="page_info">
        <p>
          {`Here there are some fun stuff you might want to take a look at :)`}{" "}
        </p>
      </div>
      <div className="images">
        <div className="movies_img neon-border" onClick={openMovies}>
          <img src={movies} alt="movies"></img>
          <div className="text-movies"><p>Top 10 Movies Everyone Should Watch</p></div>
        </div>
      
        <div className="music_img neon-border" onClick={openSpotify}>
          <img src={music} alt="music"></img>
          <div className="text-music">Spotify Playlist for House Music Lovers</div>
        </div>
      </div>
    </div>
  );
}

export default Entertainment;