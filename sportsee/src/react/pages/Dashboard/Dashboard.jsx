// React import
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// CalorieCard data enrichment
import caloriesData from "../../../data/caloriesData.json";
// components import
import ActivityBarchart from "../../components/ActivityBarchart/ActivityBarchart"
import CalorieCard from "../../components/CalorieCard/CalorieCard";
import ScorePiechart from "../../components/ScorePiechart/ScorePiechart";
import SessionLinechart from "../../components/SessionLinechart/SessionLinechart";
import SkillsRadarchart from "../../components/SkillsRadarchart/SkillsRadarchart";

import User from "../../../classes/User";

// creating a range buffer for ActivityBarchart component
function calculateWeightRange(data) {
  let minValue = Infinity;
  let maxValue = -Infinity;

  data.forEach(item => {
    const weight = item.kilogram;
    if (weight < minValue) minValue = weight;
    if (weight > maxValue) maxValue = weight;
  });
  minValue *= 0.95
  maxValue *= 1.05

  return [minValue, maxValue];
}

export default function Dashboard() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = new User();
        await user.fetchData(id);
        await user.formatGeneralData();
        await user.formatPerformanceData();
        await user.formatAverageSessionData();
        setUserData(user);
        // console.log(user)
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [id]);

  const [minWeight, maxWeight] = userData && userData.activity && userData.activity.sessions ? calculateWeightRange(userData.activity.sessions) : [null, null];

  if (!userData) {
    return <div className="loading-state">Loading...</div>;
  }

  return (
    <div className="dashboard__wrapper">
      <div className="welcome__wrapper">
        <h1 className="h1--custom">
          Bonjour <span className="h1__firstname">{userData?.general?.userInfos?.firstName || ''}</span>
        </h1>
        <div>Félicitations ! Vous avez explosé vos objectifs hier  👏</div>
      </div>
      <div className="metrics__wrapper">
        <div className="dynamic-metrics__wrapper">
          {userData && (

          <div className="activity-barchart__wrapper">
          <div className="activity-barchart__title">Activité quotidienne</div>
          <ActivityBarchart
            data= {userData.activity.sessions}
            minWeight= {minWeight}
            maxWeight= {maxWeight}
          />
        </div>
          )}
          <div className="dynamic-metrics__2nd-row">
            <div className="session-linechart__wrapper">
              {/* <div className="session-linechart__title">Durée moyenne des sessions</div> */}
              <SessionLinechart 
                data= {userData.averagesessions.sessions}
              />
            </div>
    
            <div className="skills-radarchart__wrapper"> 
              <SkillsRadarchart data={userData.performance.data} />
            </div>
            
            <div className="score-piechart__wrapper">
            <div className="score-piechart__title">Score</div>
              <ScorePiechart
                data= {userData.general.todayScore}
              />
              <div className="score-piechart__message-wrapper">
                <div className="score-piechart__percentage">{Object.values(userData.general.todayScore[0])[1] * 100}%</div>
                <div className="score-piechart__message">de votre objectif</div>
              </div>
            </div>
          </div>
        </div>
        <div className="static-metrics__wrapper">
          {Object.entries(userData.general.keyData).map(([key, value]) => {
            const calorieData = caloriesData[key];
            if (calorieData && calorieData.img) {
              return (
                <CalorieCard
                  key={key}
                  dataKey={key}
                  dataValue={value}
                  unit={calorieData.unit}
                  name={calorieData.name}
                  image={calorieData.img}
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