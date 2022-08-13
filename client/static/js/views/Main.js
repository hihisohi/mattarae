import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Mattarae");
  }

  async getHtml() {

    const dataTarae = await fetch("/static/data/taraes.json").then(res => res.json());
    const dataUser = await fetch("/static/data/users.json").then(res => res.json());  // 실제 DB사용 시 taraeDB, placesDB와 UserDB join되어있음

    // 팔로우TR 탭 컨텐츠 - followTaraeBox 내가 팔로우한 사람들의 Tarae를 최근 순으로 보여주기
    // 인기TR 탭 컨텐츠 - mostForkedTaraeBox 탭 내용의 경우 최근 3일 동안 등록된 TR 중 포크된 수가 가장 많은 수 대로 30개 보여주기

    let followTaraeBox = ``;
    let mostForkedTaraeBox = ``;

    dataTarae.taraes.forEach(tarae => {

      const user = dataUser.users.find(user => user.id === tarae.authorId);

      let tags = ``;
      tarae.tag.forEach(tag => {
        tags += `<span>${tag}</span>`;
      });

      followTaraeBox += `
        <article class="tarae-box">
          <div class="tr-info">
            <div class="user-nick">
              <a href="">
                <div class="nick-thumb" style="background-image: url(${user.imageSrc})"></div>
                <div class="nick-name">
                  <p>${user.introduction}</p>
                  <span>${user.nickName}</span>
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
            <a href="/taraes/${tarae.id}" data-link>
              <h3>${tarae.title}</h3>
              <p>${tarae.description}</p>
              <div class="tr-thumb"><img src="${tarae.thumbUrl}" alt=""></div>
            </a>
          </div>
          <div class="tr-foot-info">
            <div class="tags">
              ${tags}
            </div>
            <div class="tr-additional-info">
              <p><span class="icon icon-thread"></span>29</p>
              <p><span class="icon icon-forked"></span>106</p>
            </div>
            <div class="utils">
              <div class="created-date">${tarae.date}</div>
              <div class="share-btns">
                <button type="button"><span class="icon icon-fork on"></span></button>
              </div>
            </div>
          </div>
        </article>
      `
    });


    return `
    <div class="feed-wrap">

    <div class="feed-switch-btns tab-btns">
      <button type="button" class="feed-btn tab-btn follower active" href="#"><span>팔로우 TR</span></button>
      <button type="button" class="feed-btn tab-btn recommend" href="#"><span>인기 TR</span></button>
    </div>
  
    <div class="feed-switch-contents tab-cnts">
      <div class="tarae-feed folloer-feed tab-cnt">
        <h2>NEW 팔로우 TR</h2>
        ${followTaraeBox}
      </div>
  
      <div class="tarae-feed recommend-feed tab-cnt">
        <h2>NEW 추천 TR</h2>
        ${mostForkedTaraeBox}
      </div>
    </div>
  
  </div>
  
    `
  }



}