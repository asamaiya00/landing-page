import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="container">
      <Header />
      <Slider
        title={"JUST DEPLOY"}
        subtitle={`No-Code Application Deployment Hassle-free. Decentralized. Enterprise Grade.`}
        imageSrc={
          "https://media.istockphoto.com/photos/abstract-futuristic-technology-grid-ultra-violet-pattern-fiber-optic-picture-id1345126045?b=1&k=20&m=1345126045&s=170667a&w=0&h=6h65NpEDWjV04inLpzJ93T9iTofoduANX2utid6-Ysc="
        }
        flipped={true}
      />

      <Slider
        title={"Already Deployed on StackOS"}
        subtitle={`404 projects deployed on StackOS' decentralized cloud 4,000,000 external service requests served on the apps`}
        imageSrc={
          "https://images.unsplash.com/photo-1625806786037-2af608423424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
      />
    </div>
  );
}

export default App;
