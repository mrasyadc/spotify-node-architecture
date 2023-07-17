import express from "express";

import {
  addMusic,
  checkPlaylist,
  deleteSong,
  playSong,
  checkPlaylistSorted,
} from "./services/transaction.js";
const app = express();

// http body only supported on POST and PUT
app.use(express.json());

app.post("/add-music", (req, res) => {
  try {
    const { title, url, artist } = req.body;
    if (!title || !url || !artist) {
      throw new Error("Insufficient Parameter");
    }
    let newSong = addMusic(title, url, artist);
    res.status(201).json({ newSong });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/playlists", (req, res) => {
  try {
    res.json(checkPlaylist());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/playlists-sorted", (req, res) => {
  try {
    res.json(checkPlaylistSorted());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete("/delete-music", (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      throw new Error("Insufficient Parameter");
    }
    res.status(201).json(deleteSong(id));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/play/:id", (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("Insufficient Parameter");
    }
    res.status(201).redirect(playSong(id));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
