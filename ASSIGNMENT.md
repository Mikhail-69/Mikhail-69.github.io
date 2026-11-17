# Задание по мобильной разработке: пошаговая инструкция как для 5-ти летних, максимально разжевывая, как будто делают дети детского сада

Эта инструкция написана так, чтобы её мог пройти человек, который **никогда не
открывал терминал**. Каждый шаг — одно действие. После каждого важного шага есть
проверка: что вы должны увидеть, если всё правильно.

Второй участник — DeepSeek Desktop. Он подсказывает и пишет код, но **не может
нажимать кнопки, открывать окна и запускать команды**. Всё руками делаете вы.

Результат: публичный репозиторий GitHub, в котором есть

- статический сайт с четырьмя страницами, которые читают и пишут данные
  в Supabase и Firebase (включая realtime);
- Flutter-приложение в папке `flutter_project`;
- автоматическая сборка APK в GitHub Releases при каждом push в `main`.

Содержание:

0. Как пользоваться инструкцией
1. Что мы строим
2. Компьютер: устанавливаем инструменты
3. Аккаунты
4. Репозиторий и главная страница
5. Flutter-приложение
6. Робот-сборщик: APK появляется сам
7. Supabase: страница с чтением и добавлением
8. Firebase: те же две страницы на другой базе
9. Главная страница со ссылками на всё
10. Финальная проверка и сдача
11. Домашнее задание: RuStore
12. Если что-то сломалось
13. Финальный чек-лист
14. Безопасность: что можно показывать, а что нельзя

---

## 0. Как пользоваться инструкцией

### 0.1. Кто что делает

| Кто | Что делает |
|---|---|
| Вы | Копируете команды, вставляете в терминал, нажимаете кнопки в браузере, создаёте файлы |
| DeepSeek Desktop | Объясняет непонятные слова, помогает исправить ошибку, пишет код |
| GitHub | Хранит файлы, собирает APK, публикует сайт |
| Supabase и Firebase | Хранят данные для страниц сайта |

DeepSeek **не видит ваш экран**. Поэтому, когда что-то не получается, ему нужно
описать словами, что вы видите. Как это делать — в разделе 0.6.

### 0.2. Пять правил

1. **Один шаг — одно действие.** Не делайте два шага сразу.
2. **Не пропускайте проверки.** Если написали «Проверка», сравните свой экран
   с ожидаемым.
3. **Если проверка не совпала — остановитесь.** Не идите дальше «на всякий
   случай»: следующая ошибка будет непонятнее предыдущей.
4. **Не печатайте команды вручную.** Копируйте целиком и вставляйте. Одна
   лишняя буква ломает команду.
5. **Пароли и секретные ключи не вставляйте в файлы сайта, в чат DeepSeek и в
   репозиторий.** Про то, какие ключи публичные, а какие секретные, сказано
   в разделе 14.

### 0.3. Условные обозначения

- `текст в серых рамках` — команда или текст, который нужно скопировать целиком.
- **Жирный текст** — надпись на кнопке или пункт меню, который нужно нажать.
- **Проверка** — что должно получиться после шага.
- **Внимание** — место, где чаще всего ошибаются.
- **Стоп** — здесь нужно остановиться и разобраться, если что-то не так.

### 0.4. Как копировать и вставлять

**В терминале (PowerShell):**

1. Выделите команду мышкой в этом документе и нажмите `Ctrl+C`.
2. Переключитесь в окно PowerShell.
3. Нажмите правую кнопку мыши (вставка) или `Ctrl+Shift+V`.
4. Нажмите `Enter`.

**В редакторе VSCode:** `Ctrl+C` в документе, `Ctrl+V` в файле, затем `Ctrl+S`
(сохранить). Без сохранения изменения не попадут в проект.

**В браузере:** у блоков кода на многих сайтах есть кнопка копирования в углу.

### 0.5. Что понадобится

- Компьютер с Windows 11 (подойдёт и Windows 10, шаги почти те же).
- Интернет. Первая установка скачает примерно 5–10 ГБ.
- Электронная почта, к которой есть доступ.
- Свободное место на диске: около 15 ГБ.
- Время: спокойным шагом 3–5 часов. Можно разбить на два дня.
- По желанию: телефон на Android, чтобы установить готовый APK.

**Внимание.** Все папки создаём в `C:\dev`. Не в «Рабочем столе», не в
«Документах», не в OneDrive: там бывают пробелы, русские буквы и синхронизация,
из-за которых сборка ломается. Если ваше имя пользователя в Windows написано
по-русски, это особенно важно: путь `C:\Users\Иван\...` вызывает ошибки у
сборщика. `C:\dev` безопасен всегда.

### 0.6. Как разговаривать с DeepSeek

Пишите по формуле:

```
Я прохожу инструкцию по мобильной разработке, шаг 7.1.
Я сделал: вставил SQL и нажал Run.
Я вижу: ERROR: 42501: permission denied for table students
Объясни простыми словами, что случилось, и дай точные шаги, что нажать.
```

Три правила:

1. **Копируйте текст ошибки целиком**, не пересказывайте.
2. **Говорите номер шага** из этой инструкции — DeepSeek не знает, что в ней
   написано, пока вы не скажете.
3. **Не просите «сделай за меня»**: он не может нажимать кнопки. Просите
   «объясни» и «дай команду, которую я вставлю».

Не отправляйте в чат пароли от аккаунтов, пароль базы Supabase и секретные
ключи. Публичные ключи (Supabase `publishable`, конфиг Firebase) — можно, они
и так видны в коде страницы.

---

## 1. Что мы строим

### 1.1. Простыми словами

Представьте три вещи:

- **Сайт** — витрина. На ней кнопки и список. Витрина ничего не помнит.
- **База данных** — блокнот, который помнит. Supabase и Firebase — это два
  разных блокнота от разных фирм. В задании нужно попробовать оба.
- **Приложение** — отдельная программа для телефона. Ей база не нужна, она
  хранит список у себя в памяти.

Ещё есть **робот-сборщик**: GitHub Actions. Вы кладёте код в GitHub, робот сам
собирает из него APK-файл (это установочный файл приложения) и выкладывает его
в раздел Releases.

### 1.2. Из чего состоит работа

1. Установить инструменты на компьютер (Flutter, Android Studio, Git, VSCode).
2. Создать репозиторий на GitHub и простую главную страницу.
3. Сделать Flutter-приложение: список студентов, добавление, удаление.
4. Настроить робота, чтобы он собирал APK.
5. Сделать страницу Supabase: чтение и добавление записей.
6. Сделать вторую страницу Supabase, которая обновляется сама (realtime).
7. Повторить то же самое для Firebase — две страницы.
8. Связать всё ссылками на главной и проверить.

### 1.3. Как выглядит готовый репозиторий

```
.
├── index.html                  # главная страница
├── style.css
├── script.js
├── supabase.html               # Supabase: чтение + добавление
├── supabase-realtime.html      # Supabase: + обновление само
├── firebase.html               # Firebase: чтение + добавление
├── firebase-realtime.html      # Firebase: + обновление само
├── css/
│   └── demo.css
├── js/
│   ├── ui.js
│   ├── supabase-config.js
│   ├── supabase.js
│   ├── supabase-realtime.js
│   ├── firebase-config.js
│   ├── firebase.js
│   └── firebase-realtime.js
├── flutter_project/            # приложение Flutter
└── .github/workflows/
    └── android-release.yml
```

---

## 2. Компьютер: устанавливаем инструменты

В этом разделе будет шесть установок. Между ними — проверки. Если проверка не
совпала, не переходите к следующей установке.

### 2.1. Проверяем Windows

1. Нажмите `Win+R` (Win — клавиша с флажком Windows, слева от пробела).
2. В окошке напишите `winver` и нажмите `Enter`.
3. Появится окно «О программе Windows».

**Проверка:** в окне написано «Windows 11» или «Windows 10». Закройте окно
кнопкой **OK**.

### 2.2. Создаём папку для проектов

1. Откройте **Проводник** (жёлтая папка на панели задач).
2. Слева нажмите **Этот компьютер**, затем диск `C:`.
3. В пустом месте окна нажмите правую кнопку мыши → **Создать** → **Папку**.
4. Назовите папку ровно так: `dev`. Нажмите `Enter`.

**Проверка:** по адресу `C:\dev` есть пустая папка.

### 2.3. Учимся открывать PowerShell

Это окно, куда вставляют команды. Открывается так:

- Нажмите `Win+X` → выберите **Терминал** (в Windows 11) или
  **Windows PowerShell** (в Windows 10).

Второй способ: нажмите `Win`, напишите `PowerShell`, нажмите `Enter`.

**Проверка:** открылось тёмное или синее окно, внизу мигает курсор после
приглашения вида `PS C:\Users\ВашеИмя>`.

**Внимание.** Вставлять текст в PowerShell можно правой кнопкой мыши. Если
вставка не сработала — нажмите `Ctrl+Shift+V`.

**Внимание.** В обычном PowerShell (версия 5.1) нельзя соединять две команды
через `&&`. Поэтому в этой инструкции каждая команда даётся отдельной строкой.
Если случайно вставили две команды сразу — нажмите `Ctrl+C`, чтобы отменить,
и вставляйте по одной.

Запомните: команда `cd` означает «перейти в папку». Например,
`cd C:\dev` переводит вас в папку `C:\dev`.

### 2.4. Устанавливаем Git

Git — программа, которая запоминает изменения файлов и отправляет их на GitHub.

1. Откройте PowerShell.
2. Вставьте строку и нажмите `Enter`:

```
winget install --id Git.Git -e --source winget
```

3. Начнётся скачивание. Когда появится вопрос про соглашение — нажмите `Y` и
   `Enter`.
4. Дождитесь надписи «Successfully installed» или «Успешно установлено».

**Внимание.** Если `winget` пишет, что команда не найдена, значит на компьютере
старая Windows. Тогда скачайте Git вручную: https://git-scm.com/download/win,
запустите установщик, везде нажимайте **Next**, в конце **Install** и **Finish**.

**Проверка.** Закройте PowerShell полностью (крестик) и откройте заново (это
важно: старые окна не видят новые программы). Вставьте:

```
git --version
```

Должно появиться что-то вроде `git version 2.47.0.windows.1`. Номер версии может
быть другим — это нормально.

### 2.5. Устанавливаем Android Studio

Android Studio — большая программа для Android. Она принесёт с собой всё
нужное: Android SDK (инструменты сборки) и Java (JDK 21). Отдельно их ставить
не нужно.

1. Откройте https://developer.android.com/studio
2. Нажмите **Download Android Studio** и примите соглашение.
3. Запустите скачанный файл `android-studio-...-windows.exe`.
4. В установщике нажимайте **Next** → **Next** → **Install** → **Finish**.
   Галочку **Android Virtual Device** можно оставить включённой, но эмулятор
   нам не понадобится.
5. Запустится Android Studio. В первом окне выберите **Do not import settings**
   и нажмите **OK**.
6. Мастер настройки: нажмите **Next** → тип установки **Standard** → **Next** →
   **Next** → **Finish**. Начнётся скачивание SDK, это несколько минут.
7. Нажмите **Finish**, когда скачивание закончится.

Теперь установим недостающие части SDK:

8. В окне приветствия Android Studio нажмите **More Actions** (в самом низу
   списка) → **SDK Manager**.
   Если окно приветствия уже закрыто: меню **Tools** → **SDK Manager**.
9. Вкладка **SDK Platforms**. Поставьте галочку на самой новой строке, обычно это
   **Android 16 (API 36)** или **Android 15 (API 35)**. Если сомневаетесь —
   выбирайте самую верхнюю с словом Android.
10. Вкладка **SDK Tools**. Поставьте галочки:
    - **Android SDK Build-Tools** (версия 36 или самая новая),
    - **Android SDK Platform-Tools**,
    - **Android SDK Command-line Tools (latest)**.
11. Нажмите **Apply**. Появится окно с вопросом о лицензиях — нажмите
    **Accept** и **Next**, затем **Finish**.
12. Запомните путь к SDK. Он написан вверху окна SDK Manager, обычно это
    `C:\Users\ВашеИмя\AppData\Local\Android\Sdk`. Скопируйте его в блокнот —
    он понадобится.

**Проверка.** Откройте PowerShell заново и вставьте:

```
& "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe" version
```

Должно появиться `Android Debug Bridge version ...`.

**Внимание.** Если появилась ошибка «не удаётся найти путь», значит SDK лежит в
другом месте. Откройте SDK Manager снова, скопируйте путь из верхней строки и
замените им часть `$env:LOCALAPPDATA\Android\Sdk` в команде.

### 2.6. Устанавливаем Flutter

Flutter — набор инструментов, который превращает код Dart в APK.

1. Откройте https://docs.flutter.dev/get-started/install/windows/mobile
2. Найдите кнопку скачивания **flutter_windows_x.y.z-stable.zip** (версия может
   быть новее). Скачайте архив.
3. Откройте скачанный zip-файл двойным щелчком.
4. Внутри окна архива нажмите **Извлечь все** → укажите папку `C:\dev` →
   **Извлечь**.
5. Проверьте, что появилась папка `C:\dev\flutter`, а в ней папка `bin`.

**Внимание.** Не распаковывайте в `C:\Program Files`: там нужны права
администратора, и Flutter не сможет обновляться.

