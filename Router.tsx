import { Routes, Route } from "react-router-dom";
import Home from './src/pages/Home';
import PageNotFound from './src/pages/PageNotFound';

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}