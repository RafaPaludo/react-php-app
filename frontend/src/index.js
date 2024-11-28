// Pages
import PageHome from './pages/Home/PageHome';
import PageLogin from './pages/Login/PageLogin';
import PageContact from './pages/Contact/PageContact';
import PageAccount from './pages/Account/PageAccount';
import PageSettings from './pages/Settings/PageSettings';

// Components
import AppHeader from "./layout/AppHeader";
import { Theme, Grid } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route } from "react-router";

// Assets
import './assets/index.css';
import "@radix-ui/themes/styles.css";

// Plugins
import reportWebVitals from './reportWebVitals';

// Config
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Theme accentColor="blue" grayColor="olive" radius="large" scaling="95%">
      <Grid columns="200px 1fr" gap="0" rows="1" width="auto" height="100vh" >
        <AppHeader />

        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/contato" element={<PageContact />} />
          <Route path="/conta" element={<PageAccount />} />
          <Route path="/configuracoes" element={<PageSettings />} />
        </Routes>
      </Grid>
    </Theme>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
