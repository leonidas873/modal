import { useParams } from "react-router-dom"

const Details = () => {
    const {id} = useParams();
    return <div>tihs is {id}</div>
}

export default Details