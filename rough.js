console.log("rough shit")

const g = ({t})=>{
    t.forEach(e => {
        console.log(e.name)   
    });
}

let t = [
    {
        id:1,
        name:"karan"
    },
    {
        id:2,
        name:"bob"
    },
    {
        id:3,
        name:"tom"
    }
]
g({t})