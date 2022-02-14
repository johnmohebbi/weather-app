import React from "react";
import { getCurrentDate, getNameIcon } from "../assets/functions";

const CurrentWeather = ({ name, forecasteWeather }) => {
  return (
    <>
      <div className="flex justify-center mt-16">
        {!!Object.keys(forecasteWeather).length && (
          <>
            <div className="w-[95%] xs:w-[85%] sm:w-3/4 bg-zinc-50/20 rounded  text-slate-900">
              <section className="flex flex-col-reverse  lg:flex-row  lg:justify-between  items-center w-full p-2 ">
                {/* temp */}
                <div className="flex flex-col justify-between w-[90%] lg:w-72 px-2 py-3 h-60 border border-slate-800/20 shadow-md rounded ">
                  <div className="w-full h-[45%] flex justify-center items-center text-5xl font-semibold shadow-md">
                    <h4>
                      <span>{forecasteWeather.current.temp}</span>&deg;
                    </h4>
                  </div>
                  <div className="w-full h-[45%] shadow-md flex justify-between items-center p-2">
                    <div>
                      <span className="text-sm font-light">humidy</span>
                      <p className="text-center font-medium">
                        {forecasteWeather.current.humidity}%
                      </p>
                    </div>
                    <div className="bg-gray-300/30 w-[2px] h-[90%] rounded-sm"></div>
                    <div>
                      <span className="text-sm font-light">WindSpeed </span>
                      <p className="text-center font-medium">
                        {forecasteWeather.current.wind_speed}
                      </p>
                    </div>
                  </div>
                </div>
                {/* name -- Logo */}
                <div className="flex flex-col px-2 py-3 w-[90%] lg:w-72 border border-slate-800/20	 h-60 rounded-md	shadow-md">
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold underline decoration-solid decoration-2 underline-offset-2">
                      <span>{name.name}</span>
                    </h2>
                    <h2 className="font-medium self-end">
                      <span>
                        {getCurrentDate(forecasteWeather.current.dt).year}/
                      </span>
                      <span>
                        {getCurrentDate(forecasteWeather.current.dt).month.slice(0,3)}/
                      </span>
                      <span>
                        {getCurrentDate(forecasteWeather.current.dt).dayOfMonth}
                      </span>
                    </h2>
                  </div>
                  <img
                    className="w-[55%] xs:w-[50%] sm:w-[40%] md:w-[30%] lg:w-2/3 self-center"
                    src={`./svg/${getNameIcon(
                      forecasteWeather.current.weather[0].main,
                      forecasteWeather.current.weather[0].description
                    )}.svg`}
                    alt="icon"
                  />
                </div>
              </section>

              <div className="p-2 flex justify-center xs:justify-between gap-2  md:justify-between flex-wrap">
                {forecasteWeather.daily.map((item, i) => {
                  if (i === 0 || i === 7) {
                    return false;
                  } else {
                    return (
                      <div
                        className=" flex flex-col items-center w-[40%] xs:w-[40%] sm:w-[45%] md:w-36  sm:h-auto md:h-[10.5rem] mt-3 sm:mt-0  md:ml-0 border border-slate-800/30 shadow-md rounded-sm"
                        key={item.dt}
                      >
                        {/* day */}
                        <div className="font-medium">
                          {getCurrentDate(item.dt).day.slice(0, 3)}
                        </div>
                        {/* logo */}
                        <div className="w-1/2">
                          <img
                            className="w-full inline-block"
                            src={`./svg/${getNameIcon(
                              item.weather[0].main,
                              item.weather[0].description
                            )}.svg`}
                            alt="icon"
                          />
                        </div>
                        {/* temp */}
                        <section className="w-1/2 text-center">
                          <div className="text-center font-medium">
                            {<span>{forecasteWeather.current.temp}</span>}
                            <span>&deg;</span>
                          </div>
                          {/* forcaste main */}
                          <div className="text-sm font-normal">
                            {item.weather[0].main}
                          </div>
                        </section>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(CurrentWeather);
