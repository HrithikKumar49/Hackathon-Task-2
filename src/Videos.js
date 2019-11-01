import React from "react";
import axios from "axios";

class Videos extends React.Component {
  constructor() {
    super();
    this.state = {
      videoUrls: []
    };
  }

  async componentDidMount() {
    try {
      const query = "aayam nit agartala";
      const api_key = "AIzaSyDArp4tFOx346QMRhDCw5DHu1k0cK747s8";
      const url = "https://www.googleapis.com/youtube/v3/search";
      const configs = {
        params: {
          part: "snippet",
          q: query,
          maxResults: 10,
          "key": api_key
        }
      };

      const res = await axios.get(url, configs);

      let videoUrlList = [];
      res.data.items.forEach(element => {
        videoUrlList.push(
          "https://www.youtube.com/embed/" + element.id.videoId
        );
      });

      this.setState({
        videoUrls: videoUrlList
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>        
        {this.state.videoUrls.map(url => {
          return (
            <iframe title="uni"
            width="500"
            height="300"
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowFullScreen"
            style={{margin:'20px', boxShadow: '10px 10px 5px #888'}}
            ></iframe>
          );
        })}
      </div>
    );
  }
}

export default Videos;
