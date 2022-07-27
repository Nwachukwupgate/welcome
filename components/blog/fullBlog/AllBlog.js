import Link from 'next/link';

const Blog = ({ fullBlog }) => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-4 lg:pb-20">

        
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {fullBlog && fullBlog.data.data.slice(3).map((post) => (
              <Link href={`/blog/${post.slug}`} passHref key={post.id}> 
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                  <img
                    src={post.featured_image_link}
                    className="object-cover w-full h-64"
                    alt={post.title}
                  />
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      <Link href={`/blog/${post.slug}`}>
                        <a
                          className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                          aria-label="Category"
                          title={post.title}
                        >
                          {post.category_id}
                        </a>
                      </Link>
                      <span className="text-gray-600">— {post.created_at}</span>
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <a
                        aria-label="Category"
                        title={post.title}
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        {post.title}
                      </a>
                    </Link>
                    <p className="mb-2 text-gray-700">
                    { post.meta_description.length < 150 ? post.meta_description : post.meta_description.substring(0, 150) }....
                    </p>
                    <Link href={`/blog/${post.slug}`}> 
                      <p
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                      >
                        Read more
                      </p>
                    </Link>
                  </div>
                </div>
              </Link>
            ))
            }
        </div>
        
      </div>
    );
  };

export default Blog;