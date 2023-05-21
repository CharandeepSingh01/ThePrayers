import React from "react";
import "./Page.css";


const YouAre = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">All in All</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://jesusful.com/wp-content/uploads/2021/09/You-are-My-All-in-All-Mp3-Lyrics-Video.jpg")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://praisezion.com/wp-content/uploads/2022/01/Dennis-Jernigan-You-Are-My-All-In-All-PraiseZion.com_.mp3?_=2" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">[Verse 1]
You are my strength when I am weak
You are the treasure that I seek
You are my all in all

[Verse 2]
Seeking You as a precious jewel
Lord to give up I'd be a fool
You are my all in all

[Chorus]
Jesus Lamb of God
Worthy is your name
Jesus Lamb of God
Worthy is your name

[Verse 3]
Taking my sin my cross my shame
Rising again I bless your name
You are my all in all

[Verse 4]
When I fall down you pick me up
When I am dry You fill my cup
You are my all in all
You might also like
All My Life
Lil Durk
KANTE
Davido
Oganigwe
Zlatan
[Chorus]
Jesus Lamb of God
Worthy is your name
Jesus Lamb of God
Worthy is your name

Jesus Lamb of God
Worthy is your name
Jesus Lamb of God
Worthy is your name</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default YouAre;