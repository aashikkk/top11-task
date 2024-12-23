import React, { useState } from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
    const [playing, setPlaying] = useState(false);

    return (
        <div>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=aL27fX5kv9U"
                playing={playing}
            />
        </div>
    );
}

export default VideoPlayer;
