## Life Game in SolidJs

Port the [js version Life Game](https://github.com/dongyuwei/life-game) to Solid and TS.

CPU usage is 50%, still not as good as the vanilla DOM and js version, but better than the React version.

SolidJS 版康威生命游戏 CPU 占用大约在 50%左右，比之前 React 版本性能好一些（几年前是用react@^16.8.6测试。React 18 测试下来与Sodlid版性能相差无几），但是依然没有原生 DOM 版本性能高。代码可读性好一点，也比 React 版本更简洁。

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ pnpm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `pnpm dev` or `pnpm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `pnpm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