Теперь добавим Flutter в переменную `PATH` — список папок, где Windows ищет
программы:

6. Нажмите `Win`, напишите `переменные среды` и выберите
   **Изменение переменных среды текущего пользователя**.
7. В верхнем списке выделите строку `Path` и нажмите **Изменить**.
8. Нажмите **Создать** и впишите:

```
C:\dev\flutter\bin
```

9. Нажмите **ОК**, **ОК**, **ОК**.

**Проверка.** Закройте PowerShell, откройте заново, вставьте:

```
flutter --version
```

Первый запуск занимает 1–3 минуты: Flutter скачивает Dart. Дождитесь строк
вида `Flutter 3.35.0 • channel stable` и `Dart 3.9.0`.

**Внимание.** Если написано «flutter не является внутренней или внешней
командой», закройте все окна PowerShell и откройте новое. Если не помогло —
проверьте шаг 6–9 и убедитесь, что путь в `Path` ровно `C:\dev\flutter\bin`.

### 2.7. Включаем режим разработчика

Flutter на Windows создаёт символические ссылки. Без режима разработчика
сборка может упасть.

1. Нажмите `Win`, напишите `для разработчиков` и откройте
   **Параметры → Система → Для разработчиков**.
2. Включите переключатель **Режим разработчика**. Подтвердите, если спросит.

**Проверка:** переключатель включён.

### 2.8. Настраиваем Java

Java уже есть внутри Android Studio. Нужно показать её Flutter и Windows.

1. Откройте PowerShell.
2. Вставьте и нажмите `Enter` (кавычки обязательны, путь обычно именно такой):

```
setx JAVA_HOME "C:\Program Files\Android\Android Studio\jbr"
```

3. Добавьте Java в `PATH` тем же способом, что в шаге 2.6: `Win` →
   `переменные среды` → **Изменение переменных среды текущего пользователя** →
   `Path` → **Изменить** → **Создать** → впишите:

```
C:\Program Files\Android\Android Studio\jbr\bin
```

4. Нажмите **ОК** во всех окнах.
5. Скажите Flutter, где Java:

```
flutter config --jdk-dir "C:\Program Files\Android\Android Studio\jbr"
```

**Проверка.** Закройте PowerShell, откройте заново, вставьте:

```
java -version
```

Должно появиться `openjdk version "21.0.x"`. Если написано `"17"` — тоже
подойдёт: современные версии Flutter работают с 17 и 21.

**Внимание.** Если Java не находится, проверьте, что папка
`C:\Program Files\Android\Android Studio\jbr\bin` существует. Если Android
Studio установлена в другое место — подставьте её путь.

### 2.9. Проверяем Flutter Doctor

`flutter doctor` — это «осмотр»: он проверяет, всё ли на месте.

1. В PowerShell вставьте:

```
flutter doctor
```

2. Прочитайте вывод. Нас интересует строка **Android toolchain**.

**Проверка.** Возле `Android toolchain` стоит `[√]` (галочка), а не `[!]` или
`[X]`.

Если стоит `[!] Android license status unknown` — выполните:

```
flutter doctor --android-licenses
```

Появится список соглашений. Нажимайте `y` и `Enter`, пока не дойдёт до конца
(обычно 5–7 раз).

Если написано `cmdline-tools component is missing` — вернитесь в SDK Manager
(шаг 2.5, пункт 10) и поставьте галочку
**Android SDK Command-line Tools (latest)**.

**Что можно игнорировать:**

- `[!] Chrome - develop for the web` — браузер для веба нам не нужен;
- `[!] Visual Studio - develop Windows apps` — для Android не нужен;
- `[!] Android Studio (not installed)` при установленной студии — значит,
  Flutter не нашёл путь, но на сборку это не влияет, если Android toolchain
  в порядке.

**Стоп.** Если Android toolchain отмечен крестиком `[X]` — не продолжайте.
Скопируйте вывод `flutter doctor` целиком и спросите DeepSeek по формуле из
раздела 0.6.

### 2.10. Устанавливаем VSCode

VSCode — редактор, в котором мы будем создавать файлы. Это просто «блокнот с
подсветкой кода».

1. В PowerShell вставьте:

```
winget install --id Microsoft.VisualStudioCode -e
```

2. Дождитесь «Successfully installed».
3. Откройте VSCode (значок появится в меню `Win`).
4. Нажмите `Ctrl+Shift+X` (панель расширений).
5. В поиске напишите `Flutter`, выберите расширение **Flutter** от издателя
   **Dart Code** и нажмите **Install**. Расширение **Dart** установится вместе
   с ним.
6. Нажмите `Ctrl+,` (настройки), в поиске напишите `flutter sdk`.
7. В поле **Dart: Flutter SDK Path** впишите:

```
C:\dev\flutter
```

8. Закройте вкладку настроек.

**Проверка.** В левой панели VSCode появился значок расширений, а в списке
установленных есть **Flutter**.

### 2.11. Устанавливаем GitHub Desktop

GitHub Desktop — программа с кнопками вместо команд Git. Для новичка она проще,
чем терминал.

1. В PowerShell вставьте:

```
winget install --id GitHub.GitHubDesktop -e
```

2. Откройте **GitHub Desktop**.
3. Нажмите **Sign in to GitHub.com** и войдите под своим аккаунтом GitHub.
   Если аккаунта ещё нет — сначала заведите его (раздел 3.1).

**Проверка.** В окне GitHub Desktop видно ваше имя пользователя, а не кнопку
входа.

### 2.12. Контрольная точка

Прежде чем идти дальше, проверьте всё сразу. Вставьте в PowerShell три команды
по очереди:

```
git --version
```

```
flutter --version
```

```
java -version
```

Все три должны ответить версией, без слов «не является внутренней или внешней
командой».

Если все три работают — установка закончена. Это самая длинная часть. Дальше
будет интереснее.

---

## 3. Аккаунты

Нужны три бесплатных аккаунта. Везде используйте одну и ту же почту — так проще
не запутаться.

**Внимание.** Пароли записывайте в блокнот или в менеджер паролей. В файлы
проекта и в репозиторий пароли не попадают никогда.

### 3.1. GitHub

1. Откройте https://github.com
2. Нажмите **Sign up**.
3. Введите почту, пароль, придумайте имя пользователя (латиницей, без пробелов).
4. Подтвердите почту: GitHub пришлёт письмо с кодом.
5. Заполните короткую анкету — можно пропустить, нажав **Skip personalization**.

**Проверка.** Вы вошли на github.com и видите свою аватарку в правом верхнем углу.

### 3.2. Supabase

1. Откройте https://supabase.com
2. Нажмите **Start your project** и войдите через GitHub (кнопка
   **Continue with GitHub**) — это быстрее, чем пароль.
3. Нажмите **New project**.
4. Заполните:
   - **Name**: `college`;
   - **Database Password**: нажмите **Generate a password**, затем **скопируйте
     пароль в блокнот**. Он больше не покажется. В коде он не нужен, но пусть
     будет;
   - **Region**: ближайший к вам, например `Central EU (Frankfurt)`.
5. Нажмите **Create new project** и подождите 1–2 минуты, пока проект
   готовится.

**Проверка.** Открылся раздел с меню слева: **Table Editor**, **SQL Editor**,
**Project Settings** и другие.

### 3.3. Firebase

1. Откройте https://console.firebase.google.com
2. Войдите тем же аккаунтом Google.
3. Нажмите **Create a project** (или **Add project**).
4. Введите имя проекта, например `college-demo`. Нажмите **Continue**.
5. На вопрос про Google Analytics переключите выключатель в положение **выкл**
   (для задания не нужно) и нажмите **Create project**.
6. Дождитесь **Your new project is ready** и нажмите **Continue**.

**Внимание.** Firebase должен остаться на бесплатном плане **Spark**. Карту не
привязывайте. Если где-то предлагают **Upgrade** — не нажимайте.

**Проверка.** Открылась консоль проекта: слева пункты **Build**, **Run**,
**Analytics** и шестерёнка вверху.

---

## 4. Репозиторий и главная страница

### 4.1. Создаём репозиторий на GitHub

1. Откройте https://github.com и нажмите **+** в правом верхнем углу →
   **New repository**.
2. **Repository name**: например `college-site`.
   Если хотите короткий адрес вида `https://вашеимя.github.io/`, назовите
   репозиторий `<вашеимя>.github.io` (например, `ivanov.github.io`).
3. Выберите **Public**. Приватный репозиторий не подойдёт: бесплатный GitHub
   Pages работает только с публичными.
4. Поставьте галочку **Add a README file**.
5. Нажмите **Create repository**.

**Проверка.** Открылась страница репозитория, в ней есть файл `README.md`.

### 4.2. Клонируем репозиторий на компьютер

«Клонировать» значит «скачать копию на компьютер, связанную с GitHub».

1. Откройте **GitHub Desktop**.
2. Меню **File** → **Clone repository**.
3. Вкладка **GitHub.com**, выберите ваш новый репозиторий.
4. В поле **Local path** укажите `C:\dev`.
5. Нажмите **Clone**.

**Проверка.** Открылась папка `C:\dev\college-site` (или как вы её назвали),
внутри лежит `README.md`. В GitHub Desktop написано **No local changes**.

**Внимание.** Дальше в инструкции папка везде называется `college-site`. Если
вы назвали репозиторий иначе, подставляйте своё имя в каждой команде `cd`.

### 4.3. Создаём главную страницу

Сайт — это три файла в корне репозитория. Создадим их по очереди.

**Файл `index.html`:**

1. В VSCode меню **File** → **New Text File**.
2. Нажмите `Ctrl+S`.
3. В окне сохранения перейдите в `C:\dev\college-site` (слева **Этот
   компьютер** → диск `C:` → `dev` → папка репозитория).
4. В поле **Имя файла** впишите `index.html` и нажмите **Сохранить**.
5. Удалите всё, что есть в файле (`Ctrl+A`, `Delete`), и вставьте код:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Лабораторные работы</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="site-header">
        <h1>Лабораторные работы</h1>
        <p class="lead">
            Мобильная разработка: Flutter, GitHub Actions, Supabase и Firebase.
        </p>
    </header>

    <main class="wrap">
        <nav class="site-nav" aria-label="Лабораторные страницы">
            <a href="supabase.html">
                <strong>Supabase: select + insert</strong>
                <span>Чтение и добавление записей</span>
            </a>
            <a href="supabase-realtime.html">
                <strong>Supabase Realtime</strong>
                <span>Список обновляется сам</span>
            </a>
            <a href="firebase.html">
                <strong>Firebase: select + insert</strong>
                <span>Чтение и добавление записей</span>
            </a>
            <a href="firebase-realtime.html">
                <strong>Firebase Realtime</strong>
                <span>Список обновляется сам</span>
            </a>
        </nav>

        <section class="card">
            <h2>Flutter-приложение</h2>
            <p>
                Исходный код приложения лежит в папке <code>flutter_project</code>.
                Готовый APK собирается автоматически и появляется в разделе
                Releases этого репозитория.
            </p>
        </section>
    </main>

    <footer class="site-footer">
        <p>Учебный проект. Данные вымышленные.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

6. Нажмите `Ctrl+S`, чтобы сохранить.

**Файл `style.css`:** так же **File** → **New Text File** → `Ctrl+S` → та же
папка → имя `style.css` → вставить:

```css
:root {
    --bg: #f5f6fa;
    --surface: #ffffff;
    --text: #1f2430;
    --muted: #5c6475;
    --border: #d7dbe7;
    --accent: #4f46e5;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text);
    background: var(--bg);
}

.site-header {
    padding: 48px 20px 24px;
    text-align: center;
}

.site-header h1 {
    margin: 0 0 8px;
    font-size: 2rem;
}

.lead {
    margin: 0;
    color: var(--muted);
}

.wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px 48px;
}

.site-nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
}

.site-nav a {
    display: block;
    padding: 16px 18px;
    text-decoration: none;
    color: var(--text);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
}

.site-nav a strong {
    display: block;
    color: var(--accent);
}

.site-nav a span {
    font-size: 0.9rem;
    color: var(--muted);
}

.site-nav a:hover {
    border-color: var(--accent);
}

.card {
    padding: 24px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
}

.card h2 {
    margin-top: 0;
}

code {
    padding: 2px 6px;
    font-family: ui-monospace, Consolas, monospace;
    background: #eceef6;
    border-radius: 6px;
}

.site-footer {
    padding: 24px 20px 40px;
    text-align: center;
    color: var(--muted);
    font-size: 0.9rem;
}
```

**Файл `script.js`:** **File** → **New Text File** → `Ctrl+S` → та же папка →
имя `script.js` → вставить:

```js
// Небольшой скрипт, чтобы страница не выглядела совсем статичной.
document.addEventListener('DOMContentLoaded', function () {
    var footer = document.querySelector('.site-footer p');
    if (!footer) return;

    var year = new Date().getFullYear();
    footer.textContent = 'Учебный проект, ' + year + '. Данные вымышленные.';
});
```

**Проверка.** В левой панели VSCode (значок «Проводник», `Ctrl+Shift+E`) видны
три файла: `index.html`, `style.css`, `script.js`, `README.md`. Если в названии
файла появилось `.txt` (например `index.html.txt`) — переименуйте: правая кнопка
→ **Rename** → исправьте имя.

