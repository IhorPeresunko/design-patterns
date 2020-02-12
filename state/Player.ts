import PlayerState from "./PlayerState";
import ReadyState from "./ReadyState";

export class Player {
  private state: PlayerState;
  private activeTrack: number;
  private playlist: Array<string>;

  constructor() {
    this.state = new ReadyState(this);
    this.playlist = new Array(5).fill(0).map((el, i) => `Song #${i + 1}`);
    this.activeTrack = 0;
  }

  public changeState(state: PlayerState) {
    this.state = state;
  }

  public onPlay() {
    this.state.onPlay();
  }

  public onPause() {
    this.state.onPause();
  }

  public onNext() {
    this.state.onNext();
  }

  public play() {
    console.log('Play track', this.playlist[this.activeTrack]);
  }

  public playNext() {
    if (this.activeTrack >= this.playlist.length - 1) {
      return;
    }

    console.log('Play next');

    ++this.activeTrack;
    this.play();
  }

  public pause() {
    console.log('Pause track');
  }
}
