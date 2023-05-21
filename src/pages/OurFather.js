import React from "react";
import "./Page.css";


const OurFather = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Our Father</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv62h-fMwvHHaovF17SYWvwonYE84HEULj2A&usqp=CAU")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://www.allbaze.com/wp-content/uploads/2022/01/Our-Father-Live.mp3?_=1" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Our Father who art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done, On earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, As we forgive those who trespass against us. And lead us not into temptation, But deliver us from evil. [For thine is the kingdom, and the power, and the glory, for ever and ever.] Amen.

</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default OurFather;