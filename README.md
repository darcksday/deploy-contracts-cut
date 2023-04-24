# Multiple Deploys on EVM (cut version)

## Возможности

1. Default "Hello world" contract деплой
2. Nft contract деплой и минт
3. Token contract деплой

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
  которую будет происходить деплой.
- Доступные EVM сети в файле hardhat.config.js в обекте networks. Можете так же добавить нужную EVM сеть самостоятельно по примеру
- Перед стартом убедитесь что у вас есть средства в выбраной сети на оплату комиссий для масовой отправки с бинанса рекомендуж юзать так же
  мой реп https://github.com/darcksday/all-in-one-python

### Варианты деплоев:

1. Default: ``` hardhat deploy-default --network moonbeam ```
2. Nft ``` hardhat deploy-nft --network moonbeam ```
3. Token  ``` hardhat deploy-token --network moonbeam ```

---

### В полной версии доступно

1. Бридж своего задеплоиного токена через LayerZero в укащаных сетях
2. Деплой контрактов на зксинк
3. Добавление в пулы своих токенов автоматом

- ПС: Это мини фремворк поэтому любое взаемодествие с контрактами можно дополнять