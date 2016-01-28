var searchYouTube = (options, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search?q='+ options.query + '&part=snippet&maxResults=' + options.max + '&videoEmbeddable=true&type=video&key=' + options.key,
    type: 'GET',
    contentType: 'application/json',
    success: callback,
    error: function (data) {
      console.log(data);
    }
  });
};

window.searchYouTube = searchYouTube;