import "./Dashboard.css"
import Card from "./Card";
import { Link } from "react-router-dom";

function Dashboard() {

    const data = [
        {
            bgimg:"https://static.tnn.in/thumb/msid-99268714,updatedat-1680693428394,width-400,height-225,resizemode-75/99268714.jpg",
            title: "Hanuman Chalisa",
            page: "/hanumanchalisa"
        },
        {
            bgimg: "https://images.news18.com/ibnlive/uploads/2022/08/lord-ganesha-ganesh-festival-700-172145429.jpg",
            title: "Ganesh Aarti",
            page: "/ganeshaarti"
        },
        {
            bgimg: "https://i.pinimg.com/originals/4b/0b/14/4b0b14e102aaa66460981a2fdb107608.jpg",
            title: "Shiv Chalisa",
            page: "/shivchalisa"
        },
        {
            bgimg: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuaS55Cznn-zoE7JZH1-VWlbldNwBgbIQTbKXEbtDnGmyVI4TAtm-TLU9QqMumUwQMWugY2xb8uQIDUqsGbRKQgi6F0uljYnmG6gZs7y1_3t9TjGGH5Ug3CzMd5dk5QhJUrAnQJv4Wjh2Mt6W0Os6QqoowIY2oMhK9F4GgxG6Zp9kOqwuBAWsMXqC7Tw/s1473/1671179468851.jpg",
            title: "Chaupai Sahib",
            page: "/chaupaisahib"
        },
        {
            bgimg: "https://cdn.shopify.com/s/files/1/0316/7197/6075/products/645294fe684d46fa5e0bc83c_grande.png?v=1683135223",
            title: "Sukhmani Sahib",
            page: "/sukhmanisahib"
        },
        {
            bgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZabJ_7pey_b6m_fIFOufrrVLErM3xXhibcVwZwqeE9wmjIY5VDuKWOf-Bq9LX8ll0Lao&usqp=CAU",
            title: "Japji Sahib",
            page: "/japjisahib"
        },
        {
            bgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqiIWLiA7a68Qt5BMPv3_C1MzfwbbJqXZAw&usqp=CAU",
            title: "Rehras Sahib",
            page: "/rehrassahib"
        },
        {
            bgimg: "https://www.crpfindia.com/wp-content/uploads/2022/08/Aarti-Kunj-Bihari-Ki-Shri-Girdhar-Krishna-Murari-Ki.webp",
            title: "Aarti Kunj Bihari Ki",
            page: "/aartikunj"
        },
        {
            bgimg: "https://i.scdn.co/image/ab67616d0000b273a4542d258383240f50b8be29",
            title: "Vin Boleya Sabh Kish Jaanda",
            page: "/vinboleya"
        },
        {
            bgimg: "https://c.saavncdn.com/682/Adharam-Madhuram-Hindi-2021-20210726115814-500x500.jpg",
            title: "Adharam Madhuram",
            page: "/adharam"
        },
        {
            bgimg: "https://i.ytimg.com/vi/qWVKm68nBv8/maxresdefault.jpg",
            title: "Shri Radhe Radhe",
            page: "/shriradhe"
        },
        {
            bgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4iysCIB5rJ5aNGeUZsPiSJEvOBDOpM0VmjuYQjdJWScuQ9qWGO0yjAYvo58DJwFDry8&usqp=CAU",
            title: "Ardaas",
            page: "/ardaas"
        },
        {
            bgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31hY2xxoIK7Iu5myVTjqHxmO6sMlLH2PaIKvRi2S2ajUeE9Gus0S1MLwS-y30aeiMCPo&usqp=CAU",
            title: "Saraswati Aarti",
            page: "/saraswatiaarti"
        },
        {
            bgimg: "https://i.ytimg.com/vi/lVj9vdYFp3A/maxresdefault.jpg",
            title: "Laxmi Aarti",
            page: "/laxmiaarti"
        },
        {
            bgimg: "https://i.ytimg.com/vi/HdqpbGsO48o/maxresdefault.jpg",
            title: "Om Jai Jagdish Aarti",
            page: "/omjaijagdish"
        },
        {
            bgimg: "https://i.scdn.co/image/ab67616d0000b2732292d0256f9bc2099a70bea7",
            title: "Gayatri Mantra",
            page: "/gayatrimantra"
        },
        {
            bgimg: "https://i.ytimg.com/vi/1v5c96LedJ4/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCftk_1ycp4d1zmoJT-IPeN-J3HHA",
            title: "Kaise Aarti Hoye(Gagan Mein Thaal)",
            page: "/gaganthaal"
        },
        {
            bgimg: "https://i.ytimg.com/vi/uqPkEM2yXDc/maxresdefault.jpg",
            title: "Our Father in Heaven",
            page: "/ourfather"
        },
        {
            bgimg: "https://sikhwisdom.org/wp-content/uploads/2022/02/Ek-Onkar.png",
            title: "Ek Onkar Satnam",
            page: "/ekonkar"
        },
        {
            bgimg: "https://i.ytimg.com/vi/QpBwQ-xewz8/maxresdefault.jpg",
            title: "Kirtan Sohila",
            page: "/kirtansohila"
        },
        {
            bgimg: "https://i.ytimg.com/vi/HSefBurpOoc/maxresdefault.jpg",
            title: "Jis Ke Sir Upar Tu Swami",
            page: "/jiskeupar"
        },
        {
            bgimg: "https://i.ytimg.com/vi/xN-DbXpyLME/maxresdefault.jpg",
            title: "Bhajaman Radhe Govinda",
            page: "/bhajamanradhe"
        },
        {
            bgimg: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-e2-y0q5-6WPROOLsFpG4bHcG7IH6ePcdrIzTqwhGvAy_qhZpqgw8Bv2Rj7iLv0TMrSjZFa6fz4LbuMdZC0I6xVelfPvV6epi5RVi_zcIcRF_sYpcy_RXoMzquXeWDAt__JwX1psqgPPI-kQnL96JxRCi6u2NZQKPE8yVsPSnU6dymqMlZz023tz7fg/s403/Pata%20Nahi%20Kis%20Roop%20Me%20Aakar%20Narayan%20Mil%20Jayega.png",
            title: "Pata Nahi Kis Roop Mein Narayan Miljaiga",
            page: "/patanhkisroop"
        },
        {
            bgimg: "https://i.ytimg.com/vi/Q3JND6Czk8o/maxresdefault.jpg",
            title: "Hasbi Rabbi Jallallah",
            page: "/hasbirabbi"
        },
        {
            bgimg: "https://naatslyrics.com/wp-content/uploads/2021/07/Maula-Ya-Salli-Wa-Sallim-Lyrics.jpg",
            title: "Maula Ya Salli Wa Sallim",
            page: "/maulasalli"
        },
        {
            bgimg: "https://c.saavncdn.com/122/Sukh-Ke-Sab-Saathi-Dukh-Me-Na-Koi-Hindi-2022-20220513125505-500x500.jpg",
            title: "Sukh Mein Sab Saathi Dukh Mein Na Koi",
            page: "/sukhmesaathi"
        },
        {
            bgimg: "https://i.ytimg.com/vi/DbMejWoW1XI/maxresdefault.jpg",
            title: "You Are My All in All",
            page: "/youare"
        },
        {
            bgimg: "https://c.saavncdn.com/555/Shri-Krishna-Govind-Hare-Murari-Zee-Music-Devotional--Hindi-2019-20190117113152-500x500.jpg",
            title: "Shri Krishna Govind Hare Murari",
            page: "/haremurari"
        },
        {
            bgimg: "https://c.saavncdn.com/497/Sabna-Ka-Maa-Piyo-Aap-Hai-Shabad-Gurbani-Kirtan-Punjabi-2022-20220511004544-500x500.jpg",
            title: "Sabna ka Maa Piyo Aap Hai",
            page: "/sabnakamaapiyo"
        },
        {
            bgimg: "https://i.scdn.co/image/ab67616d0000b273ee2edb91051c0335ab19a5c6",
            title: "Aisi Kirpa Mohe Karo",
            page: "/aisikripa"
        }
    ];
    return(
        <>
        <div className="dashboard">
            <div className="dashboard-head">
                <h1 className="con-head">Prayers</h1>
            </div>
            <div className="dash-user">
        { data.map((item,index) => (
          <Link to={item.page} style={{ textDecoration: 'none',display:"flex" }} className="link"><Card bgcolor={item.bgimg} title={item.title} key={index}/></Link>
                    
        ))};
                
            </div>
            <footer style={{color:"white",textAlign:"center",marginBottom:"2rem"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    )
}

export default Dashboard;