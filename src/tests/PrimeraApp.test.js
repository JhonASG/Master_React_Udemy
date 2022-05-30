import React from 'react';
import { render, screen } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en el componente <PrimeraApp />', () => {
    test('Debe mostrar el mensaje "Hola soy Veguetta".', () => {
        const saludo = "Hola soy Veguetta";
        const num = 123;

        // Se renderiza el componente para verificarlo
        render( <PrimeraApp new_text={num} saludo= {saludo} /> );

        // Se evalua si el texto que contiene la variable saludo se encuentra en el documento
        // Esto es una forma de probar los componentes pero posteriormente se va a utilizar Enzyme
        // expect(screen.getByText(saludo)).toBeInTheDocument();
        expect(screen.getByText(saludo)).toMatchSnapshot();
    });

    test('Debe mostrar un subtitulo enviado por props', () => {
        const saludo = "Hola soy Veguetta";
        const num = 123;
        const subTitle = "Goku es el sayayin mas fuerte";

        // Se renderiza el componente para verificarlo 
        render(<PrimeraApp new_text={num} saludo= {saludo}/>);

        // De esta manera estoy validando si en el documento el contenido en h3 es el mismo que el de la variable subTitle
        expect(screen.getByText(subTitle)).toContainHTML('h3');
    });

    // Configuración de Enzyme -> por el momento solo se encuentra para version <17 de React
    /*
    /// setupTests.js:

    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16'
    import {createSerializer} from 'enzyme-to-json'

    Enzyme.configure({ adapter: new Adapter() });
    expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

    /// Para instalar enzyme -> https://github.com/wojtekmaj/enzyme-adapter-react-17
        import { shallow } from 'enzyme';
        import '@testing-library/jest-dom';

        describe('Prueba', () => {
            test('Debe mostrar el mensajev "Hola soy Veguetta".', () => {
                /// shallow() -> Funciona como el render() de testing-library solo que permite simular
                /// clicks, etc.
                const wrapper = shallow(<PrimeraAPP new_text={num} saludo= {saludo} />);

                /// Se evalua que lo que muestra el componente este en la aplicación
                /// Instalar enzyme-to-json -> Con estos tenemos una fotografía de lo que se esta
                /// renderizando [npm install --save-dev enzyme-to-json]
                /// Snapshot -> No tocar la carpeta que se crea
                /// En el Snapshot guardo todos los cambios del componente renderizado.
                expect( wrapper ).toMatchSnapshot();
            });
        })
    */
});