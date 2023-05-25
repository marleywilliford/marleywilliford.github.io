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
    
    <!-- Nickname: Birthday Template -->
    <xsl:template match= "fish">
        <xsl:for-each select=".">
            <xsl:sort select="nickname"/>
            <p>
             <xsl:value-of select="nickname"/><xsl:text>: </xsl:text>
             <xsl:value-of select="birthday"/>
            </p>
        </xsl:for-each>
    </xsl:template>
    
</xsl:stylesheet>