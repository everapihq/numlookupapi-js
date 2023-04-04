<p align="center">
<img src="https://app.numlookupapi.com/img/logo/numlookupapi.png" width="300"/>
</p>

# numlookupapi-js: Worldwide Phone Number Lookup & Verification API for JavaScript

This package is a JavaScript wrapper for [numlookupapi.com] that aims to make the usage of the API as easy as possible in your project.

## Installation

### npm
```shell
npm install --save @everapi/numlookupapi-js
```
### yarn
```shell
yarn add @everapi/numlookupapi-js
```

## Import

```js
import Numlookupapi from '@everapi/numlookupapi-js';
```

or use it directly in a Browser:

```html
<script src="path/to/numlookupapi-js/index.js"></script>
```

## Usage

Initialize the API with your API Key (get one for free at [numlookupapi.com]):

```js
const numlookupapi = new Numlookupapi('YOUR-API-KEY');
```

Afterwards you can make calls to the API like this:

```js
numlookupapi.validate('2069220880', ({
        country_code: 'US'
    }).then(response => {
        console.log(response);
    }));
```

Find out more about our endpoints, parameters and response data structure in the [docs]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[docs]: https://numlookupapi.com/docs
[numlookupapi.com]: https://numlookupapi.com
