import Perfill from "./components/Perfill";

import Bolsonaro from "./assets/Bolsonaro.jpg";
import Lula from "./assets/Lula.jpg";
import Dilma from "./assets/Dilma.jpg";
import Eneas from "./assets/Eneas.jpg";
import Getulio from "./assets/Getulio.jpg";
import Janio from "./assets/Janio.jpg";
import Juscelino from "./assets/Juscelino.jpg";
import Itamar from "./assets/Itamar.jpg";
import Haddad from "./assets/Haddad.jpeg";
import Collor from "./assets/Collor.jpg"

import "./App.css";

function App() {
  return (
    <>
      <section className="perfil">
        <Perfill
        nome = "Getulio Vargas"
        descrição = "Ex-Presidente do Brasil"
        img = {Getulio}
        />
        <Perfill
        nome = "Bolsonaro"
        descrição = "Ex-Presidente do Brasil"
        img = {Bolsonaro}
        />
        <Perfill
        nome = "Lula"
        descrição = "Presidente do Brasil"
        img = {Lula}
        />
        <Perfill
        nome = "Dilma"
        descrição = "Ex-Presidente do Brasil"
        img = {Dilma}
        />
        <Perfill
        nome = "Eneas"
        descrição = "Ex-Candidato a Presidente do Brasil"
        img = {Eneas}
        />
        <Perfill
        nome = "Janio"
        descrição = "Ex-Presidente do Brasil"
        img = {Janio}
        />
        <Perfill
        nome = "Juscelino"
        descrição = "Ex-Presidente do Brasil"
        img = {Juscelino}
        />
        <Perfill
        nome = "Itamar"
        descrição = "Ex-Presidente do Brasil"
        img = {Itamar}
        />
        <Perfill
        nome = "Haddad"
        descrição = "Ex-Candidato a Presidente do Brasil"
        img = {Haddad}
        />
        <Perfill
        nome = "Collor"
        descrição = "Ex-Candidato a Presidente do Brasil"
        img = {Collor}
        />
      </section>
    </>
  );
}
export default App;
