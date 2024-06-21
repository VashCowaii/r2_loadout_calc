
const lastCalcUpdate = document.location.href.includes("cowaii") ? LAST_CALC_UPDATE : "DEV_BUILD";
document.getElementById("calcLastUpdated").innerHTML = lastCalcUpdate;
//See .github/workflows/jekyll-gh-pages.yml
//LAST_CALC_UPDATE is only defined on site build/deployment, and is written to /htmlTemplates/injectMainHTML.js as a variable there.