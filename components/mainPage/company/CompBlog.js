import React from 'react'
import Link from 'next/link';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"
  

function CompBlog({ shortBlog }) {
  return (
    <>
        <div className="">
            <div className="container m-auto px-6 md:px-12 lg:px-6">
                
                
                <section className="pt:2 md:pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
                    <div className="container">
                        <div className="flex flex-wrap mx-2 lg:mx-8">
                            <div className="mb-4 flex justify-center w-full md:w-1/2 xl:w-1/5 px-2 md:px-4">
                                    <div className="w-fit h-fit mt-7 p-1 border-l-4 border-solid border-black">
                                        <div className="flex gap-x-2 ml-1.5 text-2xl font-bold md:flex-col">
                                            <div>Our</div>
                                            <div>Blog</div>
                                        </div>
                                    </div>
                            </div>
                            
                            {shortBlog && shortBlog.data.data.slice(0 , 2).map((post) => (
                                <div className="mb-6 w-full md:w-1/2 xl:w-2/5 px-2 md:px-4">
                                    <Link href={`/blog/${post.slug}`} passHref key={post.id}> 
                                        <div className="min-h-full overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                                            <img
                                            src={post.featured_image_link}
                                            className="object-cover w-full h-64"
                                            alt={post.title}
                                            />
                                            <div className="p-5 border border-t-0 min-h-full">
                                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                                <Link href={`/blog/${post.slug}`}>
                                                <a
                                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                                    aria-label="Category"
                                                    title={post.title}
                                                >
                                                    {post.blogPostCategories}
                                                </a>
                                                </Link>
                                                <span className="text-gray-600">— {post.created_at}</span>
                                            </p>
                                            <Link href={`/blog/${post.slug}`}>
                                                <a
                                                aria-label="Category"
                                                title={post.title}
                                                className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                                >
                                                {post.title}
                                                </a>
                                            </Link>
                                            <p className="mb-2 text-gray-700">
                                                { post.meta_description.length < 150 ? post.meta_description : post.meta_description.substring(0, 150) }....
                                            </p>
                                            <Link href={`/blog/${post.slug}`}> 
                                                <a>
                                                    <p className="inline-flex transition-colors duration-200 items-center text-left mb-5 text-base font-semibold text-gray-700">
                                                        <span className="text-[#F49038]"> 
                                                        See more 
                                                            <FontAwesomeIcon icon={faAngleRight} beat size="sm"/>
                                                        </span>
                                                    </p>
                                                </a>
                                            </Link>
                                            
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </>
  )
}

export default CompBlog

