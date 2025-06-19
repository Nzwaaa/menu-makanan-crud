class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background: linear-gradient(135deg, #4361ee, #3a0ca3);
          color: white;
          padding: 20px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
      </style>
      <header>
        <h1>FOODIN</h1>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);