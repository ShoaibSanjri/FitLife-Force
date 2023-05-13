import React from 'react'
 
const data = [
    {
        "img":"https://cdn1.cronometer.com/webflow/cronometer-features-11.svg",
        "title":"Track up to 84 nutrients and other compounds",
        "des":"Log your meals and track all your macro and micronutrients."
    },
    {
        "img":"https://cdn1.cronometer.com/webflow/cronometer-features-14.svg",
        "title":"Log meals, exercise and health metrics",
        "des":"Plus, you can create custom foods, recipes, exercises and metrics.."
    },
    {
        "img":"https://cdn1.cronometer.com/webflow/cronometer-features-13.svg",
        "title":"Get valuable health reports and charts",
        "des":"Learn how nutrients and metrics correlate over time."
    },
    {
        "img":"https://cdn1.cronometer.com/webflow/cronometer-features-16.svg",
        "title":"Custom diet settings",
        "des":"Set weight, macro and nutrient targets to meet your goals."
    },
    {
        "img":"https://cdn1.cronometer.com/webflow/cronometer-features-15.svg",
        "title":"Fasting timer",
        "des":"Track your intermittent fasts and see their effect over time"
    },
    {
        "img":"https://cdn1.cronometer.com/webflow/cronometer-features-12.svg",
        "title":"Diet support",
        "des":"Whether you’re Keto, Vegan, or on one recommended by your doctor."
    },
]

const Home = () => {
  return (
    <div className='flex flex-col py-[5rem] '>
        <div className='w-[40%] mx-[30%]'>
            <h1 className='text-[2.5rem] font-bold text-center text-gray-700'>Develop healthy habits</h1>
            <p className='text-[1.2rem]  text-center  text-gray-700'>Count your calories, ensure you're meeting nutrient targets, and see your progress over time.</p>
        </div>
        <div className='grid gap-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-[8rem] py-[2rem] mt-[3rem]' >
           {data.map((el)=>{
            return (
                <div className='border-2 flex flex-col p-[2rem]'>
                    <img className='w-[100%]' src={el.img} alt="pic"/>
                    <h1 className='text-[1.4rem] font-bold text-center text-gray-700'>{el.title}</h1>
                    <p className='text-[1.1rem]  text-center  text-gray-700'>{el.des}</p>
                </div>)
             })
            }
        </div>
    </div>
  )
}

export default Home