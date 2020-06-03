# strapi-demo

## Install via Docker

```bash
docker-compose up
```

## Account Info 
```bash
username: admin
password: admin123
```

## Solution for task
  - Multilingual for each field in the Activities
  
  I create a component include 3 field (en, de, es) - Picture below
  
![mutilanguage](https://user-images.githubusercontent.com/53887439/83608772-894f0480-a5a7-11ea-9e52-9240ac846ef5.png)

  I also create 2 type component multilingual for short text and long text. Then, when i create Title, SubTitle, Description of Activities content-type, i will choose multilingual component for those fields
  
  - Custom endpoint PUT /activities_price
  
  First, i will create new route for that endpoint by adding few lines in `./api/<collection-type-name>/config/routes.json` - Picture below
  
  ![createRoute](https://user-images.githubusercontent.com/53887439/83609838-fdd67300-a5a8-11ea-8b84-e9a9b14e940e.png)
  
  Next, i write action in **Activities Controllers** in `./api/<collection-type-name>/controllers/activities.js` - Picture below
  
  ![apiUpdate](https://user-images.githubusercontent.com/53887439/83610406-9240d580-a5a9-11ea-96cb-c16a52756ebb.png)
  
  - Configure a plugin to send email automatic 
 
 I use Sendgrid Provider to config send email feature. In order to send email when you create new activities, we need override the controller for models by default - Picture below
 
 ![overrideCreate](https://user-images.githubusercontent.com/53887439/83611944-eb116d80-a5ab-11ea-88a1-92cdedc06576.png)
 
 
## Time Tracking

  - Day 1 (01/06/2020): Read document and install Strapi with MariaDB via Docker (Task 1)
  
  - Day 2 (02/06/2020): Finish task 2, 3, 4, 5 and push code to Github
  
  - Day 3 (03/06/2020): Finish task 6 and write README for project - just in morning
  
