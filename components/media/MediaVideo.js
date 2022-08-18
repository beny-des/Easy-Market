
    import React from "react";
    import YouTube from "react-youtube";
    
    export default class YoutubeVideo extends React.Component {
      
      render() {
        const {media}=this.props;
        const opts = {
          height: "502",
          width: "750",
          playerVars: {
            autoplay: 0,
          },
        };
    
        return (
          <div>
          
            <YouTube videoId={media} opts={opts} onReady={this._onReady} />
          </div>
        );
      }
    
      _onReady(event) {
        event.target.pauseVideo();
      }
    }
    