### 4.4. Включаем GitHub Pages

1. Откройте страницу репозитория на github.com.
2. Вкладка **Settings** (вверху справа).
3. В левом меню **Pages**.
4. В блоке **Build and deployment**:
   - **Source**: `Deploy from a branch`;
   - **Branch**: `main`, папка `/ (root)`;
   - нажмите **Save**.
5. Подождите 1–2 минуты и обновите страницу.

**Проверка.** Вверху блока Pages появится ссылка вида
`https://вашеимя.github.io/college-site/`. Скопируйте её в блокнот — это адрес
вашего сайта.

**Внимание.** Сайт пока не обновился, потому что файлы ещё не отправлены на
GitHub. Это следующий шаг.

### 4.5. Отправляем файлы на GitHub

1. Откройте **GitHub Desktop**.
2. Слева в списке **Changes** появятся три новых файла.
3. Внизу слева в поле **Summary** напишите:

```
feat: add static site with lab navigation
```

4. Нажмите **Commit to main**.
5. Нажмите **Push origin** (кнопка вверху). Если кнопка называется
   **Publish branch** — это то же самое: ветки на GitHub ещё не было.

**Проверка.** В GitHub Desktop написано **No local changes**, а на github.com
в репозитории появились ваши файлы.

Откройте адрес сайта из шага 4.4. Должна открыться страница «Лабораторные
работы» с четырьмя ссылками. Ссылки пока ведут в никуда — страниц ещё нет.

---

## 5. Flutter-приложение

### 5.1. Создаём проект

Flutter создаёт сразу целый набор файлов. Делать это вручную не нужно.

1. Откройте PowerShell.
2. Перейдите в папку репозитория (подставьте своё имя):

```
cd C:\dev\college-site
```

3. Создайте проект:

```
flutter create --org com.example --project-name college_app --platforms=android --description "College Flutter demo app" flutter_project
```

4. Подождите. Flutter скачает зависимости, это 1–3 минуты.

Что означает команда:

- `--org com.example` и `--project-name college_app` вместе дают идентификатор
  приложения `com.example.college_app`. Он должен быть уникальным, иначе два
  приложения на телефоне будут считаться одним;
- `--platforms=android` — только Android, без iOS и веба;
- `flutter_project` — имя папки. Приложение живёт в подпапке, чтобы не мешать
  сайту в корне.

**Проверка.** Появилась папка `C:\dev\college-site\flutter_project`, в ней
`lib`, `android`, `test`, файл `pubspec.yaml`.

### 5.2. Заменяем главный файл приложения

Файл `lib/main.dart` — это вся программа. Заменим его целиком.

1. В VSCode меню **File** → **Open Folder** → выберите
   `C:\dev\college-site\flutter_project` → **Select Folder**.
2. Если VSCode спросит «Do you trust the authors» — нажмите **Yes, I trust**.
3. В левой панели откройте `lib` → `main.dart` (двойной щелчок).
4. Нажмите `Ctrl+A` (выделить всё), затем `Delete`.
5. Вставьте код целиком:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const CollegeApp());
}

class CollegeApp extends StatelessWidget {
  const CollegeApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'College App',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF4F46E5)),
        useMaterial3: true,
      ),
      home: const StudentsPage(),
    );
  }
}

/// A student record kept in memory for the demo.
class Student {
  Student({
    required this.name,
    required this.specialty,
    required this.graduationYear,
  });

  final String name;
  final String specialty;
  final int graduationYear;
}

class StudentsPage extends StatefulWidget {
  const StudentsPage({super.key});

  @override
  State<StudentsPage> createState() => _StudentsPageState();
}

class _StudentsPageState extends State<StudentsPage> {
  final _nameController = TextEditingController();
  final _specialtyController = TextEditingController();
  final _yearController = TextEditingController();

  final List<Student> _students = <Student>[
    Student(name: 'Alex River', specialty: 'Computer Science', graduationYear: 2028),
    Student(name: 'Sergey', specialty: 'IT', graduationYear: 2026),
  ];

  @override
  void dispose() {
    _nameController.dispose();
    _specialtyController.dispose();
    _yearController.dispose();
    super.dispose();
  }

  void _addStudent() {
    final name = _nameController.text.trim();
    final specialty = _specialtyController.text.trim();
    final year = int.tryParse(_yearController.text.trim());

    if (name.isEmpty || specialty.isEmpty || year == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Заполните все поля, год — числом')),
      );
      return;
    }

    setState(() {
      _students.add(
        Student(name: name, specialty: specialty, graduationYear: year),
      );
    });

    _nameController.clear();
    _specialtyController.clear();
    _yearController.clear();
    FocusScope.of(context).unfocus();
  }

  void _removeStudent(int index) {
    final removed = _students[index];
    setState(() => _students.removeAt(index));
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Удалён: ${removed.name}')),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Студенты колледжа'),
        backgroundColor: theme.colorScheme.primaryContainer,
        actions: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Center(
              child: Chip(
                label: Text('Всего: ${_students.length}'),
                visualDensity: VisualDensity.compact,
              ),
            ),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _InputCard(
            nameController: _nameController,
            specialtyController: _specialtyController,
            yearController: _yearController,
            onAdd: _addStudent,
          ),
          const SizedBox(height: 16),
          if (_students.isEmpty)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 32),
              child: Center(
                child: Text(
                  'Список пуст',
                  style: theme.textTheme.bodyLarge?.copyWith(
                    color: theme.colorScheme.outline,
                  ),
                ),
              ),
            )
          else
            ...List<Widget>.generate(_students.length, (index) {
              final student = _students[index];
              return Card(
                margin: const EdgeInsets.only(bottom: 12),
                child: ListTile(
                  leading: CircleAvatar(
                    child: Text(student.name.substring(0, 1).toUpperCase()),
                  ),
                  title: Text(student.name),
                  subtitle: Text(
                    '${student.specialty} · выпуск ${student.graduationYear}',
                  ),
                  trailing: IconButton(
                    icon: const Icon(Icons.delete_outline),
                    tooltip: 'Удалить',
                    onPressed: () => _removeStudent(index),
                  ),
                ),
              );
            }),
        ],
      ),
    );
  }
}

class _InputCard extends StatelessWidget {
  const _InputCard({
    required this.nameController,
    required this.specialtyController,
    required this.yearController,
    required this.onAdd,
  });

  final TextEditingController nameController;
  final TextEditingController specialtyController;
  final TextEditingController yearController;
  final VoidCallback onAdd;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Добавить студента',
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 12),
            TextField(
              controller: nameController,
              textInputAction: TextInputAction.next,
              decoration: const InputDecoration(
                labelText: 'Имя',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: specialtyController,
              textInputAction: TextInputAction.next,
              decoration: const InputDecoration(
                labelText: 'Специальность',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: yearController,
              keyboardType: TextInputType.number,
              textInputAction: TextInputAction.done,
              onSubmitted: (_) => onAdd(),
              decoration: const InputDecoration(
                labelText: 'Год выпуска',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 16),
            FilledButton.icon(
              onPressed: onAdd,
              icon: const Icon(Icons.person_add_alt_1),
              label: const Text('Добавить'),
            ),
          ],
        ),
      ),
    );
  }
}
```

6. Нажмите `Ctrl+S`.

**Проверка.** Вверху вкладки нет белой точки — значит файл сохранён.

### 5.3. Заменяем тест

Тест проверяет, что приложение запускается и кнопки работают.

1. В левой панели откройте `test` → `widget_test.dart`.
2. `Ctrl+A`, `Delete`.
3. Вставьте:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:college_app/main.dart';

void main() {
  testWidgets('shows seeded students', (WidgetTester tester) async {
    await tester.pumpWidget(const CollegeApp());

    expect(find.text('Студенты колледжа'), findsOneWidget);
    expect(find.text('Alex River'), findsOneWidget);
    expect(find.text('Всего: 2'), findsOneWidget);
  });

  testWidgets('adds a student through the form', (WidgetTester tester) async {
    await tester.pumpWidget(const CollegeApp());

    await tester.enterText(find.widgetWithText(TextField, 'Имя'), 'Иван');
    await tester.enterText(
      find.widgetWithText(TextField, 'Специальность'),
      'Информатика',
    );
    await tester.enterText(
      find.widgetWithText(TextField, 'Год выпуска'),
      '2027',
    );
    await tester.tap(find.widgetWithText(FilledButton, 'Добавить'));
    await tester.pumpAndSettle();

    expect(find.text('Иван'), findsOneWidget);
    expect(find.text('Всего: 3'), findsOneWidget);
  });

  testWidgets('rejects incomplete input', (WidgetTester tester) async {
    await tester.pumpWidget(const CollegeApp());

    await tester.tap(find.widgetWithText(FilledButton, 'Добавить'));
    await tester.pump();

    expect(find.text('Заполните все поля, год — числом'), findsOneWidget);
  });
}
```

4. `Ctrl+S`.

### 5.4. Проверяем код

1. Вернитесь в PowerShell. Убедитесь, что вы в папке `flutter_project`:

```
cd C:\dev\college-site\flutter_project
```

2. Запустите проверку кода:

```
dart analyze
```

**Проверка.** В конце написано `No issues found!`

3. Запустите тесты:

```
flutter test
```

**Проверка.** В конце написано `All tests passed!`

**Внимание.** Если `dart analyze` выдаёт ошибки — значит код вставлен не
целиком. Нажмите в VSCode `Ctrl+A`, `Delete`, вставьте код заново и сохраните.

### 5.5. Собираем APK вручную

1. В PowerShell (в папке `flutter_project`) вставьте:

```
flutter build apk --release
```

2. Первая сборка долгая: 5–15 минут, скачиваются библиотеки Gradle. Не
   закрывайте окно, даже если кажется, что всё зависло.
3. Дождитесь строки `Built build\app\outputs\flutter-apk\app-release.apk`.

**Проверка.** Файл существует:

```
dir build\app\outputs\flutter-apk
```

В списке есть `app-release.apk`, размер примерно 40–50 МБ.

**Внимание.** Если сборка упала с ошибкой про JDK или `Unsupported class file
major version` — неправильно настроена Java. Вернитесь к шагу 2.8.

**Внимание.** Если упало с `Could not resolve` или `handshake` — это сеть.
Просто повторите `flutter build apk --release` ещё раз, докачается остальное.

### 5.6. Ставим APK на телефон (по желанию)

1. Перекиньте файл `app-release.apk` на телефон: кабелем, через Telegram
   «Избранное» или облако.
2. Откройте файл на телефоне.
3. Android спросит разрешение на установку из этого источника — разрешите
   (Настройки → Разрешить установку).
4. Нажмите **Установить**.

**Проверка.** На телефоне появилась иконка college_app — так называется
приложение. Внутри: заголовок «Студенты колледжа», два студента в списке, поля
и кнопка добавления.

**Внимание.** Такое APK подписано отладочным ключом. Для учёбы и установки
вручную это нормально, но магазин RuStore такое не примет — об этом раздел 11.

---

## 6. Робот-сборщик: APK появляется сам

Сейчас APK собирается на вашем компьютере. Теперь настроим GitHub, чтобы он
собирал APK сам при каждом изменении. Это и есть GitHub Actions.

### 6.1. Создаём папки для настроек

1. В VSCode откройте корень репозитория: **File** → **Open Folder** →
   `C:\dev\college-site`.
2. В левой панели (она называется **Explorer**, значок с двумя листами)
   нажмите значок **New Folder** в верхней части панели.
3. Введите имя: `.github` (с точкой в начале) и нажмите `Enter`.
4. Выделите `.github`, снова **New Folder**, имя: `workflows`.

**Проверка.** В корне появилась папка `.github`, внутри неё `workflows`. Если
папки не видно — включите показ скрытых файлов: в VSCode она не скрывается,
значит вы создали её не там.

### 6.2. Создаём файл сборки

1. Выделите папку `workflows`.
2. **File** → **New Text File**.
3. `Ctrl+S` → перейдите в `C:\dev\college-site\.github\workflows` → имя файла
   `android-release.yml` → **Сохранить**.
4. Вставьте содержимое целиком:

