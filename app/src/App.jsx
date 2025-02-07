import { useState } from "react";
import { Sidebar } from "./Components/sidebar";
import { Subscriptions } from "./Components/subscriptionList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SubscriptionForm } from "./Components/subscriptionForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="grid grid-cols-[150px_1fr] gap-5 min-h-screen bg-slate-50">
          <Sidebar />
          <div>
            <Routes>
              <Route exact path="/" element={<Subscriptions />} />
              <Route exact path="/form/" element={<SubscriptionForm />} />
              <Route path="/" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
