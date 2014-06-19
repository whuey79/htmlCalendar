

function drawCal(month, firstDay) {
    'use strict';
    var daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    var letter = ['a','b','c','d','e','f'];
    var outline = [];
    var maxDaysOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    var text = "";
   
    var monthName = ['January','February',
                'March','April','May','June',
                'July','August','September',
                'October','November','December'];

    var d = new Date();
                
    if ( typeof month !== 'undefined' ) {
        d.setMonth(month);
    }
    if ( typeof firstDay !== 'undefined' ) {
        d.setDate(firstDay);
    }
    else {
        d.setDate(1);
    }
    
    var firstOfTheMonth = d.getDay();  // 0-6
    var dayCounter = 1;
    var maxDayCounter;
    var thisYear = d.getFullYear();  // 2014

    if ( thisYear%4 == 0) {  // increment feb if leap year
        maxDaysOfMonth[1] += 1;  
    }

    maxDayCounter = maxDaysOfMonth[ month ];
    
    text += "<table id='cal'><caption>"+ monthName[month] + " " + thisYear + "</caption><tr>";
    // creates the labels for the week
    for (var i = 0; i<daysOfWeek.length; i++) {
        text += "<th id='dayLabel" + i;
        text += i == 0 || i == 6 ? "' class='weekend'>" : "' class='weekday'>";
        text += daysOfWeek[i] + "</th>\n";
    }

    text += "</tr>";
    outline.push(text);

    // create the main calendar body
    for (var j = 0; j < letter.length && dayCounter <= maxDayCounter; j++) {
        text = "<tr>\n";
        for (var i = 0; i< daysOfWeek.length; i++) {
            if (( i < firstOfTheMonth && j == 0 ) || ( dayCounter > maxDayCounter )) {
                text += "<td id='" + letter[j] +i +"'>-</td>\n";
            }
            else {
                text += "<td id='" + letter[j] +i +"'>" + dayCounter + "</td>\n";
                dayCounter++;
            }
        }
        text += "</tr>";
        outline.push(text);
    }
    outline.push("</table>");
    return( outline.join('\n') );
}

function showToday() {
  var d = new Date();
  $('#here').html(drawCal(d.getMonth(),1));
  $("td:contains('" + d.getDate() + "')").addClass('today');
}
