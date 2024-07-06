import {getServicesAbout} from "@/data/serviceAbout";
import {getInterstAbout} from "@/data/interestAbout";
import {getLanguageAbout} from "@/data/languageSkill";
import {getSkillAbout} from "@/data/skillData";
import ExperienceSections from "@/components/feature/about/experience";
import {getExperienceAbout} from "@/data/experienceData";
import BigTitleAbout from "@/components/feature/about/bigTitleAbout";
import ProfileAbout from "@/components/feature/about/profileAbout";
import ServiceAbout from "@/components/feature/about/serviceAbout";
import InterestAbout from "@/components/feature/about/interestAbout";
import SkillAbout from "@/components/feature/about/skillAbout";
import LanguageAbout from "@/components/feature/about/languageAbout";

export const metadata = {
    title: "About",
    description:"About Page",
    icons: {
        icon: [
            {
                url: '/assets/img/logo-square.png',
                href: '/assets/img/logo-square.png',
            }
        ],
    },
}

export default function AboutPage(){
    const dataService = getServicesAbout()
    const dataInterest = getInterstAbout()
    const dataLanguage = getLanguageAbout()
    const dataSkill = getSkillAbout()

    return (
        <div className="w-full">
            {/*about sections*/}
            <BigTitleAbout title={"about me"}/>

            {/*profile data*/}
            <ProfileAbout/>

            {/*services and interest*/}
            <div className={"my-12 flex flex-col gap-8 lg:flex-row lg:gap-0 justify-between"}>
                {/*services section*/}
                <div className={" w-full lg:w-5/12 flex flex-col gap-4"}>
                    <ServiceAbout data={dataService}/>
                </div>
                {/*interest section*/}
                <div className={"w-full lg:w-5/12 flex flex-col gap-4"}>
                    <InterestAbout data={dataInterest}/>
                </div>
            </div>

            {/*skills and language*/}
            <div className={"my-12 flex flex-col gap-8 lg:flex-row lg:gap-0 justify-between"}>
                {/*skill sections*/}
                <div className={" w-full lg:w-5/12 flex flex-col gap-4"}>
                    <SkillAbout data={dataSkill}/>
                </div>
                {/*language section*/}
                <div className={"w-full lg:w-5/12 flex flex-col gap-4"}>
                    <LanguageAbout data={dataLanguage}/>
                </div>
            </div>

            {/*experience*/}
            <BigTitleAbout title={"experience"}/>
            <div className={"my-12"}>
                <ExperienceSections list={getExperienceAbout()}/>
            </div>
            {/*bottom high set*/}
            <div className={"h-36"}></div>
        </div>
    )
}