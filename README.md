# Pinia Store Helper

A vue plugin to help manage complex pinia stores.

## Installation and usage

### Register plugin

```typescript
import { piniaStoreHelperPlugin } from "pinia-store-helper";
const app = createApp(App)
app.use(createPinia())
app.use(piniaStoreHelperPlugin)
```

### Component
Then add the component.
```html
<PiniaStoreHelper>
    <template #main>
        <!-- Your components goes here -->
    </template>
    <template #error>
        An error occured.
    </template>
</PiniaStoreHelper>
```

### Usage

```typescript
// With the following store:
const useMyStore = defineStore("myStore", () => {
    const counter = ref<null | number>(null);
    return { counter };
})
const store = useMyStore();
const { counter } = storeToRefs(store);
// counter is Ref<string | null>
// If you know you are at a certain place where counter has been properly initialized, then use nonNullRef
const counter = nonNullRef(store, 'counter')
// counter is now Ref<string>, and will show an error if not.
```
