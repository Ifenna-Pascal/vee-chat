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
      <main>
        <h1 className='text-green-400'>Welcome to VChat
        </h1>
      </main>
    </>
  )
}
