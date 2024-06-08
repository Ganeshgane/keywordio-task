import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateAds from "./components/CreateAds";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import TextAd from "./pages/TextAd";
import MediaAd from "./pages/MediaAd";
import Submitted from "./pages/Submitted";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-ads" element={<CreateAds />} />
          <Route path="create-ads/submitted" element={<Submitted />} />
          <Route path="create-ads/text-ad" element={<TextAd />} />
          <Route path="create-ads/media-ad" element={<MediaAd />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
