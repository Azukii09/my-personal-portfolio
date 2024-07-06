export default function ProfileAbout() {
    return (
        <div className={"my-12 flex flex-col gap-8 lg:flex-row lg:gap-0 justify-between"}>
            <div className={"w-full lg:w-5/12 flex flex-col gap-4"}>
                <div className={"text-justify indent-5"}>Hi, my name is Alvillage Zuksnisianta! As a freelance and
                    self-employed Full Stack Web Developer since 2016, I design and develop web applications using a
                    variety of technologies including Golang, PostgreSQL, MySQL, Docker, Git, React.js, Vue.js,
                    Laravel, Next.js, Bootstrap, and Tailwind CSS.
                </div>
                <div className={"text-justify indent-5"}>My responsibilities include creating and managing
                    databases, integrating APIs, ensuring application performance and security, debugging and
                    resolving issues, collaborating with cross-functional teams, and maintaining documentation for
                    ongoing development and future updates. I am also experienced in installing websites on both
                    shared hosting and VPS platforms.
                </div>
            </div>
            <div className={"w-full lg:w-5/12 flex flex-col gap-4"}>
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
    )
}