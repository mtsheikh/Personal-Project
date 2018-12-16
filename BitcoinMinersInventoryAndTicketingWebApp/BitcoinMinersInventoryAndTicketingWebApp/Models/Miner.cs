using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BitcoinMinersInventoryAndTicketingWebApp.Models
{
    public class Miner
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter an IP Address.")]
        [RegularExpression(@"^(?:[0-9]{1,3}.){3}[0-9]{1,3}$")]
        [Display(Name = "Static IP Address of the Miner")]
        public string IP { get; set; }

        [Required(ErrorMessage = "Please enter the Location of the Miner on the Shelf")]
        [Display(Name = "Location on the shelves of the Miner")]
        public IDictionary<int, string> Location { get; set; }

        [Required(ErrorMessage = "Please Select an option")]
        [Display(Name = "Is the Miner in Use: ")]
        public bool IsDeployed { get; set; }

        public MinerNotes MinerNotes { get; set; }
    }
}
