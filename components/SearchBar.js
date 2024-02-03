import styles from '../styles/SearchBar.module.css'

//NEXT STEP: the default setting of the search bar should be a standard width saying "type here" or something like it inside and sit
//in the center of the page
//THEN: have it float to the top after the "change" 

function SearchBar() {
    function handleClick() {
        const search = document.querySelector(`.${styles.searchInput}`);
        search.classList.add(styles.searchExpanded);
    }

    return (
        <div className={styles.container}>
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