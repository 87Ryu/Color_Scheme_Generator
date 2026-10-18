const btn = document.querySelector("button")
const colorInput = document.querySelector("input[type='color']")
const select = document.querySelector("select")

btn.addEventListener("click", function() {
    const color = colorInput.value.slice(1)
    const mode = select.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderColors(data)
        })
})

function renderColors(data) {
    const container = document.getElementById("colors-container")
    container.innerHTML = data.colors.map(color => `
        <div class="color-swatch">
            <div class="color-swatch-color" style="background-color: ${color.hex.value}"></div>
            <p>${color.hex.value}</p>
        </div>
    `).join("")
}