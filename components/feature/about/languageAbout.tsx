import RadialProgressBar from "@/components/component/radialProgressBar";

export default function LanguageAbout(props:{
    data: any[];
}) {
    return(
        <>
            <div className={"flex gap-8 items-center justify-between"}>
                <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>language</h1>
                <div className={"bg-ternary h-[2px] w-3/4"}></div>
            </div>
            <div className={"mt-6 flex gap-2 flex-wrap"}>
                {props.data.map((language) => (
                    <RadialProgressBar percentage={language.percentage} language={language.language}
                                       key={language.id}/>
                ))}
            </div>
        </>
    )
}