let data;
if (localStorage.getItem("data") !== null) {
  data = JSON.parse(localStorage.getItem("data"));
} else {
  async function fetchData(url) {
    try {
      const response = await fetch(
        "https://6051b8b8fb49dc00175b6997.mockapi.io/api/quotes",
        { method: "POST" }
      );
      data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      console.log("Error : " + error);
    }
    //   console.log(data);
  }
  fetchData();
}

const tempData = data.data.quotes.product_quotes;
const selectedVolume = document.getElementById("volumeSelector");
selectedVolume.addEventListener("click", (e) => {
  const body = document.getElementById("main-frame");

  const filteredData = tempData.filter(
    (product) => product.volume === parseInt(e.target.value)
  );
  if (filteredData.length === 0) {
    const body = document.getElementById("main-frame");
    const cardHolder = document.getElementById("card-holder");
    console.log("Product is not available");
    cardHolder.innerHTML = "<h1>Oops! No Product Available</h1>";
  } else {
    const deleteCardHolder = document.getElementById("card-holder");
    if (deleteCardHolder.hasChildNodes()) {
      body.removeChild(deleteCardHolder);
    }
    const cardHolder = document.createElement("div");
    cardHolder.setAttribute("id", "card-holder");
    body.appendChild(cardHolder);
    filteredData.map((data) => {
      const card = document.createElement("div");
      const head = document.createElement("div");
      const title = document.createElement("div");
      const paraOne = document.createElement("p");
      const paraTwo = document.createElement("p");
      const features = document.createElement("div");
      const imageDiv = document.createElement("div");
      const image = document.createElement("img");
      const unorderedList = document.createElement("div");
      const prices = document.createElement("div");
      const basePrice = document.createElement("p");
      const basePriceText = document.createElement("p");
      const installation = document.createElement("p");
      const incentive = document.createElement("p");

      const equipmentCost = document.createElement("p");
      const equipmentCostText = document.createElement("p");
      const equipmentCostImage = document.createElement("img");

      const savingsParent = document.createElement("div");
      const savingsText = document.createElement("p");
      const savingsCost = document.createElement("p");
      const savingsImage = document.createElement("img");

      const button = document.createElement("button");
      const moreDetails = document.createElement("div");
      const detailsPara = document.createElement("p");
      const incentiveText = document.createElement("p");
      const incentiveImage = document.createElement("img");
      const imageParent = document.createElement("div");
      const pricesParent = document.createElement("div");
      const incentiveParent = document.createElement("div");
      const equipmentCostParent = document.createElement("div");

      data.est_highlight.map((item) => {
        const list = document.createElement("p");
        const featureParent = document.createElement("div");
        const dotParent = document.createElement("div");
        const outerDot = document.createElement("div");
        const innerDot = document.createElement("div");
        list.innerHTML = item;
        featureParent.setAttribute("class", "featureParent");
        dotParent.setAttribute("class", "dotParent");
        list.setAttribute("class", "list");
        outerDot.setAttribute("class", "outerDot");
        innerDot.setAttribute("class", "innerDot");

        outerDot.appendChild(innerDot);
        dotParent.appendChild(outerDot);
        featureParent.appendChild(dotParent);
        featureParent.appendChild(list);
        unorderedList.appendChild(featureParent);
      });

      const horizontalLine = document.createElement("hr");
      const priceTextLine = document.createElement("hr");
      const incentiveTextLine = document.createElement("hr");
      const equipmentCostLine = document.createElement("hr");

      equipmentCostParent.setAttribute("class", "equipmentCostParent");
      equipmentCostLine.setAttribute("class", "equipmentCostLine");
      equipmentCostImage.setAttribute("class", "equipmentCostImage");
      equipmentCostImage.setAttribute("src", "./info-tooltip.svg");
      equipmentCost.setAttribute("class", "equipmentCost");
      equipmentCostText.setAttribute("class", "equipmentCost");

      incentiveParent.setAttribute("class", "incentiveParent");
      incentiveImage.setAttribute("src", "./info-tooltip.svg");
      incentiveImage.setAttribute("class", "incentiveImage");
      incentiveText.setAttribute("class", "incentiveText");
      incentive.setAttribute("class", "incentiveText");
      incentiveTextLine.setAttribute("class", "incentiveTextLine");

      basePrice.setAttribute("class", "basePrice");
      basePriceText.setAttribute("class", "basePrice");
      priceTextLine.setAttribute("class", "priceTextLine");

      paraOne.setAttribute("class", "headingOne");
      paraTwo.setAttribute("class", "headingTwo");

      unorderedList.setAttribute("class", "unorderedList");
      moreDetails.setAttribute("class", "card--footer");
      moreDetails.setAttribute("id", data.model_id);
      button.setAttribute("type", "submit");
      button.setAttribute("class", "button--style");

      savingsParent.setAttribute("class", "savingsParent");
      savingsText.setAttribute("class", "savingsText");
      savingsCost.setAttribute("class", "savingsCost");
      savingsImage.setAttribute("class", "savingsImage");
      savingsImage.setAttribute("src", "./info-tooltip.svg");

      horizontalLine.setAttribute("class", "line");
      image.setAttribute("src", "./product_image");
      image.setAttribute("alt", "container");
      image.setAttribute("class", "image--style");
      // image.setAttribute("width", "100px");
      // image.setAttribute("height", "220px");

      installation.setAttribute("class", "installation");
      installation.setAttribute("class", "installation");
      imageParent.setAttribute("class", "imageParent");
      prices.setAttribute("class", "prices");

      card.setAttribute("class", "card");
      card.setAttribute("id", Date.now());

      head.setAttribute("class", "head");
      title.setAttribute("class", "title--style");
      pricesParent.setAttribute("class", "pricesParent");

      moreDetails.innerHTML = "View More Details";
      button.innerHTML = "Get Install Quote";
      savingsText.innerHTML = "Your Est. Annual Saving is $";
      savingsCost.innerHTML = data.est_annual_savings_cal;
      equipmentCostText.innerHTML = "Equipment Cost";
      equipmentCost.innerHTML =
        "$" + (data.base_price + data.incentives.totalAppliedIncentives);
      incentiveText.innerHTML = "Available Incentives";
      incentive.innerHTML = "$" + data.incentives.totalAppliedIncentives;
      installation.innerHTML = "(Installation not inlcuded)";
      basePriceText.innerHTML = "Base Price";
      basePrice.innerHTML = "$" + data.base_price;
      paraOne.innerHTML = data.manufacturer_name;
      paraTwo.innerHTML = data.name;

      pricesParent.appendChild(prices);
      pricesParent.appendChild(installation);
      pricesParent.appendChild(incentiveParent);
      pricesParent.appendChild(equipmentCostParent);
      pricesParent.appendChild(savingsParent);
      pricesParent.appendChild(button);
      // pricesParent.appendChild(button);

      imageParent.appendChild(image);
      imageParent.appendChild(unorderedList);
      moreDetails.appendChild(detailsPara);

      prices.appendChild(basePriceText);
      prices.appendChild(priceTextLine);
      prices.appendChild(basePrice);

      incentiveParent.appendChild(incentiveText);
      incentiveParent.appendChild(incentiveImage);
      incentiveParent.appendChild(incentiveTextLine);
      incentiveParent.appendChild(incentive);

      equipmentCostParent.appendChild(equipmentCostText);
      equipmentCostParent.appendChild(equipmentCostImage);
      equipmentCostParent.appendChild(equipmentCostLine);
      equipmentCostParent.appendChild(equipmentCost);
      // incentiveParent.appendChild(equipmentCost);

      savingsParent.appendChild(savingsText);
      savingsParent.appendChild(savingsCost);
      savingsParent.appendChild(savingsImage);

      // features.appendChild(unorderedList);
      title.appendChild(paraOne);
      title.appendChild(paraTwo);
      head.appendChild(title);

      card.appendChild(head);
      card.appendChild(imageParent);
      card.appendChild(horizontalLine);
      card.appendChild(pricesParent);
      // card.appendChild(savings);
      // card.appendChild(button);

      card.appendChild(moreDetails);

      const modal = document.getElementById("myModal");
      const span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal
      moreDetails.onclick = function (event) {
        const overviewData = document.createElement("div");
        const hrLine = document.createElement("hr");
        const overviewPrice = document.createElement("div");
        const overviewBasePrice = document.createElement("div");
        const overviewBasePriceText = document.createElement("p");
        const overviewBasePriceCost = document.createElement("p");
        const overviewBasePriceHr = document.createElement("hr");
        const overviewBaseInstallation = document.createElement("p");

        const overviewCost = document.createElement("div");
        const overviewCostText = document.createElement("p");
        const overviewCostImage = document.createElement("img");
        const overviewCostHr = document.createElement("hr");
        const overviewCostAm = document.createElement("p");

        const overviewSaving = document.createElement("div");
        const overviewSavingText = document.createElement("p");
        const overviewSavingImage = document.createElement("img");
        const overviewSavingAm = document.createElement("p");

        overviewSaving.setAttribute("class", "overviewSaving");
        overviewSavingText.setAttribute("class", "overviewSavingText");
        overviewSavingImage.setAttribute("class", "overviewSavingImage");
        overviewSavingImage.setAttribute("src", "./info-tooltip.svg");
        overviewSavingAm.setAttribute("class", "overviewSavingAm");

        overviewCost.setAttribute("class", "overviewCost");
        overviewCostText.setAttribute("class", "overviewCostText");
        overviewCostAm.setAttribute("class", "overviewCostText");
        overviewCostImage.setAttribute("class", "overviewCostImage");
        overviewCostImage.setAttribute("src", "./info-tooltip.svg");
        overviewCostHr.setAttribute("class", "overviewCostHr");

        overviewBaseInstallation.setAttribute(
          "class",
          "overviewBaseInstallation"
        );
        overviewBasePriceHr.setAttribute("class", "overviewBasePriceHr");
        overviewBasePriceText.setAttribute("class", "overviewBasePriceText");
        overviewBasePriceCost.setAttribute("class", "overviewBasePriceText");
        overviewBasePrice.setAttribute("class", "overviewBasePrice");
        hrLine.setAttribute("class", "verticle--line");
        hrLine.setAttribute("id", "verticle--line");
        overviewData.setAttribute("class", "overview-data");
        overviewData.setAttribute("id", "overview-data");
        overviewPrice.setAttribute("class", "overviewPrice");
        overviewPrice.setAttribute("id", "overviewPrice");

        overviewSavingText.innerHTML = "Your Est. Annual Savings is";
        overviewSavingAm.innerHTML = "$" + data.est_annual_savings_cal;

        overviewCostText.innerHTML = "Equipment Cost";
        overviewCostAm.innerHTML =
          "$" + (data.base_price + data.incentives.totalAppliedIncentives);

        overviewBasePriceText.innerHTML = "Base Price";
        overviewBasePriceCost.innerHTML = "$" + data.base_price;
        overviewBaseInstallation.innerHTML = "(Installation not included)";

        overviewSaving.appendChild(overviewSavingText);
        overviewSaving.appendChild(overviewSavingImage);
        overviewSaving.appendChild(overviewSavingAm);

        overviewCost.appendChild(overviewCostText);
        overviewCost.appendChild(overviewCostImage);
        overviewCost.appendChild(overviewCostHr);
        overviewCost.appendChild(overviewCostAm);

        overviewBasePrice.appendChild(overviewBasePriceText);
        overviewBasePrice.appendChild(overviewBasePriceHr);
        overviewBasePrice.appendChild(overviewBasePriceCost);

        overviewPrice.appendChild(overviewBasePrice);
        overviewPrice.appendChild(overviewBaseInstallation);
        overviewPrice.appendChild(overviewCost);
        overviewPrice.appendChild(overviewSaving);

        overview.appendChild(overviewData);
        overview.appendChild(hrLine);
        overview.appendChild(overviewPrice);

        const overviewItem = filteredData.filter(
          (item) => item.model_id == event.target.id
        );

        overviewItem[0].product_bullet_block.map((item) => {
          const productMainParent = document.createElement("div");
          const productParent = document.createElement("div");
          const product_bullet = document.createElement("p");
          const product_image = document.createElement("img");
          const product_block = document.createElement("p");

          productMainParent.setAttribute("class", "productMainParent");
          productParent.setAttribute("class", "productParent");
          product_bullet.setAttribute("class", "product_bullet");
          product_block.setAttribute("class", "product_block");
          product_image.setAttribute("class", "product_image");
          product_image.setAttribute("src", "./right-check.svg");

          product_bullet.innerHTML = item.product_bullet;
          product_block.innerHTML = item.product_block;
          productParent.appendChild(product_image);
          productParent.appendChild(product_bullet);
          productMainParent.appendChild(productParent);
          productMainParent.appendChild(product_block);
          overviewData.appendChild(productMainParent);
        });

        modal.style.display = "block";
      };
      const overview = document.getElementById("overview");
      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        overviewData = document.getElementById("overview-data");
        hrLine = document.getElementById("verticle--line");
        overviewPrice = document.getElementById("overviewPrice");
        overview.removeChild(overviewData);
        overview.removeChild(hrLine);
        overview.removeChild(overviewPrice);
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          overviewData = document.getElementById("overview-data");
          hrLine = document.getElementById("verticle--line");
          overviewPrice = document.getElementById("overviewPrice");

          overview.removeChild(overviewData);
          overview.removeChild(hrLine);
          overview.removeChild(overviewPrice);
          modal.style.display = "none";
        }
      };

      cardHolder.appendChild(card);
      // overviewData.appendChild
    });
    console.log(filteredData);
  }
});
