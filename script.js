var vegacode = 
{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
          "url": "https://raw.githubusercontent.com/bcviscourse/datasets/master/lab9-covidtracking.csv"
      },
      "config": {
          "background": "transparent"
      }, 
    "vconcat": [
          {
              "width": 680,
              "height": 400,
              "title": "Deaths and Positive Cases in U.S. States",
              "mark": {
                  "type": "circle",
                "size": 80,
                "tooltip": true
              }, 
        "encoding": {
          "x": {
            "field": "positive", 
            "type": "quantitative",
            "title": "Positive Cases"
          },
          "y": {
            "field": "death",
            "type": "quantitative",
            "title": "Deaths"
          }, 
          "color": {
            "field": "dataQualityGrade",
            "title": "Data Quality",
            "scale": {
              "range": [
                "#83bcb6",
                              "#88d27a",
                              "#f2cf5b",
                              "#f58518", 
                              "#e45756"
              ]
            }
          }, 
          "tooltip": [
            {"field": "state", "type": "nominal", "title": "State"},
                      {"field": "death", "type": "quantitative", "title": "Deaths"},
                      {"field": "positive", "type": "quantitative", "title": "Positive Cases"}
          ]
        }, 
        "selection": {
          "brush": {"type": "interval"}
        }
      }, 
  
      
  
  
  
  
      {
        "repeat": ["hospitalizedCumulative", "recovered"],
        "columns": 1,
        "spec":{
          "width": 300,
          "height": 300,
          "projection": {"type": "albersUsa"},
          "mark": {
            "type": "geoshape",
            "tooltip": true
          }, 
          "encoding": {
            "y": {
                "field": {"repeat": "repeat"}, 
                "type": "quantitative"
            },
            "shape": {
              "field": "geo",
              "type": "geojson"
            },
            "color": {
              "condition": {
                "selection": "brush", 
                "field": {"repeat": "repeat"},
                "type": "quantitative",
              }, 
              "value": "grey"
            }, 
            "tooltip": [
              {"field": "state", "type": "nominal", "title": "State"},
                          {"field": {"repeat": "repeat"}, 
                          "type": "quantitative"}
            ]
          }, 
          "transform": [
            {
              "lookup": "fips", 
              "from": {
                "data": {
                  "url": "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json",
                                  "format": {
                                  "type": "topojson",
                                          "feature": "states"
                  }
                }, 
                "key": "id"
              }, 
              "as": "geo"
            }
          ]
        }
      }
    ]
  };

  vegaEmbed('#vis', vegacode);
  