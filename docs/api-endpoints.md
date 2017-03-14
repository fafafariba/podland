# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Subscriptions

- `GET /api/subsriptions`
- `POST /api/subsriptions`
- `GET /api/subsriptions/:id`
- `DELETE /api/subsriptions/:id`

### Playlists

- `GET /api/playlists`
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists/:id`

### Podcasts

- `GET /api/podcasts`
- `POST /api/podcasts`
- `GET /api/podcasts/:id`


### External API
- Audiosear.ch or iTunes
  - App Id: 5ec728e28077f462ff675255b06744a2ad455c9219049b9e5fd65b43891a3024
  - Secret: 69415314133944bb81fce6b007fdbd4d2f5a87b293e6d0b02f234d0e72e1e7fa
- `GET `
  - Podcast by id
  - Podcast episode by id
