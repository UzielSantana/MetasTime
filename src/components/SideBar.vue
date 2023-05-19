<template>
  <div>
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

    <h2>Atualizador do gráfico Coletivo</h2>
    <form>
      <label for="data13">Travados:</label>
      <input type="number" id="data13" v-model="data11">
      <label for="data14">Destravados:</label>
      <input type="number" id="data14" v-model="data12">
      <label for="data15">Clientes em Onboarding:</label>
      <input type="number" id="data13" v-model="data13">
      <label for="data14">Clientes sem próximos passos:</label>
      <input type="number" id="data14" v-model="data14">

      <button type="button" @click="updateChartColetivo">Atualizar</button>
    </form>

    <h2>Atualizador do gráfico Coletivo2</h2>
    <form>
      <label for="data17">Meta1:</label>
      <input type="number" id="data17" v-model="data17">
      <label for="data18"> Meta2: </label>
      <input type="number" id="data18" v-model="data18">
      <label for="data19"> Meta 3:</label>
      <input type="number" id="data19" v-model="data19">
      <label for="data20"> Meta4: </label>
      <input type="number" id="data20" v-model="data20">

      <button type="button" @click="updateChartColetivo2">Atualizar</button>
    </form>
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
      data20:0
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
      });
    },
    updateChartColetivo2() {
      this.$emit('update-chart-coletivo2', {
        data17: this.data17,
        data18: this.data18,
        data19: this.data19,
        data20: this.data20,
      });
    },
  },
};
</script>