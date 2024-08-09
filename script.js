import { test, MyButton } from "./src/view/myBtn.js";

customElements.define("my-button", MyButton);

document.getElementById("app").insertAdjacentHTML("beforeend", `<my-button></my-button>`);
