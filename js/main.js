const ul = document.getElementById("ul");
const body = document.querySelector("body");

let burger_nav = () => {
    let menu = document.querySelector(".menu-burger");
    let nav_list = document.querySelectorAll(".link-container li");
    //
    menu.addEventListener("click", () => {
        val();
        //
        nav_list.forEach((link, i) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    i / 5 + 0.5
                }s`;
            }
            //
            menu.classList.toggle(`toggle`);
        });
    });

    function val() {
        if (ul.classList.contains("show-menu")) {
            ul.classList.remove("show-menu");
            body.classList.remove("no-move");
        } else {
            ul.classList.add("show-menu");
            body.classList.add("no-move");
        }
    }
};
burger_nav();
