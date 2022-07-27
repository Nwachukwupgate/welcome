import React, { useEffect, useRef, useState }  from 'react'

function CompStepper({steps, currentStep}) {

    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();
    const updateStep = ( stepNumber, steps ) => {
        const newSteps = [...steps]
        let count = 0;

        while(count < newSteps.length){
            //current step
            if(count === stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
                count++;
            }

            //step completed
            else if(count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            //step is pending
            else{
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }
        return newSteps;
    };

    useEffect(() => {
        const stepsState  = steps.map((step, index)=>
            Object.assign({}, {
                description: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true : false,
            })
        )

        stepRef.current = stepsState;
        const current = updateStep(currentStep -1, stepRef.current)
        setNewStep(current)
    }, [steps, currentStep])

  return (
    <>
        <div className="flex justify-end mr-5">
            <div className="mr-2">
                <span>Steps</span>
            </div>

            <div className="flex">
                { newStep.map((step, index) =>( 
                    <span className=
                    {index !== newStep.length - 1 ? "mr-2" : "mr-2"} key={index}>
                        <div className={`h-6 w-6 rounded-full transition duration-500 ease-in-out flex items-center justify-center border-2 border-gray-300 py-3
                    ${step.selected ? 
                        "bg-[#F49038]  text-white font-bold border border-[#F49038] "
                        :
                        ""
                    }`}>
                        {step.completed ? (
                            <span className="text-white font-bold text-base">&#10003;</span>
                        ) : <span className="font-bold text-base">{(index + 1)}</span>
                        }
                    </div>
                    </span>
                ) )}
                {/* <span className="font-bold mr-2">1</span>
                <span>2</span>
                <span>3</span> */}
            </div>
        </div>
    </>
  )
}

export default CompStepper