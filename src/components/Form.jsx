import {useState} from 'react'
import Contact from './contact';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {

    const [data, setData] = useState({
        name :"",
        lastName:"",
        email:"",
        phone:"",
    });

    const [contacts, setContacts] = useState([]);

    const formHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setData((data)=>({...data , [name]:value }));
    }

    function showData(e){
        e.preventDefault();
        setContacts((contacts)=>([ ...contacts, data ]));
        setData({
            name :"",
            lastName:"",
            email:"",
            phone:"",
        });
    }

    return (
        <>
        <div className='mt-14 w-[90%] m-auto bg-gray-50 py-5 px-8 rounded-lg shadow-lg shadow-gray-200/800'>

            <form className='flex justify-around flex-wrap gap-6'>

                <input type="text" className="mt-1 w-[45%]  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Name" onChange={formHandler} name='name' value={data.name}/>

                <input type="text" className="mt-1 w-[45%]  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Last Name" onChange={formHandler} name='lastName' value={data.lastName}/>

                <input type="text" className="mt-1 w-[45%]  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Email" onChange={formHandler} name='email' value={data.email} />

                <input type="text" className="mt-1 w-[45%]  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Phone" onChange={formHandler} name='phone' value={data.phone}/>

                <input type="submit" value="Add Contact" className='w-[96%] bg-blue-700 text-white rounded-md py-[9px] cursor-pointer hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border  hover:transition hover:duration-700 duration-700' onClick={showData}/>

            </form>


        </div>

            <h3 className='text-blue-700 font-bold text-[25px] w-[90%] text-left m-auto mt-10'>Contacts List</h3>

            <ul className='list-none w-[90%] m-auto mt-4 rounded-md bg-gray-100 shadow-lg shadow-gray-200/800 py-1 px-3'>
                {contacts.length
                 ? 
                    contacts.map((item) =>
                        <Contact key={uuidv4()} data={item}/>
                    ) 
                 : 
                    <li className='py-8 font-bold'>No Contacts Yet!</li>}
            </ul>
        </>
    );
}

export default Form;
