# BookManagementSystem

This project lets you track your books


Setps to Run the server
---------------------------
- Create a virtualenv
- then do pip install requirements.txt
- Activate virtualenv using following command : source venv/bin/activate
- then do python manage.py runserver


API for Books (Accepts only JSON request and gives JSON response)
------------------------------------------------------------------
- To add a Book -  *POST* to /books/ with data like name and status
- To get list of books - *GET* to /books/
- To get a individual book - *GET* to /books/{book-id}/
- To delete a book - *DELETE* to /books/{book-id}/
- To Update the status of the book *PUT* to /books/{book-id}
