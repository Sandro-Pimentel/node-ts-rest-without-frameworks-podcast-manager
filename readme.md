# Completando uma api rest sem frameworks

>_Status do projeto: Em desenvolvimento._

## Descrição do Projeto

Foi criada uma api rest de gerenciamento de podcasts sem o uso de frameworks com o objetivo de compreender "por baixo dos panos" o funcionamento de uma api rest. Foram criadas as rotas de get e get com filtros para o nome. O objetivo é implementar os endpoints post, patch e delete da aplicação. <a href="https://github.com/felipeAguiarCode/node-ts-webapi-without-frameworks-podcast-menager">Link para projeto base </a> desenvolvido pelo instrutor.

## Endpoints

### ```POST - /api/podcasts/```

**Descrição:** Insere um podcast com o seguinte modelo:

```
{
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
},
```

### ```GET - /api/podcasts/```

**Descrição:** Retorna todos os podcasts no seguinte modelo:

```
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "categories": ["saúde", "esporte", "bodybuilder"]
    },
    {
        "podcastName": "venus",
        "episode": "RUBENS BARRICHELLO - Venus #666",
        "videoId": "4KDGTdiOV4I",
        "categories": [
            "esporte",
            "corrida"
        ]
    },
]
```

**Query String:** ```?name=``` para filtrar os podcasts pelo podcastName:

**/api/podcasts/?name=flow**

```
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "categories": ["saúde", "esporte", "bodybuilder"]
    },
]
```

### ```PATCH - /api/podcasts/:id```

**Descrição:** Altera parcialmente os dados de um podcast pelo videoId. O corpo segue o seguinte modelo:

**/api/podcasts/pQSuQmUfS30**

```
{
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "categories": ["saúde", "esporte", "bodybuilder"]
},
```

### ```DELETE - /api/podcasts/:id```

**Descrição:** Apaga os dados de um podcast pelo videoId.

**/api/podcasts/pQSuQmUfS30**

## Como rodar

Ao baixar o projeto instale as dependências com:

```
npm install
```

Para rodar a aplicação use o comando:

```
npm run start
```
