//添加画图的提示信息
L.drawLocal.draw.handlers.polyline = {
  tooltip: {
    start: "点击地图开始画线",
    cont: "继续选择",
    end: "双击完成绘制"
  }
};
L.drawLocal.draw.handlers.polygon = {
  tooltip: {
    start: "点击地图开始绘制多边形",
    cont: "继续选择",
    end: "点击第一个顶点完成绘制"
  }
};
/**
 * 绘制多边形
 */
function drawPolygon() {
  let polygon = new L.Draw.Polygon(mymap, {
    shapeOptions: {
      weight: 1,
      color: "#ff0000",
      opacity: 0.8,
      fillColor: "#ff0000"
    }
  });
  polygon.enable();
}
/**
 * 绘制线段
 */
function drawPolyline() {
  let polyline = new L.Draw.Polyline(mymap, {
    shapeOptions: {
      weight: 1,
      color: "#ff0000",
      opacity: 0.8
    }
  });
  polyline.enable();
}

//画图创建事件
mymap.on(L.Draw.Event.CREATED, event => {
  const { layer, layerType } = event;
  if (layerType === "polygon") {
    //layer.getLatLngs()得到的多边形的经纬度集合，多边形得到的是一个二维数组，这里要取里面的数组，一定要注意
    let latlng = layer.getLatLngs()[0];
    //一个自定义的计算面积的函数
    let area = formatArea(latlng);
    this.addMeasureMarker(area, [latlng[0].lat, latlng[0].lng]);//把画图之后计算的结果添加到地图上
  } else if (layerType === "polyline") {
    //polyline得到的是一个一维数组，直接使用
    let latlng = layer.getLatLngs();
    //一个自定义的计算长度的函数
    let distance = formatLength(latlng);
    this.addMeasureMarker(distance, [latlng[0].lat, latlng[0].lng]);
  }
  // drawGroup,groupLayer,把画图的图层添加到图层组方便管理
  // this.drawGroup.addLayer(layer);

});
// 结束绘制监听
this.map.on(L.Draw.Event.DRAWSTOP, function () {
  // console.log('结束绘制')

});

function formatArea(polygon) {
  //L.GeometryUtil.geodesicArea(),返回number类型的数据，单位是平方米，这里做了一下转化
  var seeArea = L.GeometryUtil.geodesicArea(polygon);
  let area = (seeArea / 10e5).toFixed(2) + "k㎡";
  return area;
}
// 获取长度
/**
 * line[{lat:30,lng:104},{lat:30,lng:104},{lat:30,lng:104}]
 */
function formatLength(line) {
  let dis = 0;
  for (let i = 0; i < line.length - 1; i++) {
    let start = line[i];
    let end = line[i + 1];
    dis += L.latLng([start.lat, start.lng]).distanceTo([end.lat, end.lng]);//计算两个点之间的距离，并累加
  }
  //结果得到的也是number类型，单位是 米
  return (dis / 10e2).toFixed(2) + "km";
}
