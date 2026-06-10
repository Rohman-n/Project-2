const postSchema = {
  "title": "Generated Schema",
  "type": "object",
  "properties": {
    "token": {
      "type": "string"
    },
    "_meta": {
      "type": "object",
      "properties": {
        "powered_by": {
          "type": "string"
        },
        "docs_url": {
          "type": "string"
        },
        "upgrade_url": {
          "type": "string"
        },
        "example_url": {
          "type": "string"
        },
        "variant": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "cta": {
          "type": "object",
          "properties": {
            "label": {
              "type": "string"
            },
            "url": {
              "type": "string"
            }
          },
          "required": [
            "label",
            "url"
          ]
        },
        "context": {
          "type": "string"
        }
      },
      "required": [
        "powered_by",
        "docs_url",
        "upgrade_url",
        "example_url",
        "variant",
        "message",
        "cta",
        "context"
      ]
    }
  },
  "required": [
    "token",
    "_meta"
  ]
}

export default postSchema;