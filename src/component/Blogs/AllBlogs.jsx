import { useEffect } from "react";
import { useState } from "react";
import client from "../../client";
import BlogCard from "./BlogCard";

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        client.fetch(
            `*[_type == "post"]{
                title,
                slug,
                body,
                mainImage{
                    asset->{
                        _id,
                        url
                    }, 
                    alt
                },
              }`
        ).then(data => {
            console.log(data)
            setBlogs(data)
        }).catch(err => console.log(err));
    }, [])

    return (
        <section className="mb-44">
            <div className="max-w-7xl mx-auto">
            <div>
                    <div className=' mt-36 mb-6 lg:mb-24'>
                        <h1 className="text-blogHeadTxt mt-20 text-center text-3xl lg:text-4xl font-bold font-tinos uppercase mb-3">Blogs</h1>
                    </div>

                    <div>
                        {
                            blogs.length > 0 ?
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
                                    {
                                        blogs.map((blog, index) => <BlogCard key={index} blog={blog}/>)
                                    }
                                </div>
                                :
                                <p>No blog is available</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllBlogs;