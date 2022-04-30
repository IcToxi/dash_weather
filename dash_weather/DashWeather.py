# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashWeather(Component):
    """A DashWeather component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- api_key (string; default 'YOUR-API-KEY'):
    ----.

- city (string; default ''):
    ----.

- lang (string; default 'en'):
    ----.

- lat (number; default 48.137154):
    ----.

- lon (number; default 11.576124):
    ----.

- service (string; default 'OpenWeather'):
    ----.

- style (dict; default {    fontFamily: 'Helvetica, sans-serif',    gradientStart: '#0181C2',    gradientMid: '#04A7F9',    gradientEnd: '#4BC4F7',    locationFontColor: '#FFF',    todayTempFontColor: '#FFF',    todayDateFontColor: '#B5DEF4',    todayRangeFontColor: '#B5DEF4',    todayDescFontColor: '#B5DEF4',    todayInfoFontColor: '#B5DEF4',    todayIconColor: '#FFF',    forecastBackgroundColor: '#FFF',    forecastSeparatorColor: '#DDD',    forecastDateColor: '#777',    forecastDescColor: '#777',    forecastRangeColor: '#777',    forecastIconColor: '#4BC4F7',}):
    ----.

- unit (string; default 'metric'):
    ----."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, city=Component.UNDEFINED, api_key=Component.UNDEFINED, lat=Component.UNDEFINED, lon=Component.UNDEFINED, lang=Component.UNDEFINED, unit=Component.UNDEFINED, service=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'api_key', 'city', 'lang', 'lat', 'lon', 'service', 'style', 'unit']
        self._type = 'DashWeather'
        self._namespace = 'dash_weather'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'api_key', 'city', 'lang', 'lat', 'lon', 'service', 'style', 'unit']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashWeather, self).__init__(**args)
