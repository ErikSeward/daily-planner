var hourlyPlan = [
    {time: "8 AM", todo: ""},
    {time: "9 AM", todo: ""},
    {time: "10 AM", todo: ""},
    {time: "11 AM", todo: ""},
    {time: "12 AM", todo: ""},
    {time: "1 PM", todo: ""},
    {time: "2 PM", todo: ""},
    {time: "3 PM", todo: ""},
    {time: "4 PM", todo: ""},
    {time: "5 PM", todo: ""}
   
];

var task = JSON.parse(localStorage.getItem("gameplan"));
if (task) {
    hourlyPlan = task;

}

var date = 
var current =

$(".saveBtn").on("click", function() {
    var slotTag = parseInt(
        $(this)
        .closest(".time-slot")
        .attr("id")
    );
    var entry =$.trim(
        $(this)
        .parent(
        .siblings("textarea")
        .val())
        
    );
})