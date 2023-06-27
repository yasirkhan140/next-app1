import Footer from '../Footer'
import Sidebar from '../Sidebar'
import Main from "./Main";
import Navbar from '../Navbar'
export default function Home() {
  return (
    <>
      <Navbar/>
      <div id="layoutSidenav">
        <Sidebar/>
        <div id="layoutSidenav_content">
          <Main/>
          <Footer/>
        </div>
      </div>
    </>
   
  )
}
