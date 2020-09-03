var axios = require('axios');
GetConfigmethod = (req,response) => {
    var data = {
        Action: "ListTweetsOnUserTimeline",
        ScreenName: "abdulaceez"
    }
   axios.post('https://www.tweetjs.com/API.aspx', data)
        .then(function (response) {
            return response;
        })

}

async function getData(req,response) {
    var data = {
        Action: "ListTweetsOnUserTimeline",
        ScreenName: "abdulaceez"
    }
    try {
       let res = await axios({
            url: 'https://www.tweetjs.com/API.aspx',
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            },data
        })
        if(res.status == 200){
            // test for status you want, etc
            console.log(res.status)
        }    
        // Don't forget to return something   
        return res.data
    }
    catch (err) {
        console.error(err);
    }
}











module.exports = {
    GetConfigmethod,
    getData,

};

/*
TweetJs = {
  ListTweetsOnUserTimeline : function(screenName, callback) {
      TweetJs._callApi({
              Action: "ListTweetsOnUserTimeline",
              ScreenName: screenName
          },
      callback);
  },
  Search: function (query, callback) {
      TweetJs._callApi({
          Action: "Search",
          Query: query
      }, callback);
  },
  _callApi: function (request, callback) {
      var xhr = new XMLHttpRequest();
      URL = "https://www.tweetjs.com/API.aspx";
      xhr.open("POST", URL);
      xhr.onreadystatechange = function () {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
              callback(JSON.parse(xhr.response));
          }
      }
      xhr.send(JSON.stringify(request));
  }
*/


