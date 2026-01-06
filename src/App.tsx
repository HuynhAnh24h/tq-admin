// Module
import { Routes, Route } from "react-router-dom"

// Layout
import MainLayout from "./components/layout/MainLayout"

// Pages
import AuthPage from "./features/auth/AuthPage"
import UserPage from "./features/user/UserPage"
import DashboardPage from "./features/dashboard/DashboardPage"
import ProductPage from "./features/product/ProductPage"
import LadingPage from "./features/landing/LadingPage"
import BlogPage from "./features/blog/BlogPage"
import OrderPage from "./features/order/OrderPage"
import SettingPage from "./features/setting/SettingPage"

const App = () => {
  return (
    <Routes>
      <Route index element={<AuthPage />} />
      <Route element={<MainLayout />}>
        <Route path="/user" element={<UserPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/landing" element={<LadingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Route>
    </Routes>
  )
}

export default App
