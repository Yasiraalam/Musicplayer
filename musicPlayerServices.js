import TrackPlayer from "react-native-track-player";
import {playListData} from "./src/constants";
export async function setupPlayer() {
   let isSetup = false;
   try{
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
   }catch (error) {
        await TrackPlayer.setupPlayer();   
        isSetup = true;
   }finally{
        return isSetup;
   }
}
export async function addTracks() {
    await TrackPlayer.add(playListData);
}



export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause,()=>{
        TrackPlayer.pause();
    })
    TrackPlayer.addEventListener(Event.RemotePlay,()=>{
        TrackPlayer.play();
    })
    TrackPlayer.addEventListener(Event.RemoteNext,()=>{
        TrackPlayer.skipToNext();
    })
    TrackPlayer.addEventListener(Event.RemotePrevious,()=>{
        TrackPlayer.skipToPrevious();
    })
    TrackPlayer.addEventListener(Event.RemoteSeek, (data) => {
        TrackPlayer.seekTo(data.position);
    });
    TrackPlayer.addEventListener(Event.RemoteStop, () => {
        TrackPlayer.destroy();
    });
    TrackPlayer.addEventListener(Event.RemoteJumpForward, (data) => {
        TrackPlayer.seekTo(data.interval + TrackPlayer.getPosition());
    }
}