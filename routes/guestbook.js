let visitourCount = 0;
function onGetGuestbook(req, res)  {
    console.log('GET /guestbook');
    visitourCount++
    res.status(200).send(`Du är besökare nummer ${visitourCount}.`)
}

module.exports = onGetGuestbook