## 잇츠리얼 사이트 클론 코딩

<br>

### 데모(진행중): [잇츠리얼 클론 사이트](https://donghyunami.github.io/eatsreal)

<br>

### 설명

잇츠리얼 사이트를 따라 만들어보며 html, css를 다시
복습하는 계기가 되었습니다.

<br />
상품리스트는 해당 잇츠리얼 사이트를 크롤링해서 데이터를 
가공한 다음 자바스크립트 이용해 랜더링했습니다.
<br />       
<br />
💡 상품 항목들 불러오는 코드

### <b>cardItem</b>
```javascript
const cardItem = (data) => {
  return `
   <div class="prod-item">
        <div class="p_image-wap">
            <div class="p_image p_image-f">
                <img src=${data.image_url}>
            </div>
            <div class="p_image p_image-hv">
                <img src=${data.sub_image_url}>
            </div>
        </div>
        <div class="prod-info">
            <div class="prod-info--tit">
                <strong>
                    ${data.name}
                </strong>
            </div>
            <div class="prod-info--price">
                <span class="price">${data.price}</span>
                <span class="p_sale">${data.s_price}</span>
            </div>
            <div class="prod-info--icon">
            ${data.tags?.map((t) => `<button class="icon-style sale">${t}</button>`).toString().replaceAll(',', ' ')}
            </div>
        </div>
    </div>
   `;
};
```  
<br/>

### <b>prod_render</b>
```javascript
export const prod_render = () => {
  const cards_wrapList = document.querySelectorAll(".cards_wrap");
  Array.from(cards_wrapList).map((parentEl, idx) => {
    // const index = idx+1;
    const title = document.createElement("header");
    const cards = document.createElement("div");

    title.className = "prod-title";
    cards.className = "prod-cards";

    title.innerHTML = `<strong>${recom_prod[idx].title}</strong>`;
    console.log({recom_prod: recom_prod[idx + 1]})
    recom_prod[idx].data.map((item, idx) => {
    cards.insertAdjacentHTML('afterbegin', cardItem(item));
    });
    
    parentEl.appendChild(title);
    parentEl.appendChild(cards);
  });
};
```

