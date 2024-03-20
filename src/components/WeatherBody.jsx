import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureFull, faDroplet, faWind, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import {convertTimeStamp} from '../utils/convertTimeStamp';
import {convertCountryCode} from '../utils/convertCountryCode';

const WeatherBody = ({ weatherData, units }) => {
    if (!weatherData) {
        return <p>Cargando...</p>;
    }

    const {
        main: { temp, temp_min, temp_max, feels_like, humidity },
        wind: { speed },
        main: { pressure },
        weather: [{ description: weatherDescription, icon }],
        sys: { country },
        dt,
        timezone,
    } = weatherData;

    const formattedDate = convertTimeStamp(dt, timezone);
    const countryName = convertCountryCode(country);
  
    return (
      <div className="weather__body">
        <h1 className="weather__city">{`${weatherData.name}, ${countryName}`}</h1>
        <div className="weather__datetime">{formattedDate}</div>
        {/* <div className="weather__forecast">{weatherDescription}</div> */}
        <div className="weather__icon">
          <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="weather icon" />
        </div>
        <p className="weather__temperature">{`${temp.toFixed()}`}&#x2103;</p>
        <div className="weather__minmax">
          <p>Min: {temp_min.toFixed()}&#x2103;</p>
          <p>Max: {temp_max.toFixed()}&#x2103;</p>
        </div>
        <div className="weather__info">
          <div className="weather__card">
            <div>
              <p>Sensacion real</p>
              <p className="weather__realfeel">
                <FontAwesomeIcon icon={faTemperatureFull} className='m-around' />{`${feels_like.toFixed()}`}&#x2103;
              </p>
            </div>
          </div>
          <div className="weather__card">
            <div>
              <p>Humedad</p>
              <p className="weather__humidity">
                <FontAwesomeIcon icon={faDroplet} className='m-around' /> {`${humidity}%`}
              </p>
            </div>
          </div>
          <div className="weather__card">
            <div>
              <p>Viento</p>
              <p className="weather__wind">
                <FontAwesomeIcon icon={faWind} className='m-around' /> 
                {`${speed + 'm/s'}`}
              </p>
            </div>
          </div>
          <div className="weather__card">
            <div>
              <p>Presión</p>
              <p className="weather__pressure">
                <FontAwesomeIcon icon={faGaugeHigh} className='m-around' />{`${pressure} hPa`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  WeatherBody.propTypes = {
    weatherData: PropTypes.shape({
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            temp_min: PropTypes.number.isRequired,
            temp_max: PropTypes.number.isRequired,
            feels_like: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
    units: PropTypes.string.isRequired,
};

export default WeatherBody;
  