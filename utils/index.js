import granEspresso from "../public/assets/home/desktop/image-gran-espresso.png";
import planalto from "../public/assets/home/desktop/image-planalto.png";
import piccollo from "../public/assets/home/desktop/image-piccollo.png";
import danche from "../public/assets/home/desktop/image-danche.png";



export const navLinks = [
    {
        id: "home",
        name: "Home",
        route: "/"
    },
    {
        id: "about-us",
        name: "About Us",
        route: "/about-us"
    },
    {
        id: "plan",
        name: "Create your plan",
        route: "/create-plan"
    }
]


export const coffees = [
    {
        id: "gran-espresso",
        image: granEspresso,
        name: "Gran Espresso",
        description : "Light and flavorful blend with cocoa and black pepper for an intense experience"
    },
    {
        id: "planalto",
        image: planalto,
        name: "Planalto",
        description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
    },
    {
        id: "piccollo",
        image: piccollo,
        name: "Piccollo",
        description: "Mild and smooth blend featuring notes of toasted almond and dried cherry"
    },
    {
        id: "danche",
        image: danche,
        name: "Danche",
        description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
    }
]