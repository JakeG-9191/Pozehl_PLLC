const ALL_CONTENT = ["home_page", "about_page", "q_a_page", "contact_page"];

const showSectionContent = (show) => {
  const contentToRender = [...ALL_CONTENT];
  if (show && contentToRender.includes(show)) {
    document.getElementById(show).style.display = "block";
    const elementIndex = contentToRender.indexOf(show);
    contentToRender.splice(elementIndex, 1);
    contentToRender.forEach((item) => {
      document.getElementById(item).style.display = "none";
    });
  }
  window.scrollTo(0, 0);
  return false;
};

window.addEventListener("scroll", () => {
  const windowWidth = window.outerWidth;
  const mapWidth = windowWidth * 0.75;
  const mapFrame = document.getElementById("map-frame");
  mapFrame.width = mapWidth;
  const firstFrame = document.getElementsByClassName("mapouter");
  firstFrame.width = `${mapWidth}px`;
  const secondFrame = document.getElementsByClassName("gmap_canvas");
  secondFrame.width = `${mapWidth}px`;
});

showSectionContent("home_page");
