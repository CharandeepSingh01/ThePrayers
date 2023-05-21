import React from "react";
import "./Page.css";


const EkOnkar = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Ek Onkar</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://i.ytimg.com/vi/t0a_l0dpkQA/maxresdefault.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://pagalsong.in/uploads/systemuploads/mp3/Rang De Basanti/Ik Onkar - Rang De Basanti 128 Kbps.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Ik onkar, satnam, karta purakh, nirbhau,
Nir vair, aakaal murat, ajooni se bhang,
Gur parsaad. Jap.
Aad sach jugaad sach,
Hai bhi sach naanak hosi bhi sach.
Sochey soch na hove je sochey laakh vaar,
Chupe chup na hove je lai raha liv taar,
Bhukyaa bhuk na utri je banna puriya bhaar,
Sehas sayaanpa lakh hoey ta ek na chale naal
Kiv sacheyara hoiye kiv kude tuttey paal
Hukam rajai chalna naanak likhya naal.
</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default EkOnkar;