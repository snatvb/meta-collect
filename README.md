# gulp-lua-import
Repository: [GitHub](https://github.com/snatvb/gulp-lua-import)

Конфигурационный файл для сборки:
```sh
const gulp = require('gulp');
const xmlCollect = require('gulp-xml-collect');

gulp.task('default', function () {
  return gulp.src('./test/**/*.xml')
    .pipe(xmlCollect())
    .pipe(gulp.dest('./dist'))
});
```
Где `./test/**/*.xml` - папка с вашими *xml* файлами, а `./dist` - где будут храниться ваши собранные файлы

##  Использование
`<require>{FILEPATH}.xml</require>`

## Опции

Так же можно передавать опции для сборки, такие как:
```
log : boolean // default is true, отключаем или включаем логирование
clear : {
    comments : boolean, // default is true, удаление комментариев в сборку
    lineBreak: boolean // default is true, удаление лишних пересов строк
}
ignoreFolders : Array // default is empty, в массиве просто перечисляем названия папок(дирректорий), для игнора, учитывая регистр
```

Пример:
```
// ...
    .pipe(luaImport({ignoreFolders: ['IGNORE_FOLDER_NAME']}))
// ...
```
