import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main"
import Header from "./components/Header";
import Info from "./components/Info";
import Context from "./components/Context";

function App() {
  return (
    <div className="App">
      <Context>
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
      <Info/>
      </Context>
    </div>
  );
}

export default App;
