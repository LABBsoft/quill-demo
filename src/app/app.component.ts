import { Component, Inject } from '@angular/core'

import { HelloWorldBlot } from './blots/HelloWorldBlot'

import Quill from 'quill'

const parchment = Quill.import('parchment')
const block = parchment.query('block')
block.tagName = 'DIV'


Quill.register(HelloWorldBlot, true);
Quill.register(block /* or NewBlock */, true)

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngx-quill-example'
}
