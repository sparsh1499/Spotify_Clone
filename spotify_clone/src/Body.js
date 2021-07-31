import React from 'react'
import "./Body.css"
import Header from './Header'
import {useDataLayerValue} from './DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow"

function Body({ spotify }) {

    const [{ romantic }, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:2j0Z51eL0x6XwuS6xb5VKz`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
      return (
        <div className="body">
          <Header spotify={spotify} />
    
          <div className="body__info">
            <img src={romantic?.images[0].url} alt="" />
            <div className="body__infoText">
              <strong>PLAYLIST</strong>
              <h2>{romantic?.name}</h2>
              <p>{romantic?.description}</p>
            </div>
          </div>
    
          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon
                className="body__shuffle"
                onClick={playPlaylist}
              />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>
    
            {romantic?.tracks.items.map((item) => (
              <SongRow playSong={playSong} track={item.track} />
            ))}
          </div>
        </div>
      );
}

export default Body
