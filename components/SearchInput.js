import Link from 'next/link';

const SearchInput = ({ search, submit, handleChange, inputValue }) => {
     return (
          <div className="md:px-6 px-4">
               <div className="m-800:w-750 w-full flex shadow-lg md:text-lg md:mt-12 mt-6 sm:text-base text-sm mx-auto">
                    <input type="text" value={inputValue} onChange={handleChange} onKeyPress={search} className="sm:px-6 px-4 capitalize sm:py-4 py-2 m-800:w-5/6 sm-530:w-4/5 w-2/3 focus:outline-none rounded-l-md" placeholder="Search city..." />
                    <Link href={`/${inputValue}`} onClick={submit}>
                         <a className="rounded-r-md text-center m-800:w-1/6 block sm-530:w-1/5 w-1/3 sm:px-6 px-4 sm:py-4 py-2 bg-gray-800 hover:bg-gray-900 text-white tracking-wider">Search</a>
                    </Link>
               </div>
          </div>

     )
}

export default SearchInput;
