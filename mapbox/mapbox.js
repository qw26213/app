// 点数据结构
const point = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: item.geometry.coordinates
  }
}
// 线数据结构
const line = {
  type: 'Feature',
  geometry: {
    type: 'LineString',
    coordinates: item.geometry.coordinates
  }
}

// 面数据结构
const polygons = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: item.geometry.coordinates
  }
}

function FeatureCollection(features) {
  return {
    type: 'FeatureCollection',
    features: features
  }
}

const addLayer = () => {

  // 点Layer
  const markersOpt = {
    id: 'draw-markers',
    type: 'symbol',
    source: 'draw-markers',
    layout: {
      'icon-image': 'marker-red',
      'icon-ignore-placement': true,
      'icon-anchor': 'bottom',
      'icon-size': ['interpolate', ['linear'], ['zoom'], 4, 0.6, 8, 0.8]
    }
  }
  map.addSource('draw-markers', {
    type: 'geojson',
    data: getGeojson([])
  })
  map.addLayer(markersOpt)

  // 线Layer
  const lineOpt = {
    id: 'draw-lines',
    type: 'line',
    source: 'draw-lines',
    paint: {
      'line-color': '#06f',
      'line-width': 2,
      'line-opacity': 0.5
    }
  }
  map.addSource('draw-lines', {
    type: 'geojson',
    data: getGeojson([])
  })
  map.addLayer(lineOpt)

  // 面Layer
  const polygonOpt = {
    id: 'draw-polygons',
    type: 'fill',
    source: 'draw-polygons',
    paint: {
      'fill-color': '#06f',
      'fill-opacity': 0.35
    }
  }
  map.addSource('draw-polygons', {
    type: 'geojson',
    data: getGeojson([])
  })
  map.addLayer(polygonOpt)
}

// 1.渲染点

const showPoints = (points) => {
  map.getSource('draw-markers').setData(FeatureCollection([]))
  const markers = points.map(point => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [point]
    }
  }))
  map.getSource('draw-markers').setData(FeatureCollection(markers))
}

// 2.渲染线
// 3.渲染面 lines = [[Point, Point], [Point, Point], [Point, Point], [Point, Point], [Point, Point]]

const showLines = (lines) => {
  map.getSource('draw-lines').setData(FeatureCollection([]))
  const borders = lines.map(line => ({
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [line[0], line[1]]
    }
  }))
  map.getSource('draw-lines').setData(FeatureCollection(borders))
}

// 3.渲染面 polygons = [Point, Point, Point, Point, Point]

const showPolygons = (polygons) => {
  map.getSource('draw-polygons').setData(FeatureCollection([]))
  const polys = polygons.map(polygon => ({
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [polygon]
    },
  }))
  map.getSource('draw-polygon').setData(FeatureCollection(polys))
}

// 4.渲染Geojson
const showLayers = (url) => {
  map.setLayoutProperty('base-boundry', 'visibility', 'visibile')
  const code = 'base-boundry'
  map.addSource(code, {
    type: 'geojson',
    data: url
  })
  const stroke = {
    id: code,
    type: 'line',
    source: code,
    paint: {
      'line-color': '#ff0000',
      'line-width': 5,
      'line-dasharray': [3, 2]
    }
  }
  map.addLayer(stroke, 'background')
}

// 渲染边界表示
const addLineLabel = () => {
  const opt = {
    id: 'draw-border-label',
    type: 'symbol',
    source: 'draw-border',
    layout: {
      'symbol-placement': 'line-center',
      'text-field': ['get', 'length'],
      'text-size': 13,
      'text-font': ['Open Sans Regular'],
      'text-allow-overlap': true
    },
    paint: {
      'text-color': '#000',
      'text-halo-color': '#fff',
      'text-halo-width': 1
    }
  }
  map.addLayer(opt)
}

// 添加富文本标记点
const addDivMarker = () => {
  const ele = document.createElement('div')
  ele.setAttribute('class', 'measure-result')
  ele.innerHTML = '地块名称'
  const option = {
    element: ele,
    anchor: 'left',
    offset: [8, 0]
  }
  new mapboxgl.Marker(option).setLngLat([lng, lat]).addTo(map)
}

// 视图适应地图
const bboxView = (geojson) => {
  let bbox = turf.bbox(geojson)
  bbox = [[bbox[0], bbox[1]], [bbox[2], bbox[3]]]
  const padding = 80
  map.fitBounds(bbox, {
    padding: {
      top: padding,
      bottom: padding,
      left: padding,
      right: padding
    }
  })
}

