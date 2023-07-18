import Footer from "./Footer"
import Header from "./Header"

function Main_Layout(props){

  return(
    <>
      <Header/>
        <main>
          {props.children}
        </main>
      <Footer/>
    </>
  )
}

export default Main_Layout

