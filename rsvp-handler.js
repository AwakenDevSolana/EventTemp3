$(document).ready(function() {
    $('#rsvp-event').on('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            event_website: $('#event_uuid').val(),
            full_name: $('#full_name').val(),
            attendance_status: $('#guests').val()
        };
        
        // Validate form
        if (!formData.full_name || !formData.attendance_status) {
            alert('Please fill all fields');
            return;
        }
        
        // Disable button during submission
        $('#send-email-button').prop('disabled', true).text('Sending...');
        
        // Send data to server
        $.ajax({
            url: 'https://your-dashboard-server.com/api/rsvp.php',
            type: 'POST',
            headers: {
                'X-API-KEY': 'TestSecret1' // Use TestSecret1 or TestSecret2
            },
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Thank you for your RSVP!');
                $('#full_name').val('');
                $('#guests').val('');
            },
            error: function(xhr) {
                alert(xhr.responseJSON?.error || 'Error submitting RSVP. Please try again.');
            },
            complete: function() {
                $('#send-email-button').prop('disabled', false).text('Reserve');
            }
        });
    });
});
