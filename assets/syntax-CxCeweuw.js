const n={title:"Синтаксис",navTitle:"Синтаксис",id:"syntax",items:[{summary:"Методы импорты Vite",content:`1. ?worker

Позволяет импортировать файл как Web Worker.

const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });

2. ?inline

    Преобразует содержимое файла в строку (работает для небольших ресурсов, например, SVG).

import svgContent from './icon.svg?inline'; // svgContent содержит строку с SVG

3. ?url

    Импортирует путь к файлу, а не само содержимое.

import imagePath from './image.png?url'; // imagePath содержит URL файла

4. ?raw

    Импортирует содержимое файла как строку (полезно для текстовых файлов, таких как .txt или .svg).

import txtContent from './file.txt?raw'; // txtContent содержит строку с содержимым файла

5. import.meta.glob

    Динамический импорт всех файлов, соответствующих шаблону.

const modules = import.meta.glob('./components/*.vue');
// modules — объект, где ключи — пути, а значения — функции импорта.

6. import.meta.globEager

    Импортирует все файлы сразу (без ленивой загрузки).

const modules = import.meta.globEager('./data/*.js');

7. ?jsx

    Преобразует JSX-файлы. Полезно для случаев, если файл не имеет стандартного расширения .jsx:

import MyComponent from './component-file.js?jsx';

8. ?wasm

    Импортирует WebAssembly (WASM) модули.

import wasmModule from './module.wasm';

9. ?module

    Явно указывает, что файл должен быть обработан как модуль.

import styles from './styles.css?module';

10. ?asset

    Преобразует файл в ассет, используемый для статических ресурсов.

import assetUrl from './file.png?asset';`},{summary:"css",content:`COMPOSES.imageDefault {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
.modalImage img {
    object-fit: contain;
    composes: imageDefault;
}

`}]};export{n as default};
//# sourceMappingURL=syntax-CxCeweuw.js.map
