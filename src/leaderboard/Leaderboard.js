import { collection, getDocs } from "firebase/firestore";
import { db, auth} from "../firebaseConfig";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Leaderboard.css";

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { readData() }, []);

    const readData = async () => {
        if(auth.currentUser === null){
            navigate("/login");
        }
        await getDocs(collection(db, "leaderboard"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs // datos de firestore
                    .map((doc) => ({...doc.data(), id:doc.id }));
                let dataFiltered = newData.filter((user) => user.points > 0)
                dataFiltered.sort((a, b) => b.points - a.points);
                setLeaderboard(dataFiltered);                
            })
    };
    return(
        <div id="leaderboard">
            <h2 id="leaderboardTitle">Leaderboard</h2>
            <h3 id="leaderboardSubtitle">Top 10</h3>

            <div id="leaderboardTableContainer">
                <table id="leaderboardTable">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Photo</th>
                            <th>Username</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img referrerPolicy="no-referrer" width="70" height="70" className="d-inline-block align-text-top rounded-circle" alt="user photo" src={user.userPhoto}/>
                                </td>
                                <td>{user.username}</td>
                                <td>{user.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard;