const getCurrentDate = (UTCDate) =>{
    const dt = UTCDate;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month= [
        "January","February","March","April","May","June","July",
            "August","September","October","November","December"
        ];
    const dayInfo = {}
    const date = new Date(dt *1000);
    dayInfo.year = date.getFullYear();
    dayInfo.month = month[date.getMonth()];
    dayInfo.dayOfMonth = date.getDate();
    dayInfo.hours = date.getHours();
    dayInfo.minute = date.getMinutes();
    dayInfo.day = days[date.getDay()]
    return dayInfo;
}
const getNameIcon = (Main,Description) =>{
  const main = Main.toLowerCase();
  const description = Description.toLowerCase();
    
    // console.log(main);
    // console.log(description);
    //clear
    if (main === "clear" ) {
        return "clear/clear-day";
    } //clouds
    else if(main === "clouds" && description === 'few clouds') {
        return "overcast/overcast-day";
    }
    else if(main === "clouds" && description === 'scattered clouds') {
        return "overcast/cloudy";
    }
    else if((main === "clouds" && description === 'broken clouds') || (main === "clouds" && description === 'overcast clouds')) {
        return "overcast/overcast";
    }//Atmosphere
    else if((main === "mist" && description === 'mist') || (main === "haze" && description === 'haze')) {
        return "mist";
    }
    else if(main === "smoke" && description === 'smoke') {
        return "smoke";
    }
    else if(main === "dust") {
        return "dust";
    }
    else if(main === "fog" && description === 'fog' ) {
        return "fog";
    }
    else if(main === "sand" && description === 'sand' ) {
        return "dust-day";
    }
    else if(main === "ash" && description === 'volcanic ash' ) {
        return "mist";
    }
    else if(main === "squall" && description === 'squalls' ) {
        return "hurricane";
    }
    else if(main === "tornado" && description === 'tornado' ) {
        return "tornado";
    }//snow
    else if(main === "snow") {
        return "snow/snow";
    }//rain
    else if(main === "rain") {
        return "rain/rain";
    }else if(main === "drizzle") {
        return "rain/drizzle";
    }//thunderstorms
    else if(main === "thunderstorm" && description.includes('rain')) {
        return "rain/thunderstorms-rain";
    }else if(main === "thunderstorm" && description.includes('drizzle')) {
        return "rain/thunderstorms-rain";
    }else if(main === "thunderstorm") {
        return "rain/thunderstorms";
    }
    
}
export {
    getCurrentDate,
    getNameIcon,
}