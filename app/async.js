exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
      return new Promise((resolve, reject) => {
        if (value) {resolve(value)} else {reject(false)}
      });
  },

  manipulateRemoteData: function(url) {
      return new Promise((resolve, reject) => {
        httpRequest = new XMLHttpRequest();
        httpRequest.onload = () => {
            if (httpRequest.status >= 200 && httpRequest.status < 300) {
                var res = JSON.parse(httpRequest.responseText);
                var people = res.people.map((val) => val.name)
                resolve(people.sort());
            } else {
                reject(false)
            }
        }
        httpRequest.open('GET', url);
        httpRequest.send();
      });
  }
};
