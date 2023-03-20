export default function App() {
   return (
      <div className='bg-proWhite h-screen  w-screen flex justify-center items-center'>
         <div className=' flex md:flex-row flex-col md:w-1/2 w-full lg:h-3/4 h-full lg:rounded-3xl   shadow-lg shadow-lightLavender '>
            <div className='bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue basis-1/2 lg:rounded-3xl rounded-b-3xl flex flex-col items-center justify-center lg:space-y-6 space-y-2 py-2'>
               <div>
                  <h1 className='text-lightLavender lg:text-[20px] text-[18px] font-custom font-medium'>Your Result</h1>
               </div>
               <div className='lg:w-44 lg:h-44 w-28 h-28 bg-gradient-to-b from-violetBlue to-persianBlue rounded-full flex flex-col justify-center items-center'>
                  <h1 className='font-custom font-extrabold lg:text-8xl text-6xl text-white'>76</h1>
                  <h1 className='font-custom font-medium text-lightLavender'>of 100</h1>
               </div>
               <div>
                  <h1 className='text-white font-custom font-bold lg:text-3xl text-xl'>Great</h1>
               </div>
               <div className='w-[225px] text-center'>
                  <p className='text-lightLavender font-custom font-medium lg:text-[18px] text-[14px]'>
                     You scored higher than 65% of the people who have taken these tests.
                  </p>
               </div>
            </div>
            <div className='bg-proWhite basis-1/2 flex flex-col justify-start items-center lg:space-y-8 space-y-4 py-6'>
               <div className='lg:w-4/5 w-[85%]'>
                  <h1 className='font-bold text-darkGrayBlue text-[18px] font-custom'>Summary</h1>
               </div>
               <div className='flex justify-between lg:w-4/5  w-[85%] px-3 lg:py-3 py-2 bg-red-50 rounded-lg'>
                  <div className='flex space-x-3'>
                     <img src='assets/images/icon-reaction.svg' className='fill-lightRed' alt='reaction icon' />
                     <h1 className='font-bold font-custom text-[16px] text-lightRed'>Reaction</h1>
                  </div>
                  <div>
                     <h1 className='font-custom font-bold text-[16px] text-darkGrayBlue'>
                        80 <span className='text-lightLavender'>/ 100</span>
                     </h1>
                  </div>
               </div>
               <div className='flex justify-between lg:w-4/5  w-[85%] px-3 lg:py-3 py-2 bg-yellow-50 rounded-lg'>
                  <div className='flex space-x-3'>
                     <img src='assets/images/icon-memory.svg' className='fill-orangeyYellow' alt='reaction icon' />
                     <h1 className='font-bold font-custom text-[16px] text-orangeyYellow'>Memory</h1>
                  </div>
                  <div>
                     <h1 className='font-custom font-bold text-[16px] text-darkGrayBlue'>
                        92 <span className='text-lightLavender'>/ 100</span>
                     </h1>
                  </div>
               </div>
               <div className='flex justify-between lg:w-4/5 w-[85%] px-3 lg:py-3 py-2 bg-green-50 rounded-lg'>
                  <div className='flex space-x-3'>
                     <img src='assets/images/icon-verbal.svg' className='fill-greenTeal' alt='reaction icon' />
                     <h1 className='font-bold font-custom text-[16px] text-greenTeal'>Verbal</h1>
                  </div>
                  <div>
                     <h1 className='font-custom font-bold text-[16px] text-darkGrayBlue'>
                        61 <span className='text-lightLavender'>/ 100</span>
                     </h1>
                  </div>
               </div>
               <div className='flex justify-between lg:w-4/5  w-[85%] px-3 lg:py-3 py-2 bg-blue-50 rounded-lg'>
                  <div className='flex space-x-3'>
                     <img src='assets/images/icon-visual.svg' className='fill-cobaltBlue' alt='reaction icon' />
                     <h1 className='font-bold font-custom text-[16px] text-cobaltBlue'>Visual</h1>
                  </div>
                  <div>
                     <h1 className='font-custom font-bold text-[16px] text-darkGrayBlue'>
                        72 <span className='text-lightLavender'>/ 100</span>
                     </h1>
                  </div>
               </div>
               <div className='bg-darkGrayBlue hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue lg:w-4/5  w-[85%] lg:py-3 py-2 rounded-3xl '>
                  <h1 className='text-white font-custom font-bold text-[16px] text-center'>Continue</h1>
               </div>
            </div>
         </div>
      </div>
   );
}
