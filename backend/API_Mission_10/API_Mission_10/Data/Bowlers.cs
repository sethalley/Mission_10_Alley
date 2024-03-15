using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_Mission_10.Data
{
    public class Bowlers
    {
        [Key]
        [Required]
        public int BowlerID { get; set; }

        public string? BowlerFirstName { get; set; }

        public string? BowlerLastName { get; set; }  

        public string? BowlerMiddleInit { get; set; }

        public string BowlerAddress { get; set; }

        public string? BowlerCity { get; set; }

        public string? BowlerState { get; set; }

        public int? BowlerZip {  get; set; }

        public string? BowlerPhoneNumber { get; set; }

        [ForeignKey("team")]
        public int? TeamID { get; set; }  

        public Teams? team { get; set; }

    }
}
