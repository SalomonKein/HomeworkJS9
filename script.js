function removeHide(id) {
    
    let elem = document.getElementById(`${id}`)
    elem.removeAttribute('hidden');
            
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
        document.getElementById(`${elem.classList[1]}`).hidden = true
    }
    li.classList.add('active');
    removeHide(li.classList[1])
    
}
console.log(ul);