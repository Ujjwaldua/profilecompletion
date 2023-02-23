import React from 'react'
import '../Education.css'

function Education() {
  return (
    <>
   
   <center><h2>Education</h2></center>
<form className='edufrom'>
  <label className='edulabel'>
    12th School Name:
    <input type="text" placeholder="Your High School Name" />
  </label>
  <br />
  <label className='edulabel'>
    12th Passing Year:
    <input type="text" placeholder="Your 12th Passing Year" />
  </label>
  <br />
  <label className='edulabel'>
    12th Percentage:
    <input type="text" placeholder="Your 12th Percentage"  />
  </label>
  <br />
  <label className='edulabel'>
    College Name:
    <br />
    <input type="text" placeholder="Your College Name" />
  </label>
  <br />
  <label className='edulabel'>
    College Passing Year:
    <input type="text" placeholder="Your College Passing Year" />
  </label>
  <br />
  <label className='edulabel'>
    College Percentage:
    <input type="text" placeholder="Your College Percentage"  />
  </label>
  <br />
</form>
    </>
   
  )
}

export default Education