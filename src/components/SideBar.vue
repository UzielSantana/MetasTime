<template>
  <div class="controlador">
  <div >
    <h2>Atualizador do gráfico Individual</h2>
    <form>
      <label for="data1">Meta Bia:</label>
      <input type="number" id="data1" v-model="data1">
      <label for="data2">Meta Atingida Bia:</label>
      <input type="number" id="data2" v-model="data2">
      <label for="data3">Meta Carol:</label>
      <input type="number" id="data3" v-model="data3">
      <label for="data4">Meta Atingida Carol:</label>
      <input type="number" id="data4" v-model="data4">
      <label for="data5">Meta Dani:</label>
      <input type="number" id="data5" v-model="data5">
      <label for="data6">Meta Atingida Dani:</label>
      <input type="number" id="data6" v-model="data6">
      <label for="data7">Meta Nath:</label>
      <input type="number" id="data7" v-model="data7">
      <label for="data8">Meta Atingida Nath:</label>
      <input type="number" id="data8" v-model="data8">
      <label for="data9">Meta Thay:</label>
      <input type="number" id="data9" v-model="data9">
      <label for="data10">Meta Atingida Thay:</label>
      <input type="number" id="data10" v-model="data10">
      <label for="dat11">Meta Uzi:</label>
      <input type="number" id="data11" v-model="data11">
      <label for="data12">Meta Atingida Uzi:</label>
      <input type="number" id="data12" v-model="data12">

      <button type="button" @click="updateChart">Atualizar</button>
    </form>

    <h2>Atualizador Semanal</h2> 
    <form> 
      <label style="font-weight: bold"> Travados </label> <br>
      <label for="data13">Semana A:</label>
      <input type="number" id="data13" v-model="data13">
      <label for="data14">Semana B</label>
      <input type="number" id="data14" v-model="data14">
      <label for="data15">Semana C:</label>
      <input type="number" id="data15" v-model="data15">
      <label for="data16">Semana D:</label>
      <input type="number" id="data16" v-model="data16">
      <label for="data17">Semana E:</label>
      <input type="number" id="data17" v-model="data17">
      <label for="data18"> Semana F: </label>
      <input type="number" id="data18" v-model="data18">
      <br><br>
      <label style="font-weight: bold"> Destravados </label> <br>
      <label for="data19">Semana A:</label>
      <input type="number" id="data19" v-model="data19">
      <label for="data20">Semana B</label>
      <input type="number" id="data20" v-model="data20">
      <label for="data21">Semana C:</label>
      <input type="number" id="data21" v-model="data21">
      <label for="data22">Semana D:</label>
      <input type="number" id="data22" v-model="data22">
      <label for="data23">Semana E:</label>
      <input type="number" id="data23" v-model="data23">
      <label for="data24"> Semana F: </label>
      <input type="number" id="data24" v-model="data24">
      <br><br>
      <label style="font-weight: bold"> Em Onboarding </label> <br>
      <label for="data25">Semana A:</label>
      <input type="number" id="data25" v-model="data25">
      <label for="data26">Semana B</label>
      <input type="number" id="data26" v-model="data26">
      <label for="data27">Semana C:</label>
      <input type="number" id="data27" v-model="data27">
      <label for="data28">Semana D:</label>
      <input type="number" id="data28" v-model="data28">
      <label for="data29">Semana E:</label>
      <input type="number" id="data29" v-model="data29">
      <label for="data30"> Semana F: </label>
      <input type="number" id="data30" v-model="data30">


      <button type="button" @click="updateChartColetivo">Atualizar</button>
    </form>

    <h2>Atualizador do Gráfico Geral</h2>
    <form>
   
      <label for="data31"> Travados: </label>
      <input type="number" id="data31" v-model="data31">
      <label for="data32"> GoLive Marcado:</label>
      <input type="number" id="data32" v-model="data32"><br>
      <label for="data34">Em Onboarding:  </label>
      <input type="number" id="data33" v-model="data33">
      <label for="data35"> Desaparecidos: </label>
      <input type="number" id="data34" v-model="data34">
      <button type="button" @click="updateChartColetivo2">Atualizar</button>
    </form>
  </div>

</div>
</template>

<script>


export default {
  data() {
    return {
      data1: 0,
      data2: 0,
      data3: 0,
      data4: 0,
      data5: 0,
      data6: 0,
      data7: 0,
      data8: 0,
      data9: 0,
      data10: 0,
      data11: 0,
      data12: 0,
      data13: 0,
      data14: 0,
      data15: 0,
      data16: 0,
      data17: 0,
      data18: 0,
      data19:0,
      data20:0,
      data21:0,
      data22:0,
      data23:0,
      data24:0,
      data25:0,
      data26:0,
      data27:0,
      data28:0,
      data29:0,
      data30:0,
      data31:0,
      data32:0,
      data33:0,
      data34:0,
   
     
    }
  },
  methods: {
   
    updateChart() {
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
        data11: this.data11,
        data12: this.data12
      });
    },
    updateChartColetivo() {
      this.$emit('update-chart-coletivo', {
        data13: this.data13,
        data14: this.data14,
        data15: this.data15,
        data16: this.data16,
        data17: this.data17,
        data18: this.data18,
        data19: this.data19,
        data20: this.data20,
        data21: this.data21,
        data22: this.data22,
        data23: this.data23,
        data24: this.data24,
        data25: this.data25,
        data26: this.data26,
        data27: this.data27,
        data28: this.data28,
        data29: this.data29,
        data30: this.data30,
        
        

      });
    },
    updateChartColetivo2() {
      this.$emit('update-chart-coletivo2', {
      
        data31: this.data31,
        data32: this.data32,
        data33: this.data33,
        data34: this.data34,
        
      });
    },
  },
};
</script>


<style>

.controlador {

  display: flex;
  flex-direction: column;
  border-width: 5px;
  border-spacing: ;
  border-style: solid;
  border-color: rgb(0, 106, 255);
  
}

</style>