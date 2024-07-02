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
    return (
        <div className="w-full">
            {/*about sections*/}
            <div className={"flex gap-8 items-center justify-between"}>
                <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>about me</h1>
                <div className={"bg-ternary h-[2px] w-3/4"}></div>
            </div>
            {/*profile data*/}
            <div className={"my-12 flex justify-between"}>
                <div className={"w-5/12 flex flex-col gap-4"}>
                    <div className={"text-justify indent-5"}>Hi, my name is Alvillage Zuksnisianta! As a freelance and self-employed Full Stack Web Developer since 2016, I design and develop web applications using a variety of technologies including Golang, PostgreSQL, MySQL, Docker, Git, React.js, Vue.js, Laravel, Next.js, Bootstrap, and Tailwind CSS. </div>
                    <div className={"text-justify indent-5"}>My responsibilities include creating and managing databases, integrating APIs, ensuring application performance and security, debugging and resolving issues, collaborating with cross-functional teams, and maintaining documentation for ongoing development and future updates. I am also experienced in installing websites on both shared hosting and VPS platforms.</div>
                </div>
                <div className={"w-5/12 flex flex-col gap-4"}>
                    <div className={"flex"}>
                        <div className={"w-2/6 font-bold text-lg capitalizex"}>Name</div>
                        <div className={"italic text-lg"}>: Alvillage Zuknisianta</div>
                    </div>
                    <div className={"flex"}>
                        <div className={"w-2/6 font-bold text-lg capitalizex"}>Address</div>
                        <div className={"italic text-lg"}>: Pelang Village, RT 001 RW 002,<br/> Kembangbahu District, <br/>Lamongan
                            Regency, <br/>East Java Province,Indonesia</div>
                    </div>
                    <div className={"flex"}>
                        <div className={"w-2/6 font-bold text-lg capitalizex"}>Phone</div>
                        <div className={"italic text-lg"}>: (+62) 811 3339 0006</div>
                    </div>
                    <div className={"flex"}>
                        <div className={"w-2/6 font-bold text-lg capitalizex"}>Mail</div>
                        <div className={"italic text-lg"}>: azuknisinata@gmail.com</div>
                    </div>
                </div>
            </div>
            {/*services and interest*/}
            <div className={"my-12 flex justify-between"}>
                <div className={"w-5/12 flex flex-col gap-4"}>
                    <div className={"flex gap-8 items-center justify-between"}>
                        <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>services</h1>
                        <div className={"bg-ternary h-[2px] w-3/4"}></div>
                    </div>
                    <div className={"mt-6"}>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
                <div className={"w-5/12 flex flex-col gap-4"}>
                    <div className={"flex gap-8 items-center justify-between"}>
                        <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>Interest</h1>
                        <div className={"bg-ternary h-[2px] w-3/4"}></div>
                    </div>
                    <div className={"mt-6"}>
                        <div className={"flex"}>
                            <div className={"w-2/6 font-bold text-lg capitalizex"}>Name</div>
                            <div className={"italic text-lg"}>: Alvillage Zuknisianta</div>
                        </div>
                        <div className={"flex"}>
                            <div className={"w-2/6 font-bold text-lg capitalizex"}>Address</div>
                            <div className={"italic text-lg"}>: Pelang Village, RT 001 RW 002,<br/> Kembangbahu
                                District, <br/>Lamongan
                                Regency, <br/>East Java Province,Indonesia
                            </div>
                        </div>
                        <div className={"flex"}>
                            <div className={"w-2/6 font-bold text-lg capitalizex"}>Phone</div>
                            <div className={"italic text-lg"}>: (+62) 811 3339 0006</div>
                        </div>
                        <div className={"flex"}>
                            <div className={"w-2/6 font-bold text-lg capitalizex"}>Mail</div>
                            <div className={"italic text-lg"}>: azuknisinata@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}