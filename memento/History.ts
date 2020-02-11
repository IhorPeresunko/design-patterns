import Editor from "./Editor";
import { Snapshot } from "./Snapshot";

class EditorHistory {
  private snapshots: Snapshot[];
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    this.snapshots = [];
  }

  public save() {
    this.snapshots.push(this.editor.save());
  }

  public undo() {
    if (!this.snapshots.length) {
      return;
    }

    this.editor.restore(this.snapshots.pop());
  }
}

export default EditorHistory;
