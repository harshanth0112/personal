import React, { useEffect, useState } from 'react';
import axios from "axios";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer';

const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || "harshanthr064@gmail.com";
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function Blogs() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogs();

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const fetchBlogs = () => {
        axios.get(`${API_BASE_URL}/api/blogs`)
            .then((res) => {
                setBlogs(res.data);
            })
            .catch(() => {
                console.log("Error fetching data");
            });
    };

    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`${API_BASE_URL}/api/blogs/like/${blog_id}`);
            if (response.status === 200) {
                fetchBlogs();
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    const isAdmin = user && user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

    return (
        <div className="blog-section py-14">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold mb-3">Latest <span className='text-orange-400'>Blogs</span> 📚</h2>
                <p className="text-gray-600">Thoughts, technical deep-dives, and tutorials on AI, Cloud, and Web Development.</p>
                
                {/* Admin Quick Action Button */}
                {isAdmin && (
                    <div className="mt-4 flex justify-center gap-3">
                        <button
                            onClick={() => navigate("/admin")}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow transition flex items-center gap-2"
                        >
                            <span>➕</span> Add New Blog / Manage Blogs
                        </button>
                    </div>
                )}
            </div>

            {blogs.length === 0 ? (
                <div className="text-center py-16 text-gray-500">
                    <p className="text-lg">No blogs published yet.</p>
                    {isAdmin && (
                        <button
                            onClick={() => navigate("/admin")}
                            className="mt-3 text-orange-500 hover:underline font-semibold"
                        >
                            Publish your first blog post →
                        </button>
                    )}
                </div>
            ) : (
                <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4 max-w-6xl">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="blog-post p-6 bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl border flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{blog.newTitle}</h3>
                                <p className="text-xs text-gray-500 mb-4">{blog.date}</p>
                                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">{blog.newContent}</p>
                            </div>
                            <div className="mt-6 pt-4 border-t flex justify-between items-center">
                                <button
                                    onClick={() => handleLike(blog._id)}
                                    className="flex items-center gap-1.5 text-sm bg-orange-50 text-orange-600 hover:bg-orange-100 px-3 py-1.5 rounded-lg border border-orange-200 transition"
                                >
                                    <span>❤️</span>
                                    <span>Like ({blog.likes || 0})</span>
                                </button>
                                {isAdmin && (
                                    <button
                                        onClick={() => navigate("/admin")}
                                        className="text-xs text-gray-500 hover:text-orange-600 font-semibold"
                                    >
                                        Edit in Admin ↗
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-16">
                <Footer />
            </div>
        </div>
    );
}

export default Blogs;
