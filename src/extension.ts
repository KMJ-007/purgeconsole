
import * as vscode from 'vscode';
import replacer from './replacer';

export function activate(context: vscode.ExtensionContext) {
	
	const consoleOption: vscode.QuickPickItem[] =[{label:"console.log",description:"Remove/comment console.log"},{label:"console.table",description:"Remove/comment console.table"},{label:"console.time",description:"Remove/comment console.time"},{label:"console.timeLog",description:"Remove/comment console.timeLog"},{label:"console.timeEnd",description:"Remove/comment console.timeEnd"}]
	const pickOptions: vscode.QuickPickOptions = {
		matchOnDescription: true,
		matchOnDetail: true,
		placeHolder: "Type emoji name"
	  };
	  
	console.log('Congratulations, your extension "purgeConsole" is now active!');
	let textEditor = vscode.window.activeTextEditor;

	vscode.window.showInformationMessage('Hello from purgeConsole!');

	let commentAll:vscode.Disposable = vscode.commands.registerCommand('purgeConsole.CommentAllConsole', () => {
		
		
vscode.window.showQuickPick(consoleOption).then(selection => {
	console.log(selection);

	// the user canceled the selection
	if (!selection) {
	  return;
	}
	else if(textEditor){
			  replacer(textEditor,false,selection.label);
		  }
  });

	});
	let removeAll:vscode.Disposable = vscode.commands.registerCommand('purgeConsole.RemoveAllConsole', () => {
		
		vscode.window.showQuickPick(consoleOption).then(selection => {
			console.log(selection);
		
			// the user canceled the selection
			if (!selection) {
			  return;
			}
			else if(textEditor){
					  replacer(textEditor,true,selection.label);
				  }
		  });
	});



	context.subscriptions.push(commentAll,removeAll);
}

// this method is called when your extension is deactivated
export function deactivate() {}
