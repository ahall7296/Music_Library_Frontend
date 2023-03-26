import React from 'react'
import axios from 'axios';
function MusicTable({ music, setMusic }) {
    function DeleteSong(id) {
        axios.delete(`http://localhost:8000/api/songs/${id}/`).then((response) => {
          setMusic(music.filter((item) => item.id !== id));
          console.log("Music deleted successfully!");
        });
      }
  return (
    <div>
      <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Artist</th>
      <th scope="col">Album</th>
      <th scope="col">Release Date</th>
      <th scope="col">Genre</th>
      <th scope="col">Like</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {music.map((item, index) => {
            return  <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.artist}</td>
            <td>{item.album}</td>
            <td>{item.release_date}</td>
            <td>{item.genre}</td>
            <td>{item.like}</td>
            <td><button class="btn btn-danger">Delete</button><button class="btn btn-primary">Edit</button></td>
          </tr>
          })}
   
    </tbody>
</table>
    </div>
  )
}

export default MusicTable