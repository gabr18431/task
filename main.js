// Chart.js

const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,2200,1060,1070,1310,1330,1210,530,578],
      borderColor: "#E91E63",
      fill: false
    },{
      data: [300,700,1500,3000,2500,2100,2000,1000,200,100],
      borderColor: "#5051F9",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

// mobil menu 
let menu = document.querySelector('.mobil-menu');
let sideBar = document.querySelector('.page-container');

menu.onclick = () => {
  sideBar.classList.toggle('show-mobile-menu');
}

// action button

let btns = document.querySelectorAll('.delivery-tracking .card-tracking button');
let card = document.querySelector('.delivery-card');

btns.forEach(btn => {
  btn.onclick = () => {
    btn.closest('.delivery-card').classList.toggle('action');
  }
})