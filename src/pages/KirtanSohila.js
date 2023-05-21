import React from "react";
import "./Page.css";


const KirtanSohila = () => {
    
    return (
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Kirtan Sohila</h1>
            </div>
            <div className="dash-user">
                <div style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFPziM8iN9PCKlFjAFvOipnN_1QA9aZFA2Q&usqp=CAU")`,backgroundSize:"100% 100%"}} className="dash-user-head">
                    <div >
                        <audio controls className="audio">
                            <source src="https://cdnsongs.com/music/data/Shabad_Gurbani/201404/Kirtan_Sohila/128/Kirtan_Sohila.mp3" type="audio/mpeg" className="audio"/>
                        </audio>
                    </div>
                </div>
                <div className="dash-user-body">
                    <h1 className="dash-user-name">Lyrics</h1>
                    <p className="lyrics">Kirtan Sohila
Sohilaa raag ga-orhee deepkee mehlaa 1
Ik-oNkaar satgur parsaad.II
jai ghar keerat aakhee-ai kartay kaa ho-ay beechaaroII.
tit ghar gaavhu sohilaa sivrihu sirjanhaaro. ||1||

tum gaavhu mayray nirbha-o kaa sohilaa.II
ha-o vaaree jit sohilai sadaa sukh ho-ay. ||1||

rahaa-o. II

nit nit jee-arhay samaalee-an daykhaigaa dayvanhaar. II
tayray daanai keemat naa pavai tis daatay kavan sumaar. ||2||

sambat saahaa likhi-aa mil kar paavhu tayl. II
dayh sajan aseesrhee-aa ji-o hovai saahib si-o mayl. ||3||

ghar ghar ayho paahuchaa sad-rhay nit pavann.II
sadanhaaraa simree-ai Nanak say dih aavann. ||4||1||

Raag Aasaa Mehlaa 1.

chhi-a ghar chhi-a gur chhi-a updays.
gur gur ayko vays anayk. ||1||

baabaa jai ghar kartay keerat ho-ay.
so ghar raakh vadaa-ee to-ay. ||1||

rahaa-o.II

visu-ay chasi-aa gharhee-aa pahraa thitee vaaree maahu ho-aa.II
sooraj ayko rut anayk.II
Nanak kartay kay kaytay vays. ||2||2||

Raag Dhanaasree Mehlaa 1.

gagan mai thaal rav chand deepak banay taarikaa mandal janak moteeII.
Dhoop mal-aanlo pavan chavro karay sagal banraa-ay foolant jotee. ||1||

kaisee aartee ho-ay. bhav khandnaa tayree aartee.II
anhataa sabad vaajant bhayree. ||1||

rahaa-o. II

sahas tav nain nan nain heh tohi ka-o sahas moorat nanaa ayk tohee.II
sahas pad bimal nan ayk pad ganDh bin sahas tav ganDh iv chalat mohee. ||2||

sabh meh jot jot hai so-ay.II
tis dai chaanan sabh meh chaanan ho-ay.II
gur saakhee jot pargat ho-ay.II
jo tis bhaavai so aartee ho-ay. ||3||

har charan kaval makrand lobhit mano andino mohi aahee pi-aasaa.II
kirpaa jal deh Nanak saaring ka-o ho-ay jaa tay tayrai naa-ay vaasaa. ||4||3||

Raag Ga-orhee Poorbee Mehlaa 4.

kaam karoDh nagar baho bhari-aa mil saaDhoo khandal khanda hay.II
poorab likhat likhay gur paa-i-aa man har liv mandal mandaa hay. ||1||

kar saaDhoo anjulee pun vadaa hay. kar dand-ut pun vadaa hay. ||1||

rahaa-o. II

saakat har ras saad na jaani-aa tin antar ha-umai kandaa hay.II
ji-o ji-o chaleh chubhai dukh paavahi jamkaal saheh sir dandaa hay. ||2||

har jan har har naam samaanay dukh janam maran bhav khanda hay.II
abhinaasee purakh paa-i-aa parmaysar baho sobh khand barahmandaa hay. ||3||

ham gareeb maskeen parabh tayray har raakh raakh vad vadaa hay.II
jan Nanak naam aDhaar tayk hai har naamay hee sukh mandaa hay II. ||4||4||

Raag Ga-orhee Poorbee Mehlaa 5.

kara-o baynantee sunhu mayray meetaa sant tahal kee baylaa.ii
eehaa khaat chalhu har laahaa aagai basan suhaylaa. ||1||

a-oDh ghatai dinas rainaaray. man gur mil kaaj savaaray. ||1||

Kirtan Sohila in English

rahaa-o.II

ih sansaar bikaar sansay meh tari-o barahm gi-aanee.II
jisahi jagaa-ay pee-aavai ih ras akath kathaa tin jaanee. ||2||

jaa ka-o aa-ay so-ee bihaajhahu har gur tay maneh basayraa.II
nij ghar mahal paavhu sukh sehjay bahur na ho-igo fayraa. ||3||

antarjaamee purakh biDhaatay sarDhaa man kee pooray.II
Nanak daas ihai sukh maagai mo ka-o kar santan kee Dhooray. ||4||5||</p>
                </div>
       
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    );
    }

export default KirtanSohila;