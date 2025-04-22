import ReactPlayer from "react-player"

import Header from "./components/Header"
import MyFirstComponent from "./components/MyFirstComponent"
import Footer from "./components/Footer"
import User from "./components/User"
import MovieList from "./components/MovieList"
import './App.css'

function App() {
  return (
    <>

      <Header title="Let's go React!" />

      <User userName="alice" age={30} />
      <User userName="bob" age={40} />
      <User userName="charlie" age={50} />


      <MovieList />

      
      {/* <MyFirstComponent /> */}

      {/* <ReactPlayer 
        url="https://www.youtube.com/watch?v=EvtMTV9mMSc" 
        playing={true} 
        volume={0.1}
      /> */}
      

      <Footer>
        <p>Loop Troop, 2025</p>
      </Footer>


    </>
  )
}

export default App
