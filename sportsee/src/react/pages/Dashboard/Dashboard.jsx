import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import User from "../../../classes/User";

function Dashboard() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = new User(id);
        const data = await user.fetchData(id);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const firstName = userData?.data?.userInfos?.firstName || "";

  return <div>
    <h1 className="h1--custom">Bonjour <span className="h1__firstname">{firstName}</span></h1>
    <div>Félicitation ! Vous avez explosé vos objectifs hier</div>
  </div>;
}

export default Dashboard;
