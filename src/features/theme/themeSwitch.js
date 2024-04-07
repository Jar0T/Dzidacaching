import ToggleButton from 'react-bootstrap/ToggleButton';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

export default function ThemeSelector() {
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()
    
    return(
        <div>
            <ToggleButton
                id='theme-toggle'
                type='checkbox'
                variant="outline-secondary"
                checked={theme === 'dark'}
                onChange={() => dispatch(toggleTheme())}>
                {theme === 'light' ? 'Light' : 'Dark'}
            </ToggleButton>
        </div>
    )
}