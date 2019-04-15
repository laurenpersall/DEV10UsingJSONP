function showEvents(data) {
  
  // Callback when JSON loads
  var newContent = '';                                // Variable to hold HTML
 
    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    for (var i = 0; i < data.events.length; i++) {    // Loop through object
      newContent += '<div class="event">';
      newContent += '<img src="' + data.events[i].map + '" ';
      newContent += 'alt="' + data.events[i].location + '" />';
      newContent += '<p><b>' + data.events[i].location + '</b><br>';
      newContent += data.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
}

showEvents({
  "events": [
    {
      "location": "San Francisco, CA",
      "date": "May 1",
      "map": "http://javascriptbook.com/code/c08/img/map-ca.png"
    },
    {
      "location": "Austin, TX",
      "date": "May 15",
      "map": "http://javascriptbook.com/code/c08/img/map-tx.png"
    },
    {
      "location": "New York, NY",
      "date": "May 30",
      "map": "http://javascriptbook.com/code/c08/img/map-ny.png"
    }
  ]
});