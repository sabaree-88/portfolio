import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <section className="section-scroll">
        <Hero />
      </section>
      <section className="section-scroll">
        <About />
      </section>
      <section className="section-scroll">
        <Skills />
      </section>
      <section className="section-scroll">
        <Projects />
      </section>
      <section className="section-scroll">
        <Contact />
      </section>
    </div>
  );
}

export default App;
