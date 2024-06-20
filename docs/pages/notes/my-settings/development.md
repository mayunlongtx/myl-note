## 个人开发配置

### node 相关

nvm

[mise](https://github.com/jdx/mise)

#### 常用命令
```shell
# Install a runtime and set it as the global default

mise use --global node@20

# Install a runtime and set it as the project default

mise use node@20


```

[@antfu/ni](https://github.com/antfu-collective/ni) ni - use the right package manager

#### 常用命令

```shell
# ni - install

ni

# nr - run

nr

# nu - upgrade
# npm upgrade
# yarn upgrade (Yarn 1)
# yarn up (Yarn Berry)
# pnpm update
# bun update

nu
nu -i

# (not available for npm & bun)
# yarn upgrade-interactive (Yarn 1)
# yarn up -i (Yarn Berry)
# pnpm update -i


```