let timer;
const CONFIG = {
	apikey: '965b2342a5837db0942394bbc9a31157',
	limit: 1,
	username: 'ajaykarwal',
	selector: '#lastfmStatus',
	period: '7day' // overall | 7day | 1month | 3month | 6month | 12month
};

var lastfmify = function () {
	const API_BASE = `https://ws.audioscrobbler.com/2.0/?method=user`;
	const RECENT_TRACKS = `${API_BASE}.getRecentTracks&user=${CONFIG.username}&api_key=${CONFIG.apikey}&format=json&limit=${CONFIG.limit}`;
	const TOP_TRACKS = `${API_BASE}.gettoptracks&user=${CONFIG.username}&api_key=${CONFIG.apikey}&format=json&limit=${CONFIG.limit}&period=${CONFIG.period}&extended=1`;

	// Query DOM for element to place the message
	const lastfmStatusField = document.querySelector(CONFIG.selector);

	// Convert time period value to friendly message
	function getFriendlyTimePeriod(period) {
		var timePeriod = '';
		switch (period) {
			case 'overall':
				timePeriod = 'For a while now';
				break;

			case '7day':
				timePeriod = 'This week';
				break;

			case '1month':
				timePeriod = 'This month';
				break;

			case '3month':
				timePeriod = 'The past few months';
				break;

			case '6month':
				timePeriod = 'Most of this year';
				break;

			case '12month':
				timePeriod = 'This year';
				break;

			default:
				timePeriod = 'These days';
				break;
		}
		return timePeriod;
	}

	if (lastfmStatusField) {
		// Query LastFm API for recent tracks
		fetch(RECENT_TRACKS).then(response => {
			if (response.status !== 200) {
				console.warn('Looks like there was a problem. Status Code: ' + response.status);
				return;
			}

			response.json().then(data => {
				// Get the first track from the response
				var firstTrack = data.recenttracks.track[0];

				// Check for 'nowplaying' attribute
				var currentlyPlaying = firstTrack['@attr'] ? firstTrack['@attr'].nowplaying : null;

				if (currentlyPlaying) {
					updateDOM(firstTrack, true);
				} else {
					// Nothing playing, query API for top track for the selected time period
					fetch(TOP_TRACKS).then(response => {
						if (response.status !== 200) {
							console.warn('Looks like there was a problem. Status Code: ' + response.status);
							return;
						}
						response.json().then(trackData => {
							updateDOM(trackData.toptracks.track[0], false);
						});
					}).catch = err => {
						console.error('Fetch Error :-S', err);
					};
				}
			});
		}).catch = err => {
			console.error('Fetch Error :-S', err);
		};
	}
	// Update the DOM with track info from API response
	function updateDOM(topTrack, isTrackPlaying) {
		var trackTitle = topTrack.name;
		var trackArtist = isTrackPlaying ? topTrack.artist['#text'] : topTrack.artist.name;
		var trackArtistUrl = topTrack.artist.url;
		var trackArtwork = topTrack.image[2]['#text'];
		var trackUrl = topTrack.url;
		var lastfmStatus = isTrackPlaying
			? `Right now (literally) I'm listening to `
			: `${getFriendlyTimePeriod(CONFIG.period)} I've mainly been listening to `;
		var template = `
        <p class="lastfm">
                ${lastfmStatus} <a href=${trackUrl} target="_blank" class="lastfm__track-title">${trackTitle}</a>
            by ${
				trackArtistUrl
					? `<a class="lastfm__track-artist" href=${trackArtistUrl}>${trackArtist}</a>`
					: `<span class="lastfm__track-artist">${trackArtist}</span>`
			}
            .
        </p>
        <blockquote class="primary">
            👆🏼 That data is being pulled directly from Last.fm which is linked
            to my Spotify account to show what I'm listening to in real-time or
            what I've been listening to most if I'm not currenly playing
            anything.
        </blockquote>
        `;

		lastfmStatusField.innerHTML = template;
	}
	clearInterval(this.timer);
	timer = null;
};

// Initialise and repeat
lastfmify();
timer = setInterval(() => lastfmify(), 30000);
