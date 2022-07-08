
import PaginationButton from "./paginationButton.js";


export default function SearchResult({results}) {

  return (
   
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
        <p className='mt-3 text-md text-gray-600 '>
        About {results.searchInformation?.formattedTotalResults} results (
            {results.searchInformation?.formattedSearchTime}
        )</p>
        {
            results.items?.map( res => (
            <div key = { res.key}
            className='max-w-xl mb-8'>
                <div className='group flex flex-col'>
                    <a href={res.link} className='text-sm'>{res.formattedUrl}</a>
                <a href={res.link} className='text-xl text-blue-800 font-medium 
                group-hover:underline'>
                {res.title}
                </a>   
                
                </div>
                <p>{res.snippet}</p>

            </div>
            ))
        }
        <PaginationButton />
    </div>
  )
}
