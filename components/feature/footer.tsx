import Image from "next/image";

export default function Footer() {
    return(
        <footer className="fixed bottom-0 px-6 sm:px-8 md:px-16 lg:px-20 w-full">
            <div className={"h-20 bg-white flex items-center justify-between"}>
                <div className={"text-lg text-primary"}>Copyright <span className={"text-xl"}>© 2024</span></div>
                <div className={"flex gap-4"}>
                    <Image src={"/assets/img/socmed/wa.png"} alt={"wa"} height={25} width={25}/>
                    <Image src={"/assets/img/socmed/github.png"} alt={"wa"} height={25} width={25}/>
                    <Image src={"/assets/img/socmed/instagram.png"} alt={"wa"} height={25} width={25}/>
                    <Image src={"/assets/img/socmed/linkedin.png"} alt={"wa"} height={25} width={25}/>
                </div>
            </div>
        </footer>
    )
}