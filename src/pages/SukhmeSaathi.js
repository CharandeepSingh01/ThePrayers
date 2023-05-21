import React from "react";
import "./Page.css";


const SukhmeSaathi = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Sukh ke Saathi</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://c.saavncdn.com/122/Sukh-Ke-Sab-Saathi-Dukh-Me-Na-Koi-Hindi-2022-20220513125505-500x500.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://pagalsong.in/uploads/systemuploads/mp3/Gopi/Sukh Ke Sab Saathi - Version 2 - Gopi.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Sukh ke sab sathi dukh mein na koi

Sukh ke sab saathi dukh mein na koi

Mere ram, mere ram

Tera naam ek saacha dooja na koi

Sukh ke sab saathi dukh mein na koi

Stanza – 1
Jeevan aani jaani chhaaya

Jeevan aani jaani chhaaya

Jhoothi maya jhoothi kaya

Phir kahe ko saari umariya

Phir kahe ko saari umariya

Paapki gathri dhoi

Sukh ke sab saathi dukh mein na koi

Mere ram, mere ram

Tera naam ek saacha dooja na koi

Sukh ke sab saathi dukh mein na koi

Stanza – 2
Na kuchh tera na kuchh mera

Na kuchh tera na kuchh mera

Ye jag jogi vaala phera

Raja ho ya runk sabhi ka

Raja ho ya runk sabhi ka

Ant eksa hoi

Sukh ke sab saathi dukh mein na koi

Mere ram, mere ram

Tera naam ek saacha dooja na koi

Stanza – 3
Baahar ki tu maati phaanke

Baahar ki tu maati phaanke

Man ke bheetar kyun na jhaanke

Ujle tan par maan kiya

Ujle tan par maan kiya

Aur man ki mail na dhoi

Sukh ke sab saathi dukh mein na koi

Mere ram, mere ram

Tera naam ek saacha dooja na koi

Sukh ke sab saathi dukh mein na koi.</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default SukhmeSaathi;