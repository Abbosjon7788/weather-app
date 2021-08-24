import Image from 'next/image';
import { useState } from "react";
import { useRouter } from "next/router";
import SearchInput from "../components/SearchInput";


const Layout = ({ children }) => {

     const [inputValue, setInputValue] = useState('');
     const router = useRouter();

     const handleChange = (e) => {
          const value = e.target.value;
          setInputValue(value);
     }

     const submit = async () => {
          router.push(`/${inputValue}`);
          setInputValue('');

     }

     const search = async (e) => {
          if (e.key === 'Enter') {
               submit();
          }
     }

     return (
          <div className="layout text-main font-poppins">
               <div>
                    <header className="flex md:px-6 px-4 relative items-center uppercase font-bold text-center text-white md:tracking-widest tracking-wider md:py-8 py-4 bg-gray-800">
                         <Image src="/weather-icon.png" width={64} height={64} alt="" />
                         <span className="text-center md:text-3xl sm-530:text-xl text-lg sm-530:ml-0 ml-2 w-full">Weather next app</span>
                    </header>
                    <SearchInput search={search} inputValue={inputValue} submit={submit} handleChange={handleChange} />
               </div>


               <main className="md:p-6 p-4">
                    {children}
               </main>

               <footer>
                    <h2 className="w-full my-4 text-center text-color-secondary text-xs">nosirovabosjon3429@gmail.com</h2>
               </footer>
          </div>
     )
}

export default Layout;
