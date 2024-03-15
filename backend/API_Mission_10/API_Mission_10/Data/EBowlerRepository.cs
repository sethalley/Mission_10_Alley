
using Microsoft.EntityFrameworkCore;

namespace API_Mission_10.Data
{
    public class EBowlerRepository : IBowlerRepository
    {
        private BowlContext _bowlContext;

        public EBowlerRepository(BowlContext temp)
        {
            _bowlContext = temp;
        }

        public IEnumerable<Bowlers> Bowlers => _bowlContext.Bowlers;

        public IEnumerable<Bowlers> GetBowlersWithTeam()
        {
            return _bowlContext.Bowlers.Include(b => b.team);
        }
    }
}
