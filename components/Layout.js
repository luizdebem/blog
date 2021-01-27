import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='luizdebem, Luiz Guilherme de Bem, web developer, software developer, developer, it student, unisul' />
        <meta name='description' content="luizdebem's blog" />
        <meta charSet='utf-8' />
        <title>luiz.dev</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous" />
      </Head>

      <Header />

      { children}

      <Footer />
    </>
  )
}

export default Layout
