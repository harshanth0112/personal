import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer';

const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || "harshanthr064@gmail.com";
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function Admin() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState({ text: '', type: '' });

    // Check user authentication
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Fetch blogs
    const fetchBlogs = () => {
        axios.get(`${API_BASE_URL}/api/blogs`)
            .then((res) => setBlogs(res.data))
            .catch(() => showMsg('Failed to fetch blogs', 'error'));
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const showMsg = (text, type = 'success') => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: '', type: '' }), 4000);
    };

    // Handle Create or Update Blog
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                // Update blog
                await axios.put(`${API_BASE_URL}/api/blogs/${editingId}`, {
                    newTitle: title,
                    newContent: content
                });
                showMsg('Blog updated successfully!');
                setEditingId(null);
            } else {
                // Create blog
                const today = new Date();
                const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                await axios.post(`${API_BASE_URL}/api/blogs`, {
                    newTitle: title,
                    newContent: content,
                    date,
                    likes: 0
                });
                showMsg('Blog published successfully!');
            }
            setTitle('');
            setContent('');
            fetchBlogs();
        } catch (error) {
            showMsg('Operation failed. Check backend connection.', 'error');
        }
    };

    // Handle Delete Blog
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;
        try {
            await axios.delete(`${API_BASE_URL}/api/blogs/${id}`);
            showMsg('Blog deleted successfully!');
            fetchBlogs();
        } catch (error) {
            showMsg('Failed to delete blog', 'error');
        }
    };

    // Edit Blog Click
    const handleEditClick = (blog) => {
        setEditingId(blog._id);
        setTitle(blog.newTitle);
        setContent(blog.newContent);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setTitle('');
        setContent('');
    };

    if (authLoading) {
        return <div className="text-center py-20 font-semibold text-gray-600">Verifying admin access...</div>;
    }

    const isAdmin = user && user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

    // Access control: strictly restrict if not logged in OR not the authorized admin email
    if (!isAdmin) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <div className="bg-red-50 border border-red-200 p-8 rounded-xl max-w-md shadow-sm">
                    <span className="text-5xl mb-3 block">🔒</span>
                    <h2 className="text-2xl font-bold text-red-700 mb-2">Admin Access Required</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        {user ? (
                            <>You are logged in as <strong>{user.email}</strong>, which is not authorized to create or edit blogs. Only <strong>{ADMIN_EMAIL}</strong> has admin privileges.</>
                        ) : (
                            <>You must be logged in as an authorized admin to manage and publish blogs.</>
                        )}
                    </p>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                    >
                        {user ? 'Switch Account' : 'Go to Login'}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="py-10 max-w-6xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        Admin <span className="text-orange-500">Panel</span> ⚙️
                    </h1>
                    <p className="text-xs text-gray-500 mt-1">Authorized Admin: <span className="font-semibold text-green-700">{user.email}</span></p>
                </div>
                <button
                    onClick={() => navigate('/blogs')}
                    className="mt-3 sm:mt-0 text-sm font-semibold text-orange-600 hover:underline"
                >
                    View Public Blogs ↗
                </button>
            </div>

            {/* Notification message */}
            {message.text && (
                <div className={`p-3 rounded-lg mb-6 text-sm font-medium ${
                    message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}>
                    {message.text}
                </div>
            )}

            {/* Add / Edit Blog Form */}
            <div className="bg-white p-6 rounded-xl border shadow-sm mb-12">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    {editingId ? '✏️ Edit Blog Post' : '➕ Add New Blog Post'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            placeholder="Enter blog title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2.5 border rounded-lg focus:outline-orange-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Content</label>
                        <textarea
                            placeholder="Write blog content..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows="5"
                            className="w-full p-2.5 border rounded-lg focus:outline-orange-400"
                            required
                        />
                    </div>
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                        >
                            {editingId ? 'Update Blog' : 'Publish Blog'}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                onClick={handleCancelEdit}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Manage Existing Blogs */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4">📚 Manage Blog Posts ({blogs.length})</h2>
                {blogs.length === 0 ? (
                    <p className="text-gray-500 text-sm py-4 text-center">No blogs found. Add one above!</p>
                ) : (
                    <div className="divide-y divide-gray-200">
                        {blogs.map((blog) => (
                            <div key={blog._id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900">{blog.newTitle}</h3>
                                    <p className="text-xs text-gray-500 mb-1">Published: {blog.date} | Likes: {blog.likes || 0}</p>
                                    <p className="text-sm text-gray-600 line-clamp-2">{blog.newContent}</p>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <button
                                        onClick={() => handleEditClick(blog)}
                                        className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg border border-blue-200 hover:bg-blue-100 font-semibold"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(blog._id)}
                                        className="text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-100 font-semibold"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-14">
                <Footer />
            </div>
        </div>
    );
}

export default Admin;
