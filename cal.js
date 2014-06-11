
function cal() {
    var numDaysOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
//    console.log(numDaysOfMonth);   
    var d = new Date();
    var todayDate = d.getDate();  // returns 10 ie. the 10th
    var todayDayOfWeek = d.getDay();  // returns 2 ie. Tues
    var todayMonth = d.getMonth();    // returns 5 = June
    var todayYear = d.getFullYear();  // 2014
}

function drawCal() {
    var daysOfWeek = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    var let = ['a','b','c','d','e','f'];
    var text = "";
    var outline = [];

    text += "<table><tr>";
    // creates the labels for the week
    for (var i = 0; i<7; i++) {
         text += "<th id='dayLabel" + i + "'>" + daysOfWeek[i] + "</th>\n";
    }

    text += "</tr>";
    outline.push(text);

    for (var j = 0; j < let.length; j++) {
        text = "<tr>\n";
        for (var i = 0; i<7; i++) {
          text += "<td id='" + let[j] +i +"'>X</td>\n"
        }
        text += "</tr>";
        outline.push(text);
    }
    outline.push("</table>");
    return( outline.join('\n') );
}
