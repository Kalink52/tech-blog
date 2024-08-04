console.log('hello')

const homebtn = document.getElementById('homebtn')
const dashboardbtn = document.getElementById('dashboardbtn')
const loginbtn = document.getElementById('loginbtn')
const logoutbtn = document.getElementById('logoutbtn')

homebtn.addEventListener('click', () => {
    console.log('hbtn')
    location.href = "/"
})

dashboardbtn.addEventListener('click', () => {
    console.log('hbtn')
    location.href = "/dashboard"
})

loginbtn.addEventListener('click', () => {
    console.log('hbtn')
    location.href = "/login"
})

logoutbtn.addEventListener('click', () => {
    console.log('hbtn')
    location.href = "/logout"
})