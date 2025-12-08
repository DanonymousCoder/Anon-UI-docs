let mains = document.querySelectorAll("main");
let asideLinks = document.querySelectorAll(".sidebar-link");


asideLinks.forEach(asideLink => {
    
    asideLink.addEventListener("click", () => {
        asideLinks.forEach(asideLink => asideLink.classList.remove("active"));

        asideLink.classList.add("active");

        mains.forEach(main => {
            if (main.id == asideLink.id) {
                mains.forEach(main => {main.classList.add("main-hide")})
                main.classList.remove("main-hide")
            }
        })
    })
})