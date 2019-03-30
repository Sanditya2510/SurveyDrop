const keys = require('../../config/keys')

module.exports = (survey) => {
    return `
        <html>
            <body>
                <p>${survey.body}</p>
                <div>
                    <a href='${keys.redirectDomain}/api/survey/${survey.id}/yes/thanks'>Yes</a>
                </div>
                <div>
                    <a href='${keys.redirectDomain}/api/survey/${survey.id}/no/thanks'>No</a>
                </div>
            </body>
        </html>
    `
}