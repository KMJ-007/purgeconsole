
import * as vscode from 'vscode';
import replacer from './replacer';

export function activate(context: vscode.ExtensionContext) {
	
	
	console.log('Congratulations, your extension "purgeConsole" is now active!');
	let textEditor = vscode.window.activeTextEditor;

	vscode.window.showInformationMessage('Hello from purgeConsole!');

	let commentAll:vscode.Disposable = vscode.commands.registerCommand('purgeConsole.CommentAllConsole', () => {
		
		if(textEditor){
			replacer(textEditor,false);
		}

	});
	let removeAll:vscode.Disposable = vscode.commands.registerCommand('purgeConsole.RemoveAllConsole', () => {
		
		if(textEditor){
			replacer(textEditor,true);
		}

	});



	context.subscriptions.push(commentAll,removeAll);
}

// this method is called when your extension is deactivated
export function deactivate() {}
