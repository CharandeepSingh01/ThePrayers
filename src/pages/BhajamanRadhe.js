import React from "react";
import "./Page.css";


const BhajamanRadhe = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Bhajaman Radhe</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://dns2.pendusaab.com/thumb/2439314.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://dns4.pendusaab.com/download/128k-azhsz/Bhajman-Radhe-Govinda.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Bhaja mana radhe govinda (x2)
Bhaja mana radhe radhe radhe radhe radhe govinda(x2)

Bhajaman Govardhan Giridhari (x2)
Bhajaman Vrindavan Sanchari (x2)
Bhaja mana radhe radhe radhe radhe radhe govinda
Bhaja mana radhe radhe radhe radhe radhe radhe radhe radhe radhe govinda

Bhaja mana Yamuna teer vihari
Bhaja mana Radha che tohari
Bhaja mana radhe radhe radhe radhe radhe govinda
Bhaja mana radhe radhe radhe radhe radhe radhe radhe radhe radhe govinda

Bhaja mana bala mukunda
bhaja mana vrindavana ka chanda
Bhaja mana radhe radhe radhe radhe radhe govinda
Bhaja mana radhe radhe radhe radhe radhe radhe radhe radhe radhe govinda

Bhaja mana vrindavana sanchari
Bhaja mana govardhana giridhari
Bhaja mana radhe radhe radhe radhe radhe govinda
Bhaja mana radhe radhe radhe radhe radhe radhe radhe radhe radhe govinda

Bhajaman Radhe Govinda
Bhajaman Govardhan Giridhari (x2)
Bhajaman Vrindavan Sanchari (x2)
Bhaja mana Yamuna teer vihari
Bhaja mana Radha che tohari
Bhaja mana bala mukunda
bhaja mana vrindavana ka chanda
Bhaja mana vrindavana sanchari
Bhaja mana govardhana giridhari
Bhaja mana radhe radhe radhe radhe radhe govinda
Bhaja mana radhe radhe radhe radhe radhe radhe radhe radhe radhe govinda</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default BhajamanRadhe;