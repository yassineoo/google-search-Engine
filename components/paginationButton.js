import { useRouter } from "next/router"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function PaginationButton() {
    const router = useRouter();
    const index= router.query.start || 0;
  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
    {
        index>=10 && (
            <Link href={`/search?term=${router.query.term}&start=${Number(index)-10}`}>
                <div className="flex flex-1 flex-col items-center cursor-pointer hover:underline">
                     <ChevronLeftIcon className="h-5 "/>
                        <p>Previous</p>
                </div>
            </Link>
        )
    }
    <Link href={`/search?term=${router.query.term}&start=${Number(index)+10}`}>

        <div  className="flex flex-1 flex-col items-center cursor-pointer hover:underline">
              <ChevronRightIcon className="h-5 "/>
                <p>Next</p>
        </div>
    </Link>
    </div>
  )
}
