import PlayerState from "./PlayerState";
import PausedState from "./PausedState";

export default class PlayingState extends PlayerState {
  public onPlay() {
    // playing. do nothing
  }

  public onPause() {
    this.player.pause();
    this.player.changeState(new PausedState(this.player));
  }

  public onNext() {
    this.player.playNext();
  }
}
