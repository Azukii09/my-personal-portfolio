import BigTitleAbout from "@/components/component/bigTitleAbout";
import ServiceProvider from "@/components/feature/services/serviceProvider";

export default function ServicePage() {
    return(
        <div className={"w-full"}>
            <BigTitleAbout title={"Services"}/>
            <div className={"w-full my-12 flex flex-wrap flex-col md:flex-row"}>
                <ServiceProvider
                    title={"Title"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo quidem repudiandae temporibus vero? Culpa earum harum sit totam! Consequuntur dolorem eligendi eum maiores minima neque nulla quisquam similique sint!"}
                    imgBlack={"/assets/img/socmed/github.png"} imgWhite={"/assets/img/socmed/github-w.png"}
                />
                <ServiceProvider
                    title={"Title"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo quidem repudiandae temporibus vero? Culpa earum harum sit totam! Consequuntur dolorem eligendi eum maiores minima neque nulla quisquam similique sint!"}
                    imgBlack={"/assets/img/socmed/github.png"} imgWhite={"/assets/img/socmed/github-w.png"}
                />
                <ServiceProvider
                    title={"Title"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo quidem repudiandae temporibus vero? Culpa earum harum sit totam! Consequuntur dolorem eligendi eum maiores minima neque nulla quisquam similique sint!"}
                    imgBlack={"/assets/img/socmed/github.png"} imgWhite={"/assets/img/socmed/github-w.png"}
                />
                <ServiceProvider
                    title={"Title"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo quidem repudiandae temporibus vero? Culpa earum harum sit totam! Consequuntur dolorem eligendi eum maiores minima neque nulla quisquam similique sint!"}
                    imgBlack={"/assets/img/socmed/github.png"} imgWhite={"/assets/img/socmed/github-w.png"}
                />
            </div>
            {/*bottom high set*/}
            <div className={"h-36"}></div>
        </div>
    )
}