import {
  ref,
  type App,
  type Plugin,
  type Ref,
  type UnwrapRef,
} from 'vue'
import PiniaStoreHelper from './PiniaStoreHelper.vue'

const key = 'stPlugin'

const error = ref(false)
export const piniaStoreHelperPlugin: Plugin = {
  install(app: App, options: any[]) {
    // @ts-ignore
    app.component('PiniaStoreHelper', PiniaStoreHelper)
    app.provide(key, error)
  }
}

type NonNullableRef<T> = T extends Ref<infer U> ? Ref<NonNullable<U>> : Ref<NonNullable<T>>

export function nonNullRef<Store extends Record<Key, Ref<any>>, Key extends keyof Store>(
  store: Store,
  key: Key
): NonNullableRef<UnwrapRef<NonNullable<Store[Key]['value']>>> {
  if (store[key].value === null) {
    error.value = true
    // Rely on logic elsewhere to throw 
  }
  if (typeof store[key].value === 'undefined') {
    error.value = true
    // Rely on logic elsewhere to throw 
  }
  return store[key] as NonNullableRef<UnwrapRef<Store[Key]['value']>>
}
