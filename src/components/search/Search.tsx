import { SearchProps } from './Search';
import styles from './Search.module.scss';
import { useState } from 'react';

export default function Search({ onSearch } : SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Call the callback function
  };

  return (
    <div className={styles.input_container}>
      <img src="../src/assets/icons/search.svg" alt="" width="28px" height="28px" />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}