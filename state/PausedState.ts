import PlayerState from "./PlayerState";
import PlayingState from "./PlayingState";

export default class PausedState extends PlayerState {
  public onPlay() {
    this.player.play();
    this.player.changeState(new PlayingState(this.player));
  }

  public onPause() {
    // paused. do nothing
  }

  public onNext() {
    this.player.playNext();
    this.player.changeState(new PlayingState(this.player));
  }
}
