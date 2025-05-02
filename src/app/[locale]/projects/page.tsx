'use client';

import React, { useState } from 'react';
import herobg from "../../../../public/images/home/525ab7523c86871fbf6680382ffeb83b63451acc (1).jpg";
import AxiomTowerbg from "../../../../public/images/home/Axiom Tower.png";
import HeroSection from './components/Hero';
import ProjectTile from './components/ProjectTile';
import Pagination from './components/Pagination';

const ProjectsPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const totalPages = 15;

    // Sample project data
    const projects = Array(9).fill({
        title: "Axiom Tower"
    });

    return (
        <div className="w-full min-h-screen bg-white pb-20">
            {/* Hero Section with Search */}
            <HeroSection backgroundImage={herobg} />

            {/* Main Title */}
            <div className="w-full px-4 py-8 md:py-12 lg:py-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl  text-center  font-['Cinzel'] max-w-5xl mx-auto px-3y">
                    Explore Our Landmark Developments Shaping the Future.
                </h2>
            </div>

            {/* Projects Grid */}
            <div className="w-full overflow-hidden">
                <div className="flex flex-wrap justify-center">
                    {projects.map((project, index) => (
                        <ProjectTile
                            key={index}
                            index={index}
                            title={project.title}
                            backgroundImage={AxiomTowerbg}
                        />
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default ProjectsPage;