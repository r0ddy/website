import logo from './logo.svg';
import './App.css';
import roddy from './images/roddy.png';

function App() {
  return (
    <div className="App">
      <div>
        <div id="nav">
          <p id="name">Rodrigo Taipe</p>
          <div class="spacer"></div>
          <a id="startup-link" href="/skyfood">SkyFood</a>
        </div>
        <div id="center-div">
        <img src={roddy} />
        <div id="info">
          <p id="cofound">Co-Founder of SkyFood</p>
          <p id="fullname">Rodrigo "Roddy" Taipe</p>
          <p>
            As a soon-to-be Cornell CS graduate and former Google,
            Stripe, and Datadog SWE intern, Roddy is armed with plenty
            of experience developing full-stack apps in various contexts
            (from security to fintech) with various different tools and team
            sizes. Currently, he is building out FlashFood, a food delivery
            app that aggregates customer orders to significantly drive down the
            per-customer cost of delivery while increasing the per-courier profit.
            To learn more about him, click the learn more button below. To learn
            more about his startup, click FlashFood.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
