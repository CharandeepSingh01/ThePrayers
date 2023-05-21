import React from "react";
import "./Page.css";


const AisiKripa = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Aisi Kripa</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://img.wynk.in/unsafe/320x180/top/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1645982932/srch_pplchandigarh_INH512004343.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://cdnsongs.com/music/data/Shabad_Gurbani/201407/Aesi_Kirpa_Karo_Guru_Hargobind_Singh_Jayanti-1/128/Aisi_Kirpa_Mohe_Karo.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Aisi Kirpa Mohe karo, Aisi Kirpa Mohe karo
Aisi Kirpa Mohe Karo, Aisi Kirpa Mohe Karo
Santai charan hamaro maatha
Santai Charan hamaro maatha
Nain daras tan dhoor paro,
Nain daras tan dhoor paro,


Aisi Kirpa Mohe karo, Aisi Kirpa Mohe karo
Gur ko shabad mere hiyare baase
gur ko shabad mere hiyare baase
Har naama man sang dharo


Aisi kirpa mohe karo, Aisi Kirpa mohe karo
taskar panch nivaaro thakur
taskar panch nivaaro thakur
saglo bharma homai jaro

Aisi Kirpa Mohe Karo
Aisi Kirpa Mohe Karo
Santai charan hamaro maatha
Nain daras tan dhoor paro
Jo tum karo soi bhal maane
bhaavan dubidha door taroh
Naanak ke prabh tum hi daate
sant sang le mohe udhroh
</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default AisiKripa;