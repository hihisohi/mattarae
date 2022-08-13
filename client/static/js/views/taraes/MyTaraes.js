import AbstractView from "../AbstractView.js";
// import jsonData from "/static/data/taraes.json" assert{ type: "json"};

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("타래모음");
  }

  async getHtml() {

    const data = await fetch("/static/data/taraes.json").then(res => res.json());

    let taraeBox = ``;
    data.taraes.forEach(tarae => {

      let tags = ``;
      tarae.tag.forEach(tag => {
        tags += `<span>${tag}</span>`;
      });

      taraeBox += `
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
              <p><span class="icon icon-thread"></span>${tarae.NumberOfPlaces}</p>
              <p><span class="icon icon-forked"></span>${tarae.forked}</p>
            </div>
            <div class="utils">
              <div class="created-date">${tarae.date}</div>
            </div>
          </div>
        </article>
      `
    });



    return `
    <div class="tarae-list-wrap">

      <div class="list-switch-btns tab-btns">
        <button type="button" class="list-btn tab-btn active" href="#"><span>내가 등록한</span></button>
        <button type="button" class="list-btn tab-btn" href="#"><span>내가 Fork한</span></button>
      </div>
    
      <div class="list-switch-contents tab-cnts">
        <div class="tarae-list list-my tab-cnt">
          <div class="top-sect">
            <div class="cnt-switch-btns tab-btns">
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
            ${taraeBox}
          </div>
        </div>

        <div class="tarae-list list-forked tab-cnt">
          <div class="top-sect">
            <div class="cnt-switch-btns tab-btns">
              <button type="button" class="cnt-btn on">타래</button>
              <button type="button" class="cnt-btn">플레이스</button>
            </div>
            <div class="type-btns">
              <button type="button" class="btn-list on"><span class="icon icon-list"></span></button>
              <button type="button" class="btn-grid"><span class="icon icon-grid"></span></button>
            </div>
          </div>
      
          <div class="list-sect type-list">
            ${taraeBox}
          </div>
        </div>
    

      </div>
    
    </div>
    `
  }

}