import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quotes from '../pages/Quotes/Quotes';
import QuotesAuthor from '../pages/QuotesAuthor/QuotesAuthor';

const Router = () => (
    <BrowserRouter basename="/DEVCHALLENGE-quotegenerator-React/my-app">
        <Routes>
            <Route index element={<Quotes />} />
            <Route path="/author/:author" element={<QuotesAuthor />} />
            { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
            <Route path="*" element={<div>Error 404. Algo no ha salido bien. </div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;