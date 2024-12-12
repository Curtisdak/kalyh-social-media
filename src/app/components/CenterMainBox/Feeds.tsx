import React from 'react'
import Stories from './Stories'
import AddNewPost from './AddNewPost'
import Post from './Post'

const Feeds = () => {
  return (
    <div className='  h-full mt-12 flex flex-col p-1 gap-1 overflow-x-hidden overflow-y-scroll scrollbar-hide  '>  
     <Stories/>
     <AddNewPost/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </div>
  )
}

export default Feeds
