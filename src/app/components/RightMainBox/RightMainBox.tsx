import React from 'react'
import FriendsRequest from './FriendsRequest'
import Birthdays from './Birthdays'
import Ads from './Ads'

const RightMainBox = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-4 p-1 mt-4 w-full'>
      <h1>RightMainBox</h1>
      <FriendsRequest/>
      <Birthdays/>
      <Ads size='md'/>
    </div>
  )
}

export default RightMainBox
