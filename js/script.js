// // ASIDE
// const links = document.querySelectorAll(".nav > li");

// const sections = document.querySelectorAll(".section");
// [...links].map((link, index) => {
//   link.addEventListener("click", () => onLinkClick(link, index), false);
// //   console.log("const sections link", link, index);
// });

// const onLinkClick = (link, currentIndex) => {
//     // Getting name of the selected section
//     const selectedSection = link.getAttribute("name");

//     // Removing active class from all sections
//     sections.forEach(section => {
//         section.classList.remove("active");
//     })
//     const currentSection = [...sections].find((section) => 
//         section.classList.contains(selectedSection)
//     );
//     currentSection.classList.add("active");
//     console.log("currentSection", currentSection);

    


//     // const selectedItem = link.getAttribute("name");
//     // console.log("selectedItem", selectedItem);
//     // sections.forEach((section) => {
//     // section.classList.remove("active");
//     // });
//     // const currentSection = [...sections].find((section) =>
//     // Object.keys(section.dataset).includes(selectedItem)
//     // );
//     // console.log(currentSection, "currentSection");
//     // currentSection.classList.add("active");
//     // highLightSelectedLink(currentIndex);
// };

// const highLightSelectedLink = (currentIndex) => {
//   links.forEach((link) => {
//     link.classList.remove("selectedLink");
//   });
//   links[currentIndex].classList.add("selectedLink");
// };