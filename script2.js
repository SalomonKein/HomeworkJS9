function removeHide(id) {
    // console.log(document.querySelector(`#idHero`));
    let elem = document.getElementById(`${document.querySelector(`li`).className}`)
    elem.removeAttribute('hidden');
    document.querySelector(`.${id}`).style.background = `#937341`;
    document.querySelector(`.${id}`).style.color = `#23201D`;
    console.log(document.querySelector(`li`).className)
        // document.getElementsByTagName('li').hidden = true;
}

let ul = document.querySelector(`ul`);


ul.addEventListener("click", () =>  {
    if (event.target.tagName != "LI") return;

    else {
      select(event.target);
    }
});

// ul.addEventListener("onmousedown", () =>   {
//     return false;
//   });
  
function select(li) {
    let selected = ul.querySelectorAll('.active');
    for(let elem of selected) {
      elem.classList.remove('active');
    }
    li.classList.add('active');
  }
console.log(ul);
// document.querySelector('li').addEventListener("click", () => {
//     document.querySelector('.tabs-title').dataset.Id = 'idHero';
//     // removeHide("idHero")
//     document.getElementById(`Anivia`).hidden = true
//     document.querySelector(`.Anivia`).style.background = `#23201D`;
//     document.querySelector(`.Anivia`).style.color = `#937341`;
//     document.getElementById(`Draven`).hidden = true
//     document.querySelector(`.Draven`).style.background = `#23201D`;
//     document.querySelector(`.Draven`).style.color = `#937341`;
//     document.getElementById(`Garen`).hidden = true
//     document.querySelector(`.Garen`).style.background = `#23201D`;
//     document.querySelector(`.Garen`).style.color = `#937341`;
//     document.getElementById(`Katarina`).hidden = true
//     document.querySelector(`.Katarina`).style.background = `#23201D`;
//     document.querySelector(`.Katarina`).style.color = `#937341`;
// });

// document.click(function(e){ console.log($(e.target).attr('class')) })

// document.querySelector('.Akali').addEventListener("click", () => {
//     removeHide("Akali")
//     document.getElementById(`Anivia`).hidden = true
//     document.querySelector(`.Anivia`).style.background = `#23201D`;
//     document.querySelector(`.Anivia`).style.color = `#937341`;
//     document.getElementById(`Draven`).hidden = true
//     document.querySelector(`.Draven`).style.background = `#23201D`;
//     document.querySelector(`.Draven`).style.color = `#937341`;
//     document.getElementById(`Garen`).hidden = true
//     document.querySelector(`.Garen`).style.background = `#23201D`;
//     document.querySelector(`.Garen`).style.color = `#937341`;
//     document.getElementById(`Katarina`).hidden = true
//     document.querySelector(`.Katarina`).style.background = `#23201D`;
//     document.querySelector(`.Katarina`).style.color = `#937341`;
// });
// document.querySelector('.Anivia').addEventListener("click", () => {
//     removeHide("Anivia")
//     document.getElementById(`Akali`).hidden = true
//     document.querySelector(`.Akali`).style.background = `#23201D`;
//     document.querySelector(`.Akali`).style.color = `#937341`;
//     document.getElementById(`Draven`).hidden = true
//     document.querySelector(`.Draven`).style.background = `#23201D`;
//     document.querySelector(`.Draven`).style.color = `#937341`;
//     document.getElementById(`Garen`).hidden = true
//     document.querySelector(`.Garen`).style.background = `#23201D`;
//     document.querySelector(`.Garen`).style.color = `#937341`;
//     document.getElementById(`Katarina`).hidden = true
//     document.querySelector(`.Katarina`).style.background = `#23201D`;
//     document.querySelector(`.Katarina`).style.color = `#937341`;
// });
// document.querySelector('.Draven').addEventListener("click", () => {
//     removeHide("Draven")
//     document.getElementById(`Anivia`).hidden = true
//     document.querySelector(`.Anivia`).style.background = `#23201D`;
//     document.querySelector(`.Anivia`).style.color = `#937341`;
//     document.getElementById(`Akali`).hidden = true
//     document.querySelector(`.Akali`).style.background = `#23201D`;
//     document.querySelector(`.Akali`).style.color = `#937341`;
//     document.getElementById(`Garen`).hidden = true
//     document.querySelector(`.Garen`).style.background = `#23201D`;
//     document.querySelector(`.Garen`).style.color = `#937341`;
//     document.getElementById(`Katarina`).hidden = true
//     document.querySelector(`.Katarina`).style.background = `#23201D`;
//     document.querySelector(`.Katarina`).style.color = `#937341`;
// });
// document.querySelector('.Garen').addEventListener("click", () => {
//     removeHide("Garen")
//     document.getElementById(`Anivia`).hidden = true
//     document.querySelector(`.Anivia`).style.background = `#23201D`;
//     document.querySelector(`.Anivia`).style.color = `#937341`;
//     document.getElementById(`Draven`).hidden = true
//     document.querySelector(`.Draven`).style.background = `#23201D`;
//     document.querySelector(`.Draven`).style.color = `#937341`;
//     document.getElementById(`Akali`).hidden = true
//     document.querySelector(`.Akali`).style.background = `#23201D`;
//     document.querySelector(`.Akali`).style.color = `#937341`;
//     document.getElementById(`Katarina`).hidden = true
//     document.querySelector(`.Katarina`).style.background = `#23201D`;
//     document.querySelector(`.Katarina`).style.color = `#937341`;
// });
// document.querySelector('.Katarina').addEventListener("click", () => {
//     removeHide("Katarina")
//     document.getElementById(`Anivia`).hidden = true
//     document.querySelector(`.Anivia`).style.background = `#23201D`;
//     document.querySelector(`.Anivia`).style.color = `#937341`;
//     document.getElementById(`Draven`).hidden = true
//     document.querySelector(`.Draven`).style.background = `#23201D`;
//     document.querySelector(`.Draven`).style.color = `#937341`;
//     document.getElementById(`Garen`).hidden = true
//     document.querySelector(`.Garen`).style.background = `#23201D`;
//     document.querySelector(`.Garen`).style.color = `#937341`;
//     document.getElementById(`Akali`).hidden = true
//     document.querySelector(`.Akali`).style.background = `#23201D`;
//     document.querySelector(`.Akali`).style.color = `#937341`;
// });