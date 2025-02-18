export const FadeLeft = (delay:number) =>{
    return{
        hidden:{
            opacity:0,
            x:100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:0.5,
                delay:delay,
            }
        }
    }
}