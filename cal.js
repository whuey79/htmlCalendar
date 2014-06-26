// 

function drawCal(options) {
    'use strict';
    var daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    var letter = ['a','b','c','d','e','f'];
    var maxDaysOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31];  
    var monthName = ['January','February',
                'March','April','May','June',
                'July','August','September',
                'October','November','December'];

    var outline = [];
    var text = "";

    var d = new Date();    

    var defaults = { 
        "month":d.getMonth()
    };  // default today
    
    //var options = options || {};
    var month = (typeof options !== "undefined" ) ? options.month : defaults.month; 
    
    d.setMonth(month);    
    d.setDate(1);
    
    var firstOfTheMonth = d.getDay();  // returns 0-6 to begin calendar
    var dayCounter = 1;
    var maxDayCounter;
    var thisYear = d.getFullYear();  // 2014

    if ( thisYear%4 == 0) {  // increment Feb maxDays for leap year
        maxDaysOfMonth[1] += 1;  
    }

    maxDayCounter = maxDaysOfMonth[ month ];
    
    // creates the table and thead
    text += "<table id='cal'><caption>"+ monthName[month] + " " + thisYear + "</caption><tr>";
    // creates the labels for the week
    for (var i = 0; i<daysOfWeek.length; i++) {
        text += "<th id='dayLabel" + i;
        text += i == 0 || i == 6 ? "' class='weekend'>" : "' class='weekday'>";
        text += daysOfWeek[i] + "</th>\n";
    }

    text += "</tr>";
    outline.push(text);

    // create the main calendar tbody
    for (var j = 0; j < letter.length && dayCounter <= maxDayCounter; j++) {
        text = "<tr>\n";
        for (var i = 0; i< daysOfWeek.length; i++) {
            if (( i < firstOfTheMonth && j == 0 ) || ( dayCounter > maxDayCounter )) {
                text += "<td id='" + letter[j] +i +"'></td>\n";
            }
            else {
                text += "<td id='" + letter[j] +i +"'>" + dayCounter + "</td>\n";
                dayCounter++;
            }
        }
        text += "</tr>";
        outline.push(text);
    }
    // close table tag
    outline.push("</table>");
    return( outline.join('\n') );
}
