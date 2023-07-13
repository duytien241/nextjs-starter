import { NextSeo } from 'next-seo'

import { A } from '@/components'

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo title="Home" />
      <div className="flex min-h-screen flex-col items-center justify-center px-2 py-0">
        <main className="flex flex-1 flex-col items-center justify-center px-20 py-0">
          <h1 className="m-0 text-center text-[4rem] leading-[4.6rem]">
            Welcome to{' '}
            <A
              className="text-[#0070f3] hover:underline focus:underline active:underline"
              href="https://github.com/duytien241"
            >
              Next.js Base!
            </A>
          </h1>
        </main>
      </div>
    </>
  )
}
