import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("마이페이지");
  }

  async getHtml() {
    return `
    <div class="mypage-wrarp">
    마이페이지입니다.
   
  
  </div>
  
    `
  }


}