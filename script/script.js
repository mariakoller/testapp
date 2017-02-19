var taskliste = [

{"erledigt":false, "caption": "Toast kaufen"},
{"erledigt":false, "caption": "Milch kaufen"},
{"erledigt":false, "caption": "Bier kaufen"},
{"erledigt":true, "caption": "Mehl kaufen"},
{"erledigt":false, "caption": "Toast kaufen"},
{"erledigt":false, "caption": "Toast kaufen"},

];

/*
* Objekt hinzufügen in die Liste immer kommentarieren jeder Schritt
 */

$("document").ready(function () {

var $input = $('input');
var $myButton = $('.myButton');
var $openItems = $('openItems');
var $doneItems = $('doneItems');

    /**
     * Jede Aufgabe aus der taskliste, soll in der entsprechenden Liste (offen oder erledigt) aufgeführt.
     */

    taskliste.forEach(function (einTask) {
        // Task in Liste offen oder erledigt werfen (anhand Flag erledigt)
        var $listItem = $('<li></li>');
        $listItem.html(einTask.caption);

        if(!einTask.erledigt) {
            $openItems.append($listItem);
        }  else {
            $doneItems.append($listItem);
        }
    });

// Bei Klick auf Button  $(document).on('click', "buttonadd", eventAddTask);
    myButton.on('click', function () {
    var $input = $input.val();

    //input text wird in li erstellt im openItems
    input.html('<li></li>');

    //bei klick auf li im openItem geht li nach doneItems
    $listItem.on('click', function() {

        $(this).prepend($doneItems);



    $newListItem.append ();
    $h2Text.text($inputValue);
    $newListItem.append($h2Text);

    $newListItem.text($inputValue);
    $openItems.prepend($newListItem);

    var $listItem = $('openItems');
      });
     $myButton.on('click', function () {

     })
});
});