```yaml
name: Build Android APK

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build:
    name: Build and release APK
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: flutter_project

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up JDK
        uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: "21"

      - name: Set up Flutter
        uses: subosito/flutter-action@v2
        with:
          channel: stable
          cache: true

      - name: Install dependencies
        run: flutter pub get

      - name: Cache Android NDK
        uses: actions/cache@v4
        with:
          path: ${{ env.ANDROID_HOME }}/ndk
          key: ndk-${{ runner.os }}-28.2.13676358

      - name: Install Android NDK
        run: |
          NDK_VERSION="28.2.13676358"
          SDKMANAGER="$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager"

          if [ -d "$ANDROID_HOME/ndk/$NDK_VERSION" ]; then
            echo "NDK $NDK_VERSION already installed"
            exit 0
          fi

          for attempt in 1 2 3; do
            echo "Installing NDK $NDK_VERSION, attempt $attempt"
            if yes | "$SDKMANAGER" --install "ndk;$NDK_VERSION"; then
              if [ -d "$ANDROID_HOME/ndk/$NDK_VERSION" ]; then
                echo "NDK $NDK_VERSION installed"
                exit 0
              fi
            fi
            rm -rf "$ANDROID_HOME/ndk/$NDK_VERSION"
            sleep 10
          done

          echo "Failed to install NDK $NDK_VERSION"
          exit 1

      - name: Analyze
        run: flutter analyze

      - name: Run tests
        run: flutter test

      - name: Build release APK
        run: flutter build apk --release

      - name: Collect APK
        run: |
          mkdir -p artifacts
          cp build/app/outputs/flutter-apk/app-release.apk \
             "artifacts/college-app-${GITHUB_RUN_NUMBER}.apk"

      - name: Upload APK as workflow artifact
        uses: actions/upload-artifact@v4
        with:
          name: college-app-apk
          path: flutter_project/artifacts/*.apk
          if-no-files-found: error

      - name: Publish GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          tag_name: build-${{ github.run_number }}
          name: Сборка ${{ github.run_number }}
          body: |
            Автоматическая сборка приложения College App.

            - Коммит: ${{ github.sha }}
            - Ветка: ${{ github.ref_name }}
            - Автор: @${{ github.actor }}

            APK во вложении к релизу.
          files: flutter_project/artifacts/*.apk
          draft: false
          prerelease: false
```

5. `Ctrl+S`.

**Внимание.** Отступы в этом файле важны. Не выравнивайте строки «красиво» и не
нажимайте `Tab` — вставляйте как есть. YAML ломается от лишнего пробела.

Что здесь происходит, по шагам:

| Строка | Смысл |
|---|---|
| `on: push: branches: main` | запускать сборку при каждом изменении ветки `main` |
| `permissions: contents: write` | разрешить роботу создать релиз |
| `working-directory: flutter_project` | все команды выполняются в папке приложения |
| `Cache/Install Android NDK` | поставить NDK и пережить сбой загрузки: до трёх попыток |
| `flutter build apk --release` | собрать APK |
| `Publish GitHub Release` | выложить APK в Releases |

### 6.3. Отправляем на GitHub

1. Откройте GitHub Desktop.
2. В **Changes** появятся папка `.github` и файл внутри.
3. **Summary**:

```
ci: build APK and publish release on push to main
```

4. **Commit to main**, затем **Push origin**.

### 6.4. Смотрим, как работает робот

1. Откройте репозиторий на github.com.
2. Вкладка **Actions**.
3. В списке слева выберите **Build Android APK**.
4. Увидите запуск с жёлтым кружком — он идёт. Обновите страницу через минуту.

**Проверка.** Кружок стал зелёной галочкой. Это занимает 5–12 минут: робот
скачивает Flutter и собирает APK.

Если хотите подробностей — щёлкните по запуску, потом по заданию
**Build and release APK**, потом по шагу. Видно, что робот делает прямо сейчас.

### 6.5. Забираем готовый APK

1. На главной странице репозитория справа найдите **Releases** (или вкладку
   **Releases**).
2. Там будет релиз `build-1` — это номер запуска, дальше будет `build-2`,
   `build-3` и так далее.
3. Внутри — файл `college-app-1.apk`. Нажмите на него, чтобы скачать.

**Проверка.** Файл скачался, размер 40–50 МБ. Его можно установить на телефон
так же, как в разделе 5.6.

### 6.6. Если запуск красный

Красный крестик означает ошибку. Порядок действий:

1. Щёлкните по запуску → **Build and release APK**.
2. Найдите шаг с красным крестиком и раскройте его.
3. Скопируйте последние 20–30 строк текста.
4. Спросите DeepSeek по формуле из раздела 0.6.

Две самые частые причины:

- **`Error on ZipFile unknown archive` в шаге установки NDK.** Это сбой
  скачивания на стороне GitHub. В нашем файле уже есть защита: до трёх попыток
  и кэш. Если всё равно упало — нажмите **Re-run failed jobs** в правом верхнем
  углу запуска.
- **`Resource not accessible by integration`.** Значит, в файле забыли строку
  `permissions: contents: write`. Проверьте шаг 6.2.

---

## 7. Supabase: страница с чтением и добавлением

### 7.1. Готовим таблицу

1. Откройте проект на https://supabase.com
2. В левом меню **SQL Editor**.
3. Нажмите **New query** (или `+`).
4. Вставьте целиком:

```sql
create table if not exists public.students (
    id bigint generated by default as identity primary key,
    name text not null,
    specialty text not null,
    grad_year integer not null
);

-- Учебный режим: доступ без политик. Только для демонстрации!
alter table public.students disable row level security;

-- Публикация изменений для Realtime.
do $$
begin
    if not exists (
        select 1
        from pg_publication_tables
        where pubname = 'supabase_realtime'
          and schemaname = 'public'
          and tablename = 'students'
    ) then
        alter publication supabase_realtime add table public.students;
    end if;
end $$;
```

5. Нажмите **Run** (или `Ctrl+Enter`).

**Проверка.** Внизу появилось `Success. No rows returned`. Это нормально:
команда создаёт таблицу, а не возвращает строки.

**Внимание.** `disable row level security` выключает защиту: любой, кто знает
адрес проекта и публичный ключ, может читать и менять таблицу. Для лабораторной
с вымышленными данными это допустимо, для настоящих данных — нет. Подробнее в
разделе 14.

6. В левом меню откройте **Table Editor** → таблица `students`.

**Проверка.** Видны четыре колонки: `id`, `name`, `specialty`, `grad_year`.
Таблица пустая.

### 7.2. Копируем адрес и публичный ключ

1. В левом меню внизу нажмите **Project Settings** (шестерёнка).
2. Раздел **API Keys** (в некоторых версиях — **API**).
3. Скопируйте в блокнот два значения:
   - **Project URL** — вида `https://abcdefghijklm.supabase.co`;
   - **publishable key** — начинается с `sb_publishable_...`.
     В старом интерфейсе он называется **anon public**.

**Внимание.** На этой же странице есть `secret` / `service_role` key. Его
**нельзя** вставлять в сайт: он даёт полный доступ к базе, а страница видна
всем. Нам нужен только публичный ключ.

### 7.3. Создаём стили страниц

Все четыре лабораторные страницы выглядят одинаково, поэтому стили общие.

1. В VSCode откройте корень репозитория.
2. Создайте папку `css`.
3. В ней создайте файл `demo.css` и вставьте:

```css
/* ===========================
   Общие стили демо-страниц
   (Supabase / Firebase)
   =========================== */
:root {
    --bg: #f5f6fa;
    --surface: #ffffff;
    --border: #d7dbe7;
    --text: #1f2430;
    --muted: #6b7280;
    --accent: #4f46e5;
    --accent-hover: #4338ca;
    --danger: #b91c1c;
    --radius: 10px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text);
    background: var(--bg);
    min-height: 100vh;
    padding: 2rem 1rem;
}

.wrap {
    max-width: 760px;
    margin: 0 auto;
}

.topbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.topbar a {
    color: var(--accent);
    text-decoration: none;
    font-size: 0.95rem;
}

.topbar a:hover {
    text-decoration: underline;
}

h1 {
    font-size: 1.6rem;
    margin-bottom: 0.25rem;
}

.subtitle {
    color: var(--muted);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
}

.card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem;
    margin-bottom: 1.25rem;
}

.card h2 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: var(--accent);
}

.field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    margin-bottom: 0.85rem;
}

label {
    font-size: 0.9rem;
    color: var(--muted);
}

input[type="text"],
input[type="number"] {
    padding: 0.6rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    color: var(--text);
    background: #fff;
}

input:focus {
    outline: 2px solid var(--accent);
    outline-offset: 1px;
    border-color: var(--accent);
}

button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 8px;
    background: var(--accent);
    color: #fff;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.2s;
}

button:hover {
    background: var(--accent-hover);
}

button:disabled {
    background: #a5a8b5;
    cursor: not-allowed;
}

.row {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.row > .field {
    flex: 1 1 180px;
    margin-bottom: 0;
}

.status {
    font-size: 0.9rem;
    margin-top: 0.75rem;
    min-height: 1.4em;
    color: var(--muted);
}

.status.error {
    color: var(--danger);
}

.status.ok {
    color: #15803d;
}

.notice {
    border-left: 4px solid #d97706;
    background: #fffbeb;
    padding: 0.85rem 1rem;
    border-radius: 6px;
    font-size: 0.92rem;
    margin-bottom: 1.25rem;
}

.notice code {
    background: rgba(0, 0, 0, 0.06);
    padding: 0.1rem 0.3rem;
    border-radius: 4px;
    font-size: 0.9em;
}

.students {
    list-style: none;
}

.students li {
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
}

.students li:last-child {
    border-bottom: none;
}

.student-name {
    font-weight: 600;
}

.student-meta {
    color: var(--muted);
    font-size: 0.9rem;
}

.empty {
    color: var(--muted);
    padding: 0.5rem 0;
}

.remove {
    background: transparent;
    color: var(--danger);
    border: 1px solid transparent;
    padding: 0.25rem 0.5rem;
    font-size: 0.85rem;
}

.remove:hover {
    background: #fef2f2;
    border-color: #fecaca;
}

.badge {
    display: inline-block;
    font-size: 0.78rem;
    padding: 0.1rem 0.5rem;
    border-radius: 999px;
    background: #eef2ff;
    color: var(--accent);
    vertical-align: middle;
    margin-left: 0.4rem;
}

.hint {
    font-size: 0.88rem;
    color: var(--muted);
    margin-top: 0.75rem;
}
```

4. `Ctrl+S`.

### 7.4. Общие функции страниц

1. Создайте папку `js` в корне репозитория.
2. В ней файл `ui.js`:

```js
// ===========================
// Общие функции интерфейса для демо-страниц
// ===========================
(function () {
    'use strict';

    /**
     * Выводит сообщение о состоянии операции.
     * @param {HTMLElement} el
     * @param {string} message
     * @param {'info'|'ok'|'error'} [kind]
     */
    function setStatus(el, message, kind) {
        if (!el) return;
        el.textContent = message || '';
        el.className = 'status' + (kind ? ' ' + kind : '');
    }

    /**
     * Показывает предупреждение, если конфигурация не заполнена.
     * @param {HTMLElement} el
     * @param {boolean} configured
     * @param {string} fileName
     */
    function showConfigNotice(el, configured, fileName) {
        if (!el) return;
        el.hidden = configured;
        if (!configured) {
            el.textContent =
                'Конфигурация не заполнена. Откройте ' + fileName +
                ' и укажите данные вашего проекта.';
        }
    }

    /**
     * Создаёт элемент списка студентов.
     * Текст вставляется через textContent, поэтому HTML из базы не исполняется.
     */
    function createStudentItem(student, onRemove) {
        const li = document.createElement('li');

        const info = document.createElement('div');

        const name = document.createElement('div');
        name.className = 'student-name';
        name.textContent = student.name || '(без имени)';

        const meta = document.createElement('div');
        meta.className = 'student-meta';
        meta.textContent =
            (student.specialty || '—') + ' · выпуск ' + (student.grad_year || '—');

        info.appendChild(name);
        info.appendChild(meta);
        li.appendChild(info);

        if (onRemove && student.id !== undefined && student.id !== null) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'remove';
            button.textContent = 'Удалить';
            button.addEventListener('click', function () {
                onRemove(student.id);
            });
            li.appendChild(button);
        }

        return li;
    }

    /**
     * Перерисовывает список студентов.
     */
    function renderStudents(listEl, emptyEl, students, onRemove) {
        if (!listEl) return;
        listEl.textContent = '';

        const items = students || [];
        if (emptyEl) {
            emptyEl.hidden = items.length > 0;
        }

        items.forEach(function (student) {
            listEl.appendChild(createStudentItem(student, onRemove));
        });
    }

    /**
     * Проверяет данные формы. Возвращает объект или null.
     */
    function readStudentForm(nameInput, specialtyInput, yearInput) {
        const name = (nameInput.value || '').trim();
        const specialty = (specialtyInput.value || '').trim();
        const year = parseInt(yearInput.value, 10);

        if (!name || !specialty || !Number.isInteger(year)) {
            return null;
        }
        if (year < 1900 || year > 2100) {
            return null;
        }

        return { name: name, specialty: specialty, grad_year: year };
    }

    window.DemoUI = {
        setStatus: setStatus,
        showConfigNotice: showConfigNotice,
        renderStudents: renderStudents,
        readStudentForm: readStudentForm
    };
})();
```

3. `Ctrl+S`.

Что делает этот файл: рисует строки списка, показывает сообщения о статусе,
проверяет, что поля заполнены. Все четыре страницы используют его, чтобы не
дублировать код.

**Внимание.** Текст из базы вставляется через `textContent`, а не `innerHTML`.
Это защита: если кто-то запишет в базу HTML-тег, он покажется как текст, а не
выполнится.

### 7.5. Вставляем свой адрес и ключ

1. В папке `js` создайте файл `supabase-config.js`.
2. Вставьте:

