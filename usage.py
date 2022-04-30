import dash_weather
from dash import Dash, Input, Output, State, html, dcc

app = Dash(__name__)

app.layout = html.Div(
    [
        dcc.Loading(
            dash_weather.DashWeather(
                id="dw-1",
                api_key="ef2c6my-key0000000229009833",
                city="New York",
                lat=43,
                lon=75,
                lang="en",
                unit="metric",
                service="OpenWeather",
            )
        ),
        html.Br(),
        lat := dcc.Input(type="number"),
        lon := dcc.Input(type="number"),
        city := dcc.Input(),
        btn := html.Button("Update"),
    ]
)


@app.callback(
    [Output("dw-1", "lat"), Output("dw-1", "lon"), Output("dw-1", "city")],
    Input(btn, "n_clicks"),
    [State(lat, "value"), State(lon, "value"), State(city, "value")],
    prevent_initial_call=True,
)
def update(n, lat, lon, city):
    return lat, lon, city


if __name__ == "__main__":
    app.run_server(debug=True)
