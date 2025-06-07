import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../slices/langSlice';
import { RootState } from '../../store';

function LanguageSelector() {
    const lang = useSelector((state: RootState) => state.language.selectedLanguage);
    const [selected, setSelected] = useState<string>(lang);
    const dispatch = useDispatch();

    const toggleLanguage = () => {
        const newLang = selected === 'tr' ? 'en' : 'tr';
        setSelected(newLang);
        dispatch(setLanguage(newLang));
    }

    return (
        <button
            onClick={toggleLanguage}
            className="text-sm px-3 py-1 border border-cyber-orange text-cyber-orange rounded-lg hover:bg-cyber-orange hover:text-black transition"
        >
            {selected === 'tr' ? 'TR 🇹🇷' : 'EN 🇬🇧'}
        </button>
    );
}

export default LanguageSelector