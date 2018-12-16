using System.Collections.Generic;

namespace BitcoinMinersInventoryAndTicketingWebApp.Models
{
    public class MinerNotes
    {
        public int Id { get; set; }
        public IEnumerable<Note> Notes { get; set; }

    }
}
