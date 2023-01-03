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


export const questions = [
    {
        id: "question-1",
        question: "How do you drink your coffee?",
        answers: [
            {
                id: "capsules",
                title: "Capsules",
                description: "Compatible with Nespresso systems and similar brewers"
            },
            {
                id: "filter",
                title: "Filter",
                description: "For pour over or drip methods like Aeropress, Chemex, and V60"
            },
            {
                id: "espresso",
                title: "Espresso",
                description: "Dense and finely ground beans for an intense, flavorful experience"
            }
        ]
    },
    {
        id: "question-2",
        question: "What type of coffee?",
        answers: [
            {
                id: "single-origin",
                title: "Single Origin",
                description: "Distinct, high quality coffee from a specific family-owned farm"
            },
            {
                id: "decaf",
                title: "Decaf",
                description: "Just like regular coffee, except the caffeine has been removed"
            },
            {
                id: "blended",
                title: "Blended",
                description: "Combination of two or three dark roasted beans of organic coffees"    
            }
        ]
    },
    {
        id: "question-3",
        question: "How much would you like",
        answers: [
            {
                id: "250g",
                title: "250g",
                description: "Perfect for the solo drinker. Yields about 12 delicious cups."
            },
            {
                id: "500g",
                title: "500g",
                description: "Perfect option for a couple. Yields about 40 delectable cups."
            },
            {
                id: "1000g",
                title: "1000g",
                description: "Perfect for offices and events. Yields about 90 delightful cups."
            }
        ]
    },
    {
        id: "question-4",
        question: "Want us to grind them?",
        answers: [
            {
                id: "wholebean",
                title: "Wholebean",
                description: "Best choice if you cherish the full sensory experience"
            },
            {
                id: "filter",
                title: "Filter",
                description: "For drip or pour-over coffee methods such as V60 or Aeropress"
            },
            {
                id: "cafetiere",
                title: "Cafetiere",
                description: "Course ground beans specially suited for french press coffee"
            }
        ]
    },
    {
        id: "question-5",
        question: "How often should we deliver?",
        answers: [
            {
                id: "every-week",
                title: "Every week",
                description: "$7.20 per shipment. Includes free first-class shipping."
            },
            {
                id: "every-2-weeks",
                title: "Every 2 weeks",
                description: "$9.60 per shipment. Includes free priority shipping."
            },
            {
                id: "every-month",
                title: "Every month",
                description: "$12.00 per shipment. Includes free priority shipping."
            }
        ]
    }
]