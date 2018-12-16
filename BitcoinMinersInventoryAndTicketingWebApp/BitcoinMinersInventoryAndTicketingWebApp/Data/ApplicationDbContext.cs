using BitcoinMinersInventoryAndTicketingWebApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BitcoinMinersInventoryAndTicketingWebApp.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Miner> Miners { get; set; }
        public virtual DbSet<Technician> Technicians { get; set; }
        public virtual DbSet<Note> Notes { get; set; }

    }
}
