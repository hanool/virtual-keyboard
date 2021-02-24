const template = `
  <div id="vk">hello, test</div>
`;

class VirtualKeyboard extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    this.root.innerHTML = template;
  }

  attributeChangedCallback() {}

  sum(a, b) {
    return a + b;
  }

  sayHi() {
    return "hi";
  }
}

customElements.define("virtual-keyboard", VirtualKeyboard);

export default VirtualKeyboard;
