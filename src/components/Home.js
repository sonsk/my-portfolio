import React from "react";
import Typical from "react-typical";

function Home() {
    return(
       
        <div className=" mt-32 min-h-screen w-9/12 mx-auto  dark:bg-blue-950 dark:text-white">

            <h2 className="text-5xl md:text-5xl mb-8">Hello!</h2>
            <h2 className="text-5xl md:text-5xl">call me <span className="font-bold">Sons </span>
                 like <span className="text-green-300 font-bold">Sonfack Steve</span>
            </h2>
            <h1 className="text-5xl md:text-5xl ">I'm a{' '}
                <br></br><span>
                    <Typical
                        steps={['software engineer', 2000, 'web app developer', 2000]}
                        loop={Infinity}
                        className="inline-block text-5xl"
                    />
                </span>
            </h1>
            <h4 className="pt-4 text-2xl">Anime lover by day | It engineer by night</h4>
            <button className="p-4 mt-4 rounded-3xl bg-blue-950 dark:bg-white text-white dark:text-blue-950">Download CV</button>
            
        </div>

    )
}
export default Home;