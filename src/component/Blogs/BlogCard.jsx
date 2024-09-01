import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const { title, mainImage, slug } = blog;

    return (
        <Link to={`/blogs/${slug?.current}`}>
            <div className="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col rounded-md">
                <div className="h-48 md:h-64 overflow-hidden rounded-md">
                    <img
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                        src={mainImage?.asset?.url}
                        alt={title}
                    />
                </div>
                <div className="text-start text-xl mt-4 md:mt-6 flex-1 px-4 pb-7">
                    <h1 className="font-semibold text-base md:text-lg h-12 md:h-16 overflow-hidden font-tinos">
                        {title}
                    </h1>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
