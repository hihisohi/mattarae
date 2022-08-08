import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Mattarae");
  }

  async getHtml() {
    return `
    <div class="feed-wrap">

    <div class="feed-switch-btns tab-btns">
      <button type="button" class="feed-btn tab-btn follower on" href="#"><span>팔로우 TR</span></button>
      <button type="button" class="feed-btn tab-btn recommend" href="#"><span>인기 TR</span></button>
    </div>
  
    <div class="feed-switch-contents tab-cnts">
      <div class="tarae-feed folloer-feed tab-cnt">
        <h2>NEW 팔로우 TR</h2>
        <article class="tarae-box">
          <div class="tr-info">
            <div class="user-nick">
              <a href="">
                <div class="nick-thumb"><img src="./static/img/tr_nick_thumb.PNG" alt=""></div>
                <div class="nick-name">
                  <p>연극과 뮤지컬을 즐기는</p>
                  <span>덕덕뮤덕</span>
                </div>
              </a>
            </div>
            <div class="btn-more tr-share">
              <button type="button"><span class="icon icon-ellipses"></span></button>
              <ul>
                <li><a href="">링크 복사</a></li>
                <li><a href="">신고</a></li>
              </ul>
            </div>
          </div>
          <div class="tr-content">
            <a href="/taraes/1" data-link>
              <h3>연뮤덕을 위한 맛집타래</h3>
              <p>연극뮤지컬닥구들을 위해 공연장 근방 맛집들을 모아둡니다. 계속 추가될 예정 ^0^</p>
              <div class="tr-thumb"><img src="./static/img/tr_thumb_01.jpg" alt=""></div>
            </a>
          </div>
          <div class="tr-foot-info">
            <div class="tags">
              <span>연뮤덕</span>
              <span>공연장근처맛집</span>
              <span>샤롯데시어터</span>
              <span>예술의전당</span>
              <span>대학로</span>
              <span>혜화</span>
              <span>압구정</span>
            </div>
            <div class="tr-additional-info">
              <p><span class="icon icon-thread"></span>29</p>
              <p><span class="icon icon-forked"></span>106</p>
            </div>
            <div class="utils">
              <div class="created-date">3시간 전</div>
              <div class="share-btns">
                <button type="button"><span class="icon icon-fork on"></span></button>
                <!-- <button type="button"><span class="icon-share"></span></button> -->
              </div>
            </div>
          </div>
        </article>
      </div>
  
      <div class="tarae-feed recommend-feed tab-cnt">
        <h2>NEW 추천 TR</h2>
        <article class="tarae-box">
          <div class="tr-info">
            <h3>연뮤덕을 위한 맛집타래</h3>
          </div>
        </article>
      </div>
    </div>
  
  </div>
  
    `
  }



}