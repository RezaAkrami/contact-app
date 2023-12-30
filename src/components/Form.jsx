import {useState} from 'react'
import Contact from './contact';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import input from '../constants/input';


const Form = () => {

    // data state
    const [data, setData] = useState({
        id:"",
        name :"",
        lastName:"",
        email:"",
        phone:"",
    });

    // show state
    const [contacts, setContacts] = useState([]);

    const formHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        // catch data from user and fill the state
        setData((data)=>({...data , [name]:value , id:uuidv4()}));
    }

    function showData(e){
        e.preventDefault();
        if(data.name && data.lastName && data.email && data.phone){

            // creat new Array of data for show items
            setContacts((contacts)=>([ ...contacts, data ]));

            // clear Data state
            setData({
                name :"",
                lastName:"",
                email:"",
                phone:"",
            });
        }else{
            // Show Error
            toast.error('please fill the form !', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }

    // Delete Contacts
    function deleteHandler(id){
        setContacts(
            contacts.filter(item => item.id !== id )
        )
    }

    return (
        <>
        <div className='mt-14 w-[90%] m-auto bg-gray-50 py-5 px-8 rounded-lg shadow-lg shadow-gray-200/800'>

            <form className='flex justify-around flex-wrap gap-6'>

                {input.map( (item,index) =>
                    (<input 
                        key={index}
                        type={item.type}  
                        placeholder={item.placeholder} 
                        onChange={formHandler} 
                        name={item.name} 
                        value={data[item.name]} 
                        className={item.className}
                    />)
                )}

                <input type="submit" value="Add Contact" className='w-[96%] bg-blue-700 text-white rounded-md py-[9px] cursor-pointer hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border  hover:transition hover:duration-700 duration-700' onClick={showData}/>

            </form>


        </div>

            <h3 className='text-blue-700 font-bold text-[25px] w-[90%] text-left m-auto mt-10'>Contacts List</h3>

            <ul className='list-none w-[90%] m-auto mt-4 rounded-md bg-gray-100 shadow-lg shadow-gray-200/800 py-1 px-3'>
                {contacts.length
                 ? 
                    contacts.map((item) =>
                        <Contact key={item.id} data={item} deleteHandler={deleteHandler}/>
                    ) 
                 : 
                    <li className='py-8 font-bold'>No Contacts Yet!</li>}
            </ul>

            
        </>
    );
}

export default Form;
