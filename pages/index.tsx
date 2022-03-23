import type { NextPage } from 'next'
import Head from 'next/head'
import { Team } from '../components/Team'
import { Feature } from '../components/Feature'
import { Header } from '../components/Header'
import { HomeSection } from '../components/HomeSection'
import { Portfolio } from '../components/Portfolio'
import { Service } from '../components/Service'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="max-w-[1500px] mx-auto min-h-screen font-sans">
      <Head>
        <title>BaseTI Project</title>
        <meta name="description" content="BaseTI Project" />
      </Head>

      <div className="px-10 md:px-24">
        <Header/>

        <main className="mb-20">
          <HomeSection/>
          <Feature/>
          <Service/>
          <Portfolio/>
          <Team/>
          <Contact/>
        </main>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
