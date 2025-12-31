let mains = document.querySelectorAll("main");
let asideLinks = document.querySelectorAll(".sidebar-link");
let wipText = document.getElementById("wip-text");


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


let text = "Work in progress", speed = 50, i = 0, un_i = 19;

function displayText() {
    if (i < text.length) {
        wipText.textContent += text.charAt(i);
        i++;
         if (i == 19) {
            un_i = 19;
            removeText();
        }
        setTimeout(displayText, speed);
    }
}

function removeText() {
    if (un_i > 0) {
        
        wipText.textContent = wipText.textContent.slice(0, -1);
        // console.log(wip)
        un_i--;

        if (un_i == 0) {
            i = 0;
            un_i = 0;
            displayText();
        }

        setTimeout(removeText, speed);
    }
}

document.addEventListener("DOMContentLoaded", displayText);