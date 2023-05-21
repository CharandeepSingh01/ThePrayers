import React from "react";
import "./Page.css";


const HasbiRabbi = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Hasbi Rabbi</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://c.saavncdn.com/020/Hasbi-Rabbi-Jallallah-Hindi-2020-20200311145317-500x500.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://www.islamicdb.com/downloads/HASBI RABBI JALLALLAH PART 4 RAMZAN NAAT Danish F Dar Dawar Farooq Best Naat LA ILA HA IL.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Khoob hai naam e Muhammad Jisme nuqta gaqara nahi
Khud rab ne hai Farmaya Jo tumhara nahi wo hamara nahi

Khoob hai naam e Muhammad Jisme nuqta gaqara nahi
Khud rab ne hai Farmaya Jo tumhara nahi wo hamara nahi

Meri Mushkil ko Asaan Kardiya hardum tune
Jab bhi mere dil se kaha La ilaha illallah

Hasbi Rabbi Jallallah Mafi qalbi gairullah
Noore Muhammad sallallah La ilaha illallah

Aap se hi mila ujala puri Qaynat ko
Aap ke noor se hai mila chand bhi raat ko
Aap se hi hai mili boonde bhi barsat ko
Ab hai meri iltaja mehshar mein aap ka sath ho

Aap ke daman ki mahek aap ki chehre ki jhalak
Jo bhi payega kahega La ilaha illallah

Ye samunder ye jazire sab hai aap ke hi liye
Ye fizayein ye nazare aap ki barkat se mile x2

Aap ke liye hai bani yeh zameen aur aasman
Jisne bhi ye jana to kaha La ilaha ilallah

Mehshar me jab sabko apne nafs ki padi hogi
Har shey us dam ye kahegi ya rabbe nafsi

Us ghadi ek rehmat se bhari Aawaz buland hogi
Jo Allah se ye kahegi ya Rabbe ummati
Ya Rabbe ummati

Aap ka ar ek ummati jannat me dakhil hoga
Jisne bhi dil se hoga padha La ilaha ilallah

Hasbi Rabbi Jallallah Mafi qalbi gairullah
Noore Muhammad sallallah La ilaha illallah...</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default HasbiRabbi;