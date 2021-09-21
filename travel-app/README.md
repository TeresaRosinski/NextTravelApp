<h1 align="center"><strong>Travel Planning Application (Better Name Needed)</strong></h1>
<h2 align="center">NextJS, MongoDB project focused on user interaction and smooth design </h2>
<h4 align="center"><a href="https://next-travel-app-gnbaxtuon-teresarosinski.vercel.app/">Visit The Site Hosted Using Vercel</a></em></h4>

>##### __Started:__ 09/15/2021
>##### __Last Updated:__ 09/21/2021 
>##### By _** Teresa Rosinski**_  


## Project Vision

### Stage One 

* Users Can Create a 'Trip' to one location 
* A 'Trip' includes: Start and End Dates, Location, Lodging, Budget, Expenses, Activities
* A user can create an 'Activity' to be added to a trip. An 'Activity' Includes: Name, Price, Dates, Details, Url. Activities are connected to trip in a many-to-one fashion. One Trip can have many Activities
* A user will have full CRUD functionality for each trip they create as well as each activity associate with each trip

### Stage Two
* A user can create and account which stores their specific Trip  Data
* Authorization and Authenticaion added
* Data Validation 
* Responsive Web Design

### Stage Three
* A 'Schedule' will be automatically generated for each trip a user creates. 
* 'Activities' will be automatically assigned to different days on the 'Trip Schedule' based on the data a user entered when creating the 'Activity'.
* Schedules can be modified and have data add to them in addition to the 'Activity' data that was pre-created.

### Stage Four
* An expected costs will be automatically generated for each trip based on pre-entered data such as lodging costs, activity costs.
* Users can dynamicall add additional data to the 'Expected Costs' such as: expected gas costs etx. 

### Stage Five
* A user can add multiple destinations and multiple lodging options to a trip

### Stage Six
* Users can invite other people to co-collaborate on a trip 

### Stage Seven
* Users can share trips 



## Current Sample Data Structure - Stage One
```
{
    "_id": {
        "$oid": "6147c6b6dac5291aa83b98e0"
    },
	"name": "Teresa R",
	"email": "trosinski89@gmail.com",
	"trips": [
		{
            "_id": {
                "$oid": "6147c6b6dac5291aa83b98e1"
            },
			"name": "Smoky Mountains",
			"location": "Smoky Mountains, NC + TN",
			"start_date": "09/23/2021",
			"end_date": "10/3/2021",
			"num_travelers": 12,
			"lodging": {
                "_id": {
                    "$oid": "6147c6b6dac5291aa83b98e2"
                },
				"name": "VRBO Maggie Valley",
				"location": "Maggie Valley, NC Some street, some zip",
				"price_per_night": 345,
				"num_nights": 7
			},
			"activities": [
				{
                    "_id": {
                        "$oid": "6147c6b6dac5291aa83b98e3"
                    },
					"name": "Anakeesta",
					"details": "Outdoor Theme park, walking, food, etc.",
					"url": "https://anakeesta.com/",
					"hours": "9am - 8pm",
					"date_going": "09/27/2021",
					"location": "576 Parkway, Gatlinburg, TN 37738",
					"price_person": 30
				},
				{
					
                    "_id": {
                        "$oid": "6147c6b6dac5291aa83b98e4"
                    },
					"name": "Great SMoky Mountain Railroad",
					"details": "4.5 hour train ride",
					"url": "https://www.gsmr.com/",
					"hours": "10:30am",
					"date_going": "09/28/2021",
					"location":
						"Great Smoky Mountains Railroad, 45 Mitchell St, Bryson City, NC 28713",
					"price_person": 54
				}
			]
		}, 
        
		{
            "_id": {
                "$oid": "6147c6b6dac5291aa83b98e3"
            },
			"name": "Smoky Mountains",
			"location": "Smoky Mountains, NC + TN",
			"start_date": "09/23/2021",
			"end_date": "10/3/2021",
			"num_travelers": 12,
			"lodging": {
                "_id": {
                    "$oid": "6147c6b6dac5291aa83b9842"
                },
				"name": "VRBO Maggie Valley",
				"location": "Maggie Valley, NC Some street, some zip",
				"price_per_night": 345,
				"num_nights": 7
			},
			"activities": [
				{
                    "_id": {
                        "$oid": "6147c6b6dac5291aa83298e3"
                    },
					"name": "Anakeesta",
					"details": "Outdoor Theme park, walking, food, etc.",
					"url": "https://anakeesta.com/",
					"hours": "9am - 8pm",
					"date_going": "09/27/2021",
					"location": "576 Parkway, Gatlinburg, TN 37738",
					"price_person": 30
				},
				{
					
                    "_id": {
                        "$oid": "6147c6b6dac5291aa83498e4"
                    },
					"name": "Great SMoky Mountain Railroad",
					"details": "4.5 hour train ride",
					"url": "https://www.gsmr.com/",
					"hours": "10:30am",
					"date_going": "09/28/2021",
					"location":
						"Great Smoky Mountains Railroad, 45 Mitchell St, Bryson City, NC 28713",
					"price_person": 54
				}
			]
		}
	]
}
```

## Known Bugs

* Still working on Full CRUD functionality for a Trip and its associated Activities
* At this Application assumes there is only one user - due to that and the way the code is structured there is no authorization or authentication built in, yet.
* Responsive Web Design has not been implemented yet - so this app only functions properly on a desktop computer

## Support and contact details

* Name: Teresa Rosinski
* Email: trosinski89@gmail.com


## Technologies Used

* Visual Studio Code
* Javascript
* NextJS
* MongoDB
* CSS
* HTML

### License

Copyright (c) 2020 **_Teresa Rosinski_**

This software is licensed under the MIT license.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
