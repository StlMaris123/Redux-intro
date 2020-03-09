import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Hello', duration: 2.30 },
        {title: 'Perfect', duration: 4.30 },
        {title: 'Ngai Murathimi', duration: 3.55 },
        {title: 'Twilight', duration: 4.20 }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if action.type === 'SONG_SELECTED' {
        return action.payload        
    };
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});