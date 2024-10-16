export default function Download(){
    return(
        <div className="bg-black"  id="download">
            <div className="container pt-20 pb-14">
                <div className="flex items-center justify-between">
                    <div className="space-y-10">
                        <div className="text-center lg:text-left">
                            <p className="text-xl text-primary">Download</p>
                            <h1 className="text-6xl font-semibold text-white">Download the app now</h1>
                        </div>
                        <div className="lg:w-[600px] text-center lg:text-left">
                            <p className="text-xl text-[#c3c3c3] font-semibold">Download now and start enjoying the music that suits your style, whenever and wherever you want, through the app. Available for several platforms.</p>
                        </div>
                        <div className="flex gap-5 justify-center lg:justify-start">
                            <button className="bg-secondary py-2 px-2 lg:px-12 rounded-xl"><img src="/assets/icon/ios.png" alt="ios" /></button>
                            <button className="bg-secondary py-2 px-2 lg:px-12 rounded-xl"><img src="/assets/icon/android.png" alt="android" /></button>
                            <button className="bg-secondary py-2 px-2 lg:px-12 rounded-xl"><img src="/assets/icon/microsoft.png" alt="microsoft" /></button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img src="/assets/img/img2.png" alt="img2" />
                    </div>
                </div>
            </div>
        </div>
    )
}