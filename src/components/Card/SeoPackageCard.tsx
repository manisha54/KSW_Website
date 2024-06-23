import React from 'react'


interface PlanItem {
    text: string;
    isActive: boolean;
  }
  
  interface cardProps {
    heading: string;
    btn:string;
    initial: PlanItem[];
    setup: PlanItem[];
    technical: PlanItem[];
    offPageSEOContent: PlanItem[];
    localSEOContent: PlanItem[];
    monthlyReportContent: PlanItem[];
  }

 const  SeoPackageCard: React.FC<cardProps> =  ({heading,btn, initial, setup, technical, offPageSEOContent, localSEOContent,monthlyReportContent})=>  {


  return (
    <>
     <div>
        <div className='w-[80%] m-auto md:w-[40vw] lg:w-[18vw] mt-4 bg-[#e5f8fb]   h-fit pt-1 rounded-3xl shadow-xl text-black'>

        <div>
            <h1 className='text-2xl pt-6 font-medium text-center'>{heading}</h1>
        </div>
        <div className='w-[80%] m-auto mt-4 border-2 rounded-sm border-dashed pl-2 pr-2' ></div>
        <div className='mt-8 pl-2 pb-4'>
            <h3 className='font-bold pl-3 text-[0.8rem] sm:text-[1rem] mt-1 mb-1'>Initail website Analysis</h3>
            <ul className='pl-3 '>
              {
                initial.map((item, index)=>{
                   return (
                      <div className='flex  gap-2  '>
                        {item.isActive ? <img src="/SeoPackage/check.png" alt="" className='w-2.5 h-2.5 relative  top-[5px]' />: <img src="/SeoPackage/cross.png" alt="" className='w-3 h-3 relative top-2'  />}
                        <li className='text-[14px]'>{item.text}</li>
                      </div>
                   )
                })
              }
            </ul>

            <h3 className='font-bold pl-3 text-[0.8rem] sm:text-[1rem] mt-1 mb-1'>On page setup</h3>
            <ul className='pl-3'>
              {
                setup.map((item, index)=>{
                    return (
                        <div className='flex items-start gap-2'>
                          {item.isActive ? <img src="/SeoPackage/check.png" alt="" className='w-2.5 h-2.5 relative  top-[5px]' />: <img src="/SeoPackage/cross.png" alt="" className='w-3 h-3 relative top-2' />}
                          <li className='text-[14px]'>{item.text}</li>
                        </div>
                     )
                })
              }
            </ul>

            <h3 className='font-bold pl-3 text-[0.8rem] sm:text-[1rem] mt-1 mb-1'>Technical Seo</h3>
            <ul className='pl-3'>
              {
                technical.map((item, index)=>{
                    return (
                        <div className='flex items-start gap-2'>
                          {item.isActive ? <img src="/SeoPackage/check.png" alt="" className='w-2.5 h-2.5 relative  top-[5px]' />: <img src="/SeoPackage/cross.png" alt="" className='w-3 h-3 relative top-2' />}
                          <li className='text-[14px]'>{item.text}</li>
                        </div>
                     )
                })
              }
            </ul>

            <h3 className='font-bold pl-3 text-[0.8rem] sm:text-[1rem] mt-1 mb-1'>Off Page Seo</h3>
            <ul className='pl-3'>
              {
                offPageSEOContent.map((item, index)=>{
                    return (
                        <div className='flex items-start gap-2'>
                          {item.isActive ? <img src="/SeoPackage/check.png" alt="" className='w-2.5 h-2.5 relative  top-[5px]' />: <img src="/SeoPackage/cross.png" alt="" className='w-3 h-3 relative top-2' />}
                          <li className='text-[14px]'>{item.text}</li>
                        </div>
                     )
                })
              }
            </ul>
            

            <h3 className='font-bold pl-3 text-[0.8rem] sm:text-[1rem] mt-1 mb-1'>Local seo</h3>
            <ul className='pl-3'>
              {
                localSEOContent.map((item, index)=>{
                    return (
                        <div className='flex items-start gap-2'>
                          {item.isActive ? <img src="/SeoPackage/check.png" alt="" className='w-2.5 h-2.5 relative  top-[5px]' />: <img src="/SeoPackage/cross.png" alt="" className='w-3 h-3 relative top-2' />}
                          <li className='text-[14px]'>{item.text}</li>
                        </div>
                     )
                })
              }
            </ul>

            <h3 className='font-bold pl-3 text-[0.8rem] sm:text-[1rem] mt-1 mb-1'>Monthly Report</h3>
            <ul className='pl-3'>
              {
                monthlyReportContent.map((item, index)=>{
                    return (
                        <div className='flex items-start  gap-2'>
                          {item.isActive ? <img src="/SeoPackage/check.png" alt="" className='w-2.5 h-2.5 relative top-[5px]' />: <img src="/SeoPackage/cross.png" alt="" className='w-3 h-3 relative top-2' />}
                          <li className='text-[14px]'>{item.text}</li>
                        </div>
                     )
                })
              }
            </ul>


        </div>

        <h1 className='pl-4 font-bold text-sm'>Dedicated Project Manager</h1>
 
            <h1 className='pl-4 font-bold text-sm mt-4' >Contract : <span className='font-medium'>MiniMum 6 months</span></h1> 
       
          <div className='w-full flex justify-center'>
          <button className='w-[9rem] bg-[#EFF569] hover:bg-yellow-300 pt-3 pb-3 text-black font-semibold  mb-2 rounded-lg mt-3 ease-in duration-900]'>{btn}</button>
          </div>
        </div>
        
        </div> 
    </>
  )
}

export default SeoPackageCard;