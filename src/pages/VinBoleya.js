import React from "react";
import "./Page.css";


const VinBoleya = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Vin Boleya</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://a10.gaanacdn.com/images/albums/17/1924517/crop_480x480_1924517.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://cdnsongs.com/music/data/Shabad_Gurbani/201403/Vin_Boleya_Sabh_Kish_Jaanda/128/Vin_Boleya_Sabh_Kish_Jaanda_1.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Vin Boleyan Sabh Kichh Jaannda ..x2
Kis Aagai Keechai Ardaas ..x2
Vin Boleya Sabh Kish Janda ..x2

Babiha Sagli dharti je phirah
Ood chadheh aakaas ..x2
Ud Chadhe Aakaas
Vin Boleyan Sabh Kichh Jaannda ..x2
Kis Aagai Keechai Ardaas ..x2
Vin Boleya Sabh Kish Janda ..x2

Satgur miliye jal payiye
chookah bhookh pyaas ..x2
chookeh bhukh pyas
Vin Boleyan Sabh Kichh Jaannda ..x2
Kis Aage Keechai Ardaas ..x2
Vin Boleya Sabh Kish Janda ..x2

Jeeo Pind sabh tis ka
sabh kichh tis kai paas ..x2
sabh kish tis ke pass
Vin Boleyan Sabh Kichh Jaannda ..x2
Kis Aage Keechai Ardaas ..x2
Bin Boleya Sabh Kish Janda
(Bin Boleya Sab Kuch Janda)

Nanak ghat ghat eko vartda
shabad kare pargaas ..x2
shabad kre pargas
Bin Boleyan Sabh Kichh Jaannda ..x2
Kis Aage Keechai Ardaas ..x2
Vin Boleya Sabh Kish Janda ..x2

Waheguru waheguru.. (Repeat)

Vin Boleya Sabh Kish Janda ..(Bin Boleya Sab Kuch Janda)

Waheguru waheguru..x2</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default VinBoleya;