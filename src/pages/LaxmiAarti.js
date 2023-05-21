import React from "react";
import "./Page.css";


const LaxmiAarti = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Lakshmi Aarti</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://www.thedivineindia.com/img/lakshmi-aarti.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://pagalsong.in/uploads/systemuploads/mp3/Aarti Vol-3/Om Jai Lakshmi Mata (Aarti) - Aarti Vol-3 128 Kbps.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Om Jai Lakshmi Mata
                    Maiya Jai Lakshmi Mata।
                    Tumako Nishidin Sevat
                    Hari Vishnu Vidhata॥
                    ॥ Om Jai Lakshmi Mata ॥
                    
                    Uma Rama Brahmani
                    Tum Hi Jag-Mata।
                    Surya-Chandrama Dhyavat
                    Naarad Rishi Gata॥
                    ॥ Om Jai Lakshmi Mata ॥
                    
                    Durga Roop Niranjani
                    Sukh Sampatti Data।
                    Jo Koi Tumako Dhyavat
                    Riddhi-Siddhi Dhan Pata॥
                    ॥ Om Jai Lakshmi Mata ॥
                    
                    Tum Patal-Nivasini
                    Tum Hi Shubhdata।
                    Karma-Prabhav-Prakashini
                    Bhavanidhi Ki Trata॥
                    ॥ Om Jai Lakshmi Mata ॥
                    
                    Jis Ghar Mein Tum Rahti
                    Sab Sadgun Aata।
                    Sab Sambhav Ho Jata
                    Man Nahi Ghabrata॥
                    ॥ Om Jai Lakshmi Mata ॥
                    
                    Tum Bin Yagya Na Hote
                    Vastra Na Koi Pata।
                    Khan-Pan Ka Vaibhav
                    Sab Tumase Aata॥
                    ॥ Om Jai Lakshmi Mata ॥
                    
                    Shubh-Gun Mandir Sundar
                    Kshirodadhi-Jata।
                    Ratna Chaturdash Tum Bin
                    Koi Nahi Pata॥
                    ॥ Om Jai Lakshmi Mata ॥
                    
                    Mahalakshmi Ji Ki Aarti
                    Jo Koi Jan Gata।
                    Ur Anand Samata
                    Paap Utar Jata॥
                    ॥ Om Jai Lakshmi Mata ॥
                    
                    Om Jai Lakshmi Mata
                    Maiya Jai Lakshmi Mata।
                    Tumako Nishidin Sevat
                    Hari Vishnu Vidhata॥
                    ॥ Om Jai Lakshmi Mata ॥</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default LaxmiAarti;