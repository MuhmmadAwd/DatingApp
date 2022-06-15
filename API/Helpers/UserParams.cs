namespace API.Helpers
{
    public class UserParams
    {
        private const int MAxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        public int _pageSize = 10;
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MAxPageSize) ? MAxPageSize : value;
        }
    }
}
