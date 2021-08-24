import Image from 'next/image';
import Layout from "../components/Layout";

const API_KEY = 'f89ca9552dbc82d6135ba21fe83329f9';
const metric = 'metric';

const WeatherId = ({ data }) => {
     const monthsArray = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

     const currentDate = () => {
          let today = new Date();
          let day = String(today.getDate()).padStart(2, '0');
          let month = monthsArray[today.getMonth()];


          let date = month + ' ' + day + ', ';
          let time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, '0');

          return date + time;
     };

     const date = currentDate();

     if (data.cod === 200) {
          const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          return (
               <Layout>
                    <div className="border-2 border-color flex md:flex-row flex-col font-poppins m-800:w-750 w-full mx-auto md:mt-6 mt-4 md:p-6 p-4 shadow-lg rounded-md">
                         <div className="md:w-1/2 w-full md:text-left text-center">
                              <p className="text-orange text-sm">{date}</p>
                              <h1 className="font-bold sm-530:text-4xl text-2xl tracking-widest mt-1">{data.name}, {data.sys.country}</h1>
                              <h2 className="capitalize mt-2 sm-530:text-lg text-base tracking-widest text-orange">{data.weather[0].description}</h2>
                         </div>
                         <div className="md:w-1/2 w-full">
                              <div className="flex items-center justify-center">
                                   <Image src={weatherIcon} width={60} height={60} alt="" />
                                   <div className="sm-530:text-xl text-lg font-semibold tracking-wider">{data.main.temp} <span className="text-3xl">℃</span></div>
                              </div>
                              <div className="flex justify-center">
                                   <p className="sm-530:text-sm text-xs sm-530:ml-5 ml-3">Feels like: <span className="text-orange">{data.main.feels_like} ℃</span> </p>
                                   <p className="sm-530:text-sm text-xs sm-530:ml-5 ml-3">Humidity: <span className="text-orange">{data.main.humidity}</span> </p>
                              </div>
                              <div className="flex mt-2 justify-center">
                                   <p className="sm-530:text-sm text-xs sm-530:ml-5 ml-3">Wind speed: <span className="text-orange">{data.wind.speed} m/s</span> </p>
                                   <p className="sm-530:text-sm text-xs sm-530:ml-5 ml-3">Wind deg: <span className="text-orange">{data.wind.deg}°</span> </p>
                              </div>

                         </div>
                    </div>
               </Layout>
          )
     } else {
          return (
               <Layout>
                    <h1 className="font-bold text-center capitalize md:text-4xl text-2xl md:mt-6 mt-4">{data.message}</h1>
               </Layout>
          )
     }

}

export default WeatherId;

export async function getServerSideProps({ query }) {
     console.log('query', query.weatherId);
     const region = query.weatherId;
     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${API_KEY}&units=${metric}`)
     const data = await res.json();


     return {
          props: { data }
     }
}