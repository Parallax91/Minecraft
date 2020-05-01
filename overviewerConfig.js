var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "World - overworld",
        "World - nether",
        "World - end"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1588371608",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "Overworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "World - overworld",
            "last_rendertime": 1588249718,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -224,
                96,
                64
            ],
            "minZoom": 0,
            "spawn": [
                -224,
                96,
                64
            ],
            "north_direction": 0
        },
        {
            "name": "Nether",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "Nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "World - nether",
            "last_rendertime": 1588122794,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -224,
                96,
                64
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "End",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "End",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "World - end",
            "last_rendertime": 1587946855,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -224,
                96,
                64
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
