<template>
  <div>
    <div>
      <div class="chart">
        <div class="wrapper">
          <div class="sidebar">
            <!-- conteúdo da barra lateral -->
          </div>
          <div class="main-content">
            <!-- conteúdo principal -->
          </div>
        </div>
        <canvas id="myChart"></canvas>
      </div>
    </div>

    <div>
      <div class="grafico1">
        <canvas id="myChart2"></canvas>
      </div>

      <h1 class="h12">Destravamentos - Ativados - Travados - Desaparecidos</h1>
      <div>
        <canvas id="myChart3"></canvas>
      </div>
    </div>

    <div>
      <div class="sidebar">
        <Sidebar @update-chart-individual="updateChartIndividual" @update-chart-coletivo="updateChartColetivo" @update-chart-coletivo2="updateChartColetivo2"></Sidebar>
      </div>
      <div class="chart">
        <canvas id="myChart"></canvas>
      </div>
      <br>
      <h1>Essas são as metas individuais de destravamentos no Onboarding Enterprise</h1>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import Sidebar from './SideBar.vue';

export default {
  components: {
    Sidebar,
  },
  mounted() {
    this.drawChart();
    
  },
  methods: {
    drawChart() {
      const ctx = document.getElementById('myChart');
      const ctx2 = document.getElementById('myChart2');
      const ctx3 = document.getElementById('myChart3');

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Bia', 'Carol', 'Dani', 'Nath', 'Thay', 'Uzi'],
          datasets: [
            {
              label: 'Meta Realizada',
              data: [1, 5, 1, 3, 3, 2, 5],
              backgroundColor: '#FF6384', // cor da barra para 'Meta Realizada'
              borderWidth: 1,
              width: 20,
            },
            {
              label: 'Meta Não Realizada',
              data: [4, 2, 4, 2, 2, 3, 4],
              backgroundColor: '#36A2EB', // cor da barra para 'Meta Não Realizada'
              borderWidth: 1,
              width: 20,
            },
          ],
        },
        options: {
          layout: {
            padding: 90,
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      this.chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
          datasets: [
            {
              label: 'Travados',
              data: [12, 19, 3, 5, 2, 3],
              fill: 'origin',
            },
            {
              label: 'Destravados',
              data: [3, 5, 7, 1, 0, 6],
              fill: '+2',
            },
            {
              label: 'Em Onboarding',
              data: [1, 5, 2, 5, 2, 5],
              fill: 1,
            },
            {
              label: 'Sem próximos passos',
              data: [4, 6, 1, 4, 2, 7],
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
        updateChart(data) {   

      

      this.chart2.update();
      console.log(data);
    }
      });

      this.chart3 = new Chart(ctx3, {
              type: 'doughnut',
              data: {
                labels: ['Travados', 'Destravados', 'Em Onboarding', 'Sem próximos passos'],
                datasets: [
                  {
                    label: 'Quantidade',
                    data: [12, 7, 5, 10],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                    borderWidth: 1,
                    width: 20,
                  },
                ],
              },
              options: {
                cutout: '60%', // Controla o tamanho do círculo central vazado (de 0 a 100)
                plugins: {
                  legend: {
                    display: true,
                    position: 'right', // Posição da legenda (pode ser 'top', 'bottom', 'left', 'right')
                  },
                },
              },
            });
        
      
      this.chart3.update();
    },
    updateChartIndividual(data) {
      this.chart.data.datasets[0].data = [
        data.data1,
        data.data3,
        data.data5,
        data.data7,
        data.data9,
        data.data11,
      ];
      this.chart.data.datasets[1].data = [
        data.data2,
        data.data4,
        data.data6,
        data.data8,
        data.data10,
        data.data12,
      ];
      this.chart.update();
    },
    updateChartColetivo(data) {
      this.chart2.data.datasets[0].data = [
        data.data13,
        data.data14,
        data.data15,
        data.data16,
      ];
      this.chart2.update();
    },
    updateChartColetivo2(data) {
      this.chart3.data.datasets[0].data = [
        data.data17,
        data.data18,
        data.data19,
        data.data20,
      ];
     
      
      
      this.chart3.update();
    },
  },
};
</script>

<style >



.wrapper {
  display: flex;
  height: 100%;
}

.sidebar {
  margin:0;
  width: 200px;
  background-color: #ccc;
  padding: 20px;
}

.main-content {
  flex: 1;
  background-color: #fff;
  padding: 20px;
}



body {


  background-color: rgb(223, 214, 214);
  
}

img {

  margin-left: 50px;
  margin-right: -50px;
  margin-top: 30px
  wi
  
}

h1 { 

  margin-left: -80px ;
  margin-top: 40px;
  margin-bottom:-50px;
  padding-bottom: - 70px;

  color:rgb(222, 222, 35);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


.h12 { 

margin-left: -80px ;
margin-top:40px;
margin-bottom:-50px;
padding-bottom: - 70px;
color:rgb(222, 222, 35);

font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


.grafico {

  max-width: 200px;
}

canvas {

  width: 100px;
}

.imgs {

  display: flex;
}
</style>