import "./App.css";
import BotonMenu from "./componentes/BotonMenu";
import Encabezado from "./componentes/encabezado";
import Navegacion from "./componentes/Navegacion";



function App() {
    return (
        <div className="App">
            <Encabezado />
            <Navegacion/>
            <BotonMenu/>
        </div>
    );
}

export default App;
