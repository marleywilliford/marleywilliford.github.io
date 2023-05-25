<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    version="1.0">
   <xsl:template match="/">
       <html>
           <body>
               <xsl:apply-templates></xsl:apply-templates>
           </body>
       </html>
   </xsl:template>
    <!-- Catch and Kill Template -->
    <xsl:template match="text()"></xsl:template>
    
    <xsl:template match="tank[@n = '2']">
        <h1>
            <xsl:value-of select="tankName"/>
        </h1>
        <xsl:for-each select="supervisors/supervisor">
            <xsl:value-of select="firstName"/><xsl:text> </xsl:text>
            <xsl:value-of select="lastName"/><xsl:text>: </xsl:text>
            <xsl:value-of select="shift"/><br></br>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>