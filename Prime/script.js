
// Categories        starts
const cat=document.querySelector(".tag-categories");
const genre=document.querySelector(".container-categories");
cat.addEventListener("mouseover",()=>
{
    let isSearchBarVisible = false;
    search_bar.style.display = "none";  //controlling display of search bar
     genre.style.display="flex";
});

cat.addEventListener("mouseout", ()=>
{
        genre.style.display="none";
});
genre.addEventListener("mouseover", ()=>
{
            genre.style.display="flex";
});
genre.addEventListener("mouseout", ()=>
{
            genre.style.display="none";
});
// Categories  Ends


//   ****** search   starts *******
const search = document.querySelector(".search");
const search_bar = document.querySelector(".search-bar");
const search_input = document.querySelector(".search-input");

// Initialize a variable to keep track of the search bar visibility
let isSearchBarVisible = false;

search.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    if (isSearchBarVisible) {
        search_bar.style.display = "none"; 
    } else {
        search_bar.style.display = "flex"; 
    }
  
    isSearchBarVisible = !isSearchBarVisible;
});

// Hide search bar when clicking outside of it
document.addEventListener("click", (event) => {
    if (isSearchBarVisible) {
        // Check if the click target is not inside the search bar or the search button
        if (!search_bar.contains(event.target) && event.target !== search) {
            search_bar.style.display = "none"; 
            isSearchBarVisible = false; 
        }
    }
});


search_input.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
});

search_bar.style.display = "none";


// ******* search End ********



// language        starts
const lang=document.querySelector(".lang");
const long_container=document.querySelector(".lang-container");
lang.addEventListener("mouseover",()=>
{
    let isSearchBarVisible = false;
    search_bar.style.display = "none";  //controlling display of search bar

    long_container.style.display="flex";
});

lang.addEventListener("mouseout", ()=>
{
    long_container.style.display="none";
});
long_container.addEventListener("mouseover", ()=>
{
    long_container.style.display="flex";
});
long_container.addEventListener("mouseout", ()=>
{
    long_container.style.display="none";
});
// language  Ends

