Development
CSCI 1300 UIUX
Ashish Rawat


Steps to run code

1.	Extract rawat-ashish.zip
2.	In a terminal cd to ../rawat-ashish/filterandsort/
3.	Run the following command

		npm start

once the server is running go to your browser and paste the following link in your browser and hit enter.

		localhost:3000


Application Design and Goals -

DoggieWoggie.com is a website that serves as a repository of dogs where users can look for a pet they want to bring home. The website provides various filters that will help the user shortlist dogs according to the size, color and popularity of the dogs. Dogs can also be sorted according to Price, Popularity and Breed Name in both ascending and descending order.

Menu – The interface is simple and intuitive as it begins with a small description on top about what the website is supposed to help the user achieve. The description is short and eye catching and hence is placed in the page header at the center of the page. The top also features various the dropdown menus that will allow the user to filter and sort the content. The filters are placed in a horizontal row on bigger screens but get stacked on top of each other when viewed on mobile devices or iPad to prevent horizontal scrolling.

Content – Information about dogs is displayed in the form of a grid layout for easy understanding, crisp presentation, and to make the responsiveness much more efficient. Each image gives a feedback when the user hovers with their mouse pointer.

When the combination of filters returns no results, the following message is displayed on the screen “No dogs found! Please change one of the filters.”.


Data Flow and User Initiated Events.

Parent Component –
The state of the website is maintained in App.js, which is responsible for maintaining   the state variables according to which the content is filtered.
An example of the state variables maintained in App.js –
      
       color : "All",
       size : "All",
       popularity : "All",

App.js also contains event handler methods which update the value of the state variables, and a reference to these event methods is passed to the child components as properties. 

Children Components – 
The child components ColorFilter.jsx, SizeFilter.jsx, PopularityFilter.jsx and SortMe.jsx each display a dropdown menu, and update the state variables when user selects an option from the dropdown using the onChange() method.
The components FilterAndSort.jsx and DisplayContent.jsx are responsible for displaying the content of the website. The raw data about dogs is loaded in memory in App.js and is passed down to FilterAndSort.jsx  as properties(this.props) which applies the filters and sorts the data after which the DisplayContent.jsx renders the data in the form of a grid.





