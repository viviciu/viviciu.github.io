// Projects
'use client'
import { useState } from "react";
import { useEffect } from "react";


const projects = [
    {
        name: 'PROJECT ONE',
        type: 'WEB DESIGN',
        pos: 'start', // in a vertical column, start is the top item.
        image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        name: 'PROJECT 2',
        type: 'GRAPHIC DESIGN',
        pos: 'mid',
        image: 'https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80' 
    },
    {
        name: 'PROJECT 3',
        type: 'TYPE DESIGN',
        pos: 'end',
        image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'    },
    {
        name: 'PROJECT 4',
        type: 'WEB DESIGN',
        pos: 'mid',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        name: 'PROJECT 5',
        type: 'WEB DESIGN',
        pos: 'end',
        image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        name: 'PROJECT 6',
        type: 'GRAPHIC DESIGN',
        pos: 'mid',
        image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        name: 'PROJECT 7',
        type: 'WEB DESIGN',
        pos: 'start',
        image: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        name: 'PROJECT 8',
        type: 'TYPE DESIGN',
        pos: 'end',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },

]

function calculateProjectCurrentX() {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset;
  
    // Calculate the new value of projectCurrentX based on the scroll position
    // This is just a simple example, you might need to adjust the calculation based on your needs
    const newProjectCurrentX = scrollPosition / 3;
  
    return newProjectCurrentX;
  }

export default function CreateProjects() {
    // AI ANIMATE PROJECTS
    const [projectCurrentX, setProjectCurrentX] = useState(0);
      
        useEffect(() => {
          function handleScroll() {
            // Calculate the new value of projectCurrentX based on the scroll position
            const newProjectCurrentX = calculateProjectCurrentX();
            setProjectCurrentX(newProjectCurrentX);
          }
      
          window.addEventListener('scroll', handleScroll);
      
          // Clean up the event listener when the component unmounts
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
    return (
        <div className="project__slider" style={{ transform: `translate3d(${-(projectCurrentX)}vw, 0 , 0)` }}>
          {projects.map((project, index) => (
            <div key={index} className={`project ${project.pos}`}>
              <div className="image__container">
                <img className="project__image" src={project.image} alt={project.name} />
              </div>
              <div className="project__details">
                <p>{project.name}</p>
                <p>{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

      function Projects() {
        const [projectCurrentX, setProjectCurrentX] = useState(0);
      
        useEffect(() => {
          function handleScroll() {
            // Calculate the new value of projectCurrentX based on the scroll position
            const newProjectCurrentX = calculateProjectCurrentX();
            setProjectCurrentX(newProjectCurrentX);
          }
      
          window.addEventListener('scroll', handleScroll);
      
          // Clean up the event listener when the component unmounts
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        return (
          <div style={{ transform: `translate3d(${-(projectCurrentX)}vw, 0 , 0)` }}>
            {/* Your project slider content goes here */}
          </div>
        );
      }
