
import PromPrew from "../img/Projects/Prom/preview.JPG"
import HeliosPrew from "../img/Projects/Helios/preview.jpg"
import PersonalPrew from "../img/Projects/Personal/preview.JPG"
import PromMockup from "../img/Projects/Prom/Mockups.png"
import HeliosMockup from "../img/Projects/Helios/Mockups.png"
import PersonalMockup from "../img/Projects/Personal/Mockups.png"

const img2 = "http://via.placeholder.com/640x360"
const img3 = "http://via.placeholder.com/640x360"


export const catalogItems = [
    {
        header:"prom",
        img:PromPrew,
        images:PromMockup,
        linkTo:"https://priceless-agnesi-345083.netlify.app",
        date:2021,
        type: [0],
        stack:[
            {
                type:"stack-design",
                techArray:[
                    {
                        name:"Figma",
                        rate:"5",
                        main:"#FF551F",
                        secondary:"#7f1f97"
                    },
                    {
                        name:"Photoshop",
                        rate:"1",
                        main:"#00144e",
                        secondary:"#00c4ff"
                    }
                ]
            },
            {
                type:"Frontend",
                techArray:[
                    {
                        name:"HTML",
                        rate:"2",
                        main:"#b63e04",
                        secondary:"#ffffff"
                    },
                    {
                        name:"JS",
                        rate:"4",
                        main:"#d0ae34",
                        secondary:"#ffffff"
                    },
                    {
                        name:"ReactJS",
                        rate:"5",
                        main:"#757575",
                        secondary:"#0BDDEB"
                    },

                ]
            }
        ]
    },
    {
        header:"timetable",
        img:img2,
        linkTo:"",
        date:2022,
        type:[1],
        stack:[
            {
                type:"AR",
                techArray:[
                    {
                        name:"Vuforia Engine",
                        rate:"3",
                        main:"#FF551F",
                        secondary:"#7f1f97"
                    },
                    {
                        name:"Unity",
                        rate:"5",
                        main:"#00144e",
                        secondary:"#00c4ff"
                    }
                ]
            },
            {
                type:"stack-programming--short",
                techArray:[
                    {
                        name:"C#",
                        rate:"5",
                        main:"#b63e04",
                        secondary:"#ffffff"
                    },
                ]
            }
        ]
    },
    {
        header:"personal",
        img:PersonalPrew ,
        images: PersonalMockup,
        date:2022,
        type:[0],
        stack:[
            {
                type:"stack-design",
                techArray:[
                    {
                        name:"Figma",
                        rate:"5",
                        main:"#FF551F",
                        secondary:"#7f1f97"
                    },
                    {
                        name:"Photoshop",
                        rate:"2",
                        main:"#00144e",
                        secondary:"#00c4ff"
                    }
                ]
            },
            {
                type:"Frontend",
                techArray:[
                    {
                        name:"HTML",
                        rate:"2",
                        main:"#b63e04",
                        secondary:"#ffffff"
                    },
                    {
                        name:"JS",
                        rate:"4",
                        main:"#d0ae34",
                        secondary:"#ffffff"
                    },
                    {
                        name:"ReactJS",
                        rate:"5",
                        main:"#757575",
                        secondary:"#0BDDEB"
                    },

                ]
            }
        ]
    },
    {
        header:"hammer",
        img:HeliosPrew,
        images:HeliosMockup,
        linkTo:"https://www.figma.com/file/gtQys5YLSA7ubuerhOSk8b/Helios?node-id=0%3A1",
        date:2020,
        type:[0],
        stack:[
            {
                type:"stack-design",
                techArray:[
                    {
                        name:"Figma",
                        rate:"5",
                        main:"#FF551F",
                        secondary:"#7f1f97"
                    }
                ]
            }
        ]

    }
]

export const stack = [
    {
        header:"web",
        stack:[
            {tech:"HTML"},
            {tech:"CSS"},
            {tech:"LESS"},
            {tech:"JS"},
            {tech:"ReactJS"},
            {tech:"NodeJS"},
            {tech:"Git/GitHub"},
            {tech:"REST"},
            {tech:"WebSocket"}
        ]
    },
    {
        header:"AR",
        stack: [
            {
                tech:"Vuforia Engine",
            },
            {
                tech:"ThingWorx",
            },
            {
                tech:"Unity",
            }
        ]
    },
    {
        header: "stack-databases",
        stack: [
            {
                tech:"MySQL",
            },
            {
                tech:"SQL Server",
            },
            {
                tech:"Oracle",
            },
        ]
    },


    {
        header: "stack-cad",
        stack: [
            {
                tech:"NX",
            },
            {
                tech:"Teamcenter",
            },
            {
                tech:"GPSS",
            }
        ]
    },

    {
        header:"stack-programming",
        stack: [
            {
                tech:"C++",

            },
            {
                tech:"С#",
            },
        ]
    },
    {
        header: "stack-design",
        stack: [
            {
                tech:"Photoshop",
            },
            {
                tech:"Figma",
            }
        ]
    }
]
export const projects = [
    {
        title: "personal",

        img:PromMockup,
        stack:[
            {
                type:"stack-design",
                techArray:[
                    {
                        name:"Figma",
                        rate:"5",
                        main:"#FF551F",
                        secondary:"#7f1f97"
                    },
                    {
                        name:"Photoshop",
                        rate:"1",
                        main:"#00144e",
                        secondary:"#00c4ff"
                    }
                ]
            },
            {
                type:"Frontend",
                techArray:[
                    {
                        name:"HTML",
                        rate:"3",
                        main:"#b63e04",
                        secondary:"#ffffff"
                    },
                    {
                        name:"JS",
                        rate:"3",
                        main:"#d0ae34",
                        secondary:"#ffffff"
                    },
                    {
                        name:"ReactJS",
                        rate:"5",
                        main:"#757575",
                        secondary:"#0BDDEB"
                    },

                ]
            }
        ]
    }
]