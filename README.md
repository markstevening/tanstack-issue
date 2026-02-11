Tanstack start - testing local only components using createLocalOnlyFn wrapped client side behaviour (Tanstack DB)

Component: AddToListButton /src/components/add-to-list-button.tsx

Behaviour works as expected, but hydration errors are shown in the browser console. Removing the component from the index.tsx and restarting the dev server clears the error, though there seems to be inconsistent behaviour without restarting the dev server.

Workarounds:

Adding ssr: false to the route in \_\_root.tsx prevents this hydration error
Adding SPA mode to the tsconfig.json (per https://tanstack.com/start/latest/docs/framework/react/guide/spa-mode ) orevents this error

These workarounds may not be suitable for all projects.

Questions:

Why is there a hydration error when the component is wrapped within the ClientOnly tags, and the function called is wrapped within createClientOnlyFn ? I understand these should precvent the server trying to render the component, and avoid the hydration issues.

Are there any issues around recompilation that can lead to hydration issues when the dev server is not restarted in between changes?

Tested latest Chrome: 144.0.7559.133, Firefox 147.0.3 (aarch64)
on MacOs Version 26.2 (25C56)

client:733 [vite] connecting...
client:827 [vite] connected.
react-dom_client.js?v=662791f5:7129 Uncaught Error: There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.
at throwException (react-dom_client.js?v=662791f5:7129:15)
at throwAndUnwindWorkLoop (react-dom_client.js?v=662791f5:12622:15)
at renderRootConcurrent (react-dom_client.js?v=662791f5:12451:19)
at performWorkOnRoot (react-dom_client.js?v=662791f5:11766:152)
at performWorkOnRootViaSchedulerTask (react-dom_client.js?v=662791f5:13505:9)
at MessagePort.performWorkUntilDeadline (react-dom_client.js?v=662791f5:36:50)Caused by: Error: Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.
at mountSyncExternalStore (react-dom_client.js?v=662791f5:5993:19)
at Object.useSyncExternalStore (react-dom_client.js?v=662791f5:18758:18)
at exports.useSyncExternalStore (chunk-PQOTZ4DQ.js?v=662791f5:962:36)
at useLiveQuery (@tanstack_react-db.js?v=662791f5:15184:58)
at listContains (local.ts:26:20)
at AddToListButton (add-to-list-button.tsx:11:18)
at Object.react_stack_bottom_frame (react-dom_client.js?v=662791f5:18509:20)
at renderWithHooks (react-dom_client.js?v=662791f5:5654:24)
at updateFunctionComponent (react-dom_client.js?v=662791f5:7475:21)
at beginWork (react-dom_client.js?v=662791f5:8525:20)
throwException @ react-dom_client.js?v=662791f5:7129
throwAndUnwindWorkLoop @ react-dom_client.js?v=662791f5:12622
renderRootConcurrent @ react-dom_client.js?v=662791f5:12451
performWorkOnRoot @ react-dom_client.js?v=662791f5:11766
performWorkOnRootViaSchedulerTask @ react-dom_client.js?v=662791f5:13505
performWorkUntilDeadline @ react-dom_client.js?v=662791f5:36

# Getting Started

To run this application:

```bash
pnpm install
pnpm dev
```

\\
