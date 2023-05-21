import React from "react";
import "./Page.css";


const GaneshAarti = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Ganesh Aarti</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://i.ytimg.com/vi/Yuex2EnsGiY/maxresdefault.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://pagalsong.in/uploads/systemuploads/mp3/Aarti Vol-3/Jai Ganesh Deva - Aarti Vol-3 128 Kbps.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">॥ Shree Ganeshji Ki Aarti ॥
Jai Ganesh, Jai Ganesh,Jai Ganesh Deva।

Mata Jaki Parvati,Pita Mahadeva॥ x2

Ekadanta Dayavanta,Char Bhujadhaari।

Mathe Par Tilak Sohe,Muse Ki Savari॥ x2

(Mathe Par Sindoor Sohe,Muse Ki Savari॥ x2)

Paan Charhe, Phool Charhe,Aur Charhe Meva।

(Haar Charhe, Phool Charhe,Aur Charhe Meva।)

Ladduan Ka Bhog Lage,Sant Karein Seva॥ x2

Jai Ganesh, Jai Ganesh,Jai Ganesh Deva।

Mata Jaki Parvati,Pita Mahadeva॥ x2

Andhe Ko Aankh Deta,Korhina Ko Kaya।

Banjhana Ko Putra Deta,Nirdhana Ko Maya॥ x2

'Soora' Shyama Sharana Aaye,Saphal Kije Seva।

Mata Jaki Parvati,Pita Mahadeva॥ x2

(Deenana Ki Laaj Rakho,Shambhu Sutavari।

Kaamana Ko Poorna KaroJaga Balihari॥ x2)

Jai Ganesh, Jai Ganesh,Jai Ganesh Deva।

Mata Jaki Parvati,Pita Mahadeva॥ x2</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default GaneshAarti;