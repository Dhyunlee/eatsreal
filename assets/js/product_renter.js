import { recom_prod } from "../data/fake/recom_prod.js";

// Constant productItem String
`<div class="prod-item">
<div class="p_image-wap">
<div class="p_image p_image-f">
    <img src="./assets/img1_01.jpg" alt="product-img">
</div>
<div class="p_image p_image-hv">
    <img src="./assets/img1_02.jpg" alt="product-img">
</div>
</div>
<div class="prod-info">
<div class="prod-info--tit">
    <strong>
        [5종 7팩] 맛있는 7일 다이어트 식단도시락 300kcal
    </strong>
</div>
<div class="prod-info--price">
    <span class="price">44,800원</span>
    <span class="p_sale">60,500원</span>
</div>
<div class="prod-info--icon">
    <button class="icon-style sale">SALE</button>
</div>
</div>  

</div>`;

// Render productItem
const renderProdItem = (data) => {};

// Render productList
const renderProdList = (titName = "상품전체 제목") => {
  const title = `<div class="prod-title">
       <strong>${titName}</strong>
    </div>`;
};
