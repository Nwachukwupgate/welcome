import React from 'react'
import Head from 'next/head';
import CompanyForm from 'components/mainPage/companyForm/CompanyForm';

export default function StepForm() {
  return (
    <>
        <Head>
        <title>Droomwork</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="images/droomlogo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet"></link>
        </Head>

        <CompanyForm />
    </>
  )
}

StepForm.getLayout = function pageLayout(page) {
  return(
      <>
          {page}
      </>
  )
}