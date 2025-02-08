import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <div className='w-[1000px] h-[286px] bg-[#F6F5FF]'>
<h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>Blog Page</h1>
<p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'> Blog Page</span></p>
      </div>
      <div>
        <Image src={'/blog1.png'} alt='blog' width={850} height={423} className='ml-4'/>
        <Image src={'/date.png'} alt='blog' width={360} height={23} className='ml-4 pt-3'/>
       <h1 className='text-2xl font-bold pt-3 ml-4 text-blue-950'>Mauris at orci non vulputate diam tincidunt nec.</h1>
       <p className='text-sm text-gray-400  pt-3 ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum<br></br>
        eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
<button className='w-[87px] h-[22px] ml-4 pt-4 '> Read More </button>
      </div>

      <div>
        <Image src={'/blog2.png'} alt='blog' width={850} height={423} className='ml-4 pt-4'/>
        <Image src={'/date.png'} alt='blog' width={360} height={23} className='ml-4 pt-3'/>
       <h1 className='text-2xl font-bold pt-3 ml-4 text-blue-950'>Aenean vitae in aliquam ultrices lectus. Etiam.</h1>
       <p className='text-sm text-gray-400  pt-3 ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum<br></br>
        eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
<button className='w-[87px] h-[22px] ml-4 pt-4 '> Read More </button>
      </div>

      <div>
        <Image src={'/blog3.png'} alt='blog' width={850} height={423} className='ml-4 pt-4'/>
        <Image src={'/date.png'} alt='blog' width={360} height={23} className='ml-4 pt-3'/>
       <h1 className='text-2xl font-bold pt-3 ml-4 text-blue-950'>Sit nam congue feugiat nisl, mauris amet nisi. </h1>
       <p className='text-sm text-gray-400  pt-3 ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum<br></br>
        eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
<button className='w-[87px] h-[22px] ml-4 pt-4 '> Read More </button>
      </div>
      <div><Image 
      src={'/pages.png'} alt='image' width={236} height={24} className='ml-[450px] pt-20'
      /></div>

<div>
    <Image
  src={"/last.png"}
  alt='last'
  height={93}
  width={904}
  className='relative bottom ml-16 pt-20'
 />
    </div>
   </div>
  
  )
}

export default page
