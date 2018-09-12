using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace WebGenerator
{
    class Utility
    {
        public static string GetFilename(string path)
        {
            return path.Split('\\').Last().Split('.').First();
        }

        public static Dictionary<string, string> LoadMap(string filename)
        {
            var result = new Dictionary<string, string>();
            foreach (string s in File.ReadAllLines(filename, Encoding.GetEncoding("iso-8859-1")))
            {
                if(s.Contains('='))
                {
                    int splitIndex = s.IndexOf('=');
                    result.Add(s.Substring(0, splitIndex), s.Substring(splitIndex + 1));
                }
            }
            return result;
        }
    }
}
