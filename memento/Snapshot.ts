
export interface Snapshot {
  getState(): String;
};

export class EditorSnapshot implements Snapshot {
  private state: String;

  constructor(state: String) {
    this.state = state;
  }

  public getState() {
    return this.state;
  }
}
