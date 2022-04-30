# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashWeather <- function(id=NULL, api_key=NULL, city=NULL, lang=NULL, lat=NULL, lon=NULL, service=NULL, style=NULL, unit=NULL) {
    
    props <- list(id=id, api_key=api_key, city=city, lang=lang, lat=lat, lon=lon, service=service, style=style, unit=unit)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashWeather',
        namespace = 'dash_weather',
        propNames = c('id', 'api_key', 'city', 'lang', 'lat', 'lon', 'service', 'style', 'unit'),
        package = 'dashWeather'
        )

    structure(component, class = c('dash_component', 'list'))
}
