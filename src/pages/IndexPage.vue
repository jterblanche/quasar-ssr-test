<template>
  <q-page>
    <h1>Quasar SSR Demo</h1>
    <p>
      Read the entire Quasar SSR documentation section at
      <a href="https://quasar.dev/quasar-cli-vite/developing-ssr/introduction"
        >https://quasar.dev/quasar-cli-vite/developing-ssr/introduction</a
      >
      very carefully.
    </p>
    <p>
      SSR + PWA is a killer combo:
      <a href="https://quasar.dev/quasar-cli-vite/developing-ssr/ssr-with-pwa"
        >https://quasar.dev/quasar-cli-vite/developing-ssr/ssr-with-pwa</a
      >
    </p>
    <pre>{{ stateStore.isomorphicItem }}</pre>
  </q-page>
</template>

<script lang="ts">
export default {
  // preFetch(prefetchArgs) {
  // console.log('prefetchArgs', prefetchArgs);
  // const { currentRoute, previousRoute, redirect, urlPath, publicPath } =
  //   prefetchArgs;
  // const stateStore = useStateStore();
  /**
   * IMPORTANT: Read the entire page at https://quasar.dev/quasar-cli-vite/prefetch-feature to understand how this works.
   *
   * This runs on the server, not on the client.
   * No access to this or component instances here.
   * This is the place to do data fetching and other server side things.
   * If this is running an async operation, it needs to return a promise.
   * It is HIGHLY recommended to populate a Pinia store here, which can then be used by client side code.
   * For example, here we're setting the value of a store property, and in the component we're using the store property.
   */
  // stateStore.isomorphicItem.value = 'This is an isomorphic item';
  /**
   * The prefetchArgs object contains a ssrContext property (not been able to confirm this), which is supplied server-side, and can be useful for debugging.
   * I suspect it is the same object as returned by useSSRContext() from the vue module.
   */
  // const ssrContext = useSSRContext();
  // In the example below, this prefetch hook can redirect to a login page if the user is not authenticated.
  // We assume here we already wrote the authentication logic
  // in the Pinia Store, so take as a high-level example only.
  // if (!stateStore.authenticated) {
  //   redirect({ path: '/login' });
  // }
  /**
   * It is good UX practice to let the user know if something async is happening.
   * When you add Quasar LoadingBar plugin to your app, Quasar CLI will use it while it runs the preFetch hooks by default.
   * See https://quasar.dev/quasar-plugins/loading-bar
   *
   * Another option is the Quasar Loading plugin.
   * https://quasar.dev/quasar-plugins/loading
   */
  // },
};
</script>

<script setup lang="ts">
/**
 * This script runs in a different scope on the client,
 * we therefore need to instantiate the store again.
 */
import { useStateStore } from '../stores/stateStore';
const stateStore = useStateStore();

console.log(process.env);

// We can now access the store properties and methods.
</script>
