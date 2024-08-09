export class MyButton extends HTMLElement {
    constructor() {
        super(); // 부모 클래스의 생성자 호출
        let shadow = this.attachShadow({ mode: "open" });

        // 버튼 요소 생성
        const button = document.createElement("button");
        button.textContent = "클릭하세요!";

        // 버튼 클릭 시 이벤트 처리
        button.addEventListener("click", () => {
            alert("버튼이 클릭되었습니다!");
        });

        // 스타일 추가
        const style = document.createElement("style");
        style.textContent = `
            button {
                background-color: #6200ea;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
            }
        `;

        // Shadow DOM에 추가
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

export function test() {
    return `<my-button></my-button>`;
}
