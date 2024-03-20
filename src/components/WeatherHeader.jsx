import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const WeatherHeader = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.search.value;
    onSearch(city);
  };

  return (
    <div className="weather__header">
      <form className="weather__search" onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscar ciudad..." className="weather__searchform" name="search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid fa-magnifying-glass" />
      </form>
    </div>
  );
}

export default WeatherHeader;
