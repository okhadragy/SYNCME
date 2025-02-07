if (!(getCookie("auth_token")) && !(window.location.pathname.includes("login")) && !(window.location.pathname.includes("signup"))) {
    window.location.href = "/login"
}

if (getCookie("auth_token") && ((window.location.pathname.includes("login")) || (window.location.pathname.includes("signup")))) {
    logout(getCookie("auth_token"));
    setCookie("auth_token", "",0);
}

function redirectToLoginPage() {
    window.location.href = "/login"
}

function redirectToPage() {
    window.location.href = "/messages";
}

function redirectToPage2() {
    window.location.href = "/students";
}

function redirectToPage3() {
    window.location.href = "/groups";
}