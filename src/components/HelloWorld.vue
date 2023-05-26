<template>

    <nav class="navbar">
      <span> <h1> Onboarding Enterprise </h1></span>

     
  
                  
     </nav>
  <div> 
    <div class="wrapper"> 
    <div >     
          <div class="main-content">
           
            <h1> Metas Individuais (semana atual)</h1>
            <br><br><br><br><br>
            <br><br>
                
        
      </div>
      <div style="width: 700px; height: 700px;" > 
      <canvas id="myChart"></canvas>
    </div>
    </div>
  
    <div style="width: 600px; height: 600px;">
      <h1> Metas Semanais </h1> 
      <br><br>
      <br><br>

     <canvas id="myChart2"></canvas>
     

      <h1 class="h12">Destravamentos - Ativados - Travados - Desaparecidos</h1>
      <div style="width: 700px; height: 700px;">
        <canvas id="myChart3"></canvas>
      </div>
    </div>

    
       
    
  </div>    

    </div>

    
    <div id="sidebar" class="sidebar">
        <Sidebar @update-chart-individual="updateChartIndividual" @update-chart-coletivo="updateChartColetivo" @update-chart-coletivo2="updateChartColetivo2"></Sidebar>
      </div>


    <footer>  


      <h1>  APAIXONADOS POR DADOS </h1>
      
      <h3> Versão 1.0</h3>
    </footer>
    
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
          labels: ['Semana A', 'Semana B ', 'Semana C', 'Semana D', 'Semana E', 'Semana F'],
          datasets: [
            {
              label: 'Travados',
              data: [5, 8, 5, 5, 7, 4],
              fill: 'origin',
            },
            {
              label: 'Destravados',
              data: [3, 5, 7, 1, 0, 6],
              fill: '+2',
            },
            {
              label: 'Em Onboarding',
              data: [1, 5, 2, 12, 2, 5],
              fill: 1,
            },
            {
              label: 'Sem próximos passos',
              data: [4, 6, 10, 4, 2, 7],
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max:70
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
                labels: ['Travados', 'Go Live Marcado', 'Em Onboarding', 'Sem próximos passos'],
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
                width:100,
                height:200,

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
        data.data17,
        data.data18,
       
        ];
        this.chart2.data.datasets[1].data = [
        data.data19,
        data.data20,
        data.data21,
        data.data22,
        data.data23,
        data.data24,
        
        ];
        this.chart2.data.datasets[2].data = [
        data.data25,
        data.data26,
        data.data27,
        data.data28,
        data.data29,
        data.data30,
       
       

      ];
      this.chart2.update();
    },
    updateChartColetivo2(data) {
      this.chart3.data.datasets[0].data = [
        data.data31,
        data.data32,
        data.data33,
        data.data34,
      
      ];
     
      
      
      this.chart3.update();
    },
  },
};
</script>

<style >
body {

 
}
.navbar {
      height: 30px;
      width: 1650px;
      padding: 15px 10px;
      background: #7386D5;
      border: none;
      border-radius:10px;
      margin-bottom: 40px;
      margin-left: -9px;
      box-shadow: 15px 10px 10px rgba(27, 25, 25, 0.2); 
      cursor: pointer;
  }
  
  .navbar-btn {
      box-shadow: none;
      outline: none !important;
      border: none;
  }
  .navbar-toggler {
    border-bottom: 1px solid #47748b;
   
   


  }
  
.navbar h1 {

      height: 50px;
      margin-top: 0px;
      margin-left: 1020px;
      text-shadow: inset -1px -1px -1px rgba(0,0,0,5);
      color: rgba(0,0,0, 0.3);


        

      }

 
  
.wrapper {
  display: flex;
  flex-direction: row;

  height: 1850px;
  margin-left: 200px;




}

#sidebar {
      min-width: 210px;
      max-width: 210px;
      background: #7386D5;
      color: #fff;
      transition: all 0.3s;
      margin-top: -932px;
      margin-left: -5px;
      cursor: pointer;
      box-shadow: 5px 5px 5px rgba(27, 25, 25, 0.2); /* Adapte os valores de acordo com o efeito desejado */
    

  }
  
  #sidebar.active {
      margin-left: -250px;
  }
  
  #sidebar .sidebar-header {
      padding: 20px;
      background: #6d7fcc;
     
      ;
       }
  
  #sidebar ul.components {
      padding: 20px 0;
      border-bottom: 1px solid #47748b;
    
  }
  


  #sidebar ul p {
      color: #fff;
      padding: 10px;
  }
  
  #sidebar ul li a {
      padding: 10px;
      font-size: 1.1em;
      display: block;
  }
  
  #sidebar ul li a:hover {
      color: #7386D5;
      background: #fff;
  }


footer h1 {


  margin-left: 50px;
  margin-top:70px;
  margin-bottom:70px;
  padding: 20px;
  


  }

footer h3 {


margin-left: 1200px;
margin-top:-100px;




}

header h1 {


  margin-left: 40px;
  padding-bottom: 50px


}

#myChart {

  
  width: 500px;
  margin-left: 50px ;

}
#myChart2{

  
width: 500px;
margin-left: -50px ;

}

.container {
  
  display: flex;
  flex-direction: row;

}


#myChart3 {

  width: 20px;
  height: 10px;

}

.wrapper {
  display: flex;
  height: 100%;
  
}

.sidebar {
  display: flex;
  flex-direction:column;
  margin-left: 50px;
  margin-top: 500px;
  width: 200px;
  background-color: #ccc;
  padding: 20px;
}

.main-content {
 
  
  padding: 20px;
}



body {


  background-color: rgb(223, 214, 214);
  
}

img {

 width: 1500px;
 height: 250px;

  
}

h1 { 

  margin-left: -80px ;
  margin-top: 40px;
  margin-bottom:-50px;
  padding-bottom: - 70px;

  color:rgb(35, 85, 222);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


.h12 { 

margin-left: -80px ;
margin-top:40px;
margin-bottom:-50px;
padding-bottom: - 70px;
color:rgb(35, 85, 222);

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