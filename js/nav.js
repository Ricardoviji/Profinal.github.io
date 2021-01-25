document.head.innerHTML += /* html */
  `<style>
    nav {display: block}
  </style>`;
customElements.define("nav", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML =  /*html*/
      `<a class="btn btn-link" href="index.html">Frutas</a>
      <a class="btn btn-link" href="verduras.html">Verduras</a>`;
  }
});
