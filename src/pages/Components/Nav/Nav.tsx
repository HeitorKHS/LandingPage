import Link from "next/link"
import { useState } from "react"

export default function Nav(){

    const [menu, setMenu] = useState(false);

    return(

        <>
            {/* Nav Desktop */}
            <div className="hidden md:block container py-4">
                <div className="flex justify-between text-white">
                    <div>
                        <Link href="/" className="text-2xl lg:text-4xl font-bold">LoveMusic</Link>
                    </div>
                    <div className="flex lg:text-xl items-center gap-10">
                        <div className="flex gap-3 lg:gap-10 border-r-4 border-[#FF54D3] pr-10">
                            <Link href="#description">Description</Link>
                            <Link href="#plans">Plans</Link>
                            <Link href="#download">Download</Link>
                            <Link href="#faq">FAQ</Link>
                        </div>
                        <div className="flex gap-3 lg:gap-10">
                            <button>Sign in</button>
                            <button className="text-black bg-white p-2 rounded-2xl">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Nav Mobile*/}
            <div className="block md:hidden text-white">

                {/*Icon Menu and Logo*/}
                <div className="flex items-center">
                    <div>
                        <button onClick={()=>setMenu(!menu)}><img  className="h-[60px]" src="/assets/icon/menu.png" alt="menu" /></button>
                    </div>
                    <div className="border-l-4 border-[#FF54D3] pl-5 ml-5">
                        <h1 className="text-center font-bold text-3xl">LoveMusic</h1>
                    </div>
                </div>

                {/*Open Menu*/}
                <div className={`${menu ? 'block' : 'hidden'} bg-[#262626] fixed w-full h-full top-0 `}>
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between">
                            <div>
                                <button onClick={()=>setMenu(!menu)}><img  className="h-[60px]" src="/assets/icon/close.png" alt="close" /></button>
                            </div>
                            <div className="space-x-5 pr-5">
                                <button>Sign in</button>
                                <button className="text-black bg-white p-2 rounded-2xl">Sign up</button>
                            </div>
                        </div>
                        <div className="h-full flex flex-col justify-center items-center gap-10 text-xl">
                            <Link href="#">Description</Link>
                            <Link href="#">Plans</Link>
                            <Link href="#">Download</Link>
                            <Link href="#">FAQ</Link>
                        </div>
                    </div>
                </div>

            </div>

        </>
        
    )
}