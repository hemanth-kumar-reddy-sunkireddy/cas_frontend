import { Suspense } from "react"

import UrlParams from "./urlparams"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense>
        <UrlParams />
      </Suspense>

    </main>
  )
}