```js
// Публичная конфигурация Supabase.
// Замените два значения на свои из Project Settings -> API Keys.
window.SUPABASE_CONFIG = {
    url: 'https://ВАШ-ПРОЕКТ.supabase.co',
    anonKey: 'ВАШ-ПУБЛИЧНЫЙ-КЛЮЧ'
};

window.isSupabaseConfigured = function () {
    var config = window.SUPABASE_CONFIG || {};
    var url = config.url || '';
    var key = config.anonKey || '';

    if (!url || !key) return false;
    if (url.indexOf('ВАШ') !== -1 || key.indexOf('ВАШ') !== -1) return false;

    return url.indexOf('https://') === 0;
};
```

3. Щёлкните мышкой в строке `url:` и выделите текст между кавычками целиком
   (от `https` до `co`, не захватывая кавычки). Вставьте свой **Project URL**.
4. Так же выделите `ВАШ-ПУБЛИЧНЫЙ-КЛЮЧ` между кавычками и вставьте publishable
   key.
5. `Ctrl+S`.

**Проверка.** В файле больше нет слова `ВАШ`. Кавычки вокруг значений остались,
запятая после URL тоже. Если случайно стёрли кавычку — файл перестанет
работать: верните её.

### 7.6. Логика страницы

1. В папке `js` создайте `supabase.js`:

```js
// ===========================
// Supabase: чтение и добавление записей
// Таблица: students (id, name, specialty, grad_year)
// ===========================
(function () {
    'use strict';

    var TABLE = 'students';
    var client = null;
    var els = {};

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        els = {
            notice: document.getElementById('configNotice'),
            name: document.getElementById('name'),
            specialty: document.getElementById('specialty'),
            gradYear: document.getElementById('gradYear'),
            addBtn: document.getElementById('addBtn'),
            reloadBtn: document.getElementById('reloadBtn'),
            status: document.getElementById('status'),
            students: document.getElementById('students'),
            empty: document.getElementById('empty')
        };

        var configured = window.isSupabaseConfigured();
        window.DemoUI.showConfigNotice(els.notice, configured, 'js/supabase-config.js');

        if (typeof window.supabase === 'undefined') {
            window.DemoUI.setStatus(
                els.status,
                'Не удалось загрузить библиотеку Supabase. Проверьте доступ к cdn.jsdelivr.net.',
                'error'
            );
            return;
        }

        if (!configured) {
            window.DemoUI.setStatus(
                els.status,
                'Укажите Project URL и публичный ключ в js/supabase-config.js',
                'error'
            );
            return;
        }

        client = window.supabase.createClient(
            window.SUPABASE_CONFIG.url,
            window.SUPABASE_CONFIG.anonKey
        );

        els.addBtn.addEventListener('click', addStudent);
        els.reloadBtn.addEventListener('click', loadStudents);

        loadStudents();
    }

    /**
     * SELECT: получить все записи таблицы.
     */
    function loadStudents() {
        window.DemoUI.setStatus(els.status, 'Загружаем список...');

        client
            .from(TABLE)
            .select('*')
            .order('id', { ascending: true })
            .then(function (result) {
                if (result.error) {
                    window.DemoUI.setStatus(
                        els.status,
                        'Ошибка чтения: ' + result.error.message,
                        'error'
                    );
                    return;
                }

                render(result.data);
                window.DemoUI.setStatus(
                    els.status,
                    'Загружено записей: ' + result.data.length,
                    'ok'
                );
            });
    }

    /**
     * INSERT: добавить запись и перечитать список.
     */
    function addStudent() {
        var student = window.DemoUI.readStudentForm(
            els.name,
            els.specialty,
            els.gradYear
        );

        if (!student) {
            window.DemoUI.setStatus(
                els.status,
                'Заполните все поля, год выпуска — число от 1900 до 2100',
                'error'
            );
            return;
        }

        setBusy(true);
        window.DemoUI.setStatus(els.status, 'Отправляем запись...');

        client
            .from(TABLE)
            .insert([student])
            .then(function (result) {
                setBusy(false);

                if (result.error) {
                    window.DemoUI.setStatus(
                        els.status,
                        'Ошибка записи: ' + result.error.message,
                        'error'
                    );
                    return;
                }

                els.name.value = '';
                els.specialty.value = '';
                els.gradYear.value = '';

                window.DemoUI.setStatus(
                    els.status,
                    'Студент добавлен: ' + student.name,
                    'ok'
                );
                loadStudents();
            });
    }

    /**
     * DELETE: удалить запись по id.
     */
    function removeStudent(id) {
        window.DemoUI.setStatus(els.status, 'Удаляем запись...');

        client
            .from(TABLE)
            .delete()
            .eq('id', id)
            .then(function (result) {
                if (result.error) {
                    window.DemoUI.setStatus(
                        els.status,
                        'Ошибка удаления: ' + result.error.message,
                        'error'
                    );
                    return;
                }

                window.DemoUI.setStatus(els.status, 'Запись удалена', 'ok');
                loadStudents();
            });
    }

    function render(rows) {
        window.DemoUI.renderStudents(els.students, els.empty, rows, removeStudent);
    }

    function setBusy(busy) {
        els.addBtn.disabled = busy;
        els.reloadBtn.disabled = busy;
    }
})();
```

2. `Ctrl+S`.

### 7.7. Сама страница

1. В корне репозитория создайте `supabase.html`:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supabase: insert и select</title>
    <link rel="stylesheet" href="css/demo.css">
</head>
<body>
    <div class="wrap">
        <nav class="topbar">
            <a href="index.html">← На главную</a>
            <span>
                <a href="firebase.html">Firebase версия</a> ·
                <a href="supabase-realtime.html">Realtime версия</a>
            </span>
        </nav>

        <h1>Supabase: студенты</h1>
        <p class="subtitle">
            Чтение (select) и добавление (insert) записей в таблицу <code>students</code>.
            Страница не перезагружается: тега form нет, кнопки вызывают JavaScript.
        </p>

        <div class="notice" id="configNotice" hidden></div>

        <section class="card">
            <h2>Добавить студента</h2>
            <div class="row">
                <div class="field">
                    <label for="name">Имя</label>
                    <input type="text" id="name" placeholder="Alex River" autocomplete="off">
                </div>
                <div class="field">
                    <label for="specialty">Специальность</label>
                    <input type="text" id="specialty" placeholder="Computer Science" autocomplete="off">
                </div>
                <div class="field">
                    <label for="gradYear">Год выпуска</label>
                    <input type="number" id="gradYear" placeholder="2028" min="1900" max="2100">
                </div>
            </div>
            <div class="row" style="margin-top: 1rem;">
                <button type="button" id="addBtn">Добавить студента</button>
                <button type="button" id="reloadBtn">Обновить список</button>
            </div>
            <p class="status" id="status">Готово к работе</p>
        </section>

        <section class="card">
            <h2>Список студентов</h2>
            <ul class="students" id="students"></ul>
            <p class="empty" id="empty" hidden>Записей пока нет.</p>
        </section>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/supabase-config.js"></script>
    <script src="js/supabase.js"></script>
</body>
</html>
```

2. `Ctrl+S`.

**Внимание.** В файле нет тега `<form>`, а у кнопок стоит
`type="button"`. Это требование задания: страница не перезагружается, всё
делает JavaScript. Если заменить кнопки на обычные без `type`, браузер начнёт
отправлять форму и страница мигнёт.

### 7.8. Отправляем и проверяем

1. GitHub Desktop → **Summary**:

```
feat: add supabase page with select and insert
```

2. **Commit to main** → **Push origin**.
3. Подождите минуту, пока GitHub Pages обновит сайт.
4. Откройте `https://вашеимя.github.io/college-site/supabase.html`.

**Проверка.** Страница открылась, внизу написано «Загружено записей: 0».

5. Заполните поля: имя `Alex River`, специальность `Computer Science`, год
   `2028`. Нажмите **Добавить студента**.

**Проверка.** Появилось «Студент добавлен: Alex River», в списке одна строка,
поля очистились.

6. Вернитесь в Supabase → **Table Editor** → `students`.

**Проверка.** В таблице появилась строка с этими данными. Обновите страницу
браузера — запись осталась: значит, она правда в базе, а не только на экране.

7. Нажмите **Удалить** у записи.

**Проверка.** Строка исчезла и из списка, и из таблицы в Supabase.

**Внимание.** Если написано «Конфигурация не заполнена» — в
`js/supabase-config.js` остались слова `ВАШ`. Если «Ошибка чтения: ...» —
скопируйте текст ошибки и спросите DeepSeek.

**Внимание.** Открывать страницу двойным щелчком по файлу на компьютере
(`file:///C:/...`) нельзя: браузер заблокирует запросы к базе. Проверяйте только
по адресу сайта.

### 7.9. Страница, которая обновляется сама (realtime)

Обычная страница показывает данные только при загрузке. Realtime-страница
подписывается на изменения и обновляет список сама.

1. Создайте в корне `supabase-realtime.html`:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supabase Realtime: insert и select</title>
    <link rel="stylesheet" href="css/demo.css">
</head>
<body>
    <div class="wrap">
        <nav class="topbar">
            <a href="index.html">← На главную</a>
            <span>
                <a href="supabase.html">Без realtime</a> ·
                <a href="firebase-realtime.html">Firebase realtime</a>
            </span>
        </nav>

        <h1>Supabase Realtime: студенты <span class="badge" id="realtimeBadge">нет связи</span></h1>
        <p class="subtitle">
            Те же select и insert, но список обновляется сам, когда таблица
            <code>students</code> меняется — в том числе из другой вкладки или из приложения.
        </p>

        <div class="notice" id="configNotice" hidden></div>

        <section class="card">
            <h2>Добавить студента</h2>
            <div class="row">
                <div class="field">
                    <label for="name">Имя</label>
                    <input type="text" id="name" placeholder="Alex River" autocomplete="off">
                </div>
                <div class="field">
                    <label for="specialty">Специальность</label>
                    <input type="text" id="specialty" placeholder="Computer Science" autocomplete="off">
                </div>
                <div class="field">
                    <label for="gradYear">Год выпуска</label>
                    <input type="number" id="gradYear" placeholder="2028" min="1900" max="2100">
                </div>
            </div>
            <div class="row" style="margin-top: 1rem;">
                <button type="button" id="addBtn">Добавить студента</button>
                <button type="button" id="reloadBtn">Обновить список</button>
            </div>
            <p class="status" id="status">Готово к работе</p>
        </section>

        <section class="card">
            <h2>Список студентов</h2>
            <ul class="students" id="students"></ul>
            <p class="empty" id="empty" hidden>Записей пока нет.</p>
        </section>

        <section class="card">
            <h2>Журнал изменений</h2>
            <ul class="students" id="log"></ul>
            <p class="empty" id="logEmpty">Изменений пока не было.</p>
        </section>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/supabase-config.js"></script>
    <script src="js/supabase-realtime.js"></script>
