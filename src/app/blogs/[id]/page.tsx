'use client';
import { use, useEffect, useState } from "react";
import Loading from "../../components/loading";

export default function Blog({ params }: { params: { id: string } }) {
    
    const [blog, setBlog] = useState({});

    async function fetchBlog(id: string) {
        const response = await fetch(`/api/blogs/${id}`)
        console.log('Response: ', response.body)
        const data = await response.json()
        setBlog(data)
    }

    useEffect(() => {
        fetchBlog(params.id)
    }, [])

    console.log('Blog: ', blog)

    return (
        <div>
        <h1>MyBlog {blog.title}</h1>
        <p>{blog.content}</p>
        {blog.title ? <div className="text-white"> Hello </div> : <Loading />}
        </div>
    )
}