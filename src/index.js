const navBar= document.querySelector('#game-list')
const detailImg= document.querySelector("#detail-image")
const detailTitle= document.querySelector("#detail-title")
const detailScore= document.querySelector("#detail-high-score")
const scoreForm = document.querySelector("#high-score-form")

fetch("http://localhost:3000/games")
.then(resp => resp.json())
.then(data => {
    data.forEach(game => {
        const h5= document.createElement('h5');
        h5.textContent = `${game.name} (${game.manufacturer_name})`
        navBar.append(h5)

        h5.addEventListener('click', event => {     // add this click event in for each so it can apply to all objects
            addGameDetail(game)
        })
    })
  addGameDetail(data[0]) // outside of the forloop
})

function addGameDetail(game) {
    detailImg.src= game.image
    detailTitle.textContent = game.name
    detailScore.textContent = game.high_score
}

scoreForm.addEventListener('submit', event => {
    event.preventDefault()
    // const newHighScore = event.target[0].value
    const newHighScore = document.getElementById('score-input').value // this works too
    detailScore.textContent= newHighScore
    event.target.reset()
})