namespace API_Mission_10.Data
{
    public interface IBowlerRepository
    {
        IEnumerable<Bowlers> Bowlers { get; }
        IEnumerable<Bowlers> GetBowlersWithTeam();
    }
}
