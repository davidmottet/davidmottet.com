# My website
```sh
$ docker build -t davidmottet .
$ docker stack deploy davidmottet --compose-file stack.yml
```

```sh
$ openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout localhost-privkey.pem -out localhost-cert.pem
```