import Item from '../item/item'
import Ticket from '../ticket/ticket'
import './content.css'


function content() {
    return (
      
       <div className='main-container'>
       
       <div className='item-list'>
       <Item/>
       </div>
         <p></p>
        <div className='ticket'>
         
        <Ticket/>
        </div>

       </div> 
    );
  }
  
  export default content;
  