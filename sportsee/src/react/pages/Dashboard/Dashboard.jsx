import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import User from "../../../classes/User";
import ActivityBarchart from "../../components/ActivityBarchart/ActivityBarchart"
import CalorieCard from "../../components/CalorieCard/CalorieCard";
import caloriesData from "../../../data/caloriesData.json";
import ScorePiechart from "../../components/ScorePiechart/ScorePiechart";
import SessionLinechart from "../../components/SessionLinechart/SessionLinechart";

function Dashboard() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await new User(id);
        const data = await user.fetchData(id);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!userData) {
    return <div className="loading-state">Loading...</div>;
  }

  const pieArray = [
    { name: "Score", value: userData[0].data.todayScore },
    { name: "!Score", value: 1 - userData[0].data.todayScore }
  ]

  return (
    <div className="dashboard__wrapper">
      <div className="welcome__wrapper">
        <h1 className="h1--custom">
          Bonjour <span className="h1__firstname">{userData[0].data.userInfos.firstName}</span>
        </h1>
        <div>Félicitations ! Vous avez explosé vos objectifs hier</div>
      </div>
      <div className="metrics__wrapper">
        <div className="dynamic-metrics__wrapper">
          <ActivityBarchart
            data= {userData[1].data.sessions}
          />
          <div className="dynamic-metrics__row2">
            <SessionLinechart 
              data= {userData[3].data.sessions}
            />
            <ActivityBarchart 
              data= {userData[2].data.data}
            />
            <ScorePiechart
              data= {pieArray}
            />
          </div>
        </div>
        <div className="static-metrics__wrapper">
          {Object.entries(userData[0].data.keyData).map(([key, value]) => {
            const calorieData = caloriesData[key];
            if (calorieData && calorieData.img) {
              return (
                <CalorieCard
                  key={key}
                  dataKey={key}
                  dataValue={value}
                  unit={calorieData.unit}
                  name={calorieData.name}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;