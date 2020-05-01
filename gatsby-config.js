module.exports = {
    pathPrefix: '/klovn/',
    siteMetadata: {
        title: 'Instant Klovn',
        description: 'Play the theme from the Danish TV-show Klovn.',
        author: 'Terje Uglebakken',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Instant Klovn',
                short_name: 'Instant Klovn',
                start_url: '/index.html',
                background_color: 'white',
                theme_color: 'white',
                display: 'standalone',
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-offline',
    ],
}
