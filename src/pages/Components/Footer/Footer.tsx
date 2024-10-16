import Link from "next/link"

export default function Footer(){
    return(
        <div className="bg-black">
            <div className="container pt-20 pb-14">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center text-white">
                    <div className="space-y-2">
                        <h1 className="text-xl lg:text-2xl font-bold">LoveMusic</h1>
                        <div className="flex flex-col lg:text-xl text-[#b3b3b3] font-semibold">
                            <Link className="hover:cursor-pointer hover:underline" href="#description">Descripton</Link>
                            <Link className="hover:cursor-pointer hover:underline" href="#plans">Plans</Link>
                            <Link className="hover:cursor-pointer hover:underline" href="#download">Download</Link>
                            <Link className="hover:cursor-pointer hover:underline" href="#faq">FAQ</Link>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xl lg:text-2xl font-bold">Contact</h1>
                        <div className="flex flex-col lg:text-xl text-[#b3b3b3] font-semibold">
                            <Link className="hover:cursor-pointer hover:underline" href="#description">Online Chat</Link>
                            <Link className="hover:cursor-pointer hover:underline" href="#download">Whatsapp: (xx) xxxx-xxxx</Link>
                            <Link className="hover:cursor-pointer hover:underline" href="#download">Phone: (xx) xxxx-xxxx</Link>
                            <Link className="hover:cursor-pointer hover:underline" href="#plans">Email: contact@contact.com</Link>  
                        </div>       
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xl lg:text-2xl font-bold">Media Social</h1>
                        <div className="flex flex-col lg:text-xl text-[#b3b3b3] font-semibold">
                            <Link className="hover:cursor-pointer hover:underline" href="#description">Instagram</Link>
                            <Link className="hover:cursor-pointer hover:underline" href="#description">Facebook</Link>
                            <Link className="hover:cursor-pointer hover:underline" href="#description">Twitter</Link>
                            <Link className="hover:cursor-pointer hover:underline" href="#description">Youtube</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}