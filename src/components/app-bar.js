class AppHeader extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.innerHTML = `
              <style>
                  header {
                      background-color: #6482AD;
                      color: white;
                      padding: 20px 0;
                      text-align: center;
                      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  }
                  
                  h1 {
                      margin: 0;
                      font-size: 2rem;
                  }
              </style>
              <header>
                  <h1>🍖 Pemesanan Makanan dan Minuman 🍹</h1>
              </header>
          `
    }
}

customElements.define('app-header', AppHeader)