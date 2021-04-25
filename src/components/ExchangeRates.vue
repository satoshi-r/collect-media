<template>
  <div class="sidebar-section exchange-rates">
    <div class="sidebar-title">КУРСЫ ЦБ РФ</div>
    <div v-for="coin in coins" :key="coin" class="exchange-rates-item">
      <img :src="icons[coin.name]" class="exchange-rates-icon" alt="coin" />
      <div class="exchange-rates-name">{{ coin.name }}</div>
      <div class="exchange-rates-value">{{ coin.value }} &#8381;</div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import iconUSD from "@/assets/img/USD.svg";
import iconEUR from "@/assets/img/EUR.svg";

export default {
  data() {
    return {
      coins: [],

      icons: {
        USD: iconUSD,
        EUR: iconEUR,
      },
    };
  },

  methods: {
    async serializeExchangeRates() {
      const data = await api.getExchangeRates();
      const currentCoins = ["USD", "EUR"];

      currentCoins.forEach((coin) => {
        const name = data.Valute[coin].CharCode;
        const value = data.Valute[coin].Value.toString().replace(".", ",");
        this.coins.push({
          name,
          value,
        });
      });
    },
  },

  mounted() {
    this.serializeExchangeRates();
  },
};
</script>
