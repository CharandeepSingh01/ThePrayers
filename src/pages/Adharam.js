import React from "react";
import "./Page.css";


const Adharam = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Adharam Madhuram</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://c.saavncdn.com/964/Madhurashtakam-Hindi-2021-20210107131351-500x500.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://oyedjsurendra.com/files/download/id/4465&volume=75&showstop=1&showvolume=1" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">adharan mdhuran vadanan mdhuran,
nayanan mdhuran hasitan mdhuram,
haradayan mdhuran gamanan mdhuran,
mdhuraadhipaterkhilan mdhuram

vchanan mdhuran charitan mdhuran,
vasanan mdhuran valitan mdhuram,
chalitan mdhuran bhramitan mdhuran,
mdhuraadhipaterkhilan mdhuram

venurmdhuro renurmdhurah,
paanirmdhurah paadau mdhurau,
naratyan mdhuran sakhyan mdhuran,
mdhuraadhipaterkhilan mdhuram

geetan mdhuran peetan mdhuran,
bhuktan mdhuran suptan mdhuram,
roopan mdhuran tilakan mdhuran,
mdhuraadhipaterkhilan mdhuram

karanan mdhuran taranan mdhuran,
karanan mdhuran smaranan mdhuran,
vamitan mdhuran shamitan mdhuran,
mdhuraadhipaterkhilan mdhuram

gunja mdhura maala mdhura,
yamuna mdhura veechi mdhura,
mdhuraadhipaterkhilan mdhuram

gopi mdhura leela mdhura,
yuktan mdhuran muktan mdhuram,
darashtan mdhuran shishtan mdhuran,
mdhuraadhipaterkhilan mdhuram

gopa mdhura gaavo mdhura,
yashtirmdhura sarashtirmdhura,
dalitan mdhuran phalitan mdhuran,
mdhuraadhipaterkhilan mdhuram...

adharan mdhuran vadanan mdhuran,
nayanan mdhuran hasitan mdhuram,
haradayan mdhuran gamanan mdhuran,
mdhuraadhipaterkhilan mdhuram</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default Adharam;