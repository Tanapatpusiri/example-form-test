import React, { use, useState } from 'react'
import { Alluser } from './Web'
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';


interface Props {
  user: Alluser
}

const ListUser = ({ user }: Props) => {
  if (!user || (!user.Firstname && !user.Lastname)) {
    user.Firstname = '-'
  }
 
  return <div>
    
    <div className='grid-container'>
      <div className='grid-itemshow'>
      <p>Name : {user.Firstname} {user.Lastname}</p>
     </div>

      <div className='grid-itemshow'>
      <p>Email : {user.Email ? user.Email : '-'} </p>
      </div>

      <div className='grid-itemshow'>
      <p>Gender : {user.Gender} </p>
      </div>

      <div className='grid-itemshow'>
      <p>Hobby : {user.Hobby.join(' , ') ? user.Hobby.join(' , ') : '-' }</p>
      </div >

      <div className='grid-itemshow'>
      <p>Status : {user.Status ? user.Status : '-'} </p>
      </div>

      <div className='grid-itemshow'>
      <p>Note : {user.Note ? user.Note : '-'} </p>
      </div>
      </div>
     
      <div className='CheckboxPDPA'>
        {!user.Pdpa ? <FormControlLabel control={<Checkbox />} label="Confirm PDPA" disabled /> : <FormControlLabel control={<Checkbox />} label="Confirm PDPA" disabled checked />}
      </div>
   

   
     
 
  </div>
}

export default ListUser