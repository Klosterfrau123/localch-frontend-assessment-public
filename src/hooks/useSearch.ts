import { useState, useMemo } from 'react';

export function useSearch<T>(items: T[], getSearchableText: (item: T) => string) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;
    const term = searchTerm.toLowerCase();
    return items.filter((item) => getSearchableText(item).toLowerCase().includes(term));
  }, [items, searchTerm, getSearchableText]);

  const isSearching = searchTerm.trim().length > 0;
  const hasResults = filteredItems.length > 0;

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
    isSearching,
    hasResults,
  };
}
