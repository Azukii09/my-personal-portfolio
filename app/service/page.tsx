import BigTitleAbout from "@/components/component/bigTitleAbout";
import ServiceProvider from "@/components/feature/services/serviceProvider";

export default function ServicePage() {
    return(
        <div className={"w-full"}>
            <BigTitleAbout title={"Services"}/>
            <div className={"w-full my-12 flex flex-wrap flex-col md:flex-row"}>
                <ServiceProvider/>
            </div>
            {/*bottom high set*/}
            <div className={"h-36"}></div>
        </div>
    )
}