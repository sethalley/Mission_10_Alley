export type Bowlers = {
  bowlerID: number;
  bowlerFirstName: string;
  bowlerLastName: string;
  bowlerMiddleInit: string | null;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: number;
  bowlerPhoneNumber: number;
  teamID: number;
  team: {
    teamName: string;
  };
};
