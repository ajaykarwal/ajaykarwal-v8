const axios = require('axios')
// Set API endpoints
const config = {
    apikey: '965b2342a5837db0942394bbc9a31157',
    limit: 1,
    username: 'ajaykarwal',
    selector: '#lastfmStatus',
    period: '1month' // overall | 7day | 1month | 3month | 6month | 12month
}

let lastfmStatus = ''
let trackTitle = ''
let trackArtist = ''
let trackUrl = ''
let trackArtistUrl = ''
let trackArtwork = ''
let timer

function setStatusMessage(topTrack, isTrackPlaying) {
    trackTitle = topTrack.name
    trackArtist = isTrackPlaying
        ? topTrack.artist['#text']
        : topTrack.artist.name
    trackUrl = topTrack.url
    trackArtistUrl = topTrack.artist.url
    trackArtwork = topTrack.image[2]['#text']
    lastfmStatus = isTrackPlaying
        ? `Right now (literally) I'm listening to `
        : `${this.getFriendlyTimePeriod(
              config.lastfm.period
          )} I've mainly been listening to `
}

async function fetchLastfmData() {
    const API_BASE = `https://ws.audioscrobbler.com/2.0/?method=user`
    const RECENT_TRACKS = `${API_BASE}.getRecentTracks&user=${config.username}&api_key=${config.apikey}&format=json&limit=${config.limit}`
    const TOP_TRACKS = `${API_BASE}.gettoptracks&user=${config.username}&api_key=${config.apikey}&format=json&limit=${config.limit}&period=${config.period}&extended=1`

    axios
        .get(RECENT_TRACKS)
        .then((response) => response.data)
        .then((data) => {
            // Get the first track from the response
            const firstTrack = data.recenttracks.track[0]

            // Check for 'nowplaying' attribute
            const currentlyPlaying = firstTrack['@attr']
                ? firstTrack['@attr'].nowplaying
                : null

            if (currentlyPlaying) {
                setStatusMessage(firstTrack, true)
            } else {
                // Nothing playing, query API for top track for the selected time period
                fetch(TOP_TRACKS)
                    .then((response) => response.json())
                    .then((trackData) => {
                        setStatusMessage(trackData.toptracks.track[0], false)
                    })
                    .catch((err) => {
                        console.error('Fetch Error :-S', err)
                    })
            }
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    clearInterval(timer)
}

module.exports = async function () {
    await fetchLastfmData()
    timer = setInterval(() => fetchLastfmData(), 10000)

    let template = `
          <p>
            <span className="lastfm">
              ${lastfmStatus}
              <a href=${trackUrl} target="_blank"><span className="lastfm__track-title">${trackTitle}</span></a>
              by ${
                  trackArtistUrl
                      ? `<a className="lastfm__track-artist" href=${trackArtistUrl}>${trackArtist}</a>`
                      : `<span className="lastfm__track-artist">${trackArtist}</span>`
              }</span>}.
          </p>
          <blockquote>
            👆🏼 That data is being pulled directly from Last.fm which is linked
            to my Spotify account to show what I'm listening to in real-time or
            what I've been listening to most if I'm not currenly playing
            anything.
          </blockquote>
        `

    return template
}
