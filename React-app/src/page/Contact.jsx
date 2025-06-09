import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../componets/Header';

export const Contact = () => {
  const [data, setData] = useState([]);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [text, setText] = useState('');
  const First = useRef();
  const Last = useRef();
  const Email = useRef();
  const Mobile = useRef();
  const Text = useRef();


useEffect(() =>{
  const storedData = localStorage.getItem('data');

  if(storedData) {
    setData(JSON.parse(storedData));
  }
}, [])

  function handleAddClick(e) {
    e.preventDefault();
    console.log(First.current.value);
    //console.log(first.first.value);
    if (first && last && email && mobile && text) {
      const newData = [...data, {first, last, email, mobile, text}];
      setData(newData);
      localStorage.setItem('data', JSON.stringify(newData));
      setFirst('');
      setLast('');
      setEmail('');
      setMobile('');
      setText('');
      console.log(data);
    }
  }

  function handleDeleteClick(index) {
    const updateData = data.filter((_,i) => i !== index);
    setData(updateData);
    localStorage.setItem('data', JSON.stringify(updateData))
  }


  return (
      <section className='w-full h-[100vh]'>
    <Header />
    <div className="flex flex-col items-center">  
        <h1 className='my-[30px] text-[56px] font-bold'>Contact <span className='text-[#0ef]'>Me</span></h1>
        <form onSubmit={handleAddClick} action="">
          <div className="flex flex-col">
            <input ref={First} value={first} onChange={(e) => setFirst(e.target.value)} className='input' type="text" placeholder='First name'/>
            <input ref={Last} value={last} onChange={(e) => setLast(e.target.value)} className='input' type="text" placeholder='Last name'/>
          </div>
          <div className="flex flex-col">
            <input ref={Email} value={email} onChange={(e) => setEmail(e.target.value)} className='input' type="email" placeholder='Email'/>
            <input ref={Mobile} value={mobile} onChange={(e) => setMobile(e.target.value)} required={true} className='input' type="number" placeholder='Mobile Number'/>
          </div>
          <div className="flex flex-col mb-[30px]">
           <textarea ref={Text} value={text} onChange={(e) => setText(e.target.value)} className='input' type="text" placeholder='Your Message'></textarea>
          </div>
          <button className='btn'>Send Message</button>
        </form>
        <div className="flex mt-[30px]">
        {data.length > 0 && data.map((item, index) => (
          <div key={index} className='flex flex-col'> 
            <h5>First name: {item.first}</h5>
            <h5>Last name: {item.last}</h5>
            <h5>Email: {item.email}</h5>
            <h5>Mobile: {item.mobile}</h5>
            <h5>text name: {item.text}</h5>
            <button className='mx-2 p-2 bg-gray-700 rounded-2xl' onClick={() => handleDeleteClick(index)}>❌</button>
          </div>))}
        </div>        
    </div>
  </section>
    
  )
}


export default Contact