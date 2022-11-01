const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://eatsreal.co.kr/");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then((html) => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.thumb-row").children("div.shop-item");

    $bodyList.each(function (i, elem) {
      ulList[i] = {
        title: $(this).find("div.item-detail a h2").text().trim(),
        price: $(this).find("div.item-pay-detail p.pay").text().trim(),
        s_price: $(this).find("div.item-pay-detail p.sale_pay").text().trim(),
        image_url: $(this)
          .find("div.item-thumbs a img._org_img.org_img._lazy_img")
          .attr("data-src"),
        image_alt: $(this)
          .find("div.item-thumbs a img._org_img.org_img._lazy_img")
          .attr("alt"),
        sub_image_url: $(this)
          .find("div.item-thumbs a img.hover_img")
          .attr("src"),
        tag: [
          { sale: $(this).find("div.sale").text().trim() },
          { best: $(this).find("div.best").text().trim() },
          { hot: $(this).find("div.hot").text().trim() },
          { md: $(this).find("div.md").text().trim() },
        ],
      };
    });

    const data = ulList.filter((n) => n);
    return { data };
  })
  .then((res) => {
    log(res);
    createFile(res);
  });

function createFile(data) {
  fs.writeFile("data.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}
