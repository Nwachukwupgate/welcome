const BlogDetails = ({postDetails: {title, content, authors_name, featured_image_link, category_id}}) => {
    return(
        <>
            <div className="mt-28 max-w-screen-lg mx-auto" style={{marginTop:"110px"}}>
                
                <main>

                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                    <div className="px-4 lg:px-0">
                    <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                        {title}
                    </h2>
                    <a 
                        href="#"
                        className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                    >
                        {category_id}
                    </a>
                    </div>

                    <img src={featured_image_link} class="w-full object-cover lg:rounded"/>
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-12">

                    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                        <p className="pb-6" dangerouslySetInnerHTML={{__html: content}}/>
                    </div>

                    <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm ">
                    <div className="p-4 border-t border-b md:border md:rounded">
                        <div className="flex py-2">
                        <img src="images/droomlogo.png"
                            className="h-10 w-10 rounded-full mr-2 object-cover" />
                        <div>
                            <p className="font-semibold text-gray-700 text-sm"> {authors_name} </p>
                            <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                        </div>
                        </div>
                        <p className="text-gray-700 py-3">
                        Droomwork is the hub that houses the best freelancers, startups, HR, and businesses, the infrastructure, brings interconnectivity that matches everyone's needs.
                        </p>
                        <button className="px-2 py-1 inline-flex w-full lg:w-fit justify-center font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] border-2 border-solid border-[#001935]">
                        Join Today 
                        <i className='bx bx-user-plus ml-2' ></i>
                        </button>
                    </div>
                    </div>

                </div>
                </main>
            
            </div>
        </>
  );
}
export default BlogDetails;