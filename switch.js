class Switch extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const button = document.createElement("div");
    button.classList.add("button");

    wrapper.appendChild(button);

    wrapper.addEventListener("click", this.clickHandler);

    const style = document.createElement("style");

    style.textContent = `
      .wrapper {
        background-color: #47FF8D;
        width: 80px;
        height: 40px;
        border-radius: 20px;
        box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2), inset -2px -2px 2px rgba(255, 255, 255, 0.1);
        position: relative; 
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .wrapper.off {
        background-color: #FF5147;
      }

      .button {
        border-radius: 50%;
        background: ivory;
        width: 36px;
        height: 36px;
        margin-left: 2px;
        margin-right: 2px;
        float: left;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2), -2px -2px 2px rgba(255, 255, 255, 0.1);
        transition: transform 0.3s;
        margin: 2px;
      }

      .wrapper.off > .button {
        transform: translate(40px, 0);
      }

      .text {
        float: right;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }

  clickHandler() {
    if (this.classList.contains("off")) {
      this.classList.remove("off");
      return;
    }

    this.classList.add("off");
  }
}

customElements.define("custom-switch", Switch);
