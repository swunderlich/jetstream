Install modules in listener and publisher directories
Run skaffold dev in root directory 

Additional setup for example to work

```
kubectl apply -f https://raw.githubusercontent.com/nats-io/nack/main/deploy/rbac.yml
kubectl apply -f https://raw.githubusercontent.com/nats-io/nack/main/deploy/crds.yml
kubectl apply -f https://raw.githubusercontent.com/nats-io/nack/main/deploy/deployment.yml
```

See https://github.com/nats-io/nack#jetstream-controller for additional setup

Also see

- https://docs.nats.io/jetstream/jetstream
- https://github.com/nats-io/nats.js#jetstream
- https://github.com/nats-io/nats.deno/blob/main/jetstream.md
- https://github.com/nats-io/jetstream

