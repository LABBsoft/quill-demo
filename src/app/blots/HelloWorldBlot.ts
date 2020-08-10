import Parchment from 'parchment';
import Quill from 'quill';

let Embed = Quill.import('blots/embed');

export class HelloWorldBlot extends Embed {
  static create(name: string) {

    // Create blot & children
    let node = super.create();
    let nameInput = document.createElement('input');

    // Initialize values
    node.innerHTML = "Hello, ";
    node.setAttribute('class', 'hello-world-label');
    node.appendChild(nameInput);

    nameInput.setAttribute('value', name);
    nameInput.setAttribute('class', 'hello-world-name-input');

    return node;
  }
}

HelloWorldBlot.blotName = 'helloWorld'; // when you insert w/ API, this is the label you use
HelloWorldBlot.tagName = 'span';  // name of the HTML tag rendered
HelloWorldBlot.className = 'helloWorldBlot'; // class for styling
