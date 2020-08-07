import { Component } from '@angular/core'
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import Quill from 'quill'

@Component({
  selector: 'quill-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  blurred = false
  focused = false

  created(event: Quill) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blurred = false
  }

  blur($event) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blurred = true
  }
}
