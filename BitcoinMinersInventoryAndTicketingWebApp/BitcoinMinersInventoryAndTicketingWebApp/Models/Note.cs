using System;

namespace BitcoinMinersInventoryAndTicketingWebApp.Models
{
    public class Note
    {
        public DateTime timeStamp { get; set; }
        public string textBody { get; set; }
        public Technician technician { get; set; }
    }
}
