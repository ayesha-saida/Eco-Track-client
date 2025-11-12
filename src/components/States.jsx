import React from 'react'

const States = () => {
  return (
    <div className="text-white px-4 py-6 reverse-bg-color">
      <h1 className="lg:text-3xl text-xl text-center font-bold mb-4">
Your Voice Matters — Let’s Clean Up Together
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-16 text-center">

        <div className="space-y-2">
          <p className="lg:text-[17px] text-sm">Total Registered Users</p>
          <h1 className="text-4xl font-bold">30K</h1>
        </div>

          <div className="space-y-2">
          <p className="lg:text-[17px] text-sm ">Total Issues Resolved</p>
          <h1 className="text-4xl font-bold">4500</h1>
        </div>

        <div className="space-y-2">
          <p className="lg:text-[17px] text-sm ">Pending Issues</p>
          <h1 className="text-4xl font-bold">120+</h1>
        </div>
      </div>
    </div>
  )
}

export default States