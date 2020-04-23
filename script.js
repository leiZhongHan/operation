// an oreo cookie weighs 14.5 grams
let oreo = 14.5;

// one pound is equal to 454 grams
let gramsPerPound = 454;

let studentWeight;

$("button").click(function() {
    studentWeight = $("input").val();
    let oreos = ( studentWeight * gramsPerPound * 0.9071847 * 500 ) / oreo;    
    $("img").attr("src", "giphy.gif");
    $("#oreoWeight").text("你的奥利奥体重是 " + oreos + " 奥利奥!");

    if (oreos > 100) {
        window.alert("呐，看来阁下应该去打篮球了呢")
    }
});



