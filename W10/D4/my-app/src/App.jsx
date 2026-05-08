import { useState } from 'react'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductsPage'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { DashboardPage } from './pages/DashboardPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { AboutPage } from './pages/AboutPage'
import { MainLayout } from './layouts/MainLayout'
import { ProtectedRoute } from './routes/ProtectedRoute'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'

function App() {

  const isAuthenticated = true;

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<MainLayout />}>

          {/* Home Page */}
          <Route index element={<HomePage />} />

          {/* About Page */}
          <Route path="about" element={<AboutPage />} />

          {/* Product Page */}
          <Route path="products" element={<ProductPage />} />

          {/* Dynamic Route */}
          <Route
            path="products/:id"
            element={<ProductDetailsPage />}
          />

          {/* Protected Route */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
              >
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          {/* 404 not found */}
          <Route
            path="*"
            element={<NotFoundPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App