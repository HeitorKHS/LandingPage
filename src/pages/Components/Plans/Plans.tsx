export default function Plans(){

    const plansData = [
        {
            id:1,
            name: "Premium",
            price: 8.99,
            advantages: ["Ad-free music listening",
                "Download to listen offline",
                "High audio quality",
                "Watch music videos",
                "Organize listening queue",
                "Exclusive events"],
            color: "#FFA1EA"
        },
        {
            id:2,
            name: "Friend",
            price: 13.99,
            advantages: ["2 Premium account",
                "Listen with friends in real time"],
            color: "#FFF1A1"
        },
        {
            id:3,
            name: "Family",
            price: 18.99,
            advantages: ["4 Premium account",
                "1 Kid account",
                "Parental control",
                "Listen with friends in real time"],
            color: "#A1FFBD"
        }
    ]

    return(

        <div className="bg-black" id="plans">
            <div className="container pt-20 pb-14">
                <div className="text-white space-y-10">
                    <div className="text-center">
                        <p className="text-primary text-xl">Plans and offers</p>
                        <h1 className="text-6xl font-semibold">Plans</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
                        {
                            plansData.map((plan)=>(
                                <div key={plan.id} className="flex flex-col bg-[#262626] py-5 px-10 gap-5 rounded-xl">
                                    <div className="text-center space-y-3 pb-3 border-b border-[#9B9B9B]">
                                        <h1 className="text-3xl font-bold" style={{color: plan.color}}>{plan.name}</h1>
                                        <p className="font-semibold">${plan.price} / Month</p>
                                    </div>
                                    <div className="flex-grow">
                                        {
                                            plan.advantages.map((advantage,index)=>(
                                                <li className="font-semibold" key={index}>{advantage}</li>
                                            ))
                                        }
                                    </div>
                                    <div className="text-center space-y-2 xl:pt-10">
                                        <p className="text-[#9B9B9B]">Cancel whenever you want</p>
                                        <button className="w-full text-black text-xl font-semibold rounded-xl p-1" style={{background: plan.color}}>Get Now</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}