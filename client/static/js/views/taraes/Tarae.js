import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("타래 상세");
  }

  async getHtml() {
    
    // console.log(this.params.id);

    const dataTarae = await fetch("/static/data/taraes.json").then(res => res.json());
    const dataPlace = await fetch("/static/data/places.json").then(res => res.json());  // 실제 DB사용 시 taraeDB와 placesDB가 join되어있음
    const dataUser = await fetch("/static/data/users.json").then(res => res.json());  // 실제 DB사용 시 taraeDB, placesDB와 UserDB join되어있음
    

    // 클릭한 타래
    const taraeThis = dataTarae.taraes.find(tarae => tarae.id === this.params.id);
    const userThis = dataUser.users.find(user => user.id === taraeThis.authorId);

    let tags = ``;
    taraeThis.tag.forEach(tag => {
      tags += `<span>${tag}</span>`;
    });

    let taraeBox = `
      <article class="tarae-box">
        <div class="tr-info">
          <div class="user-nick">
            <a href="">
              <div class="nick-thumb" style="background-image: url(${userThis.imageSrc})"></div>
              <div class="nick-name">
                <p>${userThis.introduction}</p>
                <span>${userThis.nickName}</span>
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
          <h3>${taraeThis.title}</h3>
          <p>${taraeThis.description}</p>
          <div class="tr-thumb"><img src="${taraeThis.thumbUrl}" alt=""></div>
        </div>
        <div class="tr-foot-info">
          <div class="tags">
            ${tags}
          </div>
          <div class="tr-additional-info">
            <p><span class="icon icon-thread"></span>${taraeThis.NumberOfPlaces}</p>
            <p><span class="icon icon-forked"></span>${taraeThis.forked}</p>
          </div>
          <div class="utils">
            <div class="created-date">${taraeThis.date}</div>
            <div class="share-btns">
              <button type="button"><span class="icon icon-fork"></span></button>
              <!-- <button type="button"><span class="icon-share"></span></button> -->
            </div>
          </div>
        </div>
      </article>
    `;


    // 이 타래에 등록된 플레이스들
    const placeThis = dataPlace.places.filter(place => place.relatedTaraeId === this.params.id);

    let placeBox = ``;

    placeThis.forEach(place => {

      placeBox += `
        <div class="place-box">
          <div class="user-nick">
            <a href="">
              <div class="nick-thumb" style="background-image: url(${userThis.imageSrc})"></div>
              <div class="nick-name">
                <p>${userThis.introduction}</p>
                <span>${userThis.nickName}</span>
              </div>
            </a>
          </div>
          <div class="place-info">
            <div class="pl-name">${place.name}</div>
            <div class="pl-address">${place.address}<a href="" class="icon icon-map">지도</a></div>
            <div class="pl-desc">${place.memo}</div>
            <div class="pl-img"><img src="${place.thumbUrl}" alt=""></div>
          </div>
          <div class="place-btns">
            <button type="button" class="btn-fork on"><span class="icon icon-fork"></span></button>  <!-- 다른사람의 타래상세보기 때는 [fork 버튼] -->
            <button type="button" class="btn-del">삭제</button>                             <!-- 내 타래상세보기 때는 [수정/삭제 버튼] -->
            <button type="button" class="btn-edit">수정</button>                            
          </div>
        </div>
      `;
    });



    return `
      <div class="tarae-detail-wrap">

        <div class="top-btns">
          <a href=""> 뒤로가기 : 연뮤덕을 위한 맛집타래</a>
        </div>

        <div class="tarae-detail-container">
          ${taraeBox}


          <div class="add-btn-sect">
            <a href="/addPlace" data-link=""><span class="icon icon-add"></span>플레이스 추가</a>
          </div>

          <div class="tarae-places">
            ${placeBox}
          </div>

        </div>

      </div>
    `
  }



}