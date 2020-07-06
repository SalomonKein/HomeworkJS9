function removeHide(id) {
    let elem = document.getElementById(`${id}`)
    elem.removeAttribute('hidden');
    console.log(document.querySelector(`li`).className)
        // document.getElementsByTagName('li').hidden = true;
}

let ul = document.querySelector(`ul`);


ul.addEventListener("click", () => {
    if (event.target.tagName != "LI") return;

    else {
        select(event.target);
    }
});


function select(li) {
    let selected = ul.querySelectorAll('.active');
    for (let elem of selected) {
        elem.classList.remove('active');
    }
    li.classList.add('active');
    console.log(document.querySelector(`li`).text)

}
console.log(ul);