</body>
</html>
```

2. Создайте в папке `js` файл `supabase-realtime.js`:

```js
// ===========================
// Supabase Realtime: insert, select и подписка на изменения
// Таблица: students (id, name, specialty, grad_year)
// ===========================
(function () {
    'use strict';

    var TABLE = 'students';
    var client = null;
    var channel = null;
    var els = {};

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        els = {
            notice: document.getElementById('configNotice'),
            name: document.getElementById('name'),
            specialty: document.getElementById('specialty'),
            gradYear: document.getElementById('gradYear'),
            addBtn: document.getElementById('addBtn'),
            reloadBtn: document.getElementById('reloadBtn'),
            status: document.getElementById('status'),
            students: document.getElementById('students'),
            empty: document.getElementById('empty'),
            badge: document.getElementById('realtimeBadge'),
            log: document.getElementById('log'),
            logEmpty: document.getElementById('logEmpty')
        };

        var configured = window.isSupabaseConfigured();
        window.DemoUI.showConfigNotice(els.notice, configured, 'js/supabase-config.js');

        if (typeof window.supabase === 'undefined') {
            window.DemoUI.setStatus(
                els.status,
                'Не удалось загрузить библиотеку Supabase. Проверьте доступ к cdn.jsdelivr.net.',
                'error'
            );
            return;
        }

        if (!configured) {
            window.DemoUI.setStatus(
                els.status,
                'Укажите Project URL и публичный ключ в js/supabase-config.js',
                'error'
            );
            return;
        }

        client = window.supabase.createClient(
            window.SUPABASE_CONFIG.url,
            window.SUPABASE_CONFIG.anonKey
        );

        els.addBtn.addEventListener('click', addStudent);
        els.reloadBtn.addEventListener('click', loadStudents);

        loadStudents();
        subscribe();
    }

    /**
     * SELECT: получить все записи таблицы.
     */
    function loadStudents() {
        client
            .from(TABLE)
            .select('*')
            .order('id', { ascending: true })
            .then(function (result) {
                if (result.error) {
                    window.DemoUI.setStatus(
                        els.status,
                        'Ошибка чтения: ' + result.error.message,
                        'error'
                    );
                    return;
                }

                window.DemoUI.renderStudents(
                    els.students,
                    els.empty,
                    result.data,
                    removeStudent
                );
            });
    }

    /**
     * Realtime: подписка на события INSERT, UPDATE, DELETE таблицы students.
     */
    function subscribe() {
        channel = client
            .channel('students-realtime')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: TABLE },
                handleChange
            )
            .subscribe(function (status) {
                if (status === 'SUBSCRIBED') {
                    els.badge.textContent = 'подключено';
                    els.badge.style.background = '#dcfce7';
                    els.badge.style.color = '#15803d';
                    window.DemoUI.setStatus(
                        els.status,
                        'Realtime подключён: изменения таблицы приходят автоматически',
                        'ok'
                    );
                } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
                    els.badge.textContent = 'нет связи';
                    els.badge.style.background = '#fee2e2';
                    els.badge.style.color = '#b91c1c';
                    window.DemoUI.setStatus(
                        els.status,
                        'Realtime недоступен. Включите его для таблицы students в Supabase.',
                        'error'
                    );
                }
            });
    }

    function handleChange(payload) {
        var row = payload.new && Object.keys(payload.new).length
            ? payload.new
            : payload.old;
        var name = (row && row.name) || '(без имени)';

        addLogEntry(payload.eventType, name);
        loadStudents();
    }

    function addLogEntry(eventType, name) {
        var titles = { INSERT: 'добавлена', UPDATE: 'изменена', DELETE: 'удалена' };

        var li = document.createElement('li');
        var info = document.createElement('div');

        var title = document.createElement('div');
        title.className = 'student-name';
        title.textContent = 'Запись ' + (titles[eventType] || eventType.toLowerCase());

        var meta = document.createElement('div');
        meta.className = 'student-meta';
        meta.textContent = name + ' · ' + new Date().toLocaleTimeString('ru-RU');

        info.appendChild(title);
        info.appendChild(meta);
        li.appendChild(info);

        els.log.insertBefore(li, els.log.firstChild);
        els.logEmpty.hidden = true;

        // Держим журнал коротким.
        while (els.log.children.length > 20) {
            els.log.removeChild(els.log.lastChild);
        }
    }

    /**
     * INSERT: добавить запись.
     */
    function addStudent() {
        var student = window.DemoUI.readStudentForm(
            els.name,
            els.specialty,
            els.gradYear
        );

        if (!student) {
            window.DemoUI.setStatus(
                els.status,
                'Заполните все поля, год выпуска — число от 1900 до 2100',
                'error'
            );
            return;
        }

        setBusy(true);
        window.DemoUI.setStatus(els.status, 'Отправляем запись...');

        client
            .from(TABLE)
            .insert([student])
            .then(function (result) {
                setBusy(false);

                if (result.error) {
                    window.DemoUI.setStatus(
                        els.status,
                        'Ошибка записи: ' + result.error.message,
                        'error'
                    );
                    return;
                }

                els.name.value = '';
                els.specialty.value = '';
                els.gradYear.value = '';

                window.DemoUI.setStatus(
                    els.status,
                    'Студент добавлен: ' + student.name,
                    'ok'
                );
                // Список обновится и по realtime-событию, и здесь — на случай задержки.
                loadStudents();
            });
    }

    /**
     * DELETE: удалить запись по id.
     */
    function removeStudent(id) {
        client
            .from(TABLE)
            .delete()
            .eq('id', id)
            .then(function (result) {
                if (result.error) {
                    window.DemoUI.setStatus(
                        els.status,
                        'Ошибка удаления: ' + result.error.message,
                        'error'
                    );
                    return;
                }

                window.DemoUI.setStatus(els.status, 'Запись удалена', 'ok');
                loadStudents();
            });
    }

    function setBusy(busy) {
        els.addBtn.disabled = busy;
        els.reloadBtn.disabled = busy;
    }
})();
```

3. `Ctrl+S` в обоих файлах.
4. Отправьте на GitHub (Commit → Push), как в шаге 7.8.

**Проверка.** Откройте `https://вашеимя.github.io/college-site/supabase-realtime.html`.
Рядом с заголовком бейдж «подключено» зелёного цвета.

5. Откройте эту страницу в двух вкладках браузера.
6. В первой вкладке добавьте студента.

**Проверка.** Во второй вкладке список обновился сам, без нажатия кнопок, а в
журнале изменений появилась строка «добавлена».

### 7.10. Если бейдж «нет связи»

Значит, таблица не включена в публикацию для realtime. Вернитесь в Supabase →
**SQL Editor** и выполните:

```sql
alter publication supabase_realtime add table public.students;
```

Затем обновите страницу. Если пишет `already member of publication` — всё уже
включено, проблема в другом: проверьте, что вы на странице сайта, а не открыли
файл с диска.

---

## 8. Firebase: те же две страницы на другой базе

Supabase — это база с таблицами, похожая на Excel. Firebase Realtime Database —
это база, похожая на дерево папок с файлами. Задание требует попробовать обе.

### 8.1. Создаём базу

1. Откройте https://console.firebase.google.com и выберите свой проект.
2. В левом меню **Build** → **Realtime Database**.
3. Нажмите **Create Database**.
4. Выберите местоположение, например `europe-west1` (Бельгия). Нажмите
   **Next**.
5. Выберите **Start in test mode** и нажмите **Enable**.

**Проверка.** Открылась вкладка **Data** с пустым деревом и адресом вверху вида
`https://college-demo-default-rtdb.europe-west1.firebasedatabase.app`.
Скопируйте этот адрес в блокнот: он понадобится.

**Внимание.** «Test mode» открывает базу всем на 30 дней, потом закроет. Нам
нужны правила из следующего шага — они не имеют срока.

### 8.2. Открываем правила

1. На странице Realtime Database откройте вкладку **Rules**.
2. Замените всё содержимое на:

```json
{
  "rules": {
    "students": {
      ".read": true,
      ".write": true
    }
  }
}
```

3. Нажмите **Publish**.

**Проверка.** Появилось сообщение об успешной публикации, в редакторе остались
ваши правила.

**Внимание.** Если в правилах нет узла `students`, база ответит
`Permission denied`. Если вы позже переименуете узел в коде, добавьте его и в
правила.

### 8.3. Регистрируем веб-приложение

Firebase должен знать, что к базе будет обращаться сайт.

1. Нажмите шестерёнку вверху слева → **Project settings**.
2. Прокрутите вниз до **Your apps**.
3. Нажмите значок **`</>`** (веб).
4. Введите имя приложения, например `college-web`. Галочку **Firebase Hosting**
   не ставьте.
5. Нажмите **Register app**.
6. Появится блок кода с объектом `firebaseConfig`. Скопируйте его целиком в
   блокнот. Нажмите **Continue to console**.

**Проверка.** В списке приложений появилась строка `college-web`.

**Внимание.** В скопированном конфиге обычно **нет** строки `databaseURL`.
Это нормально: Firebase добавляет её, только если база создана раньше
приложения. Мы впишем её вручную.

### 8.4. Вставляем конфигурацию

1. В папке `js` создайте `firebase-config.js`.
2. Вставьте шаблон:

```js
// Публичная конфигурация Firebase.
// Значения берите в Project settings -> Your apps -> college-web.
window.FIREBASE_CONFIG = {
    apiKey: 'ВАШ_API_KEY',
    authDomain: 'ВАШ-ПРОЕКТ.firebaseapp.com',
    databaseURL: 'https://ВАШ-ПРОЕКТ-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'ВАШ-ПРОЕКТ',
    storageBucket: 'ВАШ-ПРОЕКТ.firebasestorage.app',
    messagingSenderId: 'ВАШ_SENDER_ID',
    appId: 'ВАШ_APP_ID'
};

window.isFirebaseConfigured = function () {
    var config = window.FIREBASE_CONFIG || {};
    var required = ['apiKey', 'databaseURL', 'projectId'];

    for (var i = 0; i < required.length; i++) {
        var value = config[required[i]] || '';
        if (!value || value.indexOf('ВАШ') !== -1) return false;
    }

    return String(config.databaseURL).indexOf('https://') === 0;
};
```

3. Замените значения на свои из скопированного `firebaseConfig`: выделяйте
   текст между кавычками, как в шаге 7.5, и вставляйте своё значение.
   Если какого-то поля в вашем конфиге нет (например `storageBucket`), оставьте
   строку как есть — она не влияет на работу страниц.
4. Для `databaseURL` возьмите адрес из шага 8.1 (тот, что вверху вкладки
   **Data**). Он должен заканчиваться на `firebasedatabase.app`.
5. `Ctrl+S`.

**Проверка.** В файле не осталось слова `ВАШ`.

### 8.5. Страница Firebase

1. В корне создайте `firebase.html`:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firebase: insert и select</title>
    <link rel="stylesheet" href="css/demo.css">
</head>
<body>
    <div class="wrap">
        <nav class="topbar">
            <a href="index.html">← На главную</a>
            <span>
                <a href="supabase.html">Supabase версия</a> ·
                <a href="firebase-realtime.html">Realtime версия</a>
            </span>
        </nav>

        <h1>Firebase: студенты</h1>
        <p class="subtitle">
            Чтение (select) и добавление (insert) записей в Realtime Database,
            узел <code>students</code>. Страница не перезагружается: тега form нет.
        </p>

        <div class="notice" id="configNotice" hidden></div>

        <section class="card">
            <h2>Добавить студента</h2>
            <div class="row">
                <div class="field">
                    <label for="name">Имя</label>
                    <input type="text" id="name" placeholder="Alex River" autocomplete="off">
                </div>
                <div class="field">
                    <label for="specialty">Специальность</label>
                    <input type="text" id="specialty" placeholder="Computer Science" autocomplete="off">
                </div>
                <div class="field">
                    <label for="gradYear">Год выпуска</label>
                    <input type="number" id="gradYear" placeholder="2028" min="1900" max="2100">
                </div>
            </div>
            <div class="row" style="margin-top: 1rem;">
                <button type="button" id="addBtn">Добавить студента</button>
                <button type="button" id="reloadBtn">Обновить список</button>
            </div>
            <p class="status" id="status">Готово к работе</p>
        </section>

        <section class="card">
            <h2>Список студентов</h2>
            <ul class="students" id="students"></ul>
            <p class="empty" id="empty" hidden>Записей пока нет.</p>
        </section>
    </div>

    <script src="https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/11.0.2/firebase-database-compat.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/firebase-config.js"></script>
    <script src="js/firebase.js"></script>
</body>
</html>
```

2. В папке `js` создайте `firebase.js`:

```js
// ===========================
// Firebase: чтение и добавление записей
// Realtime Database, узел: students/{key} = {name, specialty, grad_year}
// ===========================
(function () {
    'use strict';

    var PATH = 'students';
    var db = null;
    var els = {};

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        els = {
            notice: document.getElementById('configNotice'),
            name: document.getElementById('name'),
            specialty: document.getElementById('specialty'),
            gradYear: document.getElementById('gradYear'),
            addBtn: document.getElementById('addBtn'),
            reloadBtn: document.getElementById('reloadBtn'),
            status: document.getElementById('status'),
            students: document.getElementById('students'),
            empty: document.getElementById('empty')
        };

        var configured = window.isFirebaseConfigured();
        window.DemoUI.showConfigNotice(els.notice, configured, 'js/firebase-config.js');

        if (typeof window.firebase === 'undefined') {
            window.DemoUI.setStatus(
                els.status,
                'Не удалось загрузить библиотеку Firebase. Проверьте доступ к gstatic.com.',
                'error'
            );
            return;
        }

        if (!configured) {
            window.DemoUI.setStatus(
                els.status,
                'Укажите firebaseConfig (включая databaseURL) в js/firebase-config.js',
                'error'
            );
            return;
        }

        try {
            if (!window.firebase.apps.length) {
                window.firebase.initializeApp(window.FIREBASE_CONFIG);
            }
            db = window.firebase.database();
        } catch (error) {
            window.DemoUI.setStatus(
                els.status,
                'Ошибка инициализации Firebase: ' + error.message,
                'error'
            );
            return;
        }

        els.addBtn.addEventListener('click', addStudent);
        els.reloadBtn.addEventListener('click', loadStudents);

        loadStudents();
    }

    /**
     * SELECT: одноразовое чтение узла students.
     */
    function loadStudents() {
        window.DemoUI.setStatus(els.status, 'Загружаем список...');

        db.ref(PATH)
            .once('value')
            .then(function (snapshot) {
                var rows = [];
                snapshot.forEach(function (child) {
                    var value = child.val() || {};
                    rows.push({
                        id: child.key,
                        name: value.name,
                        specialty: value.specialty,
                        grad_year: value.grad_year
                    });
                });

                window.DemoUI.renderStudents(
                    els.students,
                    els.empty,
                    rows,
                    removeStudent
                );
                window.DemoUI.setStatus(
                    els.status,
                    'Загружено записей: ' + rows.length,
                    'ok'
                );
            })
            .catch(function (error) {
                window.DemoUI.setStatus(
                    els.status,
                    'Ошибка чтения: ' + error.message,
                    'error'
                );
            });
    }

    /**
     * INSERT: добавить запись с автоматическим ключом.
     */
    function addStudent() {
        var student = window.DemoUI.readStudentForm(
            els.name,
            els.specialty,
            els.gradYear
        );

        if (!student) {
            window.DemoUI.setStatus(
                els.status,
                'Заполните все поля, год выпуска — число от 1900 до 2100',
                'error'
            );
            return;
        }

        setBusy(true);
        window.DemoUI.setStatus(els.status, 'Отправляем запись...');

        db.ref(PATH)
            .push({
                name: student.name,
                specialty: student.specialty,
                grad_year: student.grad_year
            })
            .then(function () {
                setBusy(false);
                els.name.value = '';
                els.specialty.value = '';
                els.gradYear.value = '';

                window.DemoUI.setStatus(
                    els.status,
                    'Студент добавлен: ' + student.name,
                    'ok'
                );
                loadStudents();
            })
            .catch(function (error) {
                setBusy(false);
                window.DemoUI.setStatus(
                    els.status,
                    'Ошибка записи: ' + error.message,
                    'error'
                );
            });
    }

    /**
     * DELETE: удалить запись по ключу.
     */
    function removeStudent(id) {
        db.ref(PATH + '/' + id)
            .remove()
            .then(function () {
                window.DemoUI.setStatus(els.status, 'Запись удалена', 'ok');
                loadStudents();
            })
            .catch(function (error) {
                window.DemoUI.setStatus(
                    els.status,
                    'Ошибка удаления: ' + error.message,
                    'error'
                );
            });
    }

    function setBusy(busy) {
        els.addBtn.disabled = busy;
        els.reloadBtn.disabled = busy;
    }
})();
```

3. `Ctrl+S` в обоих файлах.

Чем это отличается от Supabase: данные лежат не в таблице, а по пути
`students/<уникальный-ключ>`. Ключ генерирует сама база, поэтому у записи есть
поле `id`, но это не число, а строка.

### 8.6. Проверяем

1. Отправьте изменения на GitHub (**Commit to main** → **Push origin**).
2. Подождите минуту.
3. Откройте `https://вашеимя.github.io/college-site/firebase.html`.
4. Добавьте студента.

