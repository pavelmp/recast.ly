var searchYouTube = (options, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search?q='+ options.query + '&part=snippet&maxResults=' + options.max + '&videoEmbeddable=true&type=video&key=' + options.key,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      callback(data);
      // callback(data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.log(data);
    }
  });
};

window.searchYouTube = searchYouTube;


window.options = {
  query: 'dogs',
  max: 5,
  key: window.YOUTUBE_API_KEY
}