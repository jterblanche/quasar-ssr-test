import { boot } from 'quasar/wrappers'
import { useStateStore } from 'stores/stateStore'
import DotEnv from 'dotenv';

DotEnv.config();

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  const stateStore = useStateStore()
  stateStore.isomorphicItem = process.env;
})
