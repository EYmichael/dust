
const featNavCon = document.querySelector(".featured-items_listcon")

function featuresDropDownNav() {
    if (featNavCon.style.display == "none") {
        featNavCon.style.display = "flex"
    } else {
        featNavCon.style.display = "none"
    }
}


const compNavCon = document.querySelector(".company-items_listcon")

function companyDropDownNav() {
    if (compNavCon.style.display == "none") {
        compNavCon.style.display = "flex"
    } else {
        compNavCon.style.display = "none"
    }
}