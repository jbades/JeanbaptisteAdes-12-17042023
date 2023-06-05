import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import User from "../../../classes/User";
import ActivityBarchart from "../../components/ActivityBarchart/ActivityBarchart"
import CalorieCard from "../../components/CalorieCard/CalorieCard";
import caloriesData from "../../../data/caloriesData.json";
import ScorePiechart from "../../components/ScorePiechart/ScorePiechart";
import SessionLinechart from "../../components/SessionLinechart/SessionLinechart";
import SkillsRadarchart from "../../components/SkillsRadarchart/SkillsRadarchart";

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
    const fetchData = async () => {
      try {
        const user = await new User(id);
        const data = await user.fetchData(id);
        if (data) {
          setUserData(data);
        } else {
          console.error("Invalid data format");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  // const pieArray = [
  //   { name: "Score", value: userData[0].data.score},
  //   { name: "!Score", value: 1 - userData[0].data.score}
  // ]

  const [minWeight, maxWeight] = userData && userData[1] && userData[1].data.sessions ? calculateWeightRange(userData[1].data.sessions) : [null, null];
  console.log([minWeight, maxWeight])


  if (!userData) {
    return <div className="loading-state">Loading...</div>;
  }

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
          {userData && (

          <div className="activity-barchart__wrapper">
          <div>Activité quotidienne</div>
          <ActivityBarchart
            data= {userData[1].data.sessions}
            minWeight= {minWeight}
            maxWeight= {maxWeight}
          />
        </div>
          )}
          <div className="dynamic-metrics__2nd-row">
            <div className="session-linechart__wrapper">
              <div>Durée moyenne des sessions</div>
              <SessionLinechart 
                data= {userData[3].data.sessions}
              />
            </div>
            <div className="skills-radarchart__wrapper">
              <SkillsRadarchart 
                data= {userData[2].data.data}
              />
            </div>
            <div className="score-piechart__wrapper">
              {/* <ScorePiechart
                data= {pieArray}
              /> */}
            </div>
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