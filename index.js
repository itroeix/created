console.log("Nothing here...")

function update() {
    const dateNow = Math.round(Date.now() / 1000)
    const actual = dateNow - 1648754710;


    console.log("🎉 Updated 🎉")
    const resultado = document.querySelector('.update');
    resultado.textContent = `This website was created ${actual} seconds ago.`;
}


// -AutoUpdate-
//setInterval(update, 1000);
