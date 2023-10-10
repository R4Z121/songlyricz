import axios from "axios";

export default class DataSource {
  static headers() {
    return {
      'X-RapidAPI-Key': 'YOUR_KEY',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  }

  static getSongLyrics(songId) {
    const options = {
      method: 'GET',
      url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
      params: {id: songId},
      headers: this.headers()
    }

    let lyrics = axios.request(options)
      .then(res => {
        const result = res.data.lyrics.lyrics.body.html;
        return result;
      })
      .catch(err => {
        console.log(err);
        return "<p>oops, something went wrong :(</p>";
      });

    return lyrics
  }

  static getSongDetail(songId) {
    const options = {
      method: 'GET',
      url: 'https://genius-song-lyrics1.p.rapidapi.com/song/details/',
      params: {id: songId},
      headers: this.headers()
    };

    const songDetailData = axios.request(options)
      .then(res => {
        const result = res.data.song;
        return result;
      })
      .catch(err => {
        console.log(err);
        return false;
      })

    return songDetailData;
  }

  static getSongList(keyword,page) {
    const options = {
      method: 'GET',
      url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
      params: {
        q: keyword,
        per_page: '12',
        page: page
      },
      headers: this.headers()
    };

    const searchData =  axios.request(options)
      .then(response => {
        const result = response.data.hits;
        console.log("success fetching data !");
        return result;
      })
      .catch(err => {
        console.log(err);
        return "";
      });
    return searchData;
  }
}