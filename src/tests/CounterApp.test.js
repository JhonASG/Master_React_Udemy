import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import CounterApp from "../CounterApp";

describe('Test Homework', () => {
    let val = 10;

    let renderComponent = () => {
        return render(<CounterApp />);
    };

    // Este metodo se va a ejecutar antes de cada evaluación o test suite
    beforeEach(() => {
        renderComponent(); 
    });

    test('Muestra el valor por defecto del CounterAPP', () => {
        expect(screen.getByText(val)).toMatchSnapshot();
    });

    test('Muestra un valor de 100 y se verifica que sea el mostrado en el CounterAPP', () => {
        val = 100;

        render( <CounterApp value={val}/> );

        expect(screen.getByText(val)).toContainHTML('h2');
    });

    test('Debe incrementar con el boton more', () => {
        val = 11;
        const button = screen.getByText('More');

        fireEvent.click(button);

        expect(screen.getByText(val)).toContainHTML('h2');
    });

    test('Debe decrementar con el boton less', () => {
        val = 9;
        const button = screen.getByText('Less');

        fireEvent.click(button);

        expect(screen.getByText(val)).toContainHTML('h2');
    });

    test('Debe Resetear el valor por defecto con el boton reset', () => {
        val = 10;

        // Sumo uno al contador queda en 11 ya que el valor por defecto es 10
        let button = screen.getByText('More');
        fireEvent.click(button);

        // Con screen.getAllByRole('heading', {level: 2}) se obtienen todos los elementos h2 del JSX del componente
        // console.log(screen.getAllByRole('heading', {level: 2}));

        // Se resetea el contador pasando de 11 a su valor predeterminado que es 10
        button = screen.getByText('Reset');
        fireEvent.click(button);

        // Se evalua que el contenido en h2 que es donde se almacena el contador sea igual a 10 que es el valor por defecto
        expect(screen.getByText(val)).toContainHTML('h2');
    });
});