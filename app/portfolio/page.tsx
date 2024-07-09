import BigTitleAbout from "@/components/component/bigTitleAbout";
import ProjectCardModal from "@/components/feature/portfolio/projectCardModal";

export default function PortfolioPage() {
    return(
        <div className={"w-full"}>
            <BigTitleAbout title={"Portfolio"}/>
            <div className={"w-full my-12 flex flex-wrap flex-col md:flex-row"}>
                <ProjectCardModal/>
            </div>

            {/*bottom high set*/}
            <div className={"h-36"}></div>
        </div>
    )
}