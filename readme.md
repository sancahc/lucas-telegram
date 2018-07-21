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

By default, it will try to scale your bot by launching multiple instances of 
it, on 2 different regions. However, Telegram's API dont play well with
multiple instances of bots using the same token, it will throw a conflict
error to the bot, and this will currently freeze the bot as the current
code don't handle that exception.

So, for now, you will have to assure that there is only one instance of
this server running at all times, one way of manually doing that is to 
use the command `now scale` after launch to explicit say that you want
your code running on one region only (chose between `sfo` or `bru`),
with both minimum and maximum number of instances set to 1.

```sh
$ source .env-prod
$ now remove lucas-telegram
$ now --public -e BOT_TOKEN="$BOT_TOKEN" --regions sfo
$ now scale xxxxx.now.sh bru 0 0
$ now scale xxxxx.now.sh sfo 1 1
```

