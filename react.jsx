import React from 'react';
import './styles.css';

const songs = [
  {
    id: 1,
    title: 'Song 1',
    artist: 'Artist 1',
    album: 'Album 1',
    cover: 'song1.jpg',
  },
  {
    id: 2,
    title: 'Song 2',
    artist: 'Artist 2',
    album: 'Album 2',
    cover: 'song2.jpg',
  },
  // Add more songs here...
];

const FeaturedPlaylists = () => (
  <div className="featured-playlists">
    <h2>Featured Playlists</h2>
    <div className="playlist-grid">
      <div className="playlist">
        <img src="playlist1.jpg" alt="Playlist 1" />
        <h3>Party Mix</h3>
        <p>Created by John Doe</p>
      </div>
      <div className="playlist">
        <img src="playlist2.jpg" alt="Playlist 2" />
        <h3>Chill Vibes</h3>
        <p>Created by Jane Smith</p>
      </div>
      {/* Add more featured playlists here... */}
    </div>
  </div>
);

const NewReleases = () => (
  <div className="new-releases">
    <h2>New Releases</h2>
    <div className="album-grid">
      <div className="album">
        <img src="album1.jpg" alt="Album 1" />
        <h3>Album 1</h3>
        <p>Artist 1</p>
      </div>
      <div className="album">
        <img src="album2.jpg" alt="Album 2" />
        <h3>Album 2</h3>
        <p>Artist 2</p>
      </div>
      {/* Add more new releases here... */}
    </div>
  </div>
);

const PopularSongs = () => (
  <div className="popular-songs">
    <h2>Popular Songs</h2>
    <div className="song-list">
      {songs.map((song) => (
        <div key={song.id} className="song">
          <img src={song.cover} alt={song.title} />
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
        </div>
      ))}
    </div>
  </div>
);

const App = () => (
  <div className="app">
    <header>
      <nav>
        <h1 className="logo">Music Streaming</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#featured-playlists">Featured Playlists</a>
          </li>
          <li>
            <a href="#new-releases">New Releases</a>
          </li>
          <li>
            <a href="#popular-songs">Popular Songs</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="home">
        <h1>Discover New Music</h1>
      </section>

      <section id="featured-playlists">
        <FeaturedPlaylists />
      </section>

      <section id="new-releases">
        <NewReleases />
      </section>

      <section id="popular-songs">
        <PopularSongs />
      </section>
    </main>

    <footer>
      <div className="music-player">
        <img src="song1.jpg" alt="Now Playing" />
        <div className="music-details">
          <h3>{songs[0].title}</h3>
          <p>{songs[0].artist}</p>
        </div>
        <div className="music-controls">
          <button className="previous-button">Previous</button>
          <button className="play-pause-button">Play</button>
          <button className="next-button">Next</button>
        </div>
      </div>
    </footer>
  </div>
);

export default App;
