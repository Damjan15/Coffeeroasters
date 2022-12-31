import granEspresso from "../public/assets/home/desktop/image-gran-espresso.png";
import planalto from "../public/assets/home/desktop/image-planalto.png";
import piccollo from "../public/assets/home/desktop/image-piccollo.png";
import danche from "../public/assets/home/desktop/image-danche.png";
import quality from "../public/assets/home/desktop/icon-coffee-bean.svg";
import gift from "../public/assets/home/desktop/icon-gift.svg";
import truck from "../public/assets/home/desktop/icon-truck.svg";
import thumbnailAustralia from "../public/assets/about/desktop/illustration-australia.svg";
import thumbnailCanada from "../public/assets/about/desktop/illustration-canada.svg";
import thumbnailUK from "../public/assets/about/desktop/illustration-uk.svg";



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

export const chooseCards = [
    {
        id: "best-quality",
        image: quality,
        title: "Best Quality",
        description: "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
    },
    {
        id: "exclusive-benefits",
        image: gift,
        title: "Exclusive benefits",
        description: "Special offers and swag when you subscribe, including 30% off your first shipment."
    },
    {
        id: "free-shipping",
        image: truck,
        title: "Free shipping",
        description: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
    }
]

export const steps = [
    {
        id: "01",
        stepNum: "01",
        title: "Pick your coffee",
        description: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
    },
    {
        id: "02",
        stepNum: "02",
        title: "Choose the frequency",
        description: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
    },
    {
        id: "03",
        stepNum: "03",
        title: "Receive and enjoy",
        description: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
    }
]

export const headquarters = [
    {
        id: "united-kingdom",
        thumbnail: thumbnailUK,
        title: "United Kingdom",
        itemOne: "68  Asfordby Rd",
        itemTwo: "Alcaston",
        itemThree: "SY6 1YA",
        phone: "+44 1241 918425"
    },
    {
        id: "canada",
        thumbnail: thumbnailCanada,
        title: "Canada",
        itemOne: "1528  Eglinton Avenue",
        itemTwo: "Toronto",
        itemThree: "Ontario M4P 1A6",
        phone: "+1 416 485 2997"
    },
    {
        id: "australia",
        thumbnail: thumbnailAustralia,
        title: "Australia",
        itemOne: "36 Swanston Street",
        itemTwo: "Kewell",
        itemThree: "Victoria",
        phone: "+61 4 9928 3629"
    },
]