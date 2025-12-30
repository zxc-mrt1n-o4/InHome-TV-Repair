<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap</title>
        <style>
          body {
            font-family: "Consolas", "Monaco", "Courier New", monospace;
            margin: 2rem;
            background: #000000;
            color: #e5e5e5;
          }
          h1 {
            font-family: "Consolas", "Monaco", "Courier New", monospace;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          h1::before {
            content: "> ";
            color: #888888;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            max-width: 1200px;
            background: #000000;
            border: 1px solid #333333;
            font-family: "Consolas", "Monaco", "Courier New", monospace;
          }
          th {
            background-color: #111111;
            text-align: left;
            padding: 0.75rem 1rem;
            font-weight: bold;
            color: #ffffff;
            border-bottom: 1px solid #333333;
            border-right: 1px solid #333333;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td {
            padding: 0.75rem 1rem;
            color: #d4d4d4;
            border-bottom: 1px solid #333333;
            border-right: 1px solid #333333;
            font-size: 0.875rem;
          }
          tr:hover td {
            background-color: #1a1a1a;
            color: #ffffff;
            cursor: pointer;
          }
          td:last-child, th:last-child {
            border-right: none;
          }
          a {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.2s;
            border-bottom: 1px dotted #666666;
          }
          a:hover {
            color: #ffffff;
            text-decoration: none;
            border-bottom: 1px solid #ffffff;
            background-color: #262626;
          }
          .count {
            margin-bottom: 2rem;
            font-size: 0.875rem;
            color: #a3a3a3;
            border-left: 2px solid #ffffff;
            padding-left: 1rem;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <div class="count">
          Showing <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs
        </div>
        <table>
          <thead>
            <tr>
              <th style="width: 50px">#</th>
              <th>Location (URL)</th>
              <th style="width: 150px">Priority</th>
              <th style="width: 150px">Change Freq</th>
              <th style="width: 200px">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td><xsl:value-of select="position()"/></td>
                <td>
                  <a href="{sitemap:loc}" target="_blank">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td><xsl:value-of select="sitemap:priority"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td><xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
