import React from 'react'
import Stories from './Stories'
import AddNewPost from './AddNewPost'
import Post from './Post'

const Feeds = () => {
  return (
    <div className='h-full mt-4 flex flex-col p-1 gap-2 overflow-x-hidden overflow-y-scroll scrollbar-hide'>  
     <h2>Feeds</h2>
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
