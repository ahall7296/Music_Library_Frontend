import React, { useState } from "react";
import './Modal.css'
import axios from "axios";

function Modal({ item, setIsModalOpen, setMusic, music, isModalOpen }) {
  const [title, setTitle] = useState(item.title || "");
  const [artist, setArtist] = useState(item.artist);
  const [album, setAlbum] = useState(item.album);
  const [genre, setGenre] = useState(item.genre);
  const [release_date, setReleaseDate] = useState(item.release_date);
  console.log (item.id)
  function updateSong() {
    axios
      .put(`http://localhost:8000/api/songs/${item.id}/`, {
        title,
        artist,
        album,
        genre,
        release_date,
      })
      .then((response) => {
        console.log(response);
        const updatedMusic = music.map((music) => {
          if (music.id === item.id) {
            return {
              ...music,
              title: title,
              artist: artist,
              album: album,
              genre: genre,
              release_date: release_date,
            };
          }
          setIsModalOpen(false);
          return music;
        });

        setMusic(updatedMusic);
      }).catch((error) => {
          console.log(error);
      });
  }
  return (
<>
      {isModalOpen ? (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              X
            </button>
            <div className="modal-body"><form>
  <label htmlFor="title">Title:</label>
  <input type="text" id="title" name="title" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)}/>

  <label htmlFor="artist">Artist:</label>
  <input type="text" id="artist" name="artist" className="form-input" value={artist} onChange={(e) => setArtist(e.target.value)}/>

  <label htmlFor="album">Album:</label>
  <input type="text" id="album" name="album" className="form-input" value={album} onChange={(e) => setAlbum(e.target.value)}/>

  <label htmlFor="genre">Genre:</label>
  <input type="text" id="genre" name="genre" className="form-input" value={genre} onChange={(e) => setGenre(e.target.value)}/>
  <label htmlFor="release_date">Release Date:</label>
  <input type="date" id="release_date" name="release_date" className="form-input" value={release_date} onChange={(e) => setReleaseDate(e.target.value)}/>

  <button type="submit" onClick={()=>updateSong()} className="form-submit">Submit</button>
</form></div>
  
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal