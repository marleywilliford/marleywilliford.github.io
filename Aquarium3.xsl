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
    
    <!-- Supervisors Template -->
    <xsl:template match="/aquarium/tank/supervisors">
        <xsl:for-each select="supervisor[shift = 'First']">
            <p>
                <xsl:value-of select="lastName"/><xsl:text>: </xsl:text>
                <xsl:value-of select="shift"/>
            </p>
        </xsl:for-each>
        <xsl:for-each select="supervisor[shift = 'Second']">
            <p>
                <xsl:value-of select="lastName"/><xsl:text>: </xsl:text>
                <xsl:value-of select="shift"/>
            </p>
        </xsl:for-each>
    </xsl:template>
    
</xsl:stylesheet>