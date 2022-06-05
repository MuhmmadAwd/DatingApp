namespace API.Errors
{
    public class ApiException
    {
        private string v;

        public ApiException(int statusCode, string v)
        {
            StatusCode = statusCode;
            this.v = v;
        }

        public ApiException(int statusCode, string message, string detailes)
        {
            StatusCode = statusCode;
            Message = message;
            Detailes = detailes;
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Detailes { get; set; }
    }

}
