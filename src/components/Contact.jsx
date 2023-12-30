import React from 'react';
import emailIcon from '../assets/images/email.png';
import phoneIcon from '../assets/images/phone.png';
import trashIcon from '../assets/images/trash.png';
import personIcon from '../assets/images/person.png';

const Contact = ({data:{name,lastName,email,phone,id},deleteHandler}) => {

    return (
        <>
            <li className='flex justify-around flex-wrap my-6 bg-gray-200 rounded-md shadow-lg shadow-gray-100/120'>
                <div className='flex justify-center py-3'>
                    <img src={personIcon} alt="person" className='w-7 h-6 mr-1' />
                    {name} {lastName}
                </div>

                <div className='flex justify-center py-3'>
                    <img src={emailIcon} alt="email" className='w-7 mr-1'/>
                    {email}
                </div>

                <div className='flex justify-center py-3'>
                    <img src={phoneIcon} alt="phone" className='w-7 mr-1'/>
                    {phone}
                </div>

                <div>
                    {/* Delete item */}
                    <img src={trashIcon} alt="trash" className='w-7 py-3 cursor-pointer' onClick={()=>deleteHandler(id)}/>
                </div>
            
            </li>
        </>
    );
}

export default Contact;
