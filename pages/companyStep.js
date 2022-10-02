import React from 'react'
import Head from 'next/head';
import CompanyForm from 'components/mainPage/companyForm/CompanyForm';

export default function StepForm() {
  return (
    <>
        <Head>
        <title>Droomwork</title>
        <meta name="description" content="Get qualified and reliable developers & designers around the world with hourly rates ranging from $8 - $193 to jump on your project within 48hrs." />
        <link rel="icon" href="images/droomlogo.svg" />
        <meta property="og:image" content="images/featuredImage.png"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet"></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J4W91HKYYX"></script>
          <script>
              {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                  });
              `}
          </script>
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