# CovXray
<h3>CovXray is an application that can classify Covid positive Xrays from others. </h3>

<h4>Simply upload an image of an X-ray and the model will display the label along with the confidence score.</h4>

<b> Created using - ReactJS, FastAPI, Tensorflow. </b>

<h2>Landing Page:</h2>


![Screenshot (236)](https://user-images.githubusercontent.com/86382795/152028203-3996dabb-6173-4a70-963f-92cfa1ac4498.png)


<h2>Result:</h2>


![Screenshot (238)](https://user-images.githubusercontent.com/86382795/152030637-1e358dc8-2b7b-4402-ae0f-1c47f283f40b.png)

<h2> Installation </h2>

```
1. Clone this repository.
2. Run pip3 install -r requirements.txt
3. Extract the variables.7z.001 file. (variables.data-00000-of-00001 file is split into two volumes - variables.7z.001 and variables.7z.002)
4. Create a .env file with REACT_APP_API_URL=http://localhost:8000/predict
5. Run python main.py
6. cd frontend
7. Run npm run start
```
The application would be up and running at http://localhost:3000.
