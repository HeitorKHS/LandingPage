import { useState } from "react"
import Link from "next/link";

export default function Faq(){

    const [dropdown,setDropdown] = useState<string>("")

    const openDropdown = (index:string) => {
        setDropdown(dropdown === index ? "" : index);
    };

    return(
        <div className="bg-[#262626]" id="faq">
            <div className="container pt-20 pb-14">
                <div className="text-white space-y-20">
                    <div className="text-center">
                        <p className="text-xl text-primary">Frequently Asked Questions</p>
                        <h1 className="text-6xl font-semibold">Common Questions</h1>
                    </div>
                    <div>

                        <div onClick={() => openDropdown('general')}>
                            <div className="flex items-center justify-between border-b-2 cursor-pointer transform duration-300 hover:border-primary">
                                <h1 className="text-2xl font-semibold">General Information</h1>
                                <img src="/assets/icon/chevron.png" alt="chevron" className={`transform transition-transform duration-300 ${dropdown === 'general' ? 'rotate-90' : ''}`}/>
                            </div>
                            {dropdown === 'general' && (
                                <div className="flex flex-col text-xl gap-2 pt-4">
                                    <Link className="hover:text-secondary" href="#">What is Your Service?</Link>
                                    <Link  className="hover:text-secondary" href="#">How does it work?</Link>
                                </div>
                            )}
                        </div>

                        <div onClick={() => openDropdown('pricing')} >
                            <div className="flex items-center justify-between border-b-2 cursor-pointer transform duration-300 hover:border-primary">
                                <h1 className="text-2xl font-semibold">Pricing and Plans</h1>
                                <img src="/assets/icon/chevron.png" alt="chevron" className={`transform transition-transform duration-300 ${dropdown === 'pricing' ? 'rotate-90' : ''}`}/>
                            </div>
                            {dropdown === 'pricing' && (
                                <div className="flex flex-col text-xl gap-2 pt-4">
                                    <Link className="hover:text-secondary" href="#">What are the different subscription plans?</Link>
                                    <Link  className="hover:text-secondary" href="#">Is there a free trial available?</Link>
                                    <Link  className="hover:text-secondary" href="#">How can I change my subscription plan?</Link>
                                </div>
                            )}
                        </div>

                        <div onClick={() => openDropdown('account')}>
                            <div className="flex items-center justify-between border-b-2 cursor-pointer transform duration-300 hover:border-primary">
                                <h1 className="text-2xl font-semibold">Account Management</h1>
                                <img src="/assets/icon/chevron.png" alt="chevron" className={`transform transition-transform duration-300 ${dropdown === 'account' ? 'rotate-90' : ''}`}/>
                            </div>
                            {dropdown === 'account' && (
                                <div className="flex flex-col text-xl gap-2 pt-4">
                                    <Link className="hover:text-secondary" href="#">How do I create an account?</Link>
                                    <Link  className="hover:text-secondary" href="#">How do I reset my password?</Link>
                                    <Link  className="hover:text-secondary" href="#">Can I delete my account?</Link>
                                </div>
                            )}
                        </div>

                        <div onClick={() => openDropdown('payment')}>
                            <div className="flex items-center justify-between border-b-2 cursor-pointer transform duration-300 hover:border-primary">
                                <h1 className="text-2xl font-semibold">Payment and Billing</h1>
                                <img src="/assets/icon/chevron.png" alt="chevron" className={`transform transition-transform duration-300 ${dropdown === 'payment' ? 'rotate-90' : ''}`}/>
                            </div>
                            {dropdown === 'payment' && (
                                <div className="flex flex-col text-xl gap-2 pt-4">
                                    <Link className="hover:text-secondary" href="#">What payment methods are accepted?</Link>
                                    <Link className="hover:text-secondary" href="#">How do I update my payment information?</Link>
                                    <Link className="hover:text-secondary" href="#">When will I be charged?</Link>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}