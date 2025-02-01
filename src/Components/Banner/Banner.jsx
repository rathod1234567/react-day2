
import "./Banner.css"
const Banner = () =>{
    return (
        <>
        <h1 className="text">Trending Books</h1>
        <p className="p1">The only thing you absolutely have to know is the location of the library.</p>
        <p className="p1">Books are more than just collections of words; they are windows to worlds, both real and imagined. They hold the power to transport readers across time and space, introducing them to new ideas, cultures, and perspectives. A good book can inspire, educate, and entertain, offering solace during difficult times and joy during moments of triumph. Through the pages of books, we connect with the thoughts and emotions of others, fostering empathy and understanding. In essence, books are timeless companions that enrich our lives and expand our horizons.</p>
            <section className="Parent" >
                <marquee className="Marquee">
                <div className="parent">
                    <div className="img1" >
                        <img src="https://admitx.in/wp-content/uploads/2024/10/YoU-are-born-to-Blossom.webp" alt="blossom" width={200} />
                    </div>
                    <div className="img1">
                        <img src="https://fourminutebooks.com/wp-content/uploads/2016/06/best-motivational-books-29-678x1024.jpg" alt="ZeroToOne" width={200}/>
                    </div>
                    <div className="img1">
                        <img src="https://blog.cdn.level.game/2023/06/71ZA-vKnFRL._AC_UF1000-1000_QL80_.jpg" alt="think and grow india" width={200}  />
                    </div>
                    <div className="img1">
                        <img src="https://taylorpearson.me/wp-content/uploads/2018/09/81Z5fX7qieL.jpg" alt="nelson mandella"width={200} />
                    </div>
                    <div className="img1">
                        <img src="https://5.imimg.com/data5/SELLER/Default/2022/3/VE/GA/YE/29351946/81bsw6fnuil.jpg" alt="Rich dad and poor dad" width={200} />
                    </div>
                </div>
                </marquee>
            </section>
            <br /><br />
        </>
    )
}

export default Banner