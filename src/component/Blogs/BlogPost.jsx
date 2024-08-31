import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();

    useEffect(() => {
        setLoading(true);
        client.fetch(
            `*[slug.current == "${slug}"]{
                title,
                body,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
        ).then((data) => {
            setBlog(data[0]);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blog) {
        return <div>Blog post not found</div>;
    }

    return (
        <div className="mt-16 md:mt-32 mb-20 md:mb-60">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h1 className="text-2xl md:text-4xl text-center font-bold mb-6 font-tinos">
                    {blog.title}
                </h1>
                <div className="overflow-hidden rounded-md">
                    <img
                        className="w-full h-auto object-cover"
                        src={blog.mainImage?.asset?.url}
                        alt={blog.mainImage?.alt}
                    />
                </div>
                <div className="mt-10 w-full md:w-3/4 mx-auto text-xl font-tinos">
                    <PortableText value={blog.body} />
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
