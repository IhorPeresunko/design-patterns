import PlayerState from "./PlayerState";
import PlayingState from "./PlayingState";

export default class ReadyState extends PlayerState {
  onPlay() {
    this.player.play();
    this.player.changeState(new PlayingState(this.player));
  }

  onNext() {
    this.player.playNext();
    this.player.changeState(new PlayingState(this.player));
  }

  onPause() {
    // ready to play. do nothing.
  }
}
