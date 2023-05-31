import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import User from "../../../classes/User";
import CalorieCard from "../../components/CalorieCard";
import caloriesData from "../../../data/caloriesData.json"

function Dashboard() {
  const { id } = useParams()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await new User(id)
        const data = await user.fetchData(id)
        setUserData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [id])

  if (!userData) {
    return <div className="loading-state">Loading...</div>
  }

  return <div className="dashboard__wrapper">
    <div className="welcome__wrapper">
      <h1 className="h1--custom">Bonjour <span className="h1__firstname">{userData.userInfos.firstName}</span></h1>
      <div>Félicitation ! Vous avez explosé vos objectifs hier</div>
    </div>
    <div className="metrics__wrapper">
      <div className="dynamic-metrics__wrapper">
        Activité
        <div className="">Durée - intentsité - score</div>
      </div>
      <div className="static-metrics__wrapper">
        {Object.entries(userData.keyData).map(([key, value]) => {
          if (Object.keys(caloriesData).includes(key)) {
            return <CalorieCard 
              key={key} 
              dataKey={key} 
              dataValue={value} 
              img={caloriesData[key].img} 
              unit={caloriesData[key].unit} name={caloriesData[key].name} 
            />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  </div>
}

export default Dashboard
