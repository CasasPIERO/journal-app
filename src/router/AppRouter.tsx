import { Routes, Route } from "react-router"
import { AuthRoute } from "../auth/routes/AuthRoute"
import { JournalRoute } from "../journal/routes/JournalRoute"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoute />} />
        <Route path="/*" element={<JournalRoute />} />
    </Routes>
  )
}
