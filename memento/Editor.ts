import { Snapshot, EditorSnapshot } from "./Snapshot";

interface Originator {
  save(): Snapshot;
  restore(snapshot: Snapshot): void;
}

class Editor implements Originator {
  private state: String;

  constructor(state: String) {
    this.state = state;
  }

  public getState() {
    return this.state;
  }

  public setState(state: String) {
    this.state = state;
  }

  public save(): Snapshot {
    return new EditorSnapshot(this.state);
  }

  public restore(snapshot: Snapshot) {
    this.state = snapshot.getState();
  }
}

export default Editor;
