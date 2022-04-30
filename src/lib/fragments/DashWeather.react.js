import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defaultProps, propTypes } from '../components/DashWeather.react';
import ReactWeather, { useOpenWeather, useWeatherBit, useVisualCrossing } from 'react-open-weather';

const DashWeather = (props) => {

    const { id, api_key, city, lat, lon, lang, unit, service, style } = props;

    const services = {
        'OpenWeather': useOpenWeather,
        'WeatherBit': useWeatherBit,
        'VisualCrossing': useVisualCrossing
    };


    const { data, isLoading, errorMessage } = services[service]({
        key: api_key,
        lat: lat,
        lon: lon,
        lang: lang,
        unit: unit
    });

    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang={lang}
            theme={style}
            locationLabel={city}
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
            onChange={
                /*
                 * Send the new value to the parent component.
                 * setProps is a prop that is automatically supplied
                 * by dash's front-end ("dash-renderer").
                 * In a Dash app, this will update the component's
                 * props and send the data back to the Python Dash
                 * app server if a callback uses the modified prop as
                 * Input or State.
                 */
                e => setProps({ value: e.target.value })
            }
        />
    );
};


DashWeather.defaultProps = defaultProps;
DashWeather.propTypes = propTypes;

export default DashWeather;