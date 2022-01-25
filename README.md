# Getting Started quiz.it app

## How to start this project

In order for this project to function properly, you would also have to start backend  
https://github.com/matsobczyk/elearning-api  
You would need a clear mongoDB environment as well as to set up the following env's in **.env** file:  
```
DB_CONNECTION=
TOKEN_SECRET=
TOKEN_SECRETInv=
TOKEN_SECRETTeacher=

```
Now you're ready to type 
`npm start` which runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  

-----
## Project overview
#### When the following steps succeed, the following page will appear

<img width="1920" alt="Screenshot 2022-01-25 at 00 30 45" src="https://user-images.githubusercontent.com/61236846/150882493-7663de5e-6d90-4f53-9172-af6d421da4ae.png">


### Login  
<img width="1920" alt="Screenshot 2022-01-25 at 00 37 02" src="https://user-images.githubusercontent.com/61236846/150883116-2bab3bc9-efc1-43c6-a59b-6788b6930426.png">

### Register  

<img width="1920" alt="Screenshot 2022-01-25 at 00 36 06" src="https://user-images.githubusercontent.com/61236846/150883030-32c0edf9-1797-4da2-9532-9227211eeba5.png">

### Teacher Panel

<img width="1920" alt="Screenshot 2022-01-25 at 00 37 49" src="https://user-images.githubusercontent.com/61236846/150883205-094d1f87-1e11-4a54-bfcf-44bc18101eae.png">

### Survey  


Entrance Page           |  Survey start       |  Survey end
:-------------------------:|:-------------------------:|:-------------------------:
  <img width="1920" alt="Screenshot 2022-01-25 at 00 38 29" src="https://user-images.githubusercontent.com/61236846/150883442-a3c8e336-0704-45b5-b1c8-93fa8a7dd108.png">|<img width="1920" alt="Screenshot 2022-01-25 at 00 38 36" src="https://user-images.githubusercontent.com/61236846/150883531-6f3590a7-7d19-4fe1-bd06-2f134cb4776a.png">|<img width="1920" alt="Screenshot 2022-01-25 at 00 42 33" src="https://user-images.githubusercontent.com/61236846/150883686-f191dfcc-a101-4134-9458-2b26ddb004f6.png">

# Wybrane ciekawsze elementy techniczne
numer          |  opis       |  zdjęcie
:-------------------------:|:-------------------------:|:-------------------------:
|---|---|---|
|1 | Router - w projekcie wykorzystaliśmy reactowy router pozwalający na wygodną obsługę endpointów | <img width="561" alt="Screenshot 2022-01-25 at 00 52 10" src="https://user-images.githubusercontent.com/61236846/150884620-8077d1a0-50e1-40b9-9c40-ce5299ae778b.png">|
|2| UseNavigate |<img width="600" alt="Screenshot 2022-01-25 at 00 51 39" src="https://user-images.githubusercontent.com/61236846/150884568-72602ec4-b186-4519-97f4-994eb6697551.png">|
|3 | Wykorzystaliśmy bootstrapowy navbar w połączeniu z Reactowym routerem | <img width="599" alt="Screenshot 2022-01-25 at 00 52 41" src="https://user-images.githubusercontent.com/61236846/150884661-9fc8fa07-6448-4be3-8a7c-8d0b98718a43.png">|
|4| Wyświetlanie warunkowe - wykorzystaliśmy wyświetlanie warunkowe dzięki któremy wyświetlamy elementy w zależności od określonych warunków | ![aaa](https://user-images.githubusercontent.com/61236846/150885996-a50d3590-c47d-440a-97fe-96f7f3ecf63f.png)|
|5|W naszym projekcie znalazły się również listy pobieranych obiektów wyświetlane za pomocą .map() i komponentu | <img width="453" alt="Screenshot 2022-01-25 at 00 53 38" src="https://user-images.githubusercontent.com/61236846/150884755-e5ee54fa-4173-48a0-baa4-27a81b6deb26.png">|
|6|QuizListRow – obiekt stylowany za pomocą bootstrapa i css |<img width="312" alt="Screenshot 2022-01-25 at 00 57 01" src="https://user-images.githubusercontent.com/61236846/150885056-0f2fdf37-54be-4441-81e5-9d69609aff22.png">|
|7|Używamy localStorage do przetrzymywania danych (w tym przetrzymywanie parsowanych obiektów)|<img width="1056" alt="Screenshot 2022-01-25 at 01 01 02" src="https://user-images.githubusercontent.com/61236846/150885409-93db8194-b8ec-43d6-918f-8ac9c432b535.png">|
|8|Cały system działa we współpracy z utworzonym przez nas serwerem we frameworku express.js|<img width="1920" alt="Screenshot 2022-01-25 at 01 03 06" src="https://user-images.githubusercontent.com/61236846/150885595-6e2ad5a2-c874-444a-bda4-cec82e54e9f4.png">|
