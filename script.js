const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listitems = []
document.getElementById("filter").addEventListener("enter", function(){
  alert("you clicked");
})

getData()

filter.addEventListener("input" , (e) => filterData(e.target.value))


async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50")
  const { results } = await res.json()

  //clear result
  result.innerHTML = ""
   
  results.forEach(user => {
    const li = document.createElement("li")
    listitems.push(li)

    li.innerHTML = `
      <img src="${user.picture.large}" alt"${user.name.first}">
      <div class="user-list">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city} ${user.location.country}</p>
      </div>
    `

    result.appendChild(li)
  })
}

function filterData(searchTerm) {
  listitems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}
