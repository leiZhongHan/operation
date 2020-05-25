let guests = [];

$(".addButton").click(function() {
    let guest = $(".guestName").val();
    guests.push(guest);
    $(".guestList").append('<li>'+guests[guests.length-1]+'</li>'+'<br>');
    $(".numberOfGuests").text(guests.length);
});