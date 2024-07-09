import Image from "next/image";

export default function ServiceProvider(){
    return (
        <div className={"w-full md:w-1/2 aspect-square"}>
            <div className="aspect-square m-3 relative flex flex-col justify-center overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-center"></div>
                <div className="group relative m-0 flex flex-col gap-2 justify-center items-center aspect-square shadow-xl ring-gray-900/5 border-2 border-ternary">
                    <div className={"flex items-center"}>
                        <Image src={"/assets/img/socmed/github.png"} alt={""} width={150} height={150}/>
                    </div>
                    <div className={"flex items-center"}>
                        <h1 className={"font-semibold text-3xl"}>Title</h1>
                    </div>
                    <div className={"w-full px-2 flex text-center text-sm overflow-hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        </div>
    )
}