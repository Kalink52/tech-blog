const homebtn = document.getElementById("homebtn");
const dashboardbtn = document.getElementById("dashboardbtn");
const loginbtn = document.getElementById("loginbtn");

homebtn.addEventListener("click", () => {
  console.log("hbtn");
  location.href = "/";
});

dashboardbtn.addEventListener("click", () => {
  console.log("hbtn");
  location.href = "/dashboard";
});
if (loginbtn) {
  loginbtn.addEventListener("click", () => {
    console.log("hbtn");
    location.href = "/login";
  });
}
