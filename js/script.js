const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear().toString()

yearEl.textContent = currentYear

function toggleClassOneEl(whereEl, whatEl, whatClass) {
    if (NodeList.prototype.isPrototypeOf(whatEl)) {
        whatEl.forEach((el) => el.addEventListener('click', () => {
            whereEl.classList.toggle(whatClass)
        }))
    }else{
    whatEl.addEventListener('click', () => {
        whereEl.classList.toggle(whatClass)
    })}
}

// mobile nav
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
const mainNavLinkEl = document.querySelectorAll('.main-nav-link')

toggleClassOneEl(headerEl, btnNavEl, 'nav-open')
toggleClassOneEl(headerEl,mainNavLinkEl,'nav-open')


// sticky nav
const sectionHeroEl = document.querySelector('.section-hero')

const observer = new IntersectionObserver((entries) => {
        const ent = entries[0]
        !ent.isIntersecting ?
            document.body.classList.add('sticky') :
            document.body.classList.remove('sticky')
    },
    {
        root: null,
        threshold: 0,
        rootMargin: '-80px',
    })

observer.observe(sectionHeroEl)

//fixing flex-gap
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();