using System;
using System.ComponentModel.DataAnnotations;

namespace BitcoinMinersInventoryAndTicketingWebApp.Models
{
    public class Note
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter your update.")]
        public string TextBody { get; set; }

        [Required(ErrorMessage = "Please select a Technician name from the Drop Down List")]
        public Technician Technician { get; set; }

        // This will automatically generate this object based on the time it was created and restrict the user from changing it afterwards
        public DateTime DateCreated
        {
            get
            {
                return dateCreated.HasValue
                   ? this.dateCreated.Value
                   : DateTime.Now;
            }

            set { this.dateCreated = value; }
        }
        private DateTime? dateCreated = null;
    }
}
