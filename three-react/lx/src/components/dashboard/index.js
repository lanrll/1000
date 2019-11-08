import React, { Component } from 'react'
import { Row, Col } from 'antd';
import E from 'echarts';
export default class Dashboard extends Component {
  getRandColor(){
     var r=Math.floor(Math.random()*256)
     var g=Math.floor(Math.random()*256)
     var b=Math.floor(Math.random()*256)
     console.log(r,g,b)
     return '#'+r.toString(16)+g.toString(16)+b.toString(16);
  }
  componentDidMount(){
    var myChart =E.init(this.refs.myCharts);
      // 指定图表的配置项和数据
      var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  render() {
    return (
      <div className="gutter-example">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box" style={{background:this.getRandColor()}}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box"  style={{background:this.getRandColor()}}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box"  style={{background:this.getRandColor()}}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box"  style={{background:this.getRandColor()}}>col-6</div>
        </Col>
      </Row>
      <div ref="myCharts" style={{height:'200px'}}>
      </div>
      </div>
    )
  }
}
