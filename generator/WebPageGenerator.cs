using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Diagnostics;
using System.Drawing.Printing;

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

            MakePublicationsHTML(inputDir, outputDir);
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

        void MakePublicationsHTML(string inputDir, string outputDir)
        {
            Debug.WriteLine("creating publication page");
            List<string> lines = new List<string>();

            lines.Add(publicationsHTMLHeader);

            List<string> linesForCV = new List<string>();

            foreach (string paperID in paperOrder)
            {
                var p = papers[paperID];
                //string title = p["title"].Replace("<br/>"," ");
                string title = p["title"];
                string conference = p["conference"];

                string conferenceFull = conference;
                conferenceFull = conferenceFull.Replace("ICCV", "International Conference on Computer Vision");
                conferenceFull = conferenceFull.Replace("ECCV", "European Conference on Computer Vision");
                conferenceFull = conferenceFull.Replace("NeurIPS", "Neural Information Processing Systems");
                conferenceFull = conferenceFull.Replace("WACV", "Winter Conference on Applications of Computer Vision");
                conferenceFull = conferenceFull.Replace("CVPR", "Computer Vision and Pattern Recognition");
                //conferenceFull = conferenceFull.Replace("", "");
                //conferenceFull = conferenceFull.Replace("", "");
                //conferenceFull = conferenceFull.Replace("", "");
                //conferenceFull = conferenceFull.Replace("", "");
                linesForCV.Add("<b>" + title + ".</b> <i>" + conferenceFull + ".</i>");

                string authorText = "";
                foreach (string author in p["authors"].Split(','))
                {
                    string name = author;
                    string link = "";

                    if (authors.ContainsKey(author))
                    {
                        name = authors[author]["name"];
                        link = authors[author]["website"];

                        if (link != "unknown")
                        {
                            name = "<a href=\"" + link + "\">" + name + "</a>";
                        }
                        else
                        {
                            //Console.WriteLine("author website unknown: " + author + ", paper=" + title);
                        }
                    }
                    else
                    {
                        //throw new Exception("author not found: " + author);
                        Debug.WriteLine("author not found: " + author);

                        bool createMissingAuthors = true;
                        if(createMissingAuthors)
                        {
                            string text = "name=" + author + Environment.NewLine +
                                          "website=unknown" + Environment.NewLine;
                            string authorPath = Path.Combine(inputDir + "authors", author + ".txt");
                            Debug.WriteLine("creating blank author " + author + ", paper=" + title);
                            File.WriteAllText(authorPath, text);
                        }
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
                    pubLink = "pdfs/" + paperID + ".pdf";
                pubLink = pubLink.Replace("papers/", "pdfs/");
                lines.Add("<div class = \"pubName\"><a href=\"" + pubLink + "\">" + title + "</a></div>");

                lines.Add("<div class = \"pubAuthors\">" + authorText + "</div>");
                lines.Add("<div class = \"pubConference\">" + conference + "</div>");
                //lines.Add("<div class = \"pubLinks\">" + conference + "</p>");

                string pdfLink = "";
                string webpageLink = "";
                string codeLink = "";
                string videoLink = "";
                string bibtexLink = "";
                string arxivLink = "";
                string suppLink = "";

                pdfLink = "<a href=\"pdfs/" + paperID + ".pdf\">pdf</a>";

                string pdfFilename = @"C:\Code\techmatt.github.io\pdfs\" + paperID + ".pdf";
                string bibtexFilename = @"C:\Code\techmatt.github.io\info\bibs\" + paperID + ".txt";

                if (!File.Exists(pdfFilename))
                {
                    pdfLink = "pdf";
                }
                if (p.ContainsKey("project"))
                {
                    webpageLink = "<a href=\"" + p["project"] + "\">project</a>";
                }
                if (p.ContainsKey("code"))
                {
                    codeLink = "<a href=\"" + p["code"] + "\">code</a>";
                }
                if (p.ContainsKey("video"))
                {
                    videoLink = "<a href=\"" + p["video"] + "\">video</a>";
                }
                if (p.ContainsKey("arxiv"))
                {
                    arxivLink = "<a href=\"" + p["arxiv"] + "\">arXiv</a>";
                }
                if (p.ContainsKey("supp"))
                {
                    suppLink = "<a href=\"pdfs/" + paperID + "Supplemental.pdf\">supplemental</a>";
                }

                if (File.Exists(bibtexFilename))
                {
                    bibtexLink = "<a href=\"info/bibs/" + paperID + ".txt\">bib</a>";
                }

                string linkLine = pdfLink;

                if (bibtexLink.Length > 0)
                    linkLine += " | " + bibtexLink;

                if (webpageLink.Length > 0)
                    linkLine += " | " + webpageLink;

                if (suppLink.Length > 0)
                    linkLine += " | " + suppLink;

                if (videoLink.Length > 0)
                    linkLine += " | " + videoLink;

                if (arxivLink.Length > 0)
                    linkLine += " | " + arxivLink;

                if (codeLink.Length > 0)
                    linkLine += " | " + codeLink;

                lines.Add(linkLine);
                
                lines.Add("</div>");
                lines.Add("</div>");
            }

            lines.Add(publicationsHTMLFooter);

            string allText = String.Join("\n", lines);
            System.IO.File.WriteAllText(outputDir + "index.html", allText, new UTF8Encoding(false));

            string allTextCV = String.Join("<br>\n", linesForCV);
            System.IO.File.WriteAllText(outputDir + "CV.html", allTextCV, new UTF8Encoding(false));

            //System.IO.File.WriteAllLines(outputDir + "index.html", lines, Encoding.GetEncoding("UTF-8"));

            Debug.WriteLine("done creating publication page");
        }
    }
}
