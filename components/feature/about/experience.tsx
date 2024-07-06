export default function ExperienceSections(props:{
    list:any[],
}) {
    return(
        <div className="-my-6">
            {props.list.map((item:{company:string,position:string,description:string,date:string}, index) =>
                <div className="relative pl-8 sm:pl-32 py-6 group" key={index}>
                    {/*Purple label*/}
                    <div className="italic font-medium text-xl text-primary mb-1 sm:mb-0">{item.company}</div>
                    {/*Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after)*/}
                    <div
                        className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-ternary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-primary after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <span
                            className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-11 pl-2 mb-3 sm:mb-0 text-secondary bg-accent rounded-xl">
                            {item.date}
                        </span>
                        <div className="text-xl font-bold text-primary">{item.position}</div>
                    </div>
                    {/*Content*/}
                    <div className="text-secondary">
                        {item.description}
                    </div>
                </div>
            )}
        </div>
    )
}