**Проверка.** Запись появилась в списке, а в консоли Firebase на вкладке
**Data** вырос узел `students` с новой записью.

5. Нажмите **Удалить**.

**Проверка.** Запись исчезла и из списка, и из Firebase.

### 8.7. Страница Firebase Realtime

1. В корне создайте `firebase-realtime.html`:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firebase Realtime: insert и select</title>
    <link rel="stylesheet" href="css/demo.css">
</head>
<body>
    <div class="wrap">
        <nav class="topbar">
            <a href="index.html">← На главную</a>
            <span>
                <a href="firebase.html">Без realtime</a> ·
                <a href="supabase-realtime.html">Supabase realtime</a>
            </span>
        </nav>

        <h1>Firebase Realtime: студенты <span class="badge" id="realtimeBadge">нет связи</span></h1>
        <p class="subtitle">
            Те же select и insert, но Firebase присылает изменения узла
            <code>students</code> сразу, без перезагрузки страницы.
        </p>

        <div class="notice" id="configNotice" hidden></div>

        <section class="card">
            <h2>Добавить студента</h2>
            <div class="row">
                <div class="field">
                    <label for="name">Имя</label>
                    <input type="text" id="name" placeholder="Alex River" autocomplete="off">
                </div>
                <div class="field">
                    <label for="specialty">Специальность</label>
                    <input type="text" id="specialty" placeholder="Computer Science" autocomplete="off">
                </div>
                <div class="field">
                    <label for="gradYear">Год выпуска</label>
                    <input type="number" id="gradYear" placeholder="2028" min="1900" max="2100">
                </div>
            </div>
            <div class="row" style="margin-top: 1rem;">
                <button type="button" id="addBtn">Добавить студента</button>
                <button type="button" id="reloadBtn">Обновить список</button>
            </div>
            <p class="status" id="status">Готово к работе</p>
        </section>

        <section class="card">
            <h2>Список студентов</h2>
            <ul class="students" id="students"></ul>
            <p class="empty" id="empty" hidden>Записей пока нет.</p>
        </section>

        <section class="card">
            <h2>Журнал изменений</h2>
            <ul class="students" id="log"></ul>
            <p class="empty" id="logEmpty">Изменений пока не было.</p>
        </section>
    </div>

    <script src="https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/11.0.2/firebase-database-compat.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/firebase-config.js"></script>
    <script src="js/firebase-realtime.js"></script>
</body>
</html>
```

2. В папке `js` создайте `firebase-realtime.js`:

```js
// ===========================
// Firebase Realtime: insert, select и подписка на изменения
// Realtime Database, узел: students/{key} = {name, specialty, grad_year}
// ===========================
(function () {
    'use strict';

    var PATH = 'students';
    var db = null;
    var els = {};
    var initialized = false;

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        els = {
            notice: document.getElementById('configNotice'),
            name: document.getElementById('name'),
            specialty: document.getElementById('specialty'),
            gradYear: document.getElementById('gradYear'),
            addBtn: document.getElementById('addBtn'),
            reloadBtn: document.getElementById('reloadBtn'),
            status: document.getElementById('status'),
            students: document.getElementById('students'),
            empty: document.getElementById('empty'),
            badge: document.getElementById('realtimeBadge'),
            log: document.getElementById('log'),
            logEmpty: document.getElementById('logEmpty')
        };

        var configured = window.isFirebaseConfigured();
        window.DemoUI.showConfigNotice(els.notice, configured, 'js/firebase-config.js');

        if (typeof window.firebase === 'undefined') {
            window.DemoUI.setStatus(
                els.status,
                'Не удалось загрузить библиотеку Firebase. Проверьте доступ к gstatic.com.',
                'error'
            );
            return;
        }

        if (!configured) {
            window.DemoUI.setStatus(
                els.status,
                'Укажите firebaseConfig (включая databaseURL) в js/firebase-config.js',
                'error'
            );
            return;
        }

        try {
            if (!window.firebase.apps.length) {
                window.firebase.initializeApp(window.FIREBASE_CONFIG);
            }
            db = window.firebase.database();
        } catch (error) {
            window.DemoUI.setStatus(
                els.status,
                'Ошибка инициализации Firebase: ' + error.message,
                'error'
            );
            return;
        }

        els.addBtn.addEventListener('click', addStudent);
        els.reloadBtn.addEventListener('click', loadStudents);

        subscribe();
    }

    /**
     * Realtime: постоянная подписка на узел students.
     */
    function subscribe() {
        var ref = db.ref(PATH);

        ref.on(
            'value',
            function (snapshot) {
                initialized = true;
                els.badge.textContent = 'подключено';
                els.badge.style.background = '#dcfce7';
                els.badge.style.color = '#15803d';

                var rows = [];
                snapshot.forEach(function (child) {
                    var value = child.val() || {};
                    rows.push({
                        id: child.key,
                        name: value.name,
                        specialty: value.specialty,
                        grad_year: value.grad_year
                    });
                });

                window.DemoUI.renderStudents(
                    els.students,
                    els.empty,
                    rows,
                    removeStudent
                );
                window.DemoUI.setStatus(
                    els.status,
                    'Realtime подключён, записей: ' + rows.length,
                    'ok'
                );
            },
            function (error) {
                els.badge.textContent = 'нет связи';
                els.badge.style.background = '#fee2e2';
                els.badge.style.color = '#b91c1c';
                window.DemoUI.setStatus(
                    els.status,
                    'Ошибка Realtime: ' + error.message,
                    'error'
                );
            }
        );

        // Журнал событий: до первого снимка события не пишем,
        // иначе в журнал попадут все существующие записи.
        ref.on('child_added', function (snapshot) {
            if (!initialized) return;
            addLogEntry('добавлена', snapshot.val());
        });

        ref.on('child_changed', function (snapshot) {
            addLogEntry('изменена', snapshot.val());
        });

        ref.on('child_removed', function (snapshot) {
            addLogEntry('удалена', snapshot.val());
        });
    }

    /**
     * SELECT: разовое чтение, используется кнопкой «Обновить список».
     */
    function loadStudents() {
        window.DemoUI.setStatus(els.status, 'Читаем список...');

        db.ref(PATH)
            .once('value')
            .then(function (snapshot) {
                var rows = [];
                snapshot.forEach(function (child) {
                    var value = child.val() || {};
                    rows.push({
                        id: child.key,
                        name: value.name,
                        specialty: value.specialty,
                        grad_year: value.grad_year
                    });
                });

                window.DemoUI.renderStudents(
                    els.students,
                    els.empty,
                    rows,
                    removeStudent
                );
                window.DemoUI.setStatus(
                    els.status,
                    'Загружено записей: ' + rows.length,
                    'ok'
                );
            })
            .catch(function (error) {
                window.DemoUI.setStatus(
                    els.status,
                    'Ошибка чтения: ' + error.message,
                    'error'
                );
            });
    }

    function addLogEntry(action, value) {
        var li = document.createElement('li');
        var info = document.createElement('div');

        var title = document.createElement('div');
        title.className = 'student-name';
        title.textContent = 'Запись ' + action;

        var meta = document.createElement('div');
        meta.className = 'student-meta';
        meta.textContent =
            ((value && value.name) || '(без имени)') +
            ' · ' + new Date().toLocaleTimeString('ru-RU');

        info.appendChild(title);
        info.appendChild(meta);
        li.appendChild(info);

        els.log.insertBefore(li, els.log.firstChild);
        els.logEmpty.hidden = true;

        while (els.log.children.length > 20) {
            els.log.removeChild(els.log.lastChild);
        }
    }

    /**
     * INSERT: добавить запись с автоматическим ключом.
     */
    function addStudent() {
        var student = window.DemoUI.readStudentForm(
            els.name,
            els.specialty,
            els.gradYear
        );

        if (!student) {
            window.DemoUI.setStatus(
                els.status,
                'Заполните все поля, год выпуска — число от 1900 до 2100',
                'error'
            );
            return;
        }

        setBusy(true);
        window.DemoUI.setStatus(els.status, 'Отправляем запись...');

        db.ref(PATH)
            .push({
                name: student.name,
                specialty: student.specialty,
                grad_year: student.grad_year
            })
            .then(function () {
                setBusy(false);
                els.name.value = '';
                els.specialty.value = '';
                els.gradYear.value = '';
                window.DemoUI.setStatus(
                    els.status,
                    'Студент добавлен: ' + student.name,
                    'ok'
                );
            })
            .catch(function (error) {
                setBusy(false);
                window.DemoUI.setStatus(
                    els.status,
                    'Ошибка записи: ' + error.message,
                    'error'
                );
            });
    }

    /**
     * DELETE: удалить запись по ключу.
     */
    function removeStudent(id) {
        db.ref(PATH + '/' + id)
            .remove()
            .then(function () {
                window.DemoUI.setStatus(els.status, 'Запись удалена', 'ok');
            })
            .catch(function (error) {
                window.DemoUI.setStatus(
                    els.status,
                    'Ошибка удаления: ' + error.message,
                    'error'
                );
            });
    }

    function setBusy(busy) {
        els.addBtn.disabled = busy;
        els.reloadBtn.disabled = busy;
    }
})();
```

3. `Ctrl+S` в обоих файлах.
4. Отправьте на GitHub.
5. Откройте страницу в двух вкладках и добавьте запись в первой.

**Проверка.** Вторая вкладка обновилась сама, в журнале появилась строка.

**Внимание.** Существующие записи при первой загрузке в журнал не попадают:
для этого в коде есть флаг `initialized`. Так и должно быть — журнал показывает
только то, что произошло при вас.

### 8.8. Если Firebase отвечает `Permission denied`

1. Откройте Realtime Database → **Rules**.
2. Убедитесь, что правила из шага 8.2 опубликованы и в них есть узел
   `students`.
3. Проверьте, что в `js/firebase.js` и `js/firebase-realtime.js` путь совпадает
   с правилами. В нашем случае везде `students`.

---

## 9. Главная страница со ссылками на всё

Главную страницу мы создали в разделе 4, ссылки в ней уже есть. Осталось
убедиться, что все четыре работают.

1. Откройте адрес сайта.
2. По очереди нажмите все четыре ссылки.

**Проверка.** Каждая открывается, ни одна не даёт 404.

Если какая-то ссылка ведёт в пустоту — сравните имя файла в ссылке с именем
файла в репозитории. Регистр важен: `Supabase.html` и `supabase.html` — разные
файлы.

---

## 10. Финальная проверка и сдача

### 10.1. Отправляем последние изменения

1. GitHub Desktop → **Summary**:

```
docs: describe lab pages
```

2. **Commit to main** → **Push origin**.

### 10.2. Проверяем всё по порядку

1. **Actions** → последний запуск зелёный.
2. **Releases** → новый тег `build-N` и в нём APK.
3. **Settings → Pages** → сайт открывается.
4. Все четыре страницы работают.
5. APK устанавливается на телефон.

### 10.3. Что показать преподавателю

- ссылку на репозиторий;
- ссылку на сайт и на каждой из четырёх страниц;
- вкладку **Actions** с зелёным запуском;
- вкладку **Releases** с APK;
- папку `flutter_project` с кодом приложения;
- скриншот добавленной записи в Supabase и в Firebase.

**Внимание.** Перед сдачей пройдите чек-лист из раздела 13 и проверьте
безопасность по разделу 14. В репозитории не должно быть паролей и секретных
ключей.

---

## 11. Домашнее задание: RuStore

Это задание выполняется только владельцем аккаунта: там нужны паспортные
данные, и их нельзя никому передавать.

1. Откройте https://www.rustore.ru
2. Нажмите **Стать разработчиком**.
3. Войдите через **VK ID**. Если аккаунта нет — зарегистрируйте.
4. Заполните профиль: тип аккаунта **физическое лицо**, ФИО, телефон, почта.
5. Примите условия для разработчиков.
6. Отправьте заявку и дождитесь проверки. Обычно это 1–3 рабочих дня.
7. После одобрения откройте консоль разработчика: **Приложения** →
   **Добавить приложение**.

Что понадобится для публикации:

- APK, подписанный **своим** ключом (не отладочным);
- иконка 512×512;
- описание, скриншоты, категория;
- политика конфиденциальности (можно короткий текст о том, что данные
  вымышленные).

Подпись своим ключом — отдельная задача. Кратко: создаётся файл `keystore.jks`
командой `keytool`, пароли кладутся в **GitHub Secrets**, а в
`android/app/build.gradle.kts` добавляется блок `signingConfigs`. Сам файл
`keystore.jks` и пароли **никогда** не попадают в репозиторий.

**Внимание.** Не пытайтесь загрузить в RuStore APK из раздела 6: он подписан
отладочным ключом, магазин его отклонит.

---

## 12. Если что-то сломалось

### 12.1. Как искать причину

1. Найдите в таблице ниже сообщение, которое видите.
2. Если не нашли — скопируйте текст ошибки целиком.
3. Спросите DeepSeek по формуле из раздела 0.6, указав номер шага.
4. Одна ошибка — одно изменение. Не правьте пять файлов сразу: потом не
   поймёте, что помогло.

### 12.2. Установка и терминал

| Что видите | Причина | Что делать |
|---|---|---|
| `flutter: команда не найдена` | Flutter не в `PATH` или окно открыто до установки | Закрыть все окна PowerShell, открыть заново. Проверить `Path` (шаг 2.6) |
| `git: команда не найдена` | Git установлен, но терминал старый | Перезапустить PowerShell; при необходимости перезагрузить компьютер |
| `java: команда не найдена` | Нет `JAVA_HOME` или `bin` в `PATH` | Повторить шаг 2.8, открыть новое окно |
| `&& не является допустимым разделителем` | PowerShell 5.1 не понимает `&&` | Вставлять команды по одной |
| `Access is denied` при установке | Нужны права администратора | Правый клик по PowerShell → **Запуск от имени администратора** |
| `flutter doctor`: `cmdline-tools component is missing` | Не установлены Command-line Tools | SDK Manager → SDK Tools → галочка Command-line Tools (latest) |
| `Android license status unknown` | Лицензии не приняты | `flutter doctor --android-licenses`, нажимать `y` |
| `[!] Visual Studio`, `[!] Chrome` | Нет средств для Windows-приложений и браузера | Игнорировать: для Android они не нужны |
| Скачивание Flutter идёт очень медленно | Сеть или антивирус | Подождать, при необходимости отключить проверку папки `C:\dev` в антивирусе |

### 12.3. Сборка APK

| Что видите | Причина | Что делать |
|---|---|---|
| `Unsupported class file major version` | Не та Java | `flutter config --jdk-dir "C:\Program Files\Android\Android Studio\jbr"` |
| `SDK location not found` | Flutter не нашёл Android SDK | `flutter config --android-sdk "C:\Users\ИМЯ\AppData\Local\Android\Sdk"` |
| `Could not resolve` / `handshake` | Сеть, прокси | Повторить сборку: скачанное кэшируется |
| Сборка «висит» на `Running Gradle task` | Первая сборка скачивает Gradle | Подождать 10–15 минут, не закрывать окно |
| `Execution failed for task ':app:...'` | Ошибка в коде | Скопировать 20 строк выше первого `FAILURE` и показать DeepSeek |
| `FormatException: Unterminated string` | Русские буквы в пути | Перенести проект в `C:\dev` |
| Ошибка символических ссылок | Выключен режим разработчика | Шаг 2.7 |
| APK не устанавливается на телефон | Старая версия Android или запрет установки | Разрешить установку из неизвестных источников |

### 12.4. GitHub Actions

| Что видите | Причина | Что делать |
|---|---|---|
| `Resource not accessible by integration` | Нет прав на создание релиза | Добавить `permissions: contents: write` |
| `Error on ZipFile unknown archive` | Битый архив NDK | Нажать **Re-run failed jobs**; в нашем файле уже есть три попытки и кэш |
| `Invalid workflow file` | Сломан YAML (отступы, табы) | Сравнить с текстом из шага 6.2, вставить заново |
| Workflow не запустился | Push был не в `main` | Проверить ветку в GitHub Desktop |
| `flutter analyze` падает в CI, а локально нет | Другая версия Flutter | Запустить `flutter upgrade` локально |
| Релиз есть, APK нет | Не сработал шаг `Collect APK` | Открыть логи шага, проверить путь `build/app/outputs/flutter-apk/` |

### 12.5. Supabase

| Что видите | Причина | Что делать |
|---|---|---|
| «Конфигурация не заполнена» | В `supabase-config.js` остались `ВАШ` | Вписать URL и publishable key, сохранить, отправить на GitHub |
| «Загружено записей: 0», хотя данные есть | Включён RLS без политик | Для учебного варианта: `alter table public.students disable row level security;` |
| `new row violates row-level security policy` | То же самое | То же решение |
| «Ошибка чтения: Failed to fetch» | Страница открыта с диска (`file://`) или нет интернета | Открывать по адресу сайта |
| `relation "students" does not exist` | SQL не выполнен | Повторить шаг 7.1 |
| `ERROR: 42804: default for column "grad_year" cannot be cast...` | У колонки остался текстовый default | `alter table public.students alter column grad_year drop default;` затем `alter column grad_year type integer using nullif(btrim(grad_year::text), '')::integer;` |
| В Table Editor у `name` default `'not null'` | Текст попал в поле Default value | `alter table public.students alter column name drop default;` и то же для `specialty` |
| Нет колонки `id` или она пустая | Таблица создана без identity | `alter table public.students add column if not exists id bigint generated by default as identity;` |
| Бейдж «нет связи» | Таблица не в публикации | `alter publication supabase_realtime add table public.students;` |
| Пришло письмо про RLS от Supabase | Защита действительно выключена | Это ожидаемо для задания; см. раздел 14 |

