import Link from "next/link"

export default function Main(){
    return(
        <div className="flex flex-1 items-center py-4">
            <div className="container">
                <div className="max-w-[490px] space-y-10 mx-auto xl:mx-0">
                    <div>
                        <h1 className="text-white font-bold text-center text-5xl md:text-7xl xl:text-left">Listen your Favorite music Every day</h1>
                    </div>
                    <div>
                        <h2 className="text-[#C3C3C3] font-semibold text-center text-lg md:text-xl xl:text-left">Get access to millions of songs and podcasts just for you in one place</h2>
                    </div>
                    <div className="text-center xl:text-left">
                        <Link href="#" className="text-[#5F5F5F] text-lg hover:text-white hover:cursor-pointer hover:underline">Download Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}