import './App.css'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Items from './Items/Items'
import Navbar from './Navbar/Navbar'
 import { ToastContainer, toast } from 'react-toastify';


function App() {
  
 const notify = () => toast("Item added to your favorite Lists");
  return (
    <>  
    
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="main-container flex text-center mt-4">

          <div className="left-container w-[60%]">

            <Items notify={notify}></Items>
          </div>

          <div className="right-container  w-[40%]">
              <h1 className='m-5'>Favorite Items</h1>
              <h3 className='m-5'>No favorite yet</h3>
              <h6 className='m-5'>Click the heart icon on any item to add it to your favorites</h6>
              <div className='flex text-center justify-around m-5'>
                <h3>Total bids Amount</h3>
                <h3>$0000</h3>
              </div>
          </div>

      </div>

      <Footer></Footer>

   
      
    </>
  )
}

export default App
