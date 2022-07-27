import React from 'react'
import SectionTitle from './title'

export const ExtraServices = () => {
  return (
    <>

    <div className="container m-auto px-6 md:px-12 lg:px-6">
        <div className="pb-20">
            <SectionTitle 
                title="Our Expertise"
            />
 
                <section className="dark:bg-gray-900 lg:pt-12 lg:py-12 lg:flex lg:justify-center">
                    <div className="bg-white dark:bg-gray-800 lg:w-10/12 lg:mx-8 lg:flex lg:shadow-lg lg:rounded-lg">
                        <div className="lg:w-1/2">
                            <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{
                                 backgroundImage: `url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')` 
                                }}>
                            </div>
                        </div>

                        <div className="max-w-xl w-xl px-6 py-12 lg:max-w-5xl lg:w-5xl lg:w-1/2 text-center lg:text-justify">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Build Your New <span className="text-[#F49038]">Idea</span></h2>

                            <div className="mt-4 text-gray-600 dark:text-gray-400">
                            <ul>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    It is a long established fact reader
                                </li>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    The point of using Lorem Ipsum
                                </li>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    There are many variations of passages
                                </li>
                            </ul>
                            </div>
                            
                            <div className="mt-8">
                                <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">Start Now</a>
                            </div>
                        </div>
                    </div>
                </section> 

                <section className="dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
                    <div className="bg-white dark:bg-gray-800 flex flex-col lg:w-10/12 lg:mx-8 lg:flex-row lg:shadow-lg lg:rounded-lg">
                        <div className="lg:w-1/2 lg:order-2">
                            <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')` 
                                }}></div>
                        </div>

                        <div className="max-w-xl w-xl px-6 py-12 lg:max-w-5xl lg:w-5xl lg:w-1/2 text-center lg:text-justify lg:order-1">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Build Your New <span className="text-[#F49038]">Idea</span></h2>

                            <div className="mt-4 text-gray-600 dark:text-gray-400">
                            <ul>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    It is a long established fact reader
                                </li>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    The point of using Lorem Ipsum
                                </li>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    There are many variations of passages
                                </li>
                            </ul>
                            </div>
                            
                            <div className="mt-8">
                                <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">Start Now</a>
                            </div>
                        </div>
                    </div>
                </section> 

                <section className="dark:bg-gray-900 lg:pt-12 lg:py-12 lg:flex lg:justify-center">
                    <div className="bg-white dark:bg-gray-800 lg:w-10/12 lg:mx-8 lg:flex lg:shadow-lg lg:rounded-lg">
                        <div className="lg:w-1/2">
                            <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')` 
                                }}></div>
                        </div>

                        <div className="max-w-xl w-xl px-6 py-12 lg:max-w-5xl lg:w-5xl lg:w-1/2 text-center lg:text-justify">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Build Your New <span className="text-[#F49038]">Idea</span></h2>

                            <div className="mt-4 text-gray-600 dark:text-gray-400">
                            <ul>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    Lorem ipsum dolor sit amet
                                </li>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    It is a long established fact reader
                                </li>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    The point of using Lorem Ipsum
                                </li>
                                <li class="flex text-base text-body-color mb-2">
                                    <span class="mr-2 text-base text-primary flex items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
                                            <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"></path>
                                        </svg>
                                    </span>
                                    There are many variations of passages
                                </li>
                            </ul>
                            </div>
                            
                            <div className="mt-8">
                                <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">Start Now</a>
                            </div>
                        </div>
                    </div>
                </section> 
        </div>   
    </div> 
    </>
  )
}
