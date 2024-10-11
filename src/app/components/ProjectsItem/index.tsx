"use client";

import React from 'react';
import Link from 'next/link'; 
import { ProjectItemProps } from '../types'; 

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, link }) => (
  <div className="bg-gray-200 p-4 rounded-lg shadow-lg mb-4">
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="mt-2">{description}</p>
    <Link href={link} className="mt-2 inline-block text-blue-600 hover:underline">
      View Project
    </Link>
  </div>
);

export default ProjectItem;
