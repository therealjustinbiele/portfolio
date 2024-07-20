import Link from 'next/link'
import React from 'react'
import { Title } from '@/components/Title'
import { MovingBorder } from '@/components/MovingBorder'
export default function Jumbotron() {

    return (
        <div className="min-h-[60vh] pt-10 flex flex-col lg:flex-row justify-around items-center">
            <div className="space-y-10">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Hi there!
                    <br /> 
                    I'm <span className="relative underline underline-offset-1 decoration-green-500">JB</span>
                </h1>
                <p className="md:w-96 text-lg text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere tempora nihil sequi maiores, nam mollitia eligendi. Earum numquam quis officiis exercitationem necessitatibus facilis dolorum sed sint ipsam, commodi suscipit!
                </p>
                <Link className="inline-block group" href={"mailto:justin.biele@gmail.com"}>
                    <Title text="Contact Me"></Title>
                </Link>
            </div>
            <div className="mt-15">
                <div className="h-75 w-75 space-y-3 -rotate-[30deg]">
                    <div className="flex ap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500 border-2"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500 border-2"></div>
                    </div>
                    <div className="flex ap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-full bg-indigo-500 border-2"></div>
                        <div className="w-32 h-32 rounded-2xl bg-green-500 border-2"></div>
                    </div>
                    <div className="glow"></div>
                </div>
            </div>
        </div>
    )
}