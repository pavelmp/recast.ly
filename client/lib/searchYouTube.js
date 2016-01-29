var searchYouTube = (options, callback) => {
  var parameters = {
    q: options.query,
    part: 'snippet',
    maxResults: options.max,
    videoEmbeddable: true,
    type: 'video',
    key: YOUTUBE_API_KEY
  }

  $.get('https://www.googleapis.com/youtube/v3/search',parameters).done(callback);
};

window.searchYouTube = searchYouTube;