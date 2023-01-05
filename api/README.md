# Hobbyshop API

Access mongo express: (mongo express)[http://localhost:8081] 

Access redis cli:
```console
$ docker exec -it api_cache_1 sh

/data $ redis-cli
```

Next, login in redis:
```console
AUTH *password*
```

To see all session keys:
```console
KEYS *
```

To delete all keys:
```console
FLUSHDB
```
