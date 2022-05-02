const React = require('react')
const Default = require('./layouts/Default')

function Error () {
    return (
<Default>
  <h2>404 Error. Page not found.</h2>
  <h5><a href = "/breads">Return to Home Page</a></h5>

</Default>
    )
}


module.exports = Error
