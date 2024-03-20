export function convertCountryCode(country) {
    let regionNames = new Intl.DisplayNames(["es"], { type: "region" });
    return regionNames.of(country);
  }
  