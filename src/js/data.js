
import img1 from "../img/Projects/Prom/preview.JPG"
import PromMockup from "../img/Projects/Prom/Mockups.png"
const img2 = "http://via.placeholder.com/640x360"
const img3 = "http://via.placeholder.com/640x360"
const img4 = "http://via.placeholder.com/640x360"


export const catalogItems = [
    {
        header:"prom",
        img:img1,
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
                    },{
                        name:"Figma",
                        rate:"5",
                        main:"#FF551F",
                        secondary:"#7f1f97"
                    },{
                        name:"Figma",
                        rate:"5",
                        main:"#FF551F",
                        secondary:"#7f1f97"
                    },{
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
    },
    {
        header:"timetable",
        img:img2,
        linkTo:"link2",
        date:2022,
        type:[1]
    },
    {
        header:"personal",
        img:img3,
        linkTo:"link3",
        date:2022,
        type:[0]
    },
    {
        header:"hammer",
        img:img4,
        linkTo:"link4",
        date:2020,
        type:[0]
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