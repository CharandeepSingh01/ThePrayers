import React from "react";
import "./Page.css";


const HareMurari = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Hare Murari</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://c.saavncdn.com/555/Shri-Krishna-Govind-Hare-Murari-Zee-Music-Devotional--Hindi-2019-20190117113152-500x500.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://dns4.pendusaab.com/download/128k-dgdvi/Shri-Krishna-Govind-Hare-Murari.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Shri Krishna Govind Hare Murari
He Nath Narayan Vasudeva॥ He Nath Narayan…॥
Ek Maat Swami Sakha Hamare
He Nath Narayan Vasudeva॥ He Nath Narayan…॥
॥ Shri Krishna Govind Hare Murari…॥

Bandi Grah Ke Tum Avatari
Kahi Janme Kahi Pale Murari
Kisi Ke Jaye Kisi Ke Kahaye
Hai Adbhud Har Baat Tihari॥ Hai Adbhud…॥
Gokul Mein Chamake Mathura Ke Tare
He Nath Narayan Vasudeva॥
॥ Shri Krishna Govind Hare Murari…॥

Adhar Pe Bansi Hriday Mein Radhe
Bat Gaye Donon Mein Aadhe Aadhe
He Radha Naagar He Bhakt Vatsalya
Sadaiv Bhakton Ke Kaam Sadhe॥ Sadaiv Bhakton…॥
Vahi Gaye Vahi Gaye Vahi Gaye
Jaha Gaye Pukare
He Nath Narayan Vasudeva॥
॥ Shri Krishna Govind Hare Murari…॥

Geeta Mein Upadesh Sunaya
Dharm Yuddh Ko Dharm Bataya
Karm Tu Kar Mat Rakh Phal Ki Ichchha
Yah Sandesh Tumhi Se Paya
Amar Hai Geeta Ke Bol Sare
He Nath Narayan Vasudeva॥
॥ Shri Krishna Govind Hare Murari…॥

Tvamev Mata Cha Pita Tvamev
Tvamev Bandhu Sakha Tvamev
Tvamev Vidya Dravinan Tvamev
Tvamev Sarvan Mam Dev Deva

radhe Krishna radhe krishna
radhe radhe krishna krishna
radhe Krishna radhe Krishna
radhe radhe krishna krishna

hari bol, hari bol,
hari bol, hari bol

radhe Krishna radhe krishna
radhe radhe krishna krishna
radhe Krishna radhe krishna
radhe radhe krishna krishna</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default HareMurari;