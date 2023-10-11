import axios from "axios";

export default class DataSource {
  static headers() {
      return {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      };
    }

  static options(endpoint, params) {
    const baseUrl = 'https://genius-song-lyrics1.p.rapidapi.com';
    return {
      method: 'GET',
      url: baseUrl + endpoint,
      params: params,
      headers: this.headers()
    };
  }

  static getSongLyrics(songId) {
    let lyrics = axios.request(this.options('/song/lyrics/', {id: songId}))
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
    const songDetailData = axios.request(this.options('/song/details/', {id: songId}))
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
    const searchData =  axios.request(this.options('/search/', {q: keyword, per_page: '12', page: page}))
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