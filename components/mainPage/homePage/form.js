import React,{useState, useEffect} from "react";
import SectionTitle from "./title";
import { useCustomContactMutation } from "reactWrapper/redux/apiSlice";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

if(process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
    var api_origin = 'http://127.0.0.1:3333'
} else {
    api_origin = 'https://api.droomwork.io'
// api_origin = 'http://localhost:3000'
}


export default function FormField() {

    const [ customContact, {data, isSuccess, isError, error, isLoading }] = useCustomContactMutation();

    const [individual_Name, setIndividual_Name] = useState('');
    const [company_Name, setCompany_Name] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [website, setWebsite] = useState('');
    const [message, setMessage] = useState('');
    const [attachement, setAttachement] = useState('');
    const [fileName, setFileName] = useState('')
    const [isPending, setIsPending] = useState(false)


    const handleChange = (event) => {
        setAttachement(event.target.files[0]);
        setFileName(event.target.files[0].name)
    };

    const cancelFile = (e) => {
        e.preventDefault()
        setFileName('')
    }

    // const Submit = async (data: IAuthLoginForm) => {
    //     await register(data).unwrap().then((response) => {
    //       // Handle the response here
    //       console.log(response)
    //     }).catch((error) => {
    //       // Handle the error here
    //       console.log(error)})
    //    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        var formdata = new FormData();

        formdata.append("individual_name", individual_Name);
        formdata.append("company_name", company_Name);
        formdata.append("email", email);
        formdata.append("message", message);
        formdata.append("country", country);
        formdata.append("website", website);
        formdata.append("attachement", attachement);

        
        setIsPending(true)
        await fetch(`${api_origin}/api/v1/comp/customContact`,{
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-type':'application/json',
                'Accept':'application/json',
                'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify({
                individual_name: individual_Name,
                company_name: company_Name,
                email: email,
                message: message,
                country: country,
                website: website,
                attachement: attachement,
                userId: Math.random().toString(36).slice(2),
             })
        }).then((res) => res.json())
        .then((post) => {
            // setPosts((posts) => [post, ...posts]);
            console.log("this is the post full", post)
            if(post.status == true) {
                setIndividual_Name('')
                setCompany_Name()
                setEmail('')
                setCountry('')
                setWebsite('')
                setMessage('')
                setFileName('')
                setIsPending(false)
                toast.success(post.message)
            } else{
                // toast.error(post.error.message)
                toast.error(post.message)
            }  
         })
         .catch((err) => {
            toast.error(err.message);
            console.log("this is d main", err.message)
         });
    };


    return (
      <>
      <ToastContainer />
        <div className="container m-auto px-6 md:px-12 lg:px-6" id="form">  
        <SectionTitle 
            title="Contact Us To Build The Right Product With Right Team"
        />
            <div className="mt-10 sm:mt-0">
            <div>
                {/* <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-2xl font-medium leading-6 text-gray-900">Company Information</h3>
                    <p className="mt-1 text-base text-gray-600">Use a permanent address where you can receive mail.</p>
                </div>
                </div> */}
                <div className="mt-5 md:mt-0">
                <form onSubmit={handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6 grid justify-items-center">
                        <div className="grid gap-y-8 w-full lg:w-3/5">

                        <div className="">
                            {/* <label htmlFor="first-name" className="block font-medium text-base text-gray-700">
                            Company name
                            </label> */}
                            <input
                            type="text"
                            name="Name"
                            id="Name"
                            autoComplete="given-name"
                            placeholder="Name"
                            value={individual_Name} onChange={(e)=> setIndividual_Name(e.target.value)}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base rounded-md p-2 border-2 border-solid border-gray-300 text-black"
                            />
                        </div>

                        <div className="">
                            {/* <label htmlFor="first-name" className="block font-medium text-base text-gray-700">
                            Company name
                            </label> */}
                            <input
                            type="text"
                            name="Company Name"
                            id="Company Name"
                            autoComplete="given-name"
                            placeholder="Company Name"
                            value={company_Name} onChange={(e)=> setCompany_Name(e.target.value)}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base rounded-md p-2 border-2 border-solid border-gray-300 text-black"
                            />
                        </div>
    
                        <div className="">
                            {/* <label htmlFor="email-address" className="block text-base font-medium text-gray-700">
                            Email address
                            </label> */}
                            <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            placeholder="Company Mail"
                            value={email} onChange={(e)=> setEmail(e.target.value)}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md p-2 border-2 border-solid  text-black"
                            />
                        </div>
    
                        <div className="">
                            <label htmlFor="country" className="block text-base font-medium text-gray-700">
                            Country
                            </label>
                            <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-base p-2 border-2 border-solid"
                            value={country} onChange={(e)=> setCountry(e.target.value)}
                            >
                            <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">Åland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-bissau">Guinea-bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                <option value="Korea, Republic of">Korea, Republic of</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-leste">Timor-leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>

                        <div className="">
                            <label htmlFor="company-website" className="block text-base font-medium text-gray-700">
                            Website
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border-2 border-solid border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm">
                                http://
                            </span>
                            <input
                                type="text"
                                name="company-website"
                                id="company-website"
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-base border-2 border-solid p-2.5 border-gray-300"
                                placeholder="www.example.com (optional)"
                                value={website} onChange={(e)=> setWebsite(e.target.value)}
                            />
                            </div>
                        </div>
                        
                        <div className="">
                            <textarea
                                className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none
                                "
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                                value={message} 
                                onChange={(e)=> setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="">
                        <label className="block text-base font-base text-gray-700">File</label>

                        {fileName === "" ? 
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                >
                                    <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-[#f49038] hover:text-[#f49038] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#f49038]"
                                    >
                                    <span>Upload Job Description</span>
                                    <input id="file-upload" name="file-upload" type="file" onChange={(e) => handleChange(e)} className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">.doc, .pnt less than 10MB</p>
                                </div>
                            </div>
                        : 
                            <div>
                                <p>
                                    <span>Attached file</span> <span className="font-bold">{fileName}</span>  <span className="text-red-600 cursor-pointer" onClick={cancelFile}>X</span>
                                </p>
                            </div>
                        }
                        </div>

                        <div className="">
                            <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <fieldset>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-600 rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-base">
                                        <label htmlFor="comments" className="font-medium text-gray-700">
                                        Sign
                                        </label>
                                        <p className="text-gray-500">I will like to send a non disclosure form.</p>
                                    </div>
                                    </div>
                                </div>
                                </fieldset>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                
                                {!isPending && 
                                    <button className="inline-flex justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]"
                                    onClick={handleSubmit}
                                    >Submit</button>
                                }

                                {isPending && 
                                    <button className="inline-flex justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]"
                                    onClick={handleSubmit}
                                    >Submiting...</button>
                                }

                            </div>
                            </div>
                        </div>
    
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
    
            
        </div>
      </>
    )
  }