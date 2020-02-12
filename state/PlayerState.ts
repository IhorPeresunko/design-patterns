import { Player } from "./Player";

export default abstract class PlayerState {
  protected player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  abstract onNext(): void
  abstract onPause(): void
  abstract onPlay(): void
}
