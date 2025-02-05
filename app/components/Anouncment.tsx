import React from "react"

interface AnnouncementBar{
    visible?:boolean,
    content?:string,
}
export const Anouncment:React.FC<AnnouncementBar> = ({visible,content})=>{
    return(
        <div className={` bg-black text-white w-full overflow-hidden font-semibold p-1  ${visible ? 'block':'hidden'}`}>
            <h1 className="animate-marquee">{content}</h1>
        </div>
    )
}

