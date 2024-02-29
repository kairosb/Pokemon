import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
    searchTerm: string;
    handleSearchChange: (term: string) => void;
}

const defaultValue: SearchContextType = {
    searchTerm: '',
    handleSearchChange: () => {},
};

const SearchContext = createContext<SearchContextType>(defaultValue);

export const useSearch = () => {
    const context = useContext(SearchContext);

    return context;
};

interface SearchProviderProps {
    children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
    };

    const value: SearchContextType = {
        searchTerm,
        handleSearchChange,
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};
