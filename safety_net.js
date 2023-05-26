function toggleButtonHandler() {
  let toggleMenu = document.querySelector('.togglemenu');
  let slider = document.querySelector('.slider');
  let main = document.querySelector('.main');
  let main_plot = document.querySelector('.main_plot')
  let footer = document.querySelector('.footer');
  let toggleMenuDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display');


  if (toggleMenuDisplayStatus == "none") {
      toggleMenu.style.display = "block";
      slider.style.display = "none";
      main.style.display = "none";
      main_plot.style.display = "none";
      footer.style.display = "none";
  } else {
      toggleMenu.style.display = "none";
      slider.style.display = "block";
      main.style.display = "block";
      main_plot.style.display = "block";
      footer.style.display = "flex";
  }
}