import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import Home from "./Pages/Home";
import Python from "./Pages/Python";
import NoPage from "./Pages/NoPage";
import HTMLCSS from "./Pages/HTMLCSS";
import PHP from "./Pages/PHP";
import InfoPage from './Pages/InfoPage';
import HtmlCssInfo from "./Pages/HtmlCssInfo";
import Phpinfo from "./Pages/PhpInfo";
import Pyinfo from "./Pages/PyInfo"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/python" element={<Python />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/htmlcss" element={<HTMLCSS />} />
            <Route path="/php" element={<PHP />} />
            <Route path="/geninfo/:genInfoID" element={<InfoPage />} />
            <Route path="/pyinfo/:pyInfoID" element={<Pyinfo />} />
            <Route path="/phpinfo/:phpInfoID" element={<Phpinfo />} />
            <Route path="/htmlcssinfo/:htmlcssInfoID" element={<HtmlCssInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
