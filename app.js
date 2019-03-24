function toggleDropdown() {
    let navbarToggle = document.getElementById("navbarToggle");
    let navbar = document.getElementById("navbar");
    if (navbarToggle.className === "navbarList") {
        navbarToggle.className += " responsive";
        navbar.className += " expandNav";
    } else {
        navbarToggle.className = "navbarList";
        navbar.className = "navbar";
    };
};