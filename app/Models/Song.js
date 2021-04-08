export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data.id;
  }

  get Template() {
    return `
    <img class="card-img-top" src="${this.albumArt}" alt="" onclick="app.songsController.activeSong(${this.id})">
     <div class="card-body">
     <h4 class="card-title">${this.title}</h4>
     <p class="card-text">${this.artist} / ${this.album}</p>
     </div>
     </img>
    `
  }

  get playlistTemplate() {
    return `
    <div class="row">
    <div class="col-4" src="${this.albumArt}"></div>
    <div class="col-8">${this.title} / ${this.artist}</div>
    </div>
    `;
  }

  get activeTemplate() {

    return `
    <img class="card-img-top" src="${this.albumArt}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <p class="card-text">${this.artist} / ${this.album}</p>
        <p class="card-text"> ${this.price}</p>
        <div class="card-footer">
        <audio controls>
          <source src="${this.preview}"> </audio>
          <button type="button" class="btn btn-xl btn-success ml-4 mb-5" onclick="app.songsController.addSong()">Add!</button>
        </div>
    </div>
    </img>`

  }
}
