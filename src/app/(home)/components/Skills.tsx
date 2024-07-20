'use client'
import Link from 'next/link'
import React from 'react'
import { Title } from '@/components/Title'
import { HoverEffect } from '@/components/CardHoverEffect'
import { SiAmazonaws, SiContentful, SiCss3, SiDocker, SiElectron, SiGoogleanalytics, SiGraphql, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNextui, SiReact, SiRedux, SiTsnode, SiTypescript } from 'react-icons/si'

export default function Skills() {
    const technologies = [
        { title: 'Javascript', icon: SiJavascript },
        { title: 'Typescript', icon: SiTypescript },
        { title: 'React', icon: SiReact },
        { title: 'Node', icon: SiTsnode },
        { title: 'Redux', icon: SiRedux },
        { title: 'NextJs', icon: SiNextdotjs },
        { title: 'MySQL', icon: SiMysql },
        { title: 'GraphQL', icon: SiGraphql },
        { title: 'MongoDB', icon: SiMongodb },
        { title: 'Electron', icon: SiElectron },
        { title: 'AWS', icon: SiAmazonaws },
        { title: 'Contentful', icon: SiContentful },
        { title: 'Google Analytics', icon: SiGoogleanalytics },
        { title: 'Docker', icon: SiDocker },
        { title: 'HTML', icon: SiHtml5 },
        { title: 'CSS', icon: SiCss3 },
    ]
    return (
        <div className="min-h-[60vh] flex flex-col justify-around items-center pt-20">
            <Title text="Proficiencies" className="-rotate-6"></Title>
            <HoverEffect items={technologies} />
        </div>
    )
}