var names_of_people = []
function submit() {
    var GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName)
    document.getElementById("List").innerHTML = names_of_people;
}
function sort() {
    
    console.log(names_of_people);

    var display_guest_array_sorting = [];

    var lenght_of_name_of_guests_array = names_of_people.length;

    console.log(lenght_of_name_of_guests_array);

    for (var k = 0; k < lenght_of_name_of_guests_array; k++){
        display_guest_array_sorting.push("<h4>" + names_of_people[k] + "</h4>");

        console.log(display_guest_array_sorting)
    }

    var remove_commas = display_guest_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("sorted_list").innerHTML = remove_commas;
}
function sorting() {
    names_of_people.sort();
    console.log(names_of_people);

    var display_guest_array_sorting = [];

    var lenght_of_name_of_guests_array = names_of_people.length;

    console.log(lenght_of_name_of_guests_array);

    for (var k = 0; k < lenght_of_name_of_guests_array; k++){
        display_guest_array_sorting.push("<h4>" + names_of_people[k] + "</h4>");

        console.log(display_guest_array_sorting)
    }

    var remove_commas = display_guest_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("sorted_list2").innerHTML = remove_commas;
}
function searching(){
    var s = document.getElementById("s1").value;
    var found=0;
    for(j=0; j<names_of_people.length; j++){
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found " +found+" times/s";
    console.log("name found " +found+" times/s");
}