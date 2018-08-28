namespace Vidly.Migrations
{
    using System.Data.Entity.Migrations;

    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'5b0b541d-619f-41c1-acab-6714f5822d2c', N'guest@vidly.com', 0, N'AKgiwWYLHqxVVXLUlp3riF/7NEbYGbJtJBDUaKbEirBD7fYfjabnPZ9DG5/6pRdBPg==', N'b529137f-607c-40a6-843a-4f23d0b88f75', NULL, 0, 0, NULL, 1, 0, N'guest@vidly.com')
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'9e3615dc-2310-475b-bd13-6fd5b3498224', N'admin@vidly.com', 0, N'AOa2pVtLTSfN25XESpUP4nx2dkEm3AkTyNXBbVuuJEUG+ge/A198zBrKiRaiDj5uLA==', N'2ebe055e-14fc-4308-8594-007411f70db5', NULL, 0, 0, NULL, 1, 0, N'admin@vidly.com')

                INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'b8d3ffb2-f063-4c12-90b4-d20f30874f71', N'CanManageMovies')

                INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'9e3615dc-2310-475b-bd13-6fd5b3498224', N'b8d3ffb2-f063-4c12-90b4-d20f30874f71')
                ");

        }

        public override void Down()
        {
        }
    }
}
