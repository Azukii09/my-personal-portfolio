import ProgressBar from "@/components/component/progressBar";

export default function SkillAbout(props:{
    data: any[];
}) {
    return(
        <>
            <div className={"flex gap-8 items-center justify-between"}>
                <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>skill</h1>
                <div className={"bg-ternary h-[2px] w-3/4"}></div>
            </div>
            <div className={"mt-6 flex flex-col gap-4"}>
                {props.data.map((skill) => (
                    <ProgressBar percentage={skill.percentage} label={skill.label} key={skill.id}/>
                ))}
            </div>
        </>
    )
}