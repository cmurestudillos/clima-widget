export function convertTimeStamp(timestamp, timezone) {
    const convertTimezone = timezone / 3600; // convert seconds to hours
  
    const date = new Date(timestamp * 1000);
  
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
      hour12: true,
    };
  
    return date.toLocaleString("es-ES", options);
  }
  