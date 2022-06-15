namespace API.Helpers
{
    public class PaginationHeader
    {
        public PaginationHeader(int currentPage, int itemsPerPAge, int totalItems, int totalPage)
        {
            CurrentPage = currentPage;
            ItemsPerPAge = itemsPerPAge;
            TotalItems = totalItems;
            TotalPage = totalPage;
        }

        public int CurrentPage { get; set; }
        public int ItemsPerPAge { get; set; }
        public int TotalItems { get; set; }

        public int TotalPage { get; set; }


    }
}
