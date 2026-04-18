<h1 id="url-shorten">URL Shorten v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The API provide endpoints to create, retrieve, update, and delete short URLs

Base URLs:

<h1 id="url-shorten-urlshorten">URLShorten</h1>

## URLShortenController_createShortenURL

<a id="opIdURLShortenController_createShortenURL"></a>

> Code samples

```javascript
const inputBody = '{
  "url": "https://nestjs.com"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/shorten',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X POST /shorten \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

`POST /shorten`

> Body parameter

```json
{
  "url": "https://nestjs.com"
}
```

<h3 id="urlshortencontroller_createshortenurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateShortenDTO](#schemacreateshortendto)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "1",
  "url": "https://nestjs.com",
  "short_code": "nx82p1",
  "created_at": "2024-03-20T14:30:00Z",
  "updated_at": "2024-03-21T10:00:00Z",
  "access_count": "150"
}
```

<h3 id="urlshortencontroller_createshortenurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResponseShortenDTO](#schemaresponseshortendto)|

<aside class="success">
This operation does not require authentication
</aside>

## URLShortenController_getOriginalURL

<a id="opIdURLShortenController_getOriginalURL"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/shorten/{code}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X GET /shorten/{code} \
  -H 'Accept: application/json'

```

`GET /shorten/{code}`

<h3 id="urlshortencontroller_getoriginalurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> default Response

```json
{
  "id": "1",
  "url": "https://nestjs.com",
  "short_code": "nx82p1",
  "created_at": "2024-03-20T14:30:00Z",
  "updated_at": "2024-03-21T10:00:00Z",
  "access_count": "150"
}
```

<h3 id="urlshortencontroller_getoriginalurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|[ResponseShortenDTO](#schemaresponseshortendto)|

<aside class="success">
This operation does not require authentication
</aside>

## URLShortenController_updateShortenURL

<a id="opIdURLShortenController_updateShortenURL"></a>

> Code samples

```javascript
const inputBody = '{
  "url": "https://nestjs.com"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/shorten/{code}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X PUT /shorten/{code} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

`PUT /shorten/{code}`

> Body parameter

```json
{
  "url": "https://nestjs.com"
}
```

<h3 id="urlshortencontroller_updateshortenurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|
|body|body|[CreateShortenDTO](#schemacreateshortendto)|true|none|

> Example responses

> default Response

```json
{
  "id": "1",
  "url": "https://nestjs.com",
  "short_code": "nx82p1",
  "created_at": "2024-03-20T14:30:00Z",
  "updated_at": "2024-03-21T10:00:00Z",
  "access_count": "150"
}
```

<h3 id="urlshortencontroller_updateshortenurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|[ResponseShortenDTO](#schemaresponseshortendto)|

<aside class="success">
This operation does not require authentication
</aside>

## URLShortenController_deleteShortenURL

<a id="opIdURLShortenController_deleteShortenURL"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/shorten/{code}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X DELETE /shorten/{code} \
  -H 'Accept: application/json'

```

`DELETE /shorten/{code}`

<h3 id="urlshortencontroller_deleteshortenurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> default Response

```json
{
  "status": true,
  "mensagem": "string"
}
```

<h3 id="urlshortencontroller_deleteshortenurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|[ResponseOk](#schemaresponseok)|

<aside class="success">
This operation does not require authentication
</aside>

## URLShortenController_statsShortenURL

<a id="opIdURLShortenController_statsShortenURL"></a>

> Code samples

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/shorten/{code}/stats',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```shell
# You can also use wget
curl -X GET /shorten/{code}/stats \
  -H 'Accept: application/json'

```

`GET /shorten/{code}/stats`

<h3 id="urlshortencontroller_statsshortenurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|none|

> Example responses

> default Response

```json
{
  "id": "1",
  "url": "https://nestjs.com",
  "short_code": "nx82p1",
  "created_at": "2024-03-20T14:30:00Z",
  "updated_at": "2024-03-21T10:00:00Z",
  "access_count": "150"
}
```

<h3 id="urlshortencontroller_statsshortenurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|[ResponseShortenDTO](#schemaresponseshortendto)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CreateShortenDTO">CreateShortenDTO</h2>
<!-- backwards compatibility -->
<a id="schemacreateshortendto"></a>
<a id="schema_CreateShortenDTO"></a>
<a id="tocScreateshortendto"></a>
<a id="tocscreateshortendto"></a>

```json
{
  "url": "https://nestjs.com"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|true|none|The original long URL to be shortened|

<h2 id="tocS_ResponseShortenDTO">ResponseShortenDTO</h2>
<!-- backwards compatibility -->
<a id="schemaresponseshortendto"></a>
<a id="schema_ResponseShortenDTO"></a>
<a id="tocSresponseshortendto"></a>
<a id="tocsresponseshortendto"></a>

```json
{
  "id": "1",
  "url": "https://nestjs.com",
  "short_code": "nx82p1",
  "created_at": "2024-03-20T14:30:00Z",
  "updated_at": "2024-03-21T10:00:00Z",
  "access_count": "150"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|The unique identifier of the shortened URL|
|url|string|true|none|The original destination URL|
|short_code|string|true|none|The unique short code generated for the URL|
|created_at|string|true|none|Timestamp when the short URL was created|
|updated_at|string|true|none|Timestamp of the last update|
|access_count|number|false|none|Total number of times the shortened URL was accessed|

<h2 id="tocS_ResponseOk">ResponseOk</h2>
<!-- backwards compatibility -->
<a id="schemaresponseok"></a>
<a id="schema_ResponseOk"></a>
<a id="tocSresponseok"></a>
<a id="tocsresponseok"></a>

```json
{
  "status": true,
  "mensagem": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|boolean|true|none|none|
|mensagem|string|true|none|none|