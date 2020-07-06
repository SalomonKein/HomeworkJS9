function removeHide(id) {
    let elem = document.getElementById(id)
    console.log(document.getElementById(`${id}`));
    elem.removeAttribute('hidden');
    document.querySelector(`.${id}`).style.background = `#937341`;
    document.querySelector(`.${id}`).style.color = `#23201D`;

    // document.getElementsByTagName('li').hidden = true;
}

document.querySelector('.Akali').addEventListener("click", () => {
    removeHide("Akali")
    document.getElementById(`Anivia`).hidden = true
    document.querySelector(`.Anivia`).style.background = `#23201D`;
    document.querySelector(`.Anivia`).style.color = `#937341`;
    document.getElementById(`Draven`).hidden = true
    document.querySelector(`.Draven`).style.background = `#23201D`;
    document.querySelector(`.Draven`).style.color = `#937341`;
    document.getElementById(`Garen`).hidden = true
    document.querySelector(`.Garen`).style.background = `#23201D`;
    document.querySelector(`.Garen`).style.color = `#937341`;
    document.getElementById(`Katarina`).hidden = true
    document.querySelector(`.Katarina`).style.background = `#23201D`;
    document.querySelector(`.Katarina`).style.color = `#937341`;
});
document.querySelector('.Anivia').addEventListener("click", () => {
    removeHide("Anivia")
    document.getElementById(`Akali`).hidden = true
    document.querySelector(`.Akali`).style.background = `#23201D`;
    document.querySelector(`.Akali`).style.color = `#937341`;
    document.getElementById(`Draven`).hidden = true
    document.querySelector(`.Draven`).style.background = `#23201D`;
    document.querySelector(`.Draven`).style.color = `#937341`;
    document.getElementById(`Garen`).hidden = true
    document.querySelector(`.Garen`).style.background = `#23201D`;
    document.querySelector(`.Garen`).style.color = `#937341`;
    document.getElementById(`Katarina`).hidden = true
    document.querySelector(`.Katarina`).style.background = `#23201D`;
    document.querySelector(`.Katarina`).style.color = `#937341`;
});
document.querySelector('.Draven').addEventListener("click", () => {
    removeHide("Draven")
    document.getElementById(`Anivia`).hidden = true
    document.querySelector(`.Anivia`).style.background = `#23201D`;
    document.querySelector(`.Anivia`).style.color = `#937341`;
    document.getElementById(`Akali`).hidden = true
    document.querySelector(`.Akali`).style.background = `#23201D`;
    document.querySelector(`.Akali`).style.color = `#937341`;
    document.getElementById(`Garen`).hidden = true
    document.querySelector(`.Garen`).style.background = `#23201D`;
    document.querySelector(`.Garen`).style.color = `#937341`;
    document.getElementById(`Katarina`).hidden = true
    document.querySelector(`.Katarina`).style.background = `#23201D`;
    document.querySelector(`.Katarina`).style.color = `#937341`;
});
document.querySelector('.Garen').addEventListener("click", () => {
    removeHide("Garen")
    document.getElementById(`Anivia`).hidden = true
    document.querySelector(`.Anivia`).style.background = `#23201D`;
    document.querySelector(`.Anivia`).style.color = `#937341`;
    document.getElementById(`Draven`).hidden = true
    document.querySelector(`.Draven`).style.background = `#23201D`;
    document.querySelector(`.Draven`).style.color = `#937341`;
    document.getElementById(`Akali`).hidden = true
    document.querySelector(`.Akali`).style.background = `#23201D`;
    document.querySelector(`.Akali`).style.color = `#937341`;
    document.getElementById(`Katarina`).hidden = true
    document.querySelector(`.Katarina`).style.background = `#23201D`;
    document.querySelector(`.Katarina`).style.color = `#937341`;
});
document.querySelector('.Katarina').addEventListener("click", () => {
    removeHide("Katarina")
    document.getElementById(`Anivia`).hidden = true
    document.querySelector(`.Anivia`).style.background = `#23201D`;
    document.querySelector(`.Anivia`).style.color = `#937341`;
    document.getElementById(`Draven`).hidden = true
    document.querySelector(`.Draven`).style.background = `#23201D`;
    document.querySelector(`.Draven`).style.color = `#937341`;
    document.getElementById(`Garen`).hidden = true
    document.querySelector(`.Garen`).style.background = `#23201D`;
    document.querySelector(`.Garen`).style.color = `#937341`;
    document.getElementById(`Akali`).hidden = true
    document.querySelector(`.Akali`).style.background = `#23201D`;
    document.querySelector(`.Akali`).style.color = `#937341`;
});
console.log(document.querySelector('.Katarina'));