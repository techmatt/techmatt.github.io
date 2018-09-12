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

            foreach (string paperID in paperOrder)
            {
                var p = papers[paperID];
                //string title = p["title"].Replace("<br/>"," ");
                string title = p["title"];
                string conference = p["conference"];
                
                string authorText = "";
                foreach (string author in p["authors"].Split(','))
                {
                    string name = author;
                    string link = "";

                    if (authors.ContainsKey(author))
                    {
                        name = authors[author]["name"];
                        link = authors[author]["website"];

                        name = "<a href=\"" + link + "\">" + name + "</a>";
                    }

                    if (authorText.Length == 0) authorText = name;
                    else authorText = authorText + ", " + name;
                }

                lines.Add("<div class=\"rTableRow\">");
                lines.Add("<div class=\"rTableCellA\">");
                lines.Add("<img src=\"thumbnails/" + paperID + ".png\" />");
                lines.Add("</div>");
                lines.Add("<div class=\"rTableCellB\">");

                string pubLink = "ERROR.pdf";
                if (p.ContainsKey("project"))
                    pubLink = p["project"];
                else
                    pubLink = p["pdf"];
                lines.Add("<div class = \"pubName\"><a href=\"" + pubLink + "\">" + title + "</a></div>");

                lines.Add("<div class = \"pubAuthors\">" + authorText + "</div>");
                lines.Add("<div class = \"pubConference\">" + conference + "</div>");
                //lines.Add("<div class = \"pubLinks\">" + conference + "</p>");

                string pdfLink = "";
                string webpageLink = "";
                string bibtexLink = "";

                pdfLink = "<a href=\"pdfs/" + paperID + ".pdf\">pdf</a>";

                string pdfFilename = @"C:\Code\techmatt.github.io\pdfs\" + paperID + ".pdf";
                string bibtexFilename = @"C:\Code\techmatt.github.io\info\bibs\" + paperID + ".txt";

                if (!File.Exists(pdfFilename))
                {
                    pdfLink = "pdf";
                }

                if (p.ContainsKey("project"))
                {
                    webpageLink = "<a href=\"" + p["project"] + "\">webpage</a>";
                }

                if(File.Exists(bibtexFilename))
                {
                    bibtexLink = "<a href=\"info/bibs/" + paperID + ".txt\">bib</a>";
                }

                string linkLine = pdfLink;

                if (bibtexLink.Length > 0)
                    linkLine += " | " + bibtexLink;

                if (webpageLink.Length > 0)
                    linkLine += " | " + webpageLink;

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
