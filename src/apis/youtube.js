import axios from 'axios';

const KEY = 'AIzaSyB1CJow15KPRXrJcaw6s5Sei0P2srl0It0';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
