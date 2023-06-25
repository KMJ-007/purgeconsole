import * as vscode from "vscode"
const replacer= (textEditor:vscode.TextEditor,remove:boolean,whatToRemove:String) => {

    let consoleVariable = whatToRemove.split(/console./gm)[1].split(/\(\)/);
    console.log(`// console.${consoleVariable} $1`)
    console.log(consoleVariable);
    const text = textEditor.document.getText();
    let replacer;
    if(remove){
      replacer =""
    }else{
      replacer=`/*console.${consoleVariable}($1)*/`.toString();
    }
    //for calculating range
    const firstLine = 0;
    const firstLineRef = textEditor.document.lineAt(firstLine);
    const firstChar = firstLineRef.range.start.character;
  
    const lastLine = textEditor.document.lineCount - 1;
    const lastLineRef = textEditor.document.lineAt(lastLine);
    const lastChar = lastLineRef.range.end.character;
   
    const replacedDocument = text.replace(
      new RegExp(`console\\.${consoleVariable}\\(([^)]*?)\\)+`, 'g'),
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