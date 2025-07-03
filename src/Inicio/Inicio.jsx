import { useState } from 'react';
import Presentacion from '../Presentacion/Presentacion';
import Proyectos from '../Proyectos/Proyectos';
import SobreMi from '../SobreMi/SobreMi';
import Menu from '../Menu/Menu';

const Inicio = () => {
    const [componenteActual, setComponenteActual] = useState('inicio');

    // Función para cambiar el componente
    const onChangeComponent = (componente) => {
        setComponenteActual(componente);
    };

    // Renderizar el componente correspondiente
    const renderComponente = () => {
        switch (componenteActual) {
            case 'inicio':
                return <Presentacion />;
            case 'proyectos':
                return <Proyectos />;
            // case 'sobremi':
            //     return <SobreMi />;
            default:
                return <Presentacion />;
        }
    };

    return (
        <div>
        <Menu onChangeComponent={onChangeComponent} />
        {renderComponente()}
        </div>
    );
};


export default Inicio;