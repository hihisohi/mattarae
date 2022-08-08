import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("타래 상세");
  }

  async getHtml() {
    console.log(this.params.id);
    return `
    <div class="tarae-detail-wrap">

  <div class="top-btns">
    <a href=""> 뒤로가기 : 연뮤덕을 위한 맛집타래</a>
  </div>

  <div class="tarae-detail-container">
    <article class="tarae-box">
      <div class="tr-info">
        <div class="user-nick">
          <a href="">
            <div class="nick-thumb"><img src="/static/img/tr_nick_thumb.PNG" alt=""></div>
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
        <h3>연뮤덕을 위한 맛집타래</h3>
        <p>연극뮤지컬닥구들을 위해 공연장 근방 맛집들을 모아둡니다. 계속 추가될 예정 ^0^</p>
        <div class="tr-thumb"><img src="/static/img/tr_thumb_01.jpg" alt=""></div>
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
            <button type="button"><span class="icon icon-fork"></span></button>
            <!-- <button type="button"><span class="icon-share"></span></button> -->
          </div>
        </div>
      </div>
    </article>

    <div class="tarae-places">
      <div class="place-box">
        <div class="user-nick">
          <a href="">
            <div class="nick-thumb"><img src="/static/img/tr_nick_thumb.PNG" alt=""></div>
            <div class="nick-name">
              <p>연극과 뮤지컬을 즐기는</p>
              <span>덕덕뮤덕</span>
            </div>
          </a>
        </div>
        <div class="place-info">
          <div class="pl-name">온혜화</div>
          <div class="pl-address">서울 종로구 대학로12길 80 1층 <a href="" class="icon icon-map">지도</a></div>
          <div class="pl-desc">연뮤덕들 사이에서 온혜화의 스콘을 모르면 간첩인 선풍적인 인기를 자랑하는 스콘 전문점. 사진은 크리스마스 한정 판매하신 패키지로, 시즌스콘인 트리베리스콘은 제발
            온고잉 해주셨으면 좋겠을 정도</div>
          <div class="pl-img"><img src="/static/img/place_img01.jfif" alt=""></div>
        </div>
        <div class="place-btns">
          <button type="button" class="btn-fork on"><span class="icon icon-fork"></span></button>  <!-- 다른사람의 타래상세보기 때는 [fork 버튼] -->
          <button type="button" class="btn-del">삭제</button>                             <!-- 내 타래상세보기 때는 [수정/삭제 버튼] -->
          <button type="button" class="btn-edit">수정</button>                            

        </div>
      </div>

      <div class="place-box">
        <div class="user-nick">
          <a href="">
            <div class="nick-thumb"><img src="/static/img/tr_nick_thumb.PNG" alt=""></div>
            <div class="nick-name">
              <p>연극과 뮤지컬을 즐기는</p>
              <span>덕덕뮤덕</span>
            </div>
          </a>
        </div>
        <div class="place-info">
          <div class="pl-name">온혜화</div>
          <div class="pl-address">서울 종로구 대학로12길 80 1층 <a href="" class="icon icon-map">지도</a></div>
          <div class="pl-desc">연뮤덕들 사이에서 온혜화의 스콘을 모르면 간첩인 선풍적인 인기를 자랑하는 스콘 전문점. 사진은 크리스마스 한정 판매하신 패키지로, 시즌스콘인 트리베리스콘은 제발
            온고잉 해주셨으면 좋겠을 정도</div>
          <div class="pl-img"><img src="/static/img/place_img01.jfif" alt=""></div>
        </div>
        <div class="place-btns">
          <button type="button" class="btn-fork"><span class="icon icon-fork"></span></button>
        </div>
      </div>

      <div class="place-box">
        <div class="user-nick">
          <a href="">
            <div class="nick-thumb"><img src="/static/img/tr_nick_thumb.PNG" alt=""></div>
            <div class="nick-name">
              <p>연극과 뮤지컬을 즐기는</p>
              <span>덕덕뮤덕</span>
            </div>
          </a>
        </div>
        <div class="place-info">
          <div class="pl-name">온혜화</div>
          <div class="pl-address">서울 종로구 대학로12길 80 1층 <a href="" class="icon icon-map">지도</a></div>
          <div class="pl-desc">연뮤덕들 사이에서 온혜화의 스콘을 모르면 간첩인 선풍적인 인기를 자랑하는 스콘 전문점. 사진은 크리스마스 한정 판매하신 패키지로, 시즌스콘인 트리베리스콘은 제발
            온고잉 해주셨으면 좋겠을 정도</div>
          <div class="pl-img"><img src="/static/img/place_img01.jfif" alt=""></div>
        </div>
        <div class="place-btns">
          <button type="button" class="btn-fork"><span class="icon icon-fork"></span></button>
        </div>
      </div>

    </div>

  </div>

</div>
    `
  }



}