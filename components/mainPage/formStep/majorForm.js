import React, { useState } from 'react'
import StepperPage from './stepper'
import StepperControl from './StepperControl'
import SelectLanguage from './steps/SelectLanguage';
import SelectLast from './steps/SelectLast';
import SelectLevel from './steps/SelectLevel';
import SelectStack from './steps/SelectStack';
import SuccessPage from './steps/success';

function MajorForm() {

    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Select Level",
        "Select Framework",
        "Select Language",
        "Personal Detail",
        "Success"
    ];

    const displayStep = (step) => {
        switch(step) {
            case 1: 
            return <SelectLevel 
                currentStep = {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            case 2: 
            return <SelectStack 
            currentStep = 
                {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            case 3: 
            return <SelectLanguage 
            currentStep = 
                {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            case 4: 
            return <SelectLast 
                currentStep = {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            case 5: 
            return <SuccessPage 
                currentStep = {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
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
                <StepperPage 
                steps={steps}
                currentStep = {currentStep} 
                />
            </div>

            {/* display component */}
            <div className="mt-10 p-10">
                {displayStep(currentStep)}
            </div>

            {/* Navigation controls */}
            {/* {currentStep !== steps.length && 
                <StepperControl 
                currentStep = {currentStep}
                steps={steps}
                handleClick = {handleClick}
                />
            } */}
        </div>
    </>
  )
}

export default MajorForm