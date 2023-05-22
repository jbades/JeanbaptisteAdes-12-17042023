import { useParams } from "react-router-dom"

function Dashboard() {
  const {id} = useParams()
  console.log(id)
  return (
    <div>Coucou</div>
  )
}

export default Dashboard;
