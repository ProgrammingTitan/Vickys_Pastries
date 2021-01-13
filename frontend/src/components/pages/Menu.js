import React from 'react'
import CategoryWidget from '../layout/CategoryWidget'
import ProjectCards from '../layout/ProjectCards'
import SocialBar from '../layout/SocialBar'

export default function Menu() {
    return (
        <div>
            <CategoryWidget />
            <ProjectCards />
            <SocialBar />
        </div>
    )
}
