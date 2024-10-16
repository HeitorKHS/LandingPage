export default function Description(){
    return(
        <div className=" bg-black" id="description">
            <div className="container pt-20 pb-14">
                <div className="grid lg:grid-cols-2 gap-5">
                    <div className="text-white space-y-10">
                        <div className="text-center lg:text-left">
                            <p className="text-primary text-xl">Description</p>
                            <h1 className="text-6xl font-semibold">Pick Me</h1>
                        </div>        
                        <div className="flex items-center gap-5">
                            <div className="w-5 h-5">
                                <div className="w-4 h-4 bg-secondary rounded-full" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold text-white">1 Million+ songs</h1>
                                <p className="text-[#C3C3C3] font-semibold">Discover a vast catalog of over 1 million licensed songs from all genres and eras.<span className="hidden xl:inline"> Our platform offers a diverse selection that suits all musical tastes.</span></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="w-5 h-5">
                                <div className="w-4 h-4 bg-secondary rounded-full" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold text-white">Personalized playlist</h1>
                                <p className="text-[#C3C3C3] font-semibold">Transform your music experience with personalized playlists that fit your style.<span className="hidden xl:inline"> Create and customize your playlist however you want and have the perfect soundtrack for every moment. Whether to relax, work or party.</span></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="w-5 h-5">
                                <div className="w-4 h-4 bg-secondary rounded-full" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold text-white">Lyrics and translations</h1>
                                <p className="text-[#C3C3C3] font-semibold">Sing along to your favorite songs! Our platform offers full lyrics and translations, allowing you to not only listen, but also understand and deeply connect with each song.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end items-center">
                        <img className="h-[300px] lg:h-[500px]" src="/assets/img/img1.png" alt="img1.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}