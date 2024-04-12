import image from '../../assets/soldier__pic.png'
import statusIcon from '../../assets/soldier__level.png'
import axios from 'axios'
import './index.css'
import { useEffect, useState } from 'react'

const Soldier = () => {
    const [weapons, setWeapons] = useState([])
    const [scores, setScores] = useState([])
    const [guns, setGuns] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const weaponsResponse = await axios.get('https://inditech.onrender.com/weapons');
                setWeapons(weaponsResponse.data);

                const gunsResponse = await axios.get('https://inditech.onrender.com/guns');
                setGuns(gunsResponse.data);

                const scoresResponse = await axios.get('https://inditech.onrender.com/scores');
                setScores(scoresResponse.data);

                setLoading(false); 
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        };

        fetchData();
    }, [])

    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }

    if (loading) {
        return <div><h2>Loading...</h2></div>; 
    }

    return (
        <div className="soldier-container">
            <div className="soldier-details-container">
                <img src={image} alt="soldier" className="soldier-image" />
                <div className="soldier-details">
                    <div className='soldier-details-header-container'>
                        <img src={statusIcon} alt='soldier-status-icon' className='soldier-status-icon' />
                        <div className='soldier-header-details'>
                            <h1 className='soldier-heading'>Cookie</h1>
                            <div className='soldier-ranking'>
                                rank
                            </div>
                        </div>
                    </div>
                    <div className='weapon-details-container'>
                        <ul className='weapon-types-list'>
                            {weapons.map((weapon) => (
                                <li key={weapon._id} className='weapon-details'>
                                    <p className='weapon-name'>{weapon.name}</p>
                                    <div className='weapon-progresbar-container'>
                                        <p className='weapon-score'>{weapon.score}/{weapon.totalScore}</p>
                                        <div className='weapon-progress-bar'>
                                            <div className='progress' style={{ width: `${(weapon.score / weapon.totalScore) * 100}%` }}></div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='soldier-score-weapon-container'>
                            <table className="table">
                                <thead>
                                    <tr className="table-header">
                                        <th>WINS</th>
                                        <th>SCORE/MIN</th>
                                        <th>KILLS/MIN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scores.map(score => (
                                        <tr key={score._id} className="table-row">
                                            <td>{score.wins}%</td>
                                            <td>{score.score}</td>
                                            <td>{score.kills}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='guns-container'>
                                <ul className='guns-list'>
                                    {guns.map((gun) => (
                                        <li className='gun-item' key={gun._id}>
                                            <h1 className='gun-name'>{gun.name}</h1>
                                            <div className='gun-container'>
                                                <img src={gun.image} className='gun-image' alt={gun.name} />
                                            </div>
                                            <h1 className='gun-type'>{gun.type}</h1>
                                            <p className='gun-capacity'>{gun.capacity}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Soldier