### 12.6. Firebase

| Что видите | Причина | Что делать |
|---|---|---|
| `Permission denied` | Правила не опубликованы | Шаг 8.2 |
| Ошибка про `databaseURL` | В конфиге нет адреса базы | Вписать вручную из вкладки Data |
| «Конфигурация не заполнена» | В `firebase-config.js` остались `ВАШ` | Заполнить значения |
| Список пуст, ошибок нет | Записи в другом узле | Сверить путь `students` в коде и в правилах |
| Realtime не обновляется | База не создана или правила закрывают чтение | Проверить вкладку Data и Rules |
| `auth/invalid-api-key` | Ключ скопирован с ошибкой | Скопировать `firebaseConfig` заново |

### 12.7. Сайт и GitHub Pages

| Что видите | Причина | Что делать |
|---|---|---|
| 404 на сайте | Pages не включён или файлы не отправлены | Шаги 4.4 и 4.5 |
| 404 только на одной странице | Опечатка в имени файла или регистре | Сравнить имя в ссылке и в репозитории |
| Старая версия страницы | Кэш браузера или Pages ещё собирается | `Ctrl+F5`, подождать минуту |
| Страница без стилей | Не создан `css/demo.css` или неверный путь | Проверить папку `css` в корне |
| Пустой экран, в консоли ошибка JS | Синтаксическая ошибка | `F12` → **Console**, скопировать красный текст |

---

## 13. Финальный чек-лист

Отмечайте галочками. Если пункт не выполняется — не сдавайте работу.

- [ ] `flutter doctor` — Android toolchain без ошибок.
- [ ] `dart analyze` — `No issues found!`
- [ ] `flutter test` — `All tests passed!`
- [ ] `flutter build apk --release` — APK собран локально.
- [ ] Workflow в `main` зелёный, релиз с APK существует.
- [ ] `supabase.html` — список, добавление и удаление работают.
- [ ] `supabase-realtime.html` — обновляется без перезагрузки, бейдж «подключено».
- [ ] `firebase.html` — список, добавление и удаление работают.
- [ ] `firebase-realtime.html` — обновляется без перезагрузки.
- [ ] С главной доступны все четыре страницы.
- [ ] В репозитории нет паролей, `service_role`/`secret` ключей и `keystore.jks`.
- [ ] APK устанавливается на телефон.
- [ ] Регистрация в RuStore пройдена (если требуется).

---

## 14. Безопасность: что можно показывать, а что нельзя

### 14.1. Публичные данные

Это **не секрет**, их можно держать в репозитории:

- Supabase **Project URL**;
- Supabase **publishable** / **anon** key;
- Firebase `firebaseConfig` (`apiKey`, `projectId`, `appId` и остальное).

Они и так видны в исходниках любой страницы. Доступ ограничивают не они, а
правила: RLS в Supabase и Rules в Firebase.

### 14.2. Секреты

Это **нельзя** никому показывать, нельзя вставлять в код и отправлять в GitHub:

- Supabase **secret** / **service_role** key;
- пароль базы Supabase;
- пароли аккаунтов;
- файл `keystore.jks` и пароли от него;
- приватные ключи SSH.

Если секрет случайно попал в репозиторий — недостаточно удалить файл новым
коммитом: он остаётся в истории. Нужно сменить сам ключ в панели сервиса.

### 14.3. Открытые базы — это риск

В задании мы специально выключили RLS и поставили `".read": true`,
`".write": true`. Это значит: любой человек, узнавший адрес проекта, может
прочитать и изменить данные.

Поэтому:

- в базах должны быть только вымышленные данные (`Alex River`, `2028`);
- не храните там настоящие имена, телефоны, почту, оценки;
- после сдачи можно включить защиту:

```sql
alter table public.students enable row level security;
```

Но тогда страницы перестанут работать, пока не настроены политики и вход
пользователей (Supabase Auth или Firebase Authentication). Настоящие приложения
делают именно так.

---

## Приложение A. Git без GitHub Desktop

GitHub Desktop удобнее, но иногда полезно знать команды. Все команды
выполняются в PowerShell из папки репозитория.

```
cd C:\dev\college-site
```

Проверить, что изменилось:

```
git status
```

Добавить все изменения:

```
git add .
```

Зафиксировать:

```
git commit -m "feat: add supabase page"
```

Отправить на GitHub:

```
git push origin main
```

Получить чужие изменения:

```
git pull origin main
```

Если `git push` просит пароль, а вы не помните его: в GitHub откройте
**Settings** → **Developer settings** → **Personal access tokens** → создайте
токен с правом `repo` и вставьте его вместо пароля. GitHub Desktop делает это
сам, поэтому для новичка он предпочтительнее.

---

## Приложение B. Готовые вопросы для DeepSeek

Копируйте и подставляйте свои данные.

**Ошибка в терминале:**

```
Я прохожу инструкцию, шаг 5.5 (сборка APK).
Команда: flutter build apk --release
Вывод:
<вставьте 20-30 строк>
Объясни простыми словами, что случилось, и дай точные шаги.
```

**Ошибка на сайте:**

```
Я прохожу инструкцию, шаг 7.8 (страница Supabase).
Открываю https://.../supabase.html, внизу страницы написано:
<текст>
Что проверить по порядку?
```

**Красный workflow:**

```
Я прохожу инструкцию, шаг 6.6.
Запуск GitHub Actions упал на шаге <название>.
Лог:
<вставьте>
Как исправить?
```

**Просьба объяснить:**

```
Объясни как пятилетнему, зачем в js/ui.js нужна функция renderStudents
и почему нельзя вставлять данные через innerHTML.
```

**Чего просить не надо:**

- «Сделай всё за меня» — DeepSeek не имеет доступа к вашему компьютеру.
- «Запусти команду» — не может.
- «Посмотри мой экран» — не видит.

---

## Приложение C. Словарь

| Слово | Что это простыми словами |
|---|---|
| Терминал, PowerShell | Окно, куда вставляют команды текстом |
| Команда | Строка текста, которую компьютер выполняет |
| Репозиторий | Папка проекта на GitHub вместе с историей изменений |
| Клонировать | Скачать репозиторий на компьютер |
| Коммит | Сохранение изменений с подписью |
| Push | Отправить коммиты на GitHub |
| Ветка (`main`) | Основная линия версий проекта |
| Workflow | Сценарий, который выполняет GitHub Actions |
| APK | Установочный файл приложения для Android |
| Release | Раздел GitHub с готовыми файлами сборки |
| SDK | Набор инструментов для разработки |
| JDK | Java для разработчиков, нужна сборщику Android |
| Gradle | Сборщик, который превращает код в APK |
| CDN | Сайт, с которого браузер берёт библиотеку |
| Realtime | Обновление данных сразу, без перезагрузки страницы |
| RLS | Правила доступа к таблицам в Supabase |
| `textContent` | Способ вставить текст без выполнения HTML |
| Бейдж | Маленькая цветная плашка со статусом |

---

## Приложение D. Что дальше

Когда всё работает, можно улучшать:

- включить RLS и настроить политики доступа, добавить вход пользователей;
- подключить Flutter-приложение к Supabase вместо хранения в памяти;
- сделать настоящий release keystore и выложить приложение в RuStore;
- добавить в workflow автотесты на нескольких версиях Flutter.

Но это уже не требуется для сдачи. Сначала доведите до конца базовый вариант.
