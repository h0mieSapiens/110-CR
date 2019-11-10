using Microsoft.EntityFrameworkCore.Migrations;

namespace CarRental.Migrations
{
    public partial class InitialSetup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    Make = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    DailyPrice = table.Column<int>(nullable: false),
                    Seats = table.Column<int>(nullable: false),
                    Color = table.Column<string>(nullable: true),
                    Mileage = table.Column<int>(nullable: false),
                    HP = table.Column<int>(nullable: false),
                    ImageURL = table.Column<string>(nullable: true),
                    Doors = table.Column<int>(nullable: false),
                    Cyls = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");
        }
    }
}
