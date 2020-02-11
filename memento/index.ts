import Editor from "./Editor";
import EditorHistory from "./History";

const editor = new Editor('Fluffy');
const editorHistory = new EditorHistory(editor);

editorHistory.save();

editor.setState('FluffyKing');
editorHistory.save();

editor.setState('FluffyKingDestroyer');

console.log(editor.getState());

editorHistory.undo();
console.log(editor.getState());

editorHistory.undo();
console.log(editor.getState());

editorHistory.undo();
console.log(editor.getState());
