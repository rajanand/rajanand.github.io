//Tableau visualization embed function

function initViz() {

    url = "https://link.rajanand.org/tableau-msdhoni",
    options = {
        hideToolbar: true,
        width: "1100px",
        height: "2050px",
    };
    viz = new tableau.Viz(msdhoni, url, options);
  
    url = "https://public.tableau.com/views/IronQuest-FoodPriceIndex/FoodIndex",
    options = {
        hideToolbar: true,
        width: "100%",
        height: "800px",
    };
    viz = new tableau.Viz(foodPriceIndex, url, options);
  }  