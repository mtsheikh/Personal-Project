using System.ComponentModel.DataAnnotations;

namespace BitcoinMinersInventoryAndTicketingWebApp.Models
{
    public class Technician
    {
        public int Id { get; set; }

        [DataType(DataType.Text)]
        [Required(ErrorMessage = "You must provide a name")]
        [Display(Name = "Technician Name")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "You must provide a phone number")]
        [Display(Name = "Technician Phone Number")]
        [DataType(DataType.PhoneNumber)]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid phone number")]
        public string PhoneNumber { get; set; }

        [DataType(DataType.EmailAddress)]
        [Display(Name = "Technician Email address")]
        [Required(ErrorMessage = "The email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }
    }
}
