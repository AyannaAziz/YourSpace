
$(document).ready(function () {
    console.log("My new renter form will go here.");
    console.log(
      "I can write all my actual code in a javascript file. Not inside a handlebars file. "
    );
  
    $("#new-booking").on("submit", function (e) {
      e.preventDefault();
      const email = $("#email").val();
     
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();
    
      const phoneNum = $("#phoneNum").val();
      const reason = $("#description").val();
    //   const locationId = "S1";
    const propertyType = "S1";
      const bookingId = "4352";
      const startDD = $("#datePicker").val();
        const timeReserve = $("input[name='group1']:checked").val();
      

      console.log(email);
      console.log(phoneNum);
      console.log(firstName);
      console.log(lastName);
      console.log(reason);
      console.log(startDD);
      console.log(timeReserve);

  
       // AJAX calling routes line 109 
      $.ajax({
        method: "POST",
        url: "/api/renters",
        data: {
          firstName,
          lastName,
          email,
          phoneNum,
          locationId,
          bookingId,
          reason,
          startDD,
        //   propertyId, 
        timeReserve,


         
        },
      }).then((response) => {
        window.location.replace("/renter");
      });
    });
  });
  