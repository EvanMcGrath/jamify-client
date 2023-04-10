import axios from "axios";




//// Map for localStorage keys
const LOCALSTORAGE_KEYS = {
    accessToken: 'spotify_access_token',
    refreshToken: 'spotify_refresh_token',
    expireTime: 'spotify_token_expire_time',
    timestamp: 'spotify_token_timestamp',
};

//// Map to retrieve localStorage values 
const LOCALSTORAGE_VALUES = { 
    accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
    refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
    expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
    timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
};


export const logout = () => {
    /// Clear all localStorage items
    for (const property in LOCALSTORAGE_KEYS) {
        window.localStorageRemoveItem(LOCALSTORAGE_KEYS[property])
    }

    // Navigate to homepage
    window.location = window.location.origin;
}


const refreshToken = async () => {

    try {
        if( !LOCALSTORAGE_VALUES.refreshToken || LOCALSTORAGE_VALUES.refreshToken === 'undefined' || 
        ((Date.now() - Number(LOCALSTORAGE_VALUES.timestamp)) / 1000) < 1000) {
            console.error.apply('No refresh token available');
            logout();
        }

        const { data } = await axios.get(`http://localhost:3100/login/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`);

        window.localStorage.setItem(LOCALSTORAGE_KEYS.accessToken, data.access_token);
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now())

    } catch (e) {
        console.error(e)
    }

} 



const hasTokenExpired = () => {
    const { accessToken, timestamp, expireTime } = LOCALSTORAGE_VALUES;
    if( !accessToken || !timestamp ) {
        return false;
    }
    const millisecondsElapsed = Date.now() - Number(timestamp); 
    return (millisecondsElapsed / 1000 ) > (Number(expireTime) - 300);
    
};




const getAccessToken = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const queryParams = { 
        [LOCALSTORAGE_KEYS.accessToken] : urlParams.get('access_token'),
        [LOCALSTORAGE_KEYS.refreshToken] : urlParams.get('refresh_token'),
        [LOCALSTORAGE_KEYS.expireTime] : urlParams.get('expires_in'),
    }
    
    const hasError = urlParams.get('error')

    // If there's an error OR the token in localStorage has expired, refresh the token
    if ( hasError || hasTokenExpired() || LOCALSTORAGE_VALUES.accessToken === 'undefined' ) {
        refreshToken();
      }

    /// If there is a valid token in localStorage use that
    if ( LOCALSTORAGE_VALUES.accessToken && LOCALSTORAGE_VALUES.accessToken !== 'undefined' ) {
        return LOCALSTORAGE_VALUES.accessToken;
    }

    // If there is a token in the URL query params, user is logging in for the first time
    if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {

        // Store the query params in localStorage
        for (const property in queryParams) {
        window.localStorage.setItem(property, queryParams[property]);
        }

        // Set timestamp
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());

        // Return access token from query params
        return queryParams[LOCALSTORAGE_KEYS.accessToken];
    } 

    return false
};




export const accessToken = getAccessToken();