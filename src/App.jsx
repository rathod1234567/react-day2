
// import './App.css'

// function App(){

//   var name=["Rathod","Ravinder"]

//   var jobs=["softwer","developer"]

//   return(
//        <div>
//          <h2>Hey:{name}</h2>
//          <h2>job:{jobs}</h2>
//          <p className='color'> are u from sangareddy!</p>
//          <img src="https://rukminim2.flixcart.com/image/850/1000/kxuqdu80/wall-decoration/z/o/0/mahesh-babu-handsome-indian-actor-prince-wallpaper-poster-1-vp-original-imaga7xu2bbnzavg.jpeg?q=90&crop=false" alt="mb" width={200}  />
//        </div>
//        )
  
// }

// export default App

import Banner from "./Components/Banner/Banner"
import Cards from "./Components/Cards/Cards"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
function App(){

    return(
        <>
       <Header/>
       <Banner />
       <Cards />
       <Footer />

        </>

    )
}

export default App