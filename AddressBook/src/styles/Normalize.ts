import { createGlobalStyle } from 'styled-components';

const Normalize = createGlobalStyle`
* {
    box-sizing: border-box;
}

*:after, *:before {
    box-sizing: border-box;
}

html {
  line-height: 1.15; 
  -ms-text-size-adjust: 100%; 
  -webkit-text-size-adjust: 100%; 
}

body {
  margin: 0;
}

article,
aside,
footer,
header,
nav,
section,
time {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}


figcaption,
figure,
main { 
  display: block;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box; 
  height: 0;
  overflow: visible; 
}

pre {
  font-family: inherit; 
  font-size: inherit; 
}

a {
  background-color: transparent; 
  -webkit-text-decoration-skip: objects; 

  color: inherit;
  text-decoration: none;
  font-size: inherit;

  &:focus {
      outline: 0;
  }
}

abbr[title] {
  border-bottom: none; 
  text-decoration: underline;
  text-decoration: underline dotted; 
}


b,
strong {
  font-weight: inherit;
}


b,
strong {
  font-weight: bolder;
}


code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}


dfn {
  font-style: italic;
}


mark {
  background-color: #ff0;
  color: #000;
}


small {
  font-size: 80%;
}


sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

audio,
video {
  display: inline-block;
}

video {
  max-width: 100%;
}

audio:not([controls]) {
  display: none;
  height: 0;
}


img {
  border-style: none;

  max-width: 100%;
  display: inline-block;
}


svg:not(:root) {
  overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
  font-size: 100%;
  line-height: 1.15; 
  margin: 0; 
  font-family: inherit;
}

button,
input { 
  overflow: visible;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
    
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
input[type="number"]:hover,
input[type="number"]:focus {
    -moz-appearance: number-input;
}


button,
select { 
  text-transform: none;
}


button,
html [type="button"], 
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; 
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

[type="button"],
[type="reset"],
[type="submit"] {
	cursor: pointer;
}


fieldset {
  padding: 0.35em 0.75em 0.625em;
}


legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}


progress {
  display: inline-block; 
  vertical-align: baseline; 
}


textarea {
  overflow: hidden;
  display: block;
}


[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}



[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}


[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}


::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}



details, 
menu,
button {
  display: block;
}


summary {
  display: list-item;
}


canvas {
  display: inline-block;
}

template {
  display: none;
}


[hidden] {
  display: none;
}

input::-webkit-input-placeholder         {text-overflow:ellipsis;}
input::-moz-placeholder     {text-overflow:ellipsis;}
input:-moz-placeholder      {text-overflow:ellipsis;}
input:-ms-input-placeholder {text-overflow:ellipsis;}

input:focus::-webkit-input-placeholder {color: transparent}
input:focus::-moz-placeholder          {color: transparent}
input:focus:-moz-placeholder           {color: transparent}
input:focus:-ms-input-placeholder      {color: transparent}

textarea:focus::-webkit-input-placeholder {color: transparent}
textarea:focus::-moz-placeholder          {color: transparent}
textarea:focus:-moz-placeholder           {color: transparent}
textarea:focus:-ms-input-placeholder      {color: transparent}


input, textarea {
	font-family: inherit;
}


input:invalid{
    box-shadow:none;
}


address {
    font-style: normal;
}

html, body {
    height: auto;
}

html, body {
    min-height: 100%;
}

html {
    font-size: 100%;
}

button {
    border: none;
}


h1, h2, h3 {
    margin: 0;
}

dl, dd {
    margin: 0;
}

button {
  cursor: pointer;
}


`;

export default Normalize;
