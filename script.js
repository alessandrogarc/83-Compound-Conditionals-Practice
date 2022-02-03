$("button").click(function() {
    var time = $(".time").val();
    var hungry = $(".hungry").val();
    
    if(time === "morning" && hungry === "yes"){
        $(".result").text("Eat breakfast");
    } else if(time === "morning" || hungry === "no"){
        $(".result").text("Sleep in");
    }else if(time === "afternoon" || hungry === "yes"){
        $(".result").text("Eat lunch");
    }else if(time === "evening" || hungry === "no"){
        $(".result").text("Hang out with friends");
    }else{
        $(".result").text("Eat dinner");
    } 
        
    
});