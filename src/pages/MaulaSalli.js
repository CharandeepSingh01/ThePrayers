import React from "react";
import "./Page.css";


const MaulaSalli = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Maula Ya Salli</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://naatslyrics.com/wp-content/uploads/2021/07/Maula-Ya-Salli-Wa-Sallim-Lyrics.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://www.islamicdb.com/downloads/Maula Ya Salli Ft. Sami Yusuf Qasida Burda Shareef [NASHEED].mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Maula ya salli wa sallim dayimun abadan
Alaa habeebika khairil khalqi kulli himi
Maula ya salli wa sallim dayimun abadan
Alaa habeebika khairil khalqi kulli himi

Sahar ka waqt tha masoom kalya(n) muskurati thee(n)
Hawaaei(n) khair maqdam ke taraanay gungunati thee(n)
Abhi Jibreel utre bhi na thay Kaabay kay mimber se
Ke itnay main sadaa aai ye Abdullah ke ghar sey
Mubarak ho shah e hardo sara tashreef le aaye
Mubarak ho Muhammad Mustafa tashreef le aaye

Maula ya salli wa sallim dayimun abadan
Alaa habeebika khairil khalqi kulli himi
Muhammadun sayyidul konaini wassaqalaini
Wal fareeqaini min Arbiyun wamin ajami

Wo Muhammad fakhr e aalam haadi e kul ins o jaa(n)
Sarwar e konain sultaan e Arab shaah e ajam
Aik din Jibreel sey kehne lage shaah e umam
Tum ne dekha hai jahaa(n) batlaao to kaise hain hum
Arz ki Jibreel nay ae shaah e dee(n) ae mohtaram
Aap ka koi mumasil hi nahi rab ki qasam

Maula ya salli wa sallim dayimun abadan
Alaa habeebika khairil khalqi kulli himi
Maula ya salli wa sallim dayimun abadan
Alaa habeebika khairil khalqi kulli himi

Ho al-habeebul azeetur ja shafa’atuhu
Li kulli hawlim minal ahwaali muqtahimi
Maula ya salli wasallim dayimun abadan
Alaa habeebika khairil khalqi kulli himi

Mere maula sada tahaiyyat o durood ke gajray
Apnay mehboob par jo hai teri makhlooq behtareen
Usi mehboob se wabasta umeed e shafa’at hai
Ke har himmat shikan mushkil main jisne dastageeri ki
Na koi aap jaisa tha, Na koi ap jaisa hai
Koi Yusuf se puche Mustafa ka husn kaisa hai
Zameen o aasma(n) main koi bhi misaal na mili

Maula ya salli wa sallim dayimun abadan
Alaa habeebika khairil khalqi kulli himi
Maula ya salli wa sallim dayimun abadan
Alaa habeebika khairil khalqi kulli himi

Ya Rabbi bil Mustafa balligh maqasiduna
Waghfirlana mama daya wasial karami
Maula ya salli wa sallim dayimun Abadan
Alaa habeebika khairil khalqi kulli himi</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default MaulaSalli;