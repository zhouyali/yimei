console.log(process.env.NODE_ENV);


var API_LINK, HTML_LINK, STORE;

if (process.env.NODE_ENV === 'LIVE') {
    API_LINK = ''
    HTML_LINK = ''
} else if (process.env.NODE_ENV === 'PRE') {
    API_LINK = ''
    HTML_LINK = ''
    STORE = {
    }
} else if (process.env.NODE_ENV === 'UAT' || process.env.NODE_ENV === 'UAT-dev') {
    API_LINK = ''
    HTML_LINK = ''
    STORE = {
    }
} else {
    API_LINK = ''
    HTML_LINK = ''
}

export { API_LINK, HTML_LINK, STORE }
