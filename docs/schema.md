<h1>Database Schema</h1>

<h2>User</h2>
  <ul>
    <li>name</li>
    <li>email</li>
    <li>password_digest</li>
    <li>session_token</li>
  </ul>
 <h2>Podcast</h2>
  <ul>
    <li>name</li>
    <li>description</li>
    <li>category</li>
    <li>image_url</li>
    <li>link</li>
    <li>thumb_url</li>
  </ul>

  <h2>Subscriptions</h2>
  <ul>
    <li>user_id</li>
    <li>podcast_id</li>
  </ul>

  <h2>Episode</h2>
  <ul>
    <li>podcast_id</li>
    <li>name</li>
    <li>description</li>
    <li>date</li>
    <li>audio_url</li>
    <li>image_url</li>
  </ul>

  <h2>Playlist</h2>
  <ul>
    <li>user_id</li>
    <li>episode_id</li>
  </ul>
  
  <h2>Track</h2>
    <ul>
    <li>playlist_id</li>
    <li>episode_id</li>
  </ul>
