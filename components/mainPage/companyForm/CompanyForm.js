import React, { useState }  from 'react'
import CompStepper from './CompStepper'
import CompInfo from './step/CompInfo';
import CompSuccess from './step/CompSuccess';
import DevChoice from './step/DevChoice';
import StepCrtl from './StepCrtl'

function CompanyForm() {

    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Description",
        "Select Talent",
        "Success"
    ];

    const displayStep = (step) => {
        switch(step) {
            case 1: 
            return <CompInfo />
            case 2: 
            return <DevChoice />
            case 3: 
            return <CompSuccess />
            default:
        }
    }

    const handleClick =(direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // steps are within bounds

        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }

  return (
    <>
        <div className="md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
            {/* Stepper */}
            <div className="container horizontal mt-5">
                <CompStepper
                steps={steps}
                currentStep = {currentStep} />
            </div>

            {/* display component */}
            <div className="mt-4 p-10">
                {displayStep(currentStep)}
            </div>

            <div className="px-4">
            <StepCrtl
            currentStep = {currentStep}
            steps={steps}
            handleClick = {handleClick}
            />
            </div>

        </div>
    </>
  )
}

export default CompanyForm