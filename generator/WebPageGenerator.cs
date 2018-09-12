using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace WebGenerator
{
    class WebPageGenerator
    {
        Dictionary<string, Dictionary<string, string>> authors = new Dictionary<string, Dictionary<string, string>>();
        Dictionary<string, Dictionary<string, string>> papers = new Dictionary<string, Dictionary<string, string>>();
        Dictionary<string, string[]> bibs = new Dictionary<string, string[]>();
        string[] paperOrder;
        string publicationsHTMLHeader;
        string publicationsHTMLFooter;

        public void Generate(string inputDir, string outputDir)
        {
            LoadAuthors(inputDir + "authors");
            LoadPapers(inputDir + "papers");
            LoadBibs(inputDir + "bibs");

            publicationsHTMLHeader = File.ReadAllText(inputDir + "publicationsHTMLHeader.txt");
            publicationsHTMLFooter = File.ReadAllText(inputDir + "publicationsHTMLFooter.txt");
            paperOrder = File.ReadAllLines(inputDir + "paperOrder.txt");

            MakePublicationsHTML(outputDir);
        }

        void LoadAuthors(string path)
        {
            foreach (string file in Directory.GetFiles(path, "*.txt"))
            {
                authors.Add(Utility.GetFilename(file), Utility.LoadMap(file));
            }
        }

        void LoadPapers(string path)
        {
            foreach(string file in Directory.GetFiles(path, "*.txt"))
            {
                papers.Add(Utility.GetFilename(file), Utility.LoadMap(file));
            }
        }

        void LoadBibs(string path)
        {
            foreach (string file in Directory.GetFiles(path, "*.txt"))
            {
                bibs.Add(Utility.GetFilename(file), File.ReadAllLines(file));
            }
        }

        void MakePublicationsHTML(string outputDir)
        {
            List<string> lines = new List<string>();

            lines.Add(publicationsHTMLHeader);

            foreach (string paper in paperOrder)
            {
                var p = papers[paper];
                //string title = p["title"].Replace("<br/>"," ");
                string title = p["title"];
                string conference = p["conference"];
                string thumbnail = p["thumbnail"];
                string pdf = p["pdf"];

                string authorText = "";
                foreach (string author in p["authors"].Split(','))
                {
                    string name = author;
                    
                    if(authors.ContainsKey(author))
                        name = authors[author]["name"];

                    if (authorText.Length == 0) authorText = name;
                    else authorText = authorText + ", " + name;
                }

                lines.Add("<div class=\"rTableRow\">");
                lines.Add("<div class=\"rTableCellA\">");
                lines.Add("<img src=\"thumbnails/" + thumbnail + "\" />");
                lines.Add("</div>");
                lines.Add("<div class=\"rTableCellB\">");

                lines.Add("<p class=\"titleP\"><a href=\"" + p["pdf"] + "\">" + title + "</a></p>");

                /*if (p.ContainsKey("project"))
                {

                    lines.Add("<p class=\"titleP\"><a href=\"" + p["project"] + "\">" + title + "</a></p>");
                }
                else
                {
                    lines.Add("<p class=\"titleP\"><a href=\"" + paper + ".html\">" + title + "</a></p>");
                }
                lines.Add("<p class=\"authorsP\">" + authorText + "</p>");
                lines.Add("<p class=\"venueP\">" + conference + "</p>");
                lines.Add("<p class=\"descP\">" + blurb + "</p>");*/

                string paperLink = "<a href=\"" + pdf + "\">paper</a>";
                string projectLink = "<a href=\"" + paper + ".html\">project page</a>";
                string bibtexLink = "<a href=\"bibs/" + paper + ".txt\">bibtex</a>";
                
                if (p.ContainsKey("project"))
                {
                    projectLink = "<a href=\"" + p["project"] + "\">project page</a>";
                }

                string linkLine;
                if(p.ContainsKey("video"))
                {
                    string videoLink = "<a href=\"" + p["video"] + "\">video</a>";
                    linkLine = paperLink + " | " + videoLink + " | " + bibtexLink + " | " + projectLink;
                }
                else
                {
                    linkLine = paperLink + " | " + bibtexLink + " | " + projectLink;
                }
                lines.Add(linkLine);
                
                lines.Add("</div>");
                lines.Add("</div>");
            }

            lines.Add(publicationsHTMLFooter);

            string allText = String.Join("\n", lines);
            System.IO.File.WriteAllText(outputDir + "index.html", allText, new UTF8Encoding(false));

            //System.IO.File.WriteAllLines(outputDir + "index.html", lines, Encoding.GetEncoding("UTF-8"));
        }
    }
}
