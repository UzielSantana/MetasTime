<template>
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
          <Sidebar
            @update-chart-individual="updateChartIndividual"
            @update-chart-coletivo="updateChartColetivo"
            @update-chart2="updateChart2"
          ></Sidebar>
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
              backgroundColor: '#FF6384',
              borderWidth: 1,
              width: 20,
            },
            {
              label: 'Meta Não Realizada',
              data: [4, 2, 4, 2, 2, 3, 4],
              backgroundColor: '#36A2EB',
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
        });
  
        this.chart3 = new Chart(ctx3, {
            type: 'bar',
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
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
        });
      },
      updateChartIndividual(data) {
        this.$emit('update-chart-individual', {
                data1: this.data1,
        data2: this.data2,
        data3: this.data3,
        data4: this.data4,
        data5: this.data5,
        data6: this.data6,
        data7: this.data7,
        data8: this.data8,
        data9: this.data9,
        data10: this.data10,
        data11: 0,
        data12: 0,}
      )},
      updateChartColetivo() {
      this.$emit('update-chart-coletivo', {
        data11: this.data11,
        data12: this.data12,
        data13: this.data13,
        data14: this.data14,
      });
    },
      updateChart2(data) {
        this.chart2.data.datasets = data.datasets;
        this.chart2.update();
      },
    },
  };
  </script>