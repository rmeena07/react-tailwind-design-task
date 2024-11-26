import React from 'react'

const Home = () => {
  return (
    <div className="p-10">
        <h2 className='text-[28px] mb-4 text-bold'>Dashboard</h2>
        <div className='w-full bg-white rounded-lg p-4 min-h-32 mb-5'></div>
        <div className='block mb-3 lg:flex gap-5'>

  <div className="bg-white rounded-lg p-4 max-w-lg mx-auto">
    {/* Card Header */}
    <div className="flex justify-between">
      <h2 className="font-semibold text-lg">Running jobs</h2>
      <select className="border rounded px-2 py-1">
        <option>This week</option>
      </select>
    </div>

    {/* Description Box */}
    <div className="flex flex-wrap mt-4">
      {/* Job Details */}
      <div className="flex items-start gap-3 w-[calc(50%-10px)] p-5 border-b border-r border-black">
        <div className="flex justify-center items-center w-8 h-8">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="rounded-full bg-aquamarine object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-600 text-base">Rendering jobs</p>
          <p className="text-sm">14</p>
        </div>
      </div>
      <div className="flex items-start gap-3 w-[calc(50%-10px)] p-5 border-b border-black">
        <div className="flex justify-center items-center w-8 h-8">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="rounded-full bg-aquamarine object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-600 text-base">Rendering jobs</p>
          <p className="text-sm">14</p>
        </div>
      </div>
      <div className="flex items-start gap-3 w-[calc(50%-10px)] p-5 border-r border-black">
        <div className="flex justify-center items-center w-8 h-8">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="rounded-full bg-aquamarine object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-600 text-base">Rendering jobs</p>
          <p className="text-sm">14</p>
        </div>
      </div>
      <div className="flex items-start gap-3 w-[calc(50%-10px)] p-5">
        <div className="flex justify-center items-center w-8 h-8">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="rounded-full bg-aquamarine object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-600 text-base">Rendering jobs</p>
          <p className="text-sm">14</p>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-lg p-4 max-w-lg mx-auto">
    {/* Card Header */}
    <div className="flex justify-between">
      <h2 className="font-semibold text-lg">Running jobs</h2>
      <select className="border rounded px-2 py-1">
        <option>This week</option>
      </select>
    </div>

    {/* Description Box */}
    <div className="flex flex-wrap mt-4">
      {/* Job Details */}
      <div className="flex items-start gap-3 w-[calc(50%-10px)] p-5 border-b border-r border-black">
        <div className="flex justify-center items-center w-8 h-8">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="rounded-full bg-aquamarine object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-600 text-base">Rendering jobs</p>
          <p className="text-sm">14</p>
        </div>
      </div>
      <div className="flex items-start gap-3 w-[calc(50%-10px)] p-5 border-b border-black">
        <div className="flex justify-center items-center w-8 h-8">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="rounded-full bg-aquamarine object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-600 text-base">Rendering jobs</p>
          <p className="text-sm">14</p>
        </div>
      </div>
      <div className="flex items-start gap-3 w-[calc(50%-10px)] p-5 border-r border-black">
        <div className="flex justify-center items-center w-8 h-8">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="rounded-full bg-aquamarine object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-600 text-base">Rendering jobs</p>
          <p className="text-sm">14</p>
        </div>
      </div>
      <div className="flex items-start gap-3 w-[calc(50%-10px)] p-5">
        <div className="flex justify-center items-center w-8 h-8">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            className="rounded-full bg-aquamarine object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-600 text-base">Rendering jobs</p>
          <p className="text-sm">14</p>
        </div>
      </div>
    </div>
  </div>
        </div>
</div>

  )
}

export default Home
