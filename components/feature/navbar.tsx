"use client"
import {getNavbar} from "@/data/navbar";
import {usePathname} from "next/navigation";
import React from "react";
import Link from "next/link";

export default function Navbar() {
    const dataNavbar = getNavbar()
    const pathName = usePathname()
    const [active, setActive] = React.useState(false)
    return(
        <nav className="fixed px-6 sm:px-8 md:px-16 lg:px-20 w-full">
            <div className={"top-0 flex justify-between h-20"}>
                <div className={"flex items-center tracking-wider text-xl md:text-2xl lg:text-3xl uppercase font-bold text-primary"}>
                    A.Z.
                </div>
                <div className={"flex items-center"}>
                    <div className="">
                        <ul className="hidden md:flex items-center justify-between">
                            {dataNavbar.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <li
                                        className={
                                        pathName === item.link ?
                                            "bg-primary font-semibold tracking-wide text-contras py-2 px-2 lg:px-3 lg:text-lg text-center group relative min-w-14 text-sm lg:min-w-28 cursor-pointer overflow-hidden" :
                                            "font-semibold tracking-wide group relative min-w-14 text-sm lg:min-w-28 cursor-pointer overflow-hidden py-2 px-2 lg:px-3 lg:text-lg text-center transition-colors duration-700 hover:text-contras"}
                                    >
                                        {item.name}
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0 z-[-1] -translate-x-full bg-primary transition-transform duration-700 group-hover:translate-x-0"></span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    {/*Hamburger Button Start*/}
                    <button
                        className={active? "block md:hidden hamburger-active" :"block md:hidden"}
                        id="hamburger"
                        name="hamburger"
                        type="button"
                        onClick={()=>setActive((prev) => !prev)}>
                        <span className="origin-top-left w-[30px] h-[2px] my-2 block bg-primary transition duration-300 ease-in-out"></span>
                        <span className="w-[30px] h-[2px] my-2 block bg-primary transition duration-300 ease-in-out"></span>
                        <span className="origin-bottom-left w-[30px] h-[2px] my-2 block bg-primary transition duration-300 ease-in-out"></span>
                    </button>
                    {/*Hamburger Button End*/}
                    {/*mobile*/}
                    {active && (
                        <div
                            className="sidebar-active origin-left w-full scale-x-0 fixed h-screen top-[73px] left-0 bg-white transition duration-500 ease-in-out z-50"
                            id="nav-menu">
                            <ul className="flex flex-col">
                                {dataNavbar.map((item, index) => (
                                    <li className="mobile-hamburger-list group" key={index}>
                                        <Link href={item.link}
                                              className={"group-hover:bg-primary group-hover:text-white  justify-between"}>
                                            {item.name}
                                            <span
                                                className={"px-6 h-full w-fit border-l-2 group-hover:text-white group-hover:border-l-white"}>{`>`}</span>
                                        </Link>
                                    </li>
                                ))}


                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}