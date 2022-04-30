import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DashWeather as RealComponent } from '../LazyLoader';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashWeather extends Component {
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props} />
            </React.Suspense>
        );
    }
}

DashWeather.defaultProps = {
    api_key: 'YOUR-API-KEY',
    city: '',
    lat: 48.137154,
    lon: 11.576124,
    lang: 'en',
    unit: 'metric',
    service: 'OpenWeather',
    style: {
        fontFamily: 'Helvetica, sans-serif',
        gradientStart: '#0181C2',
        gradientMid: '#04A7F9',
        gradientEnd: '#4BC4F7',
        locationFontColor: '#FFF',
        todayTempFontColor: '#FFF',
        todayDateFontColor: '#B5DEF4',
        todayRangeFontColor: '#B5DEF4',
        todayDescFontColor: '#B5DEF4',
        todayInfoFontColor: '#B5DEF4',
        todayIconColor: '#FFF',
        forecastBackgroundColor: '#FFF',
        forecastSeparatorColor: '#DDD',
        forecastDateColor: '#777',
        forecastDescColor: '#777',
        forecastRangeColor: '#777',
        forecastIconColor: '#4BC4F7',
    }
};

DashWeather.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
         * ----.
         */
    city: PropTypes.string,

    /**
     * ----.
     */
    api_key: PropTypes.string.isRequired,

    /**
     * ----.
     */
    lat: PropTypes.number,

    /**
     * ----.
     */
    lon: PropTypes.number,

    /**
     * ----.
     */
    lang: PropTypes.string,

    /**
     * ----.
     */
    unit: PropTypes.string,

    /**
     * ----.
     */
    service: PropTypes.string,

    /**
     * ----.
     */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};


export const defaultProps = DashWeather.defaultProps;
export const propTypes = DashWeather.propTypes;