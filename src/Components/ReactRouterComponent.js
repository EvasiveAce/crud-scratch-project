import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./NavigationLayoutComponent.js";
import PersonTool from "../Pages/PersonToolPage.js";
import LocationTool from "../Pages/LocationToolPage.js";
import '../App.css';

export default function Router() {
    return (
      <div class="flexStyle">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PersonTool />} />
              <Route path="LocationTool" element={<LocationTool />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}