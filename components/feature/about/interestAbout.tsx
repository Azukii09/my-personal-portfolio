import Image from "next/image";

export default function InterestAbout(props:{
    data:any[]
}) {
    return(
        <>
            <div className={"flex gap-8 items-center justify-between"}>
                <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>interest</h1>
                <div className={"bg-ternary h-[2px] w-3/4"}></div>
            </div>
            <div className={"mt-6"}>
                <ul className={"flex gap-4 flex-col"}>
                    {props.data.map((interest) => (
                        <li className={"flex gap-2 items-center"} key={interest.id}>
                            <div className={"relative w-3 h-2"}>
                                <Image src={"/assets/img/play-new.png"} alt={"play"} fill/>
                            </div>
                            {interest.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}