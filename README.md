# Multiple Deploys on EVM (cut version)

## Возможности

1. Default "Hello world" contract деплой
2. Nft contract деплой и минт
3. Token contract деплой
4. LayerZero bridge создание своего токена на 2 указаных сетях и бридж между ними

---

## Installation

### Prerequisites

```
nodeJS >= 16.0
npm
```

Install dependencies and create environment file:

```
npm install
cp wallets-example.json wallets.json
```

## Usage

- После установки надо заполнить приватники в wallets.json. Для теста рекомендую начать с 1 и если все получиться приступать к мультидеплою
- В каждей команде есть флаг к примеру ``` hardhat deploy-default --network moonbeam ``` флаг moonbeam который указывает на EVM сеть в
  которую будет происходить деплой, в некоторых вариантах флагов несколько
- Доступные EVM сети в файле hardhat.config.js в обекте networks. Можете так же добавить нужную EVM сеть самостоятельно по примеру
- Перед стартом убедитесь что у вас есть средства в выбраной сети на оплату комиссий для масовой отправки с бинанса рекомендуж юзать так же
  мой реп https://github.com/darcksday/all-in-one-python

### Варианты деплоев:

1. Default: ``` hardhat deploy-default --network moonbeam ```
2. Nft ``` hardhat deploy-nft --network moonbeam ```
3. Token  ``` hardhat deploy-token --network moonbeam ```
4. Layer Zero create tokens and bridge  ```hardhathardhat deploy-LZ --network moonbeam --bridgenetwork polygon --ether 1.2``` Где  
   **netwok** - єто с какой сети бридж, **bridgenetwork** - куда бриджить, **ether** обезательная комса которая будет снята для успешной
   транзы с
   сети указаной в **netwok** (рекомендую ставить от 1)
   Для того чтобы понимать с какой сети в какую возможно бриджить заходим в доку где endpoints должны быть
   разные https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids

---

### В полной версии доступно

1. Деплой контрактов на зксинк
2. Добавление в пулы своих токенов

- ПС: Это мини фремворк поэтому любое взаемодествие с контрактами можно дополнять