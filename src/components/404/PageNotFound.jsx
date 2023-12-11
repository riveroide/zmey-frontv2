import React, { useEffect } from 'react'

const PageNotFound = ({setAdminDisplay}) => {
    const imagebg = "https://firebasestorage.googleapis.com/v0/b/zmeyphotos.appspot.com/o/Design%20sem%20nome%20(1).jpg?alt=media&token=24ca9d90-6e7e-4a50-a8dd-439a849d5b51&_gl=1*d32gga*_ga*NTE5NTU1MjUyLjE2ODU1NzA0MjY.*_ga_CW55HF8NVT*MTY4NjMzMzcyNi4xOS4xLjE2ODYzMzY1MzMuMC4wLjA."
    useEffect(() => {
        setAdminDisplay(true)
    }, [])
  return (
    <div className="flex flex-col h-screen bg-coal">
  <img
    src={imagebg}
    alt=""
    className="object-cover w-full h-64"
  />

  <div className="flex items-center justify-center flex-1">
    <div className="max-w-xl px-4 py-8 mx-auto text-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl">
        We can't find that page.
      </h1>

      <p className="mt-4 text-gray-200 text-xl tracking-base">
        Try searching again, or return home to start from the beginning.
      </p>

      <a
        href="/"
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-black border-2 rounded hover:bg-white hover:text-black hover:duration-500 focus:outline-none focus:ring"
      >
        Go Back Home
      </a>
    </div>
  </div>
</div>
  )
}

export default PageNotFound