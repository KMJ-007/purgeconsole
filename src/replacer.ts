import * as vscode from "vscode"
const replacer= (textEditor:vscode.TextEditor,remove:boolean) => {
  
    const text = textEditor.document.getText();
    let replacer;
    if(remove){
      replacer =""
    }else{
      replacer="// console.log($1)"
    }
    //for calculating range
    const firstLine = 0;
    const firstLineRef = textEditor.document.lineAt(firstLine);
    const firstChar = firstLineRef.range.start.character;
  
    const lastLine = textEditor.document.lineCount - 1;
    const lastLineRef = textEditor.document.lineAt(lastLine);
    const lastChar = lastLineRef.range.end.character;
  
    const replacedDocument = text.replace(
      /console\.log\(([^)]+)\)/g,
      replacer
    );
    const textRange = new vscode.Range(
      0,
      firstChar,
      lastLine,
      lastChar
    );
  
    textEditor.edit((editBuilder) => {
      editBuilder.replace(textRange, replacedDocument);
    });
  
  };
  
  export default replacer;