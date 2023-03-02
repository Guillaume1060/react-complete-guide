import Meals from "../components/Meals/Meals"
import Form from "../components/form/Form"

const AppRoute = [
    {
        path: "",
        element: <Meals />
    },    
    {
        path: "form",
        element: <Form/>
    }
]

export default AppRoute