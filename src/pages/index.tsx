import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>vChat</title>
        <meta name="description" content="A whatsApp clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-dark-secondary h-screen flex item-center justify-center'>
          <div className='w-[600px] h-[200px] h-screen flex items-center justify-center'>
              <button className='bg-[#ea4c89] h-[60px] flex items-center justify-center '>Sigin With Google</button>
          </div>
      </main>
    </>
  )
}
