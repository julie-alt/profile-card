const themeBtn = document.getElementById("theme-btn")
const profileCard = document.querySelector(".profile-card")

themeBtn.addEventListener('click', () => {
  profileCard.classList.toggle("dark-theme"),
    document.body.classList.toggle("dark-theme")
})

const style = document.createElement("style")
style.innerHTML = `
  .dark-theme{
    background:url('/background-dark.png') ;
    color: white
  }
  .utc-time{
    color: white
    }
     .dark-theme button {
        background:#1b1b1a;
    }
    .dark-theme button:hover {
        background:#3d3a37;
    }
`;
document.head.appendChild(style);

function updateUTCTime() {
  const date = new Date();
  const utc = date.toUTCString();
  document.getElementById('utc-time').innerHTML = utc;
  setTimeout(updateUTCTime, 1000);
}
updateUTCTime();