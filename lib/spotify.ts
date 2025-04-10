const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';

export async function getAccessToken() {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token!,
      }).toString(),
      cache: 'no-store',
    });

    return response.json();
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    return null;
  }
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken();

  try {
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    if (response.status === 204 || response.status > 400) {
      return { isPlaying: false };
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return {
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    };
  } catch (error) {
    console.error('Error getting now playing:', error);
    return { isPlaying: false };
  }
}

export async function getTopTracks() {
  const { access_token } = await getAccessToken();

  try {
    const response = await fetch(`${TOP_TRACKS_ENDPOINT}?time_range=short_term&limit=5`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    });

    if (response.status === 204 || response.status > 400) {
      return [];
    }

    const { items } = await response.json();

    const tracks = items.map((track: any) => ({
      artist: track.artists.map((_artist: any) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
      album: track.album.name,
      albumImageUrl: track.album.images[0]?.url,
    }));

    return tracks;
  } catch (error) {
    console.error('Error getting top tracks:', error);
    return [];
  }
}
