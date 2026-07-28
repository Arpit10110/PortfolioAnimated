import { TOPIC_GROUPS } from '@/utils/topics'
import React from 'react'

const BlogNav = () => {
  return (
    <>
      <nav className='w-full px-[5rem] py-[4rem] flex justify-between' >
       <input type="text" placeholder='Search for a topic' className='text-[1.5rem] px-[1rem] py-[0.5rem] border-none outline-none bg-gray-800 text-white w-[50%] rounded-md '  />  
       <select defaultValue='all' className='text-[1.5rem] text-white bg-gray-800 py-[1rem] px-[1.5rem] rounded-md ' >
         <option  value="all">SHOW ALL BLOGS</option>
         {TOPIC_GROUPS.map((topic:any) => (
          <option key={topic.id} value={topic.id}>{topic.id.toUpperCase()}</option>
         ))}
       </select>
      </nav> 
    </>
  )
}

export default BlogNav
