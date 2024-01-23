/* Replaces navbar ID with the navbar.html on every page */
fetch('navbar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector('script#replace_with_navbar');
    let newelem = document.createElement('div');
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

/* Allows the side navigation bar to function properly (open/close) */
function showSideBar(){
    const sidebar = document.querySelector('#site-overview-sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('#site-overview-sidebar')
    sidebar.style.display = 'none'
}

/* Allows the side navigation bar extend and show career links */
function revealCareerOptions(){
    hideSidebar()
    const careerPageSections = document.querySelector('#career-section-sidebar')
    careerPageSections.style.display = 'flex'
}

function hideCareerOptions(){
    showSideBar()
    const careerPageSections = document.querySelector('#career-section-sidebar')
    careerPageSections.style.display = 'none'
}

/* Replaces footer ID with the footer.html on every page */
fetch('footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector('script#replace_with_footer');
    let newelem = document.createElement('div');
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
