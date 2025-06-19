# AI 基础能力 体验平台

## 环境准备

1. pnpm install

## 创建一个新的model

eg: 创建一个user model

```bash
npx nx g @nx/react:library user --directory=packages/models/user --bundler=none &&
rm -rf packages/models/user/src/lib/*.{tsx,scss}
```

## 创建一个新的组件（一个 demo 作为一个组件）

```bash
npx nx g @nx/react:library speech \
--directory=packages/react/speech \
--bundler=vite \
--publishable \
--importPath=@baidu/ai-cape-basic-speech \
--buildable
```

## 创建一个独立应用

```bash
npx nx g @nx/react:application react-core --directory=packages/apps/react-core
```
