import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonial(){

    const testimonialsData=[
        {
            id: 1,
            name: "user1 lastname1",
            age: 19,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, rerum!",
            favorite: "Aimyon"
        },
        {
            id: 2,
            name: "user2 lastname2",
            age: 20,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos quasi, ut voluptatibus quam illo!",
            favorite: "Majiko"
        },
        {
            id: 3,
            name: "user3 lastname3",
            age: 21,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            favorite: "Link Park"
        },
        {
            id: 4,
            name: "user4 lastname4",
            age: 22,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam itaque provident nisi error sed ad minima illum molestiae dolore laboriosam!",
            favorite: "ITZY"
        },
        {
            id: 5,
            name: "user5 lastname5",
            age: 23,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, rerum!",
            favorite: "DAY6"
        },
        {
            id: 6,
            name: "user6 lastname6",
            age: 24,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, rerum!",
            favorite: "Lilas Ikuta"
        },
        {
            id: 7,
            name: "user7 lastname7",
            age: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, rerum!",
            favorite: "Imagne Dragons"
        }
    ]

    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        responsive:[
            {
               breakpoint: 1024,
               settings: {
                   arrows:false
               }
             }]
    }

    return(
        <div className="bg-[#262626]">
            <div className="container pt-20 pb-14">
                <div className="text-white space-y-20">
                    <div className="text-center">
                        <p className="text-xl text-primary">Testimonials</p>
                        <h1 className="text-6xl font-semibold">What our clients say about us</h1>
                    </div>
                    <div>
                        <Slider {...settings}>
                            {
                                testimonialsData.map((testimonial)=>(
                                    <div key={testimonial.id}>
                                        <div className="flex flex-col justify-between gap-10 p-5 rounded-xl">
                                            <div>
                                                <img className="h-[30px]" src="/assets/icon/vector.png" alt="vector.png" />
                                            </div>
                                            <div className="text-center">   
                                                <p className="text-white text-xl md:text-2xl">{testimonial.text}</p>
                                            </div>
                                            <div className="text-center">
                                                <h1 className="text-[#FFA1EA] text-xl font-semibold">{testimonial.name} - {testimonial.age}</h1>
                                                <p className="text-white font-semibold">Favorite artist: {testimonial.favorite}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}