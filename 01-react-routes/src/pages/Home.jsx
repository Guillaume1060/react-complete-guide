import { Link } from "react-router-dom"


const HomePage = () => {

    return (
        <>
        <h1>My homePage</h1>
        <p>Click <Link to="/products">here</Link> to see out products</p>
        </>
    )
}


export default HomePage