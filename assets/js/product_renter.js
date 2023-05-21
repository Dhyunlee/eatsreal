import { recom_prod } from "../data/fake/recom_prod.js";

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
