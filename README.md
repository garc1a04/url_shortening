# DOCS
---

### [POST] /shorten
#### Request Body

| Required | Schema |
| -------- | ------ |
|  Yes | **application/json**: [CreateShortenDTO](#createshortendto-schema)<br> |

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 |  | **application/json**: [ResponseShortenDTO](#responseshortendto-schema)<br> |

### [GET] /shorten/{code}
#### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path |  | Yes | string |

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | **application/json**: [ResponseShortenDTO](#responseshortendto-schema)<br> |

### [PUT] /shorten/{code}
#### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path |  | Yes | string |

#### Request Body

| Required | Schema |
| -------- | ------ |
|  Yes | **application/json**: [CreateShortenDTO](#createshortendto-schema)<br> |

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | **application/json**: [ResponseShortenDTO](#responseshortendto-schema)<br> |

### [DELETE] /shorten/{code}
#### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path |  | Yes | string |

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | **application/json**: [ResponseOk](#responseok-schema)<br> |

### [GET] /shorten/{code}/stats
#### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| code | path |  | Yes | string |

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| default |  | **application/json**: [ResponseShortenDTO](#responseshortendto-schema)<br> |

---
### Schemas

#### CreateShortenDTO Schema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| url | string (uri) | The original long URL to be shortened<br>*Example:* `"https://nestjs.com"` | Yes |

#### ResponseShortenDTO Schema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | number | The unique identifier of the shortened URL<br>*Example:* `"1"` | Yes |
| url | string | The original destination URL<br>*Example:* `"https://nestjs.com"` | Yes |
| short_code | string | The unique short code generated for the URL<br>*Example:* `"nx82p1"` | Yes |
| created_at | string | Timestamp when the short URL was created<br>*Example:* `"2024-03-20T14:30:00Z"` | Yes |
| updated_at | string | Timestamp of the last update<br>*Example:* `"2024-03-21T10:00:00Z"` | Yes |
| access_count | number | Total number of times the shortened URL was accessed<br>*Example:* `"150"` | No |

#### ResponseOk Schema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| status | boolean |  | Yes |
| mensagem | string |  | Yes |
