import React from 'react'

const AddIsuues = ({currentUserEmail}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log('issue added')
    
    const newIssue = {
      title,
      category,
      location,
      description,
      image,
      amount,
      status: 'ongoing',          // default status
      date: new Date().toISOString(),
      email: currentUserEmail     // current logged-in user
    }
     console.log('New issue submitted:', newIssue)
    // TODO: send newIssue to your backend or API

      // Reset form
    setTitle('')
    setCategory('')
    setLocation('')
    setDescription('')
    setImage('')
    setAmount('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto border p-4 rounded-lg">
        <h1 className='p-4 text-2xl text-center'>Add New Issue</h1>

        {/* Issue Title */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Issue Title"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          >
            <option value="">Select Category</option>
            <option value="Garbage">Garbage</option>
            <option value="Illegal Construction">Illegal Construction</option>
            <option value="Broken Public Property">Broken Public Property</option>
            <option value="Road Damage">Road Damage</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="Describe the issue"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            required
          />
        </div>

        {/* Image */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="col-span-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        {/* Suggested Fix Amount */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suggested Fix Budget</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        {/* Email (read-only) */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type="email"
            value={currentUserEmail}
            readOnly
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          className="btn text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddIsuues