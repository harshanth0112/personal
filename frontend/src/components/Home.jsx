import React from 'react'
import Navbar from './common/Navbar'
import ProfilePhoto from "../assets/harshanth.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()
    return (
        <div>

            <div className='flex items-center justify-center'>
                <div className="w-full sm:w-1/2 flex-col justify-center">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>Hy! I Am</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>HARSHANTH R</h2>
                    <img src={ProfilePhoto} className='w-48 h-48 rounded-2xl object-cover shadow-lg border-2 border-orange-400 block sm:hidden my-3' alt="Harshanth R" />
                    <p className='py-2 font-medium text-gray-700'>AWS Cloud Computing | AI Engineer | Python Full Stack Developer | Computer Vision</p>
                    <p className='py-1 text-sm text-gray-600'>Graduate in B.Tech AI & Data Science with hands-on experience in building and deploying real-time AI systems and cloud-native solutions.</p>
                    <div className='flex flex-wrap gap-3 mt-3'>
                        <a href="https://harshanth0112.github.io/portfolio/" target="_blank" rel="noreferrer" className='button-style inline-block text-center'>View Portfolio</a>
                        <button className='button-style' onClick={() => navigate("/about")}>About Me</button>
                        <a
                            href="/Harshanth_R_Resume.pdf"
                            download="Harshanth_R_Resume.pdf"
                            className='button-style inline-block text-center bg-gray-800 hover:bg-gray-900'
                        >
                            📄 Download CV
                        </a>
                    </div>
                </div>
                <div className='justify-center hidden sm:block'>
                    <img src={ProfilePhoto} className='w-72 h-72 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-4 border-orange-300' alt="Harshanth R" />
                </div>

            </div>


            <div className='flex justify-evenly py-6'>
                <img src={HTML} style={{ width: "50px" }} />
                <img src={CSS} style={{ width: "50px" }} />
                <img src={JS} style={{ width: "50px" }} />
                <img src={REACTICON} style={{ width: "50px" }} />
                <img src={DB} style={{ width: "50px" }} />
                <img src={NODE} style={{ width: "50px" }} />
            </div>

            <div className='flex flex-col mt-10 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'>5+</div>
                        <p className='text-center font-medium'>Major AI & Full-Stack Projects</p>
                    </div>
                    <div className='mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'>AWS</div>

                        <p className='text-center font-medium'>Certified Cloud Practitioner</p>
                    </div>
                </div>

                <div className='ml-4 mt-4 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold'>My Awesome</h2>
                    <h2 className='text-3xl sm:text-7xl font-bold text-orange-400'>Services</h2>
                    <p className='my-2'>I have attached my Resume here for your reference.</p>
                    <a
                        href="/Harshanth_R_Resume.pdf"
                        download="Harshanth_R_Resume.pdf"
                        className='button-style mt-2 inline-block text-center'
                    >
                        📄 Download CV
                    </a>

                </div>




            </div>

            <div className='my-14'>
                <h2 className='text-center text-4xl sm:text-5xl font-bold mb-4'>Checkout My Live <span className='text-orange-400'>Projects</span> Here</h2>
                <p className='text-center text-gray-600 mb-10 max-w-2xl mx-auto'>Explore some of my real-time AI and full-stack cloud projects deployed with live demos and source code.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>

                    <div className='bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between p-4'>
                        <div>
                            <img src={P1} className='w-full h-44 object-cover rounded-lg mb-4' alt="AI LinkedIn Auto-Poster" />
                            <span className='text-xs font-semibold uppercase bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full'>AI Pipeline & Automation</span>
                            <h3 className='text-xl font-bold text-gray-900 mt-2'>AI LinkedIn Auto-Poster</h3>
                            <p className='text-sm text-gray-600 mt-1'>Automates daily LinkedIn posts from 50+ RSS feeds using Gemini LLM and multi-tier AI image generation deployed via GitHub Actions.</p>
                        </div>
                        <div className='flex gap-3 mt-4 pt-3 border-t'>
                            <a href="https://github.com/harshanth0112/ai-linkedin-poster" target="_blank" rel="noreferrer" className='text-xs font-semibold text-orange-600 hover:text-orange-800'>
                                GitHub Code ↗
                            </a>
                        </div>
                    </div>

                    <div className='bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between p-4'>
                        <div>
                            <img src={P2} className='w-full h-44 object-cover rounded-lg mb-4' alt="Claris Agile Tool" />
                            <span className='text-xs font-semibold uppercase bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full'>Full Stack (FastAPI + React)</span>
                            <h3 className='text-xl font-bold text-gray-900 mt-2'>Claris – Agile Delivery Tool</h3>
                            <p className='text-sm text-gray-600 mt-1'>Agile project management app with drag-and-drop Kanban board, optimistic UI updates, RBAC, and PostgreSQL persistent task ordering.</p>
                        </div>
                        <div className='flex gap-3 mt-4 pt-3 border-t'>
                            <a href="https://github.com/harshanth0112/Claris-A-Agile-management-tool" target="_blank" rel="noreferrer" className='text-xs font-semibold text-orange-600 hover:text-orange-800'>
                                GitHub Code ↗
                            </a>
                        </div>
                    </div>

                    <div className='bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between p-4'>
                        <div>
                            <img src={P3} className='w-full h-44 object-cover rounded-lg mb-4' alt="Personal Portfolio" />
                            <span className='text-xs font-semibold uppercase bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full'>Cloud & Web App</span>
                            <h3 className='text-xl font-bold text-gray-900 mt-2'>Personal Portfolio & CMS</h3>
                            <p className='text-sm text-gray-600 mt-1'>React & Vite portfolio deployed on GitHub Pages with password-protected Admin CMS, 1-click GitHub API sync, and EmailJS.</p>
                        </div>
                        <div className='flex gap-3 mt-4 pt-3 border-t'>
                            <a href="https://harshanth0112.github.io/portfolio/" target="_blank" rel="noreferrer" className='text-xs font-semibold text-purple-600 hover:text-purple-800 mr-2'>
                                Live Demo ↗
                            </a>
                            <a href="https://github.com/harshanth0112/portfolio" target="_blank" rel="noreferrer" className='text-xs font-semibold text-orange-600 hover:text-orange-800'>
                                GitHub Code ↗
                            </a>
                        </div>
                    </div>

                </div>
            </div>


            <div className='flex items-center justify-center my-14'>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogImage} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>I like to Write</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Blogs about tech</h2>

                    <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                </div>


            </div>


            <Footer/>


        </div>
    )
}

export default Home