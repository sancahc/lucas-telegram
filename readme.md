# lucas-telegram

## Usage

```sh
$ yarn
$ source .env-dev
$ yarn dev
```

## Deployment

### Zeit's now

[now.sh](https://zeit.co/now) is a host capable of serving node.js apps
it has a command line tool to help with deployment and scale of services.

```sh
$ now remove lucas-dev
$ now --public --local-config now-dev.json
$ now alias --local-config now-dev.json
```

This bot wont work with multiple instances, and the `now.json` config
files are set to launch on only one region with 1 instance max.
But if for some reason now.sh tries to scale the server for you
and raise the number of instances you can scale down manually with:

```sh
$ now scale xxxxx.now.sh bru 0 0 
$ now scale xxxxx.now.sh sfo 1 1 
```


