
module DashWeather
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/dashweather.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_weather",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-DashWeather.js",
    external_url = "https://unpkg.com/dash_weather@0.0.1/dash_weather/async-DashWeather.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-DashWeather.js.map",
    external_url = "https://unpkg.com/dash_weather@0.0.1/dash_weather/async-DashWeather.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_weather.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_weather.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
