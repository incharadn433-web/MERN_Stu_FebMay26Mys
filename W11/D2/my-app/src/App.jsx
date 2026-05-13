import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NestedRoutes } from './components/P1';
import { DynamicParamsUseParams } from './components/P2';
import { MultipleDynamicParams } from './components/P3';
import { Optionalparameters } from './components/P4';
import { NestedDynamicRoutes } from './components/P5';

function DashboardHome(){
  return(
    <div>
      <h3>Dashboard Home</h3>
      <p>Default Dashboard Page</p>
    </div>
  );
}
function DashboardProfile(){
  return(
    <div>
      <h3>Dashboard Profile</h3>
      <p>Profile Page inside Dashboard</p>
    </div>
  );
}
function DashboardSettings(){
  return(
    <div>
      <h3>Dashboard Settings</h3>
      <p>Settings page inside Dashboard </p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>React Router concepts</h1>
      <ul>
        <li>NestedRoutes</li>
        <li>DynamicParamsUseParams</li>
        <li> MultipleDynamicParams</li>
        <li>Optionalparameters</li>
        <li>NestedDynamicRoutes</li>
      </ul>
      <nav style={styles.nav}>
        <Link to="/dashboard">Nested Routes</Link>
        <Link to="/products/101">Dynamic Params</Link>
        <Link to="/users/101/orders/5001">Multiple Params</Link>
        <Link to="/profile">Optional Params</Link>
        <Link to="/profile/inchara">Optional Params with Value</Link>
        <Link to="/courses/reactJS">Nested Dynamic Routes</Link>
      </nav>
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={<Home />}
        />
        {/* Nested Route */}
        <Route
          path="/dashboard" element={<NestedRoutes />}
        >
          {/* Index Route */}
          <Route
            path="/dashboard" element={<DashboardHome />}
          />
          <Route
            path="profile" element={<DashboardProfile />}
          />
          <Route
            path="settings" element={<DashboardSettings />}
          />
          </Route>
          {/* Dynamic Params */}
          <Route 
             path = "/products/:id" element={<DynamicParamsUseParams/>}
          />
          {/* Multiple Dynamic Params */}
           <Route 
             path = "/users/:userId/orders/:orderId" element={<MultipleDynamicParams/>}
          />
          {/* Optional Dynamic params */}
           <Route 
             path = "/profile" element={<Optionalparameters/>}
          />
           <Route 
             path = "/profile/:username" element={<Optionalparameters/>}
          />
           <Route 
             path = "/courses/:courseId" element={<Optionalparameters/>}
          />
      </Routes>
    </BrowserRouter>
  )
}

const styles = {
  nav:{
    display:"flex",
    flexWrap:"wrap",
    gap:"10px",
    marginTop:"10px"

  }
}
export default App
