import exp from "constants";

type CardProps = {
    imageSrc:string;
    title:string;
    text:string
}
export function FirstCard({imageSrc,title,text}:CardProps){
    return (
        <div className="flex flex-col items-center text-center max-w-[278px]">
        <img src={imageSrc} alt="" className="w-[140px] h-[186px]" />
        <h1 className="font-bold text-[24px]">{title}</h1>
        <p className="pt-[20px]">{text}</p>
      </div>
    )
}

type CardProps2 = {
    color:string;
    imageSrc:string;
    title:string;
    text:string;
}
export function SecondCard({color,imageSrc,title,text}:CardProps2){
    return(
        <div className={`bg-[${color}] w-[270px] h-[370px] rounded-[40px] shadow-[0_0_20px_5px_rgba(0,0,0,0.2)]`}>
        <img src={imageSrc} className="relative bottom-[75px]" alt="" />
        <div className="flex flex-col justify-start px-[40px]">
          <span className="font-bold text-[40px] ">{title}</span>
          <span>{text}

          </span>
        </div>
      </div>
    )
}

