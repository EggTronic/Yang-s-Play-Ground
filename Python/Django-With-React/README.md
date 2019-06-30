## Notes
### Django
1. Install Python Virtual Environment
   ```
   $ pip install pipenv
   ```
2. Launch Python Virtual Environment
   ```
   $ pipenv shell
   ```
3. Install dependencies
   ```
   $ pipenv install django djangorestframework django-rest-knox
   ```
4. Create Django Projects
   ```
   $ django-admin startproject <name>
   $ cd ./<name>
   ```
5. Create Django App
   ```
   $ python manage.py startapp <app_name>
   ```
   ```
   Add <app_name> and 'rest-framework' to settings.py
   ```
   ```
   Create Database in models.py with

   class Name(models.model):
      field1 = models.XXXField(constrain1,constrain2)
   ```
6. Setup Database
   ```
   $ python manage.py makemigrations <app_name>
   ```
   ```
   $ python manage.py migrate 
   ```
7. Setup Serializer for JSON (serializers.py)
8. Setup API (api.py) with router
9. Setup URL (urls.py)
10. Run Server
    ```
    $ python manage.py runserver
    ```

### React
1. ```
   $ npm init -y
   ```
2. Webpack
   ```
   $ npm install -D webpack webpack-cli
   ```
3. Babel
   ```
   $ npm install i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties
   ```
4. React
   ```
   $ npm i react react-dom prop-types
   ```
5. Create .babelrc
6. Create webpack.config.js
7. Add dev/build script to package.json
8. Add index.js/main.js/App.js
9. Add frontend app to Django settings
10. Create url for frontend and add to urls.py
11. Build for dev
    ```
    $ npm run dev
    ```
12. Start server
    ```
    $ python manage.py runserver
    ```
13. Authentication
    ```
    $ npm i redux react-redux redux-thunk redux-devtools-extension
    ```
14. Alert Component
    ```
    $ npm i react-alert react-alert-template-basic react-transition-group
    ```
15. Router
    ```
    $ npm i react-router-dom
    ```