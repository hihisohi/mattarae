import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("타래맵");
  }

  async getHtml() {
    return `
    <div class="mypage-wrarp">
    타래맵입니다.
   
  
  </div>
  
    `
  }


}