

const Error = () => {
    return (
        <div className='flex flex-col gap-3 justify-center items-center h-screen'>
        <p className='text-black text-5xl font-extrabold font-tinos'><span className=" text-primary">404!</span> Sorry Page not found</p>  
        <a className="text-xl underline text-primary" href="/">Back to Home</a>  
        </div>
    );
};

export default Error;