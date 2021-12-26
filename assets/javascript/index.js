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

showSectionContent("home_page");
