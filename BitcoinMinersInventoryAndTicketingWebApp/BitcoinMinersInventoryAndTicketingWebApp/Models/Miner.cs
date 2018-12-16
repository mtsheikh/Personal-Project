using System.Collections.Generic;

namespace BitcoinMinersInventoryAndTicketingWebApp.Models
{
    public class Miner
    {
        public string iP { get; set; }
        public Dictionary<int, string> location { get; set; }
        public List<Note> notes { get; set; }
        public bool isDeployed { get; set; }
    }
}
