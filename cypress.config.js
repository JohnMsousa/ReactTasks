export default {
  chromewebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://react-tasks-rose.vercel.app",
    // não vai limpar o estdo do browser entre os testes
    testIsolation: false,
  },
};
