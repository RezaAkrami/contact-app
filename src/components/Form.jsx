import {useState} from 'react'
const Form = () => {

    const [data, setData] = useState({
        name :"",
        lastName:"",
        email:"",
        phone:"",
    })

    const formHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setData((data)=>({...data , [name]:value }));
    }

    function forbv(e){
        e.preventDefault();
        console.log(data)
    }

    return (
        <div className='mt-14 w-[90%] m-auto bg-gray-50 py-5 px-8 rounded-lg shadow-lg shadow-gray-200/800'>

            <form className='flex justify-around flex-wrap gap-6'>

                <input type="text" className="mt-1 w-[45%]  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Name" onChange={formHandler} name='name'/>

                <input type="text" className="mt-1 w-[45%]  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Last Name" onChange={formHandler} name='lastName' />

                <input type="text" className="mt-1 w-[45%]  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Email" onChange={formHandler} name='email' />

                <input type="text" className="mt-1 w-[45%]  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Phone" onChange={formHandler} name='phone'/>

                <input type="submit" value="Add Contact" className='w-[96%] bg-blue-700 text-white rounded-md py-[9px] cursor-pointer hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border-[3px]  hover:transition hover:duration-700 duration-700' onClick={forbv}/>

            </form>
        </div>
    );
}

export default Form;
