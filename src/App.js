import React from 'react';
import Map from './features/map/Map';
import ThemeSwitch from './features/theme/themeSwitch';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
    const theme = useSelector((state) => state.theme.value)

    return (
        <div className="App">
            <Navbar bg={theme} variant={theme}>
                <Container>
                    <Navbar.Brand href='#'>GeoDzida</Navbar.Brand>
                    <ThemeSwitch/>
                </Container>
            </Navbar>
            <Map/>
        </div>
    );
}

export default App;
