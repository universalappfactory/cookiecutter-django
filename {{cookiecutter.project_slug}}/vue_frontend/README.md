# Setup vue

go to the vue_frontend directory:

```
cd vue_frontend
yarn install
```

# Using vue in your django templates

e.g. an index.html
{% raw %}
```
{% load render_bundle from webpack_loader %}

{% load static %}

<div id="app">
  <app></app>
</div>
{% render_bundle 'chunk-vendors' %}
{% render_bundle 'vue_app_01' %}
```
{% endraw %}

Then you need to start develop mode or build for production

## Develop
```
yarn serve
```

## Production
```
yarn build
```

All files will be placed in the project/static/vue folder.


# Changes by the when vue is activated

1. Install django-webpack-loader==0.6.0

Add django-webpack-loader to your requirements.txt

```
#Webpack Loader
django-webpack-loader==0.6.0
```

2. Add modify your settings.py

```
VUE_FRONTEND_DIR = os.path.join(BASE_DIR, 'vue_frontend')

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'BUNDLE_DIR_NAME': 'vue/',  # must end with slash
        'STATS_FILE': os.path.join(VUE_FRONTEND_DIR, 'webpack-stats.json'),
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
        'IGNORE': [r'.+\.hot-update.js', r'.+\.map']
    }
}


INSTALLED_APPS += ["webpack_loader"]
```

3. Run yarn install