import Image from "next/image";

export default function ServiceAbout(props:{
    data:any[]
}) {
    return(
        <>
            <div className={"flex gap-8 items-center justify-between"}>
                <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>services</h1>
                <div className={"bg-ternary h-[2px] w-3/4"}></div>
            </div>
            <div className={"mt-6"}>
                <ul className={"flex gap-4 flex-col"}>
                    {props.data.map((service) => (
                        <li className={"flex gap-2 items-center"} key={service.id}>
                            <div className={"relative w-3 h-2"}>
                                <Image src={"/assets/img/play-new.png"} alt={"play"} fill/>
                            </div>
                            {service.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}