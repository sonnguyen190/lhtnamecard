import './App.css';
import anhthuong from './image/anhthuong.jpg';
function App() {
  return (
    <div className="App" >
      <div className='fss'>   <h1> My Profile</h1>
   <img className="image" src={anhthuong} alt="" />
   <h2>Lưu Hoài Thương</h2>
   <h4>Đang Ép Ây</h4>
   <img className='gif' src="https://img2.thuthuatphanmem.vn/uploads/2018/12/31/hinh-anh-dong-ngo-nghinh-de-thuong_112054335.gif" alt="" />

   <div> <h4>Ai Đang Cô Đơn Tui Hốt Luôn Nà !! <br/>
   </h4>
    
   </div>
</div>

   <div>
    <ul className="ulli"> 

      <li>
     <button className='button'><a className='linkfb' href="https://www.facebook.com/thuong.luu.75054689/"> <i class="bi bi-facebook"></i>  Facebook</a></button>
      
      </li>

      <li>
      <button className='button'><a className='linkfb' href="tel:0964427005"><i class="bi bi-telephone-fill"></i>  Phone</a></button>
      
      </li>

      <li>
      <button className='button'><a className='linkfb' href="mailto:luuhoaithuongst@gmail.com"><i class="bi bi-envelope-fill"></i>  Gmail</a></button>
      
      </li>

    </ul>
   </div>
   © 2021 Namecard | Created by <a className='linkfb1' href="https://www.facebook.com/sonvjpro.nguyen">Sơn Nguyễn</a> 
    </div>
    
  );
}

export default App;
