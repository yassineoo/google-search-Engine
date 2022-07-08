import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/searchHeader";
import SearchResult from "../components/searchResult";
import { API_KEY , Context_KEY } from "../keys";

export default function Search({results}) {

    const router = useRouter();
  return (
    <div>
        <Head>
            <title>{router.query.term } - Google Search</title>
        </Head>
        <SearchHeader input={router.query.term } />
        <SearchResult results={results}/>
        
    </div>
  )
}

export async function getServerSideProps(context) {
    console.log('hiiii');
    const useDummyData =false;
    const startIndex = context.query.start|| '0' ;
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${Context_KEY}&q=${context.query.term}&start=${startIndex}`).then(res => res.json())
        return{
            props :{
                results:data
            }
        }
}