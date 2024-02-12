import styles from '../styles/SearchBar.module.css'

/*NEXT STEP: create a grid that changes as input is placed inside the search bar, the search bar should expand 
             to the top of the page -- new grid should likely be attached to a new class to change on input
 */
function SearchBar() {
    function handleClick() {
        const search = document.querySelector(`.${styles.searchInput}`);
        search.classList.add(styles.searchExpanded);
    }

    return (
        <div className={styles.searchContainer}>
            <input type='search' placeholder="Search Music.." className={styles.searchInput} onChange={handleClick} ></input>
        </div>
    )
}

/*
const SearchBar = () => {
    const handleExpand = () => {
      const search = document.querySelector(`.${styles.searchInput}`);
      search.classList.toggle(styles.searchExpanded);
    };
  
    return (
      <div className={styles.container}>
        <button className={styles.searchWrapper} onClick={handleExpand}>
        </button>
  
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Search keyword"
        />
      </div>
    );
  };*/

export default SearchBar