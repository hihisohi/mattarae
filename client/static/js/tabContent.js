export default function tabContent() {


  const tabButton = document.querySelectorAll('.tab-btns .tab-btn');
  const tabContent = document.querySelectorAll('.tab-cnts .tab-cnt');


  tabContent[0].style.display = "block";


  function tabButtonClick(event) {

    tabButton.forEach((button) => {
      button.classList.remove("active");
    });


    const clickedButton = event.currentTarget;
    clickedButton.classList.add("active");

    const nodes = [...clickedButton.parentElement.children];
    const clickedIndex = nodes.indexOf(clickedButton);
    
    tabContent.forEach((content) => {
      content.style.display = "none";
    });

    tabContent[clickedIndex].style.display = "block";

  }

  tabButton.forEach((button) => {
    button.addEventListener("click", tabButtonClick);
  });
  



}