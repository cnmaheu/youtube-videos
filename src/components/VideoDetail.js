import React from 'react';
import YouTube from 'react-youtube';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div data-source="youtube" className="ui embed">
				<YouTube videoId={video.id.videoId} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
