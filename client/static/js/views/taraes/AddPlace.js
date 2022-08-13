import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("타래 등록하기");
  }

  async getHtml() {
    return `
    <div class="tarae-add-wrap">

    <div class="tarae-add-container">
      <div class="top-sect">
        <h2>새로운 플레이스 등록하기</h2>
      </div>
  
      <div class="add-form-sect">
        <form action="" method="POST" id="placeAddForm" enctype="multipart/form-data">
  
          <input type="hidden" name="place_latitude" id="placeLat" />
          <input type="hidden" name="place_longitude" id="placeLng" />
    
          <div class="form-group">
            <label for="placeName"><span class="icon icon-edit"></span>플레이스명</label>
            <div>
              <input type="text" id="placeName" name="placeName" placeholder="플레이스의 이름을 작성해주세요" required />
            </div>
          </div>
    
          <div class="form-group">
            <label for="placeAddr"><span class="icon icon-edit"></span>주소</label>
            <div>
              <input type="text" id="placeAddr" name="placeAddr" placeholder="플레이스의 주소를 작성해주세요" required />
              <div class="map-area">
                <div id="map" style="width: 100%; height: 200px;"></div>
              </div>
            </div>
          </div>
    
          <div class="form-group">
            <label for="placeContent"><span class="icon icon-edit"></span>메모</label>
            <div>
              <textarea id="placeContent" name="placeContent" placeholder="플레이스에 대한 메모를 200자 이내로 작성해주세요" required></textarea>
            </div>
          </div>
    
          <div class="form-group">
            <label for="placeThumb" class="col-sm-2 control-label"><span class="icon icon-edit"></span>썸네일 업로드</label>
            <div></div>
            <input type="file" id="place_thumb" name="place_thumb" accept="image/gif, image/jepg, image/png" onchange="setThumbnail(event);" /><br />
          </div>
          <div class="thumb-preview">
            <div id="thumbImg"></div>
          </div>
    
          <div class="form-btns">
            <button type="reset" class="form-btn btn-cls">취소</button>
            <button type="submit" class="form-btn btn-add">등록</button>
          </div>
        </form>
      </div>
  
  
  
  
    </div>
  
  </div>
  
    `
  }



}