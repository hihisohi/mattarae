import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("나의 타래");
  }

  async getHtml() {
    return `
    <div class="tarae-list-wrap">

    <div class="list-switch-btns tab-btns">
      <button type="button" class="list-btn tab-btn active" href="#"><span>내가 등록한</span></button>
      <button type="button" class="list-btn tab-btn" href="#"><span>내가 Fork한</span></button>
    </div>
  
    <div class="list-switch-contents tab-cnts">
      <div class="tarae-list list-my tab-cnt">
        <div class="top-sect">
          <div class="cnt-switch-btns">
            <button type="button" class="cnt-btn on">타래</button>
            <button type="button" class="cnt-btn">플레이스</button>
          </div>
          <div class="type-btns">
            <button type="button" class="btn-list on"><span class="icon icon-list"></span></button>
            <button type="button" class="btn-grid"><span class="icon icon-grid"></span></button>
          </div>
        </div>
  
        <div class="add-btn-sect">
          <a href="/add" data-link><span class="icon icon-add"></span>타래 추가</a>
        </div>
    
        <div class="list-sect type-list">
          <article class="tarae-box">
            <div class="tr-info">
              <div class="btn-more tr-share">
                <button type="button"><span class="icon icon-ellipses"></span></button>
                <ul>
                  <li><a href="">보관하기</a></li>
                  <li><a href="">삭제</a></li>
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
              </div>
            </div>
          </article>
      
          <article class="tarae-box">
            <div class="tr-info">
              <div class="btn-more tr-share">
                <button type="button"><span class="icon icon-ellipses"></span></button>
                <ul>
                  <li><a href="">보관하기</a></li>
                  <li><a href="">삭제</a></li>
                </ul>
              </div>
            </div>
            <div class="tr-content">
              <a href="/taraes/2" data-link>
                <h3>압구정 점심 리스트</h3>
                <p>압구정 회사원들을 위한 점심 추천메뉴입니다. (매장/배달/포장)</p>
                <div class="tr-thumb"><img src="./static/img/tr_thumb_02.jpg" alt=""></div>
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
                <div class="created-date">2022-08-05</div>
              </div>
            </div>
          </article>
      
          <article class="tarae-box">
            <div class="tr-info">
              <div class="btn-more tr-share">
                <button type="button"><span class="icon icon-ellipses"></span></button>
                <ul>
                  <li><a href="">보관하기</a></li>
                  <li><a href="">삭제</a></li>
                </ul>
              </div>
            </div>
            <div class="tr-content">
              <a href="/taraes/3" data-link>
                <h3>빵순이의 빵지순례길</h3>
                <p>전국 빵투어 현황 공유합니다. 계속 추가 예정!</p>
                <div class="tr-thumb"><img src="./static/img/tr_thumb_03.jpg" alt=""></div>
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
                <div class="created-date">2022-07-26</div>
              </div>
            </div>
          </article>
      
          </div>
        </div>
      </div>
  
      <div class="tarae-list list-forked tab-cnt"></div>
  
  
  
    </div>
  
  </div>
    `
  }



}