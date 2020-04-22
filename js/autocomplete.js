var pages = [],
    currentFocus,
    searchInput = document.querySelectorAll('.search input[type="text"]');

//Functions
function searchAutocomplete() {

    $.ajax({
        url: "autocomplete.json",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            
            function htmlDecode(input) {
                var doc = new DOMParser().parseFromString(input, "text/html");
                return doc.documentElement.textContent;
            }
            
            $.each(data.pages, function(i, val) {
                
                let pageObj = {
                    name: htmlDecode(val.name),
                    url: val.url,
                    uri: val.uri,
                    id: val.id
                }
                
                pages.push(pageObj)
            });
            
        },
        error: function(thrownError) {
            console.log(thrownError);
        }
    });
    
    for (let i = 0; i < searchInput.length; i++) {
        
        var searchList = document.createElement('div');
            searchList.setAttribute('id', 'autocomplete-list');
            searchList.setAttribute('class', 'autocomplete-items');
            searchList.setAttribute('aria-label', 'Search Suggestions');
            
        searchInput[i].parentNode.appendChild(searchList);
        searchInput[i].addEventListener('input', filterBySearchTerm);
        searchInput[i].addEventListener("keydown", arrowNav);
        document.addEventListener('click', closeSearchResults);
    }
    
}

function filterBySearchTerm() {
    var term = this.value,
        searchList = this.parentNode.querySelector('#autocomplete-list'),
        results = [];

    searchList.innerHTML = '';
    searchList.style.display = 'block';
    
    if (term.length < 3) {
        return false;
    }
    
    pages.forEach(function(page){
        if (page.name.search(new RegExp(term, "i")) > -1) {
            
            var nameFilter = new RegExp(term, 'gi');
            
            currentFocus = -1;
            var link = document.createElement('a');
                link.setAttribute('class', 'autocomplete-link');
                link.setAttribute('href', page.uri);
                link.setAttribute('title', page.name);
                link.setAttribute('aria-label', 'Search suggestion: '+page.name);
                link.innerHTML += page.name.replace(new RegExp(term, 'gi'),"<strong>$&</strong>");
                
                results.push(link);
        }
    });
    
    for (var i = 0; i < 6; i++) {
        if(typeof results[i] === 'undefined') {return}
        searchList.appendChild(results[i]);
    }
}

function arrowNav(e){
    let links = document.querySelectorAll('.autocomplete-items a');
    
    if (e.keyCode == 40) {
        currentFocus++;
        addActive(links);
    }
    else if(e.keyCode == 38){
        currentFocus--;
        addActive(links);
    }
    else if (e.keyCode == 13) {
        if (currentFocus > -1) {
          e.preventDefault();
          if (links){ links[currentFocus].click()}
        }
    }
}
    
function addActive(links) {
    if (!links) return false;
    removeActive(links);
    if (currentFocus >= links.length) { currentFocus = 0}
    if (currentFocus < 0) { currentFocus = (links.length - 1)}
    links[currentFocus].classList.add("autocomplete-active");
}
    
function removeActive(links) {
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("autocomplete-active");
    }
}

function closeSearchResults(e) {
    if (e.target != searchInput) {
        document.getElementById('autocomplete-list').style.display = 'none';
    } else {
        document.getElementById('autocomplete-list').style.display = 'block';
    }
    
}

searchAutocomplete();
