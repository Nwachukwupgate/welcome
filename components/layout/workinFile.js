
export  const testing =() => {
    const [open, setOpen] =useState(true)

    return(
        <>
    <div class="pt-32 pb-20 md:pt-40">
    <div class="container m-auto px-6 md:px-12 lg:px-6">
        <div class="lg:flex lg:items-center lg:gap-x-16">
            <div class="space-y-8 lg:w-7/12">
                <h1 class=" font-bold text-gray-900 text-4xl md:text-5xl">Run successful remote and hybrid teams</h1>
                <p class="text-gray-600 lg:w-11/12">
                    DailyBot takes chat and collaboration to the next level: daily standups, team check-ins, surveys, kudos, best companion bot for your virtual watercooler, 1:1 intros, motivation tracking and more.
                </p>

                <span class="block font-semibold">The best companion bot for your chat app.</span>

                <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex">
                    <a aria-label="add to slack" href="#" class="p-4 border border-gray-200 rounded-md hover:border-cyan-400 hover:shadow-lg">
                        <div class="flex justify-center space-x-4">
                            <img class="w-6" src="images/slack.png" alt="slack logo" loading="lazy" width="128" height="128" />
                            <span class="hidden font-medium md:block">Add to Slack</span>
                        </div>
                    </a>    
                    <a aria-label="add to chat" href="#" class="p-4 border border-gray-200 rounded-md hover:border-green-400 hover:shadow-lg">
                        <div class="flex justify-center space-x-4">
                            <img class="w-6" src="images/chat.png" alt="chat logo" loading="lazy" width="128" height="128" />
                            <span class="hidden font-medium md:block">Add to Google Chat</span>
                        </div>
                    </a>   
                    <a aria-label="add to zoom" href="#" class="p-4 border border-gray-200 rounded-md hover:border-blue-400 hover:shadow-lg">
                        <div class="flex justify-center space-x-4">
                            <img class="w-6" src="images/zoom.png" alt="chat logo" loading="lazy" width="128" height="128" />
                            <span class="hidden font-medium md:block">Add to Zoom</span>
                        </div>
                    </a>    
                </div>

                <div>
                    🔥🌟 
                    <span>Other integrations :</span> 
                    <a href="#" class="font-semibold text-gray-700">Discord,</a>
                    <a href="#" class="font-semibold text-gray-700">Telegram</a>
                </div>
            </div>

            <div hidden class="lg:block lg:w-5/12">
                <img src="images/watch.svg" class="w-full" alt="wath illustration" loading="lazy" width="320" height="280" />
            </div>
        </div>
    </div>
    </div>

    <div class="pb-8">
        <div class="container m-auto px-6 md:px-12 lg:px-6">
            <div class="py-8 px-12 bg-cyan-50 rounded-2xl">
                <span class="block text-center font-medium text-cyan-700">Trusted by your favorite giants</span>
                <div class="mt-8 flex justify-center flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                    <div class="flex items-center">
                        <img class="w-36" src="images/clients/microsoft.png" alt="client logo" loading="lazy" width="584" height="122" />
                    </div>
                    <div class="flex items-center">
                        <img class="w-28" src="images/clients/myob.png" alt="client logo" loading="lazy" width="400" height="219" />
                    </div>
                    <div class="flex items-center">
                        <img class="w-28" src="images/clients/grabyo.png" alt="client logo" loading="lazy" width="400" height="219" />
                    </div>
                    <div class="flex items-center">
                        <img class="w-32" src="images/clients/lifegroups.png" alt="client logo" loading="lazy" width="400" height="219" />
                    </div>
                    <div class="flex items-center">
                        <img class="w-24" src="images/clients/lilly.png" alt="client logo" loading="lazy" width="400" height="219" />
                    </div>
                    <div class="flex items-center">
                        <img class="w-28" src="images/clients/grabyo.png" alt="client logo" loading="lazy" width="400" height="219" />
                    </div>
                    <div class="flex items-center">
                        <img class="w-32" src="images/clients/lifegroups.png" alt="client logo" loading="lazy" width="400" height="219" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
                <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style="background-image:url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')"></div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Build Your New <span className="text-blue-600 dark:text-blue-400">Idea</span></h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
                
                <div className="mt-8">
                    <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Start Now</a>
                </div>
            </div>
        </div>
    </section> 
    
    <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Portfolio
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                "
              >
                Our Recent Projects
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
                <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Join Team
                </h5>
                <p className="mb-5 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde.
                </p>
                <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                Read more
                </button>
            </div>
            </div>
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
                <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Hire Us
                </h5>
                <p className="mb-5 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                perspiciatis unde.
                </p>
                <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                Read more
                </button>
            </div>
            </div>
        </div>
    </div>
    </div>
    
</>
         )
}


                       