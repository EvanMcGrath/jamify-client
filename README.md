
# Jamify


Jamify reimagines the Spotify experience for musicians who love to jam along with their favorite tracks. This platform offers a seamless way for musicians to practice and jam along with their saved Spotify playlists, empowering them to hone their skills, develop their creativity, and ultimately become better musicians.
## API Reference

#### Login

```http
  GET /login
```

| Description                |
:------------------------- |
  This route begins the OAuth process to authorize the app to acces the user's spotify account.  |


#### Login/Callback

```http 
GET /login/callback
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query` | `code` | This endpoint receives the authorization code parameter from the spotify API |

#### Login/Refresh_Token

```http
  GET /login/refresh_token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `access token` | The refresh token endpoint to get a new access token from spotify (access tokens expire after 1 hour). |

#### UserInfo/me

```http 
  GET /userInfo/me
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `access token` | This endpoint checks to see if current user is a new user and either saves their info or sends the returning user's relevant information. |

#### Playlist/:id

```http
  GET /playlist/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `id` | This endpoint finds the playlists in the database and sends the song information to the front end. |

#### /song

```HTTP
  GET /song
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `access token & song URI` | This endpoint calls the spotify API parses the response and sends the relevant song informaiton. |

## Appendix

The database and subsequent logic in the back end are built around a local mongo database structure. 


## Authors

- [@EvanMcGrath](https://www.github.com/EvanMcGrath)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REDIRECT_URI`

`CLIENT_ID`

`CLIENT_SECRET`

These are developer values that you need to get through registering with Spotify. 

