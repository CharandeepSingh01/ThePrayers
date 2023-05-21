import React from "react";
import "./Page.css";


const GayatriMantra = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Gayatri Mantra</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://aumamen.com/s/i/g/a/gayatri.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://www.spiritualbee.com/media/gayatri-mantra-raga-1.mp3?_=1" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Oṃ bhūr bhuvaḥ svaḥ

tát savitúr váreṇyaṃ

bhárgo devásya dhīmahi

dhíyo yó naḥ pracodáyāt</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default GayatriMantra;