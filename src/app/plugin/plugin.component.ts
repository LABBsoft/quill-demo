import { Component } from '@angular/core'
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'

let quill = null;

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html'
})
export class PluginComponent {
  content = ''
  created(editor) {
    quill = editor;
    console.log(quill);
  }

  handleClick(event: Event) {
    let value = prompt('Who are you?');
    let range = quill.getSelection(true);
    quill.insertText(range.index, '\n');
    quill.insertEmbed(range.index + 1, 'helloWorld', value);
    quill.setSelection(range.index + 2);

  }

  handleExport(event: Event) {
    console.log(quill.getContents());
  }
}
