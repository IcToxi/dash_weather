# AUTO GENERATED FILE - DO NOT EDIT

export dashweather

"""
    dashweather(;kwargs...)

A DashWeather component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `api_key` (String; optional): ----.
- `city` (String; optional): ----.
- `lang` (String; optional): ----.
- `lat` (Real; optional): ----.
- `lon` (Real; optional): ----.
- `service` (String; optional): ----.
- `style` (Dict; optional): ----.
- `unit` (String; optional): ----.
"""
function dashweather(; kwargs...)
        available_props = Symbol[:id, :api_key, :city, :lang, :lat, :lon, :service, :style, :unit]
        wild_props = Symbol[]
        return Component("dashweather", "DashWeather", "dash_weather", available_props, wild_props; kwargs...)
end

