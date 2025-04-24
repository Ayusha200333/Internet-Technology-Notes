
import {students_db} from "../db/db.js";

// load student records
function loadStudents() {

    $('#student-tbody').empty();

    students_db.map((item, index) => {
        let fname = item.fname;
        let lname = item.lname;
        let address = item.address;

        let data = `<tr>
                             <td>${index + 1}</td>
                             <td>${fname}</td>
                             <td>${lname}</td>
                             <td>${address}</td>
                         </tr>`

        $('#student-tbody').append(data);
    })

}

// save
$('#student_save').on('click', function(){
    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let address = $('#address').val();
    console.log(`fname: ${fname}, lname: ${lname}, address: ${address}`);

    if(fname === '' || lname === '' || address === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    } else {
        let student_data = {
            fname: fname,
            lname: lname,
            address: address
        };

        students_db.push(student_data);
        loadStudents(); // This updates the table correctly

        Swal.fire({
            title: "Added Successfully!",
            icon: "success",
            draggable: true
        });

        // Optional: Clear form fields
        $('#fname').val('');
        $('#lname').val('');
        $('#address').val('');
    }
});