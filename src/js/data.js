
import img1 from "../img/Projects/Prom/preview.JPG"
const img2 = "http://via.placeholder.com/640x360"
const img3 = "http://via.placeholder.com/640x360"
const img4 = "http://via.placeholder.com/640x360"
const img5 = "http://via.placeholder.com/640x360"


export const catalogItems = [
    {
        header:"project1-header",
        img:img1,
        text:"project1-text",
        desc:"projects-desc0",
        linkTo:"link1",
        data:2021,
        type: [0]
    },
    {
        header:"project2-header",
        img:img2,
        text:"project2-text",
        desc: "projects-desc1",
        linkTo:"link2",
        data:2022,
        type:[1]
    },
    {
        header:"project3-header",
        img:img3,
        text:"project3-text",
        desc: "projects-desc0",
        linkTo:"link3",
        data:2022,
        type:[0]
    },
    {
        header:"project4-header",
        img:img4,
        text:"project4-text",
        desc: "projects-desc0",
        linkTo:"link4",
        data:2020,
        type:[0]
    }
]

export const stack = [
    {
        header:"web",
        stack:[
            {
                tech:"HTML",
            },
            {
                tech:"CSS",
            },

            {
                tech:"JS",
            },
            {
                tech:"ReactJS",
            },

            {
                tech:"NodeJS",
            },
            {
                tech:"Git/GitHub",
            },
            {
                tech:"REST",
            },
            {
                tech:"WebSocket"
            }
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
        shortDesc: "Website for PromSnabZashita.",
        longDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet pulvinar neque, eget congue purus ornare vitae. In consequat ipsum molestie, sollicitudin risus sed, congue arcu. ",
        img:img1,
        stack:[
            {
                type:"stack-design",
                techArray:[
                    {
                        name:"Figma",
                        rate:"5"
                    }
                ]
            },
            {
                type:"Frontend",
                techArray:[
                    {
                        name:"ReactJS",
                        rate:"5"
                    }
                ]
            }
        ]
    }
]