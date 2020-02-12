# Deploy Instructions


## Deploying the proxy
For Deploying proxy run the following command through Command line or Invoke from Jekins Goal

```sh
$ cd {Proxy_to_be_deployed}
$ mvn apigee-enterprise:deploy -P{env-name} -Dusername={username} -Dpassword={password} -Dorg={org-name}
```
or
```sh
$ cd {Proxy_to_be_deployed}
 mvn install -P{env-name} -Dusername={username} -Dpassword={password} -Dorg={orgname} -Doptions=validate,update
 ```

### Response from server if successful

```sh
Response returned by the server
 **************************
200  OK
accept-encoding: gzip
content-length: 717
content-type: application/json
date: Mon, 08 Jan 2018 21:16:41 GMT
server: [Apigee LB]
access-control-allow-origin: [*]
access-control-allow-methods: [GET, PUT, POST, DELETE]
connection: [keep-alive]
access-control-max-age: [3628800]
access-control-allow-headers: [origin, x-requested-with, accept]
{
  "aPIProxy": "*****",
  "configuration": {
    "basePath": "/",
    "steps": []
  },
  "environment": "***",
  "name": "2",
  "organization": "****",
  "revision": "2",
  "state": "deployed",
  "server": [
    {
      "status": "deployed",
      "type": [
        "message-processor"
      ],
      "uUID": "ecdd4c96-b563-4c7b-86b5-c3522c271fd0"
    },
    {
      "status": "deployed",
      "type": [
        "message-processor"
      ],
      "uUID": "8f3e1cdb-cb8c-4126-a457-e0d99ff80a7f"
    },
    {
      "status": "deployed",
      "type": [
        "router"
      ],
      "uUID": "02a2ab5b-6dfb-47a3-bc11-48759cd108b5"
    },
    {
      "status": "deployed",
      "type": [
        "router"
      ],
      "uUID": "51304f9d-892b-4a65-a905-b1555f7bb197"
    }
  ]
}

```


## Deploying Configuration

```sh
$ cd {Proxy_to_be_deployed}
$ mvn apigee-config:kvms  -P{env-name} -Dusername={username} -Dpassword={password} -Dorg={org-name} -Dapigee.config.options=create
```
or

```sh
$ cd {Proxy_to_be_deployed}
 mvn install -P{env-name} -Dusername={username} -Dpassword={password} -Dorg={orgname} -Dapigee.config.options=create
 ```
