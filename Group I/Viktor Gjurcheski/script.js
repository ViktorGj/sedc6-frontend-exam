$(function(){






$.ajax({
    method:"GET",
    url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
    dataType: "json",
    success: (data) => {

        bands = data;
        tempBands=data;
       
        console.log(data);

    },
    error: (err) => {
        console.log(err);
    }
})

$("#pull").on("click", () => {
    populateTable(bands);
});



function populateTable(data) {
    debugger;
            $("#tbody").html("");
    
            let isBandActive;
            let bandMemebers = [];
            let counter=0;
    
            console.log(bandMemebers);
    
    
            for (let i = 0; i < data.length; i++) {
    
    
                if (data[i].active == true) {
                    isBandActive = "Yes";
                } else {
                    isBandActive = "No";
                }
    

                //=======================================
                data[i].members.forEach(item => {
                    debugger;
                  if(item.former===true) {

                  } 
                  else{
                      bandMemebers.push(item.name);
                    }

                });

                //=======================================

                data[i].albums.forEach(item=>{
                    counter++;
                })
               
                     
            
                $("#tbody").append(`
                    <tr>
                        <td>${i + 1}</td>
                        <td>${data[i].name}</td>
                        <td>${isBandActive}</td>
                        <td>${data[i].tags}</td>
                        <td>${bandMemebers}</td>
                        <td>${counter}</td>
                    </tr>
                `);
                bandMemebers = [];
                counter=0;
                

        //DISPLAY ACTIVE OR NOT

     $('input[name=active]').change(function(){
        if($(this).is(':checked')) {
            let activeBand=[];
     activeBend = bandMembers.filter((a) => a.active == true)
        } else {
            return bandMembers;
        }
    });

            }
        }


//=====================================================================

        $('#name').on("click", Sort);
        $('#album').on("click", Sort);
    
        function Sort() {
            let table = $(this).parents('table').eq(0)
            let rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
            this.asc = !this.asc
            if (!this.asc) { rows = rows.reverse() }
            for (let i = 0; i < rows.length; i++) { table.append(rows[i]) }
        }



 
        


        function comparer(index) {
            return function (a, b) {
                let valA = getCellValue(a, index), valB = getCellValue(b, index)
                return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
            }
        }
    
        function getCellValue(row, index) { 
            return $(row).children('td').eq(index).text() 
        }
    
        $('#search').keyup(()=>{
            debugger;
            bands=tempBands;
            let inputVal=$('#search').val().toUpperCase();
          
           
           
           let newList= bands.filter((item)=>{
                           
                 if((item.name).toUpperCase().indexOf(inputVal)>-1){
                
                        return true;
                    }
                    else{
                        return false;
                    }
            });
           
            bands=newList;

           populateTable(bands);

        })


});


//================================================================================================================



