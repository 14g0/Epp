import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import ProgComp1 from '../pages/Materias/ProgCompI';
import Perfis from '../pages/Perfis';
import Periodos from '../pages/Periodos';


export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Epp' element={<Home/>}/>
                <Route path='/Epp/periodos' element={<Periodos/>}/>
                <Route path='/Epp/perfis' element={<Perfis/>}/>
                <Route path='/Epp/periodos/ICP131' element={<ProgComp1/>}/>
            </Routes>
        </BrowserRouter>
    );
};
