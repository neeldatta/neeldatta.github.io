function toggleTheme() {
    let bod = document.getElementsByTagName("body")[0];
    bod.classList.add("dark-mode");
}

let togbutt = document.getElementById("toggleButton");
togbutt.onclick = toggleTheme;