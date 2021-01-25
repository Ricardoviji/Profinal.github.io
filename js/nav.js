document.head.innerHTML += /* html */
  `<style>
    mi-nav {display: block}
  </style>`;
customElements.define("mi-nav", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML =  /*html*/
      `<a class="btn btn-link" href="index.html">Pasatiempos</a>
      <a class="btn btn-link" href="usuarios.html">Usuarios</a>`;
  }
});
