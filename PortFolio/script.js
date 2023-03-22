const typingEffect = new Typed(".switcher", {
  strings: ["HTML", "CSS", "JAVASCRIPT", "C++", "REACT"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});
const loader = document.querySelectorAll(".loader");
// loader.forEach((l, i) => {
//   setTimeout(() => {
//     l.classList.add("translation");
//   }, i * 200 + 100);
// });
// setTimeout(() => {
//   loader.forEach((l, i) => {
//     setTimeout(() => {
//       l.classList.remove("translation");
//     }, i * 200 + 100);
//   });
// }, 500);
