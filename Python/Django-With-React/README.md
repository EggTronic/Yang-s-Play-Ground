## Notes
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
    $ python manage.py run runserver
    ```