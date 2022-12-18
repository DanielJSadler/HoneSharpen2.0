---
inject: true
append: true
to: src/components/<%=atomic%>s/index.ts
---
export * from './<%=name%>';
```

`app/_templates/component/with-prompt/core.ejs.t`
