import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Navbar() {
    const socials = [
        {
            link: "https://linkedin.com/in/justin-biele",
            label: "LinkedIn",
            Icon: SiLinkedin,
        },
        {
            link: "https://github.com/therealjustinbiele",
            label: "Github",
            Icon: SiGithub,
        },
    ]
    return (
        <nav className="p-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Justin Biele</h1>
            <div className="flex justify-center gap-5">
                {socials.map(social => {
                    return (
                        <Link key={social.link} href={social.link}>
                            <social.Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}