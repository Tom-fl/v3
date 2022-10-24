<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-29 16:58:40
 * @LastEditTime: 2022-10-10 17:20:55
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\visualExample\visualExample.vue
 * @Environment: Win 10
 * @Description: 可视化  小例子
-->
<template>
  <!--  -->
  <div :style="{ background: `url(${bg}) 50% 50%  / 100% 100% no-repeat` }" class="box">
    <div class="box_left">
      <div class="box_left_card">
        <section>
          <div>较上日+{{ store.chinaAdd.localConfirmH5 }}</div>
          <div>{{ store.chinaAdd.localConfirm }}</div>
          <div>本土现有确诊</div>
        </section>
        <section>
          <div>较上日+{{ store.chinaAdd.nowConfirm }}</div>
          <div>{{ store.chinaAdd.nowConfirm }}</div>
          <div>现有确诊</div>
        </section>
        <section>
          <div>较上日+{{ store.chinaAdd.confirm }}</div>
          <div>{{ store.chinaAdd.confirm }}</div>
          <div>累计确诊</div>
        </section>
        <section>
          <div>较上日+{{ store.chinaAdd.noInfect }}</div>
          <div>{{ store.chinaAdd.noInfect }}</div>
          <div>无症状感染者</div>
        </section>
        <section>
          <div>较上日+{{ store.chinaAdd.importedCase }}</div>
          <div>{{ store.chinaAdd.importedCase }}</div>
          <div>境外输入</div>
        </section>
        <section>
          <div>较上日+{{ store.chinaAdd.dead }}</div>
          <div>{{ store.chinaAdd.dead }}</div>
          <div>累计死亡</div>
        </section>
      </div>
      <div class="box_left_pie"></div>
      <div class="box_left_line"></div>
    </div>
    <div class="box_center" id="china"></div>
    <div class="box_right">
      <table cellspacing="0" border="1" class="table">
        <thead>
          <tr>
            <th>地区</th>
            <th>新增确诊</th>
            <th>累计确诊</th>
            <th>治愈</th>
            <th>死亡</th>
          </tr>
        </thead>
        <transition-group enter-active-class="animate__animated animate__pulse" tag="tbody">
          <tr :key="item.name" v-for="item in store.item">
            <td align="center">{{ item.name }}</td>
            <td align="center">{{ item.today.confirm }}</td>
            <td align="center">{{ item.total.confirm }}</td>
            <td align="center">{{ item.total.heal }}</td>
            <td align="center">{{ item.total.dead }}</td>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import bg from '@/assets/bg.jpg'
import '@/assets/china.js' // 中国地图
import { geoCoordMap } from '@/assets/geoMap' // 坐标
import { visualExampleStore } from '@/store/visualExample'
import * as echarts from 'echarts' // echarts 用法
import 'animate.css'

const store = visualExampleStore()

onMounted(async () => {
  await store.getList()
  initCharts()
  initPie()
  initLine()
})
const initCharts = () => {
  const city = store.list.diseaseh5Shelf.areaTree[0].children
  const data = city.map(v => {
    return {
      name: v.name,
      value: geoCoordMap[v.name].concat(v.total.nowConfirm),
      children: v.children,
    }
  })

  const charts = echarts.init(document.querySelector('#china') as HTMLElement)
  charts.setOption({
    geo: {
      map: 'china',
      aspectScale: 0.8,
      layoutCenter: ['50%', '50%'],
      layoutSize: '100%',
      itemStyle: {
        // normal: {
        areaColor: {
          type: 'linear-gradient',
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#152E6E', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#0673AD', // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: '#0f5d9d',
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        // },
      },
      emphasis: {
        areaColor: '#0f5d9d',
      },

      regions: [
        {
          name: '南海诸岛',
          itemStyle: {
            areaColor: 'rgba(0, 10, 52, 1)',
            borderColor: 'rgba(0, 10, 52, 1)',
            // normal: {
            opacity: 0,
            label: {
              show: false,
              color: '#009cc9',
            },
            // },
          },
          label: {
            show: false,
            color: '#FFFFFF',
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: 'map',
        // 点击选择 变黄 变成单选
        // selectedMode: 'multiple',
        map: 'china',
        aspectScale: 0.8,
        layoutCenter: ['50%', '50%'], //地图位置
        layoutSize: '100%',
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: '#FFFFFF',
          fontSize: 12,
        },
        itemStyle: {
          // normal: {
          areaColor: '#0c3653',
          borderColor: '#1cccff',
          borderWidth: 1.8,
          // },
        },
        emphasis: {
          areaColor: '#56b1da',
          label: {
            show: true,
            color: '#fff',
          },
        },
        data: data,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        symbol: 'pin',
        symbolSize: [45, 45],
        label: {
          // normal: {
          show: true,
          color: '#fff',
          // },
          formatter(val: any) {
            return val.data.value[2]
          },
        },
        itemStyle: {
          // normal: {
          color: '#D8BC37', //标志颜色
          // },
        },
        data: data,
      },
    ],
  })

  charts.on('click', (e: any) => {
    store.item = e.data.children
  })
}

const initPie = () => {
  const charts = echarts.init(document.querySelector('.box_left_pie') as HTMLElement)
  charts.setOption({
    backgroundColor: '#123A50',
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '10',
          },
        },
        data: store.cityDetail.map(v => {
          return {
            name: v.city,
            value: v.confirm,
          }
        }),
      },
    ],
  })
}
const initLine = () => {
  const charts = echarts.init(document.querySelector('.box_left_line') as HTMLElement)

  charts.setOption({
    backgroundColor: '#123A50',
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: store.cityDetail.map(v => v.city),
      axisLine: {
        lineStyle: {
          color: '#fff',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#fff',
        },
      },
    },
    label: {
      show: true,
    },
    series: [
      {
        data: store.cityDetail.map(v => v.confirm),
        type: 'line',
        smooth: true,
      },
    ],
  })
}

const rowClass = ({ row, rowIndex }: any) => {
  return 'table_row_class'
}
</script>
<style scope lang="less">
* {
  padding: 0;
  margin: 0;
}
body,
html,
#app {
  margin: 0;
  padding: 0;
  display: block;
  text-align: inherit;
  height: 100%;
  overflow: hidden;
}
.box {
  display: flex;
  height: 100%;
  overflow: hidden;
  &_left {
    width: 20%;
    color: #fff;
    &_card {
      height: 110px;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto;
      section {
        height: 50px;
        background: #123a50;
        margin: 1px;
        border-radius: 3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        div {
          height: 15px;
          font-size: 5px;
        }
        div:nth-child(2) {
          color: #df7c7c;
          padding: 1px 0;
          font-size: 8px;
          font-weight: bold;
        }
      }
    }
    &_pie {
      height: 120px;
      margin-top: 20px;
    }
    &_line {
      height: 120px;
      margin-top: 20px;
    }
  }

  &_center {
    width: 60%;
  }
  &_right {
    width: 20%;
    color: #fff;
    font-size: 8px;
    overflow-y: auto;
    .table {
      width: 100%;
      height: 50%;
      &__header-wrapper {
        background: #000;
      }
    }
  }
}
.table_row_class {
  height: 20px;
  font-size: 1px;
}
</style>
