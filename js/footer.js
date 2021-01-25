document.head.innerHTML += /* html */
  `<style>
    footer {display: block}
  </style>`;
customElements.define("footer", class extends HTMLElement {
  connectedCallback() {
    this.textContent = "Copyright © 2021 Ricardo I. Villalobos Jimenez.";
  }
});
