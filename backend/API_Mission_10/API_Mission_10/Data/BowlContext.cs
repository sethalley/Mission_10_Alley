using Microsoft.EntityFrameworkCore;

namespace API_Mission_10.Data
{
    public class BowlContext : DbContext
    {
        public BowlContext(DbContextOptions<BowlContext> options) : base(options) { }

        public DbSet<Bowlers> Bowlers { get; set; }

        public DbSet<Teams> Teams { get; set; }
    }
}
