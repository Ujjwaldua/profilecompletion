import React from 'react'
import '../App.css'

function Personal() {
  return (
    <>
   
<form>
   <label>
  First Name:
  <br/>
  <input type="text" name="firstName" placeholder="First Name" />
</label>
<br />
<label>
  Last Name:
  <br/>
  <input type="text" name="lastName" placeholder="Last Name" />
</label>
<br />
<label>
  Location:
  <br/>
  <input type="text" name="location" placeholder="Location" />
</label>
<br />
<label>
  Email:
  <br/>
  <input type="email" name="email" placeholder="E-Mail" />
</label>
<br />
<label>
  Phone Number:
  <br/>
  <input type="tel" name="phoneNumber" placeholder="Phone Number" />
</label>
<br />
<label>
  Gender:
  <br/>  
  <div>
    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male</label>
  </div>
  <div>
    <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label>
  </div>
  <div>
    <input type="radio" id="other" name="gender" value="other" />
    <label for="other">Other</label>
    </div>
</label>

<br />
  <label>
    Date of Birth:
    
    <br></br>
    <input type="date" id="dob" name="dateOfBirth" />
  </label>

<br />
<label>
  <br></br>
  Father's Occupation:
  <br></br>
  <input type="radio" id="occupation1" name="fatherOccupation" value="occupation1" />
  <label for="occupation1">Salaried</label>
  <input type="radio" id="occupation2" name="fatherOccupation" value="occupation2" />
  <label for="occupation2">Agriculture</label>
  <input type="radio" id="occupation3" name="fatherOccupation" value="occupation3" />
  <label for="occupation3">Business</label>
</label>


   
</form>
    
    </>
  )
}

export default Personal