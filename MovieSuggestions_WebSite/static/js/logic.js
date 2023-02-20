
let animals = [
    { name: 'lion', habitat: 'Africa' },
    { name: 'panda', habitat: 'China' },
    { name: 'elephant', habitat: 'Africa' },
    { name: 'koala', habitat: 'Australia' },
    { name: 'polar bear', habitat: 'Arctic' }
  ];
  
  function search() {
    let query = document.getElementById('searchBar').value.toLowerCase();
    let results = animals.filter(animal => animal.name.toLowerCase().includes(query));
    displayResults(results);
  }
  
  function displayResults(results) {
    let container = document.getElementById('results');
    container.innerHTML = '';
    results.forEach(result => {
      let element = document.createElement('p');
      element.textContent = `${result.name} (${result.habitat})`;
      container.appendChild(element);
    });
  }
  
// drop-down menu functions  
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
 


  