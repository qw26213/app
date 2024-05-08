<template>
  <div id="map" class="map" />
</template>
<script>
import { mapStyle } from '@/utils/constant'
export default {
  name: 'GisMap',
  props: {
    center: {
      type: Array,
      default: () => {
        return [116.46, 39.549]
      }
    },
    zoom: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      map: null,
      xData: [],
      infoContent: ''
    }
  },
  watch: {
    // baseMap(val) {
    //   const isVecShow = val === 'vec' ? 'visible' : 'none'
    //   const isImgShow = val === 'img' ? 'visible' : 'none'
    //   map.setLayoutProperty('TdtVector', 'visibility', isVecShow)
    //   map.setLayoutProperty('TdtVecLabel', 'visibility', isVecShow)
    //   map.setLayoutProperty('TdtImage', 'visibility', isImgShow)
    //   if (val === 'vec') this.isRoad = false
    //   else this.isRoad = true
    // },
    // isRoad(val) {
    //   const isShow = val ? 'visible' : 'none'
    //   map.setLayoutProperty('TdtImgLabel', 'visibility', isShow)
    // }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      this.map = new mapboxgl.Map({
        container: 'map',
        maxZoom: 17.3,
        minZoom: 3,
        zoom: this.zoom,
        center: this.center,
        style: mapStyle,
        attributionControl: false
      })
      this.map.on('load', () => {
        this.$emit('map-loaded')
        this.addCirclerLayer()
      })
    },
    getGeojson(features) {
      return {
        type: 'FeatureCollection',
        features: features
      }
    },
    removeCircle() {
      const geojson = {
        type: 'FeatureCollection',
        features: []
      }
      if (this.map.getSource('circle-point')) {
        this.map.getSource('circle-point').setData(geojson)
      }
    },
    addCirclerLayer() {
      this.map.addSource('circle-point', {
        type: 'geojson',
        data: this.getGeojson([])
      })
      this.map.addLayer({
        id: 'circle-point',
        type: 'circle',
        source: 'circle-point',
        paint: {
          'circle-color': [
            'match',
            ['get', 'circle_size'],
            'small', '#f1f075',
            'big', '#f1f075',
            '#f28cb1'
          ],
          'circle-radius': [
            'match',
            ['get', 'circle_size'],
            'small', 20,
            'big', 26,
            20
          ]
        }
      })
      this.map.addLayer({
        id: 'circle-point-count',
        type: 'symbol',
        source: 'circle-point',
        filter: ['has', 'ele_val'],
        layout: {
          'text-field': ['format', ['get', 'ele_val'], {
            'text-font': ['literal', ['Open Sans Regular']],
            'text-color': '#000',
            'font-scale': 1
          }],
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 14
        }
      })
    },
    showCircle(data) {
      const fPoints = []
      data.forEach(d => {
        const obj = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: d.geometry.coordinates
          },
          properties: d.properties
        }
        fPoints.push(obj)
      })
      const points = {
        type: 'FeatureCollection',
        features: fPoints
      }
      this.map.getSource('circle-point').setData(points)
    }
  }
}
</script>
<style scoped>
.dialogDiv {
    width: 420px;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    padding: 10px 15px;
    box-sizing: border-box;
}

.tx-c {
    text-align: center;
    font-size: 12px;
    margin-top: 3px;
    color: #eee;
}

.picDiv {
    width: 118px;
    height: 210px;
    display: inline-block;
}

.picDiv:nth-child(odd) {
    margin-right: 12px;
}

.el-image {
    width: 118px;
    height: 170px;
    border-radius: 4px;
}
</style>
<style scoped lang="scss">
$main-color: #02a975;
$padding: 20px;
$border-radius: 4px;

.map {
    height: 100%;
    width: 100%;
}

.init-location {
    position: absolute;
    right: 20px;
    bottom: 175px;
    z-index: 99;
    background: white;
    width: 29px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
}

.info-box {
    position: absolute;
    top: $padding * 3.5;
    right: $padding;
    padding: 10px 20px;
    background-color: #ffffff;
    box-sizing: border-box;
    opacity: 0.8;
    z-index: 99;
    border-radius: $border-radius;
}

.base-map {
    position: absolute;
    top: $padding;
    right: 175px;
    z-index: 99;
    margin: 0;
    border-radius: $border-radius;

    li {
        padding: 0 15px;
        height: $padding + 10px;
        line-height: $padding + 10px;
        text-align: center;
        cursor: pointer;
        border: 1px solid $main-color;
        border-right: 1px solid $main-color;
        color: $main-color;
        background-color: white;
        float: left;
        position: relative;
        font-size: 14px;

        i {
            font-size: 16px;
        }

        label {
            font-weight: normal;
            cursor: pointer;
        }

        &:first-child {
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
            border-right: none;
        }

        &:last-child {
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
            border-left: none;
        }

        &.active {
            background-color: $main-color;
            color: white;
        }
    }
}

.road-control {
    position: absolute;
    top: 21px;
    right: 175px + 120px + 3px;
    white-space: nowrap;
    z-index: 99;
    background-color: white;
    height: $padding + 10px;
    line-height: $padding + 10px;
    border-radius: $border-radius;
    padding: 0 6px;
}
</style>
<style lang="scss">
$popup-width: 200px;
$main-color: #02a975;
$padding: 20px;
$border-radius: 4px;

ul,
li {
    list-style: none;
}

.mapboxgl-ctrl-bottom-right {
    right: 10px;
    bottom: 70px;
}

.mapboxgl-ctrl-bottom-left {
    left: calc(50% - 20px);
    bottom: $padding;
}

.map-popup {
    max-width: 1000px !important;
    border-radius: $border-radius !important;
    z-index: 11;
    padding: 0;

    .mapboxgl-popup-content {
        padding: 0;
    }

    .popup-title {
        height: $padding + 15px;
        line-height: $padding + 15px;
        background: $main-color;
        color: white;
        font-size: 16px;
        padding: 0 calc(#{$padding} / 2);
        font-weight: bold;
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;

        label {
            display: inline-block;
            max-width: 260px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding-right: 15px;
        }

        .popup-close {
            float: right;
            cursor: pointer;
        }
    }

    .popup-content {
        padding: calc(#{$padding} / 2);

        button {
            float: right;
        }
    }
}

.delete-button {
    padding: 1px 8px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        color: $main-color;
    }
}

.measure-result {
    padding: 0 3px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 3px;

    &.close {
        padding: 0;
        cursor: pointer;
        width: 12px;
        height: 12px;
        line-height: 12px;
        text-align: center;
    }
}
</style>
