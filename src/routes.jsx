
import { Route, Routes } from "react-router"
import { SignUp } from "./pages/signup"

export const AppRoutes =() => {
return(
<Routes>
        <Route path="/Signup" element={ <SignUp/>}/>
</Routes>
)
}