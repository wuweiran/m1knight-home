import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Content from "./components/Content.tsx";

function App() {
  return (
    <>
      <div className="sidebar-blur"></